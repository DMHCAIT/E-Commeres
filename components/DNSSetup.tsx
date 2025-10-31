'use client';

import React, { useState, useEffect } from 'react';
import { 
  Copy, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  ExternalLink, 
  RefreshCw,
  Globe,
  Shield
} from 'lucide-react';

interface DNSRecord {
  type: string;
  name: string;
  value: string;
  priority?: number;
  description: string;
}

interface DNSInstructions {
  domain: string;
  records: DNSRecord[];
  instructions: string[];
  verificationStatus: {
    [recordType: string]: {
      status: 'pending' | 'verified' | 'failed';
      message: string;
    };
  };
}

interface DNSSetupProps {
  websiteId: string;
  domainId: string;
  domain: string;
  onVerificationComplete: () => void;
}

const DNSSetup: React.FC<DNSSetupProps> = ({ 
  websiteId, 
  domainId, 
  domain, 
  onVerificationComplete 
}) => {
  const [instructions, setInstructions] = useState<DNSInstructions | null>(null);
  const [loading, setLoading] = useState(true);
  const [verifying, setVerifying] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    fetchDNSInstructions();
  }, [websiteId, domainId]);

  const fetchDNSInstructions = async () => {
    try {
      const response = await fetch(`/api/websites/${websiteId}/domains/${domainId}/dns-instructions`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setInstructions(data);
      }
    } catch (error) {
      console.error('Error fetching DNS instructions:', error);
    } finally {
      setLoading(false);
    }
  };

  const verifyDNS = async () => {
    setVerifying(true);
    try {
      const response = await fetch(`/api/websites/${websiteId}/domains/${domainId}/verify`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      if (response.ok) {
        await fetchDNSInstructions();
        const allVerified = instructions && Object.values(instructions.verificationStatus)
          .every(status => status.status === 'verified');
        
        if (allVerified) {
          onVerificationComplete();
        }
      }
    } catch (error) {
      console.error('Error verifying DNS:', error);
    } finally {
      setVerifying(false);
    }
  };

  const copyToClipboard = async (text: string, fieldId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldId);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const getRecordIcon = (type: string) => {
    switch (type) {
      case 'A':
      case 'AAAA':
        return <Globe className="w-4 h-4 text-blue-500" />;
      case 'CNAME':
        return <ExternalLink className="w-4 h-4 text-green-500" />;
      case 'TXT':
        return <Shield className="w-4 h-4 text-orange-500" />;
      default:
        return <Info className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'failed':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'pending':
      default:
        return <RefreshCw className="w-5 h-5 text-orange-500" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <RefreshCw className="w-6 h-6 animate-spin mr-2" />
        Loading DNS instructions...
      </div>
    );
  }

  if (!instructions) {
    return (
      <div className="text-center p-8">
        <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Failed to load DNS instructions
        </h3>
        <p className="text-gray-600">
          Please try again or contact support if the problem persists.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          DNS Setup for {instructions.domain}
        </h2>
        <p className="text-gray-600 mb-6">
          Configure these DNS records with your domain provider to connect your domain
        </p>

        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Verification Progress</span>
            <button
              onClick={verifyDNS}
              disabled={verifying}
              className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
            >
              <RefreshCw className={`w-4 h-4 mr-1 ${verifying ? 'animate-spin' : ''}`} />
              {verifying ? 'Checking...' : 'Check DNS'}
            </button>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${(Object.values(instructions.verificationStatus)
                  .filter(s => s.status === 'verified').length / 
                  Object.values(instructions.verificationStatus).length) * 100}%`
              }}
            />
          </div>
        </div>

        {/* DNS Records */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">DNS Records</h3>
          
          {instructions.records.map((record, index) => {
            const recordKey = `${record.type}-${record.name}`;
            const status = instructions.verificationStatus[recordKey];
            
            return (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    {getRecordIcon(record.type)}
                    <span className="font-semibold ml-2">{record.type} Record</span>
                  </div>
                  <div className="flex items-center">
                    {status && getStatusIcon(status.status)}
                    <span className="ml-2 text-sm text-gray-600">
                      {status?.message || 'Pending verification'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      NAME/HOST
                    </label>
                    <div className="flex items-center bg-gray-50 border rounded p-2">
                      <code className="flex-1 text-sm font-mono">{record.name}</code>
                      <button
                        onClick={() => copyToClipboard(record.name, `name-${index}`)}
                        className="ml-2 p-1 text-gray-400 hover:text-gray-600"
                      >
                        {copiedField === `name-${index}` ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      VALUE/POINTS TO
                    </label>
                    <div className="flex items-center bg-gray-50 border rounded p-2">
                      <code className="flex-1 text-sm font-mono break-all">{record.value}</code>
                      <button
                        onClick={() => copyToClipboard(record.value, `value-${index}`)}
                        className="ml-2 p-1 text-gray-400 hover:text-gray-600"
                      >
                        {copiedField === `value-${index}` ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {record.priority && (
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        PRIORITY
                      </label>
                      <div className="bg-gray-50 border rounded p-2">
                        <code className="text-sm font-mono">{record.priority}</code>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-sm text-gray-600">{record.description}</p>
              </div>
            );
          })}
        </div>

        {/* Setup Instructions */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
            <Info className="w-4 h-4 mr-2" />
            Setup Instructions
          </h4>
          <ol className="text-sm text-blue-800 space-y-1">
            {instructions.instructions.map((instruction, index) => (
              <li key={index} className="flex">
                <span className="font-medium mr-2">{index + 1}.</span>
                <span>{instruction}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Common Issues */}
        <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <h4 className="font-semibold text-orange-900 mb-2 flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Common Issues
          </h4>
          <ul className="text-sm text-orange-800 space-y-1">
            <li>• DNS changes can take up to 48 hours to propagate worldwide</li>
            <li>• Make sure to remove any existing conflicting records</li>
            <li>• For root domain (@), some providers require you to use the domain name instead</li>
            <li>• Contact your domain provider if you're unsure about the DNS setup process</li>
          </ul>
        </div>

        {/* Verification Status */}
        {Object.keys(instructions.verificationStatus).length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold text-gray-900 mb-3">Verification Status</h4>
            <div className="space-y-2">
              {Object.entries(instructions.verificationStatus).map(([recordKey, status]) => (
                <div key={recordKey} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="font-mono text-sm">{recordKey}</span>
                  <div className="flex items-center">
                    {getStatusIcon(status.status)}
                    <span className="ml-2 text-sm">{status.message}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between mt-6 pt-6 border-t">
          <button
            onClick={verifyDNS}
            disabled={verifying}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${verifying ? 'animate-spin' : ''}`} />
            {verifying ? 'Verifying...' : 'Verify DNS Setup'}
          </button>
          
          <a
            href="https://www.whatsmydns.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Check DNS Propagation
          </a>
        </div>
      </div>
    </div>
  );
};

export default DNSSetup;