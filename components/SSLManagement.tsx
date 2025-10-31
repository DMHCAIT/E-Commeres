'use client';

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  RefreshCw,
  ExternalLink,
  Info,
  Calendar,
  Globe
} from 'lucide-react';

interface SSLCertificate {
  domainId: string;
  domain: string;
  status: 'pending' | 'active' | 'expired' | 'error';
  issuer?: string;
  issuedAt?: string;
  expiresAt?: string;
  autoRenew: boolean;
  validationMethod: 'http' | 'dns';
  validationRecords?: {
    type: string;
    name: string;
    value: string;
  }[];
  lastChecked?: string;
  errorMessage?: string;
}

interface SSLManagementProps {
  websiteId: string;
  domains: Array<{ id: string; domain: string; sslEnabled: boolean; status: string }>;
  onSSLStatusChange: (domainId: string, enabled: boolean) => void;
}

const SSLManagement: React.FC<SSLManagementProps> = ({ 
  websiteId, 
  domains, 
  onSSLStatusChange 
}) => {
  const [certificates, setCertificates] = useState<SSLCertificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingDomain, setProcessingDomain] = useState<string | null>(null);

  useEffect(() => {
    fetchSSLCertificates();
  }, [websiteId, domains]);

  const fetchSSLCertificates = async () => {
    try {
      const response = await fetch(`/api/websites/${websiteId}/ssl`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setCertificates(data.certificates || []);
      }
    } catch (error) {
      console.error('Error fetching SSL certificates:', error);
    } finally {
      setLoading(false);
    }
  };

  const enableSSL = async (domainId: string) => {
    setProcessingDomain(domainId);
    try {
      const response = await fetch(`/api/websites/${websiteId}/domains/${domainId}/ssl`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ enabled: true })
      });

      if (response.ok) {
        const data = await response.json();
        onSSLStatusChange(domainId, true);
        await fetchSSLCertificates();
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to enable SSL');
      }
    } catch (error) {
      console.error('Error enabling SSL:', error);
      alert('Failed to enable SSL');
    } finally {
      setProcessingDomain(null);
    }
  };

  const disableSSL = async (domainId: string) => {
    if (!confirm('Are you sure you want to disable SSL? This will make your site less secure.')) {
      return;
    }

    setProcessingDomain(domainId);
    try {
      const response = await fetch(`/api/websites/${websiteId}/domains/${domainId}/ssl`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ enabled: false })
      });

      if (response.ok) {
        onSSLStatusChange(domainId, false);
        await fetchSSLCertificates();
      }
    } catch (error) {
      console.error('Error disabling SSL:', error);
    } finally {
      setProcessingDomain(null);
    }
  };

  const renewCertificate = async (domainId: string) => {
    setProcessingDomain(domainId);
    try {
      const response = await fetch(`/api/websites/${websiteId}/domains/${domainId}/ssl/renew`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      if (response.ok) {
        await fetchSSLCertificates();
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to renew certificate');
      }
    } catch (error) {
      console.error('Error renewing certificate:', error);
      alert('Failed to renew certificate');
    } finally {
      setProcessingDomain(null);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Shield className="w-5 h-5 text-green-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-orange-500" />;
      case 'expired':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'error':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default:
        return <Shield className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active & Secure';
      case 'pending':
        return 'Pending Validation';
      case 'expired':
        return 'Expired';
      case 'error':
        return 'Error';
      default:
        return 'Inactive';
    }
  };

  const getDaysUntilExpiry = (expiresAt: string) => {
    const expiry = new Date(expiresAt);
    const now = new Date();
    const diffTime = expiry.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <RefreshCw className="w-6 h-6 animate-spin mr-2" />
        Loading SSL certificates...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Shield className="w-6 h-6 mr-2" />
            SSL Certificate Management
          </h2>
          <p className="text-gray-600 mt-1">
            Secure your domains with automatic SSL certificates
          </p>
        </div>
      </div>

      {/* SSL Overview */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <Info className="w-5 h-5 text-blue-500 mt-0.5 mr-3" />
          <div>
            <h3 className="font-medium text-blue-900">About SSL Certificates</h3>
            <p className="text-sm text-blue-800 mt-1">
              SSL certificates encrypt data between your visitors and your website, ensuring secure connections. 
              We provide free automatic certificates that renew every 90 days.
            </p>
          </div>
        </div>
      </div>

      {/* Domain SSL Status */}
      <div className="space-y-4">
        {domains.map((domain) => {
          const certificate = certificates.find(cert => cert.domainId === domain.id);
          const isProcessing = processingDomain === domain.id;
          
          return (
            <div key={domain.id} className="bg-white border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-lg font-semibold">{domain.domain}</span>
                </div>
                <div className="flex items-center">
                  {certificate && getStatusIcon(certificate.status)}
                  <span className="ml-2 font-medium">
                    {certificate ? getStatusText(certificate.status) : 'No Certificate'}
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              {certificate && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Issuer</div>
                    <div className="font-medium">{certificate.issuer || 'Let\'s Encrypt'}</div>
                  </div>
                  
                  {certificate.issuedAt && (
                    <div>
                      <div className="text-sm text-gray-500">Issued</div>
                      <div className="font-medium">
                        {new Date(certificate.issuedAt).toLocaleDateString()}
                      </div>
                    </div>
                  )}
                  
                  {certificate.expiresAt && (
                    <div>
                      <div className="text-sm text-gray-500">Expires</div>
                      <div className="font-medium flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(certificate.expiresAt).toLocaleDateString()}
                        {(() => {
                          const days = getDaysUntilExpiry(certificate.expiresAt);
                          if (days < 30) {
                            return (
                              <span className="ml-2 px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                                {days} days left
                              </span>
                            );
                          } else if (days < 60) {
                            return (
                              <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                                {days} days left
                              </span>
                            );
                          }
                          return null;
                        })()}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Error Message */}
              {certificate?.errorMessage && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                  <div className="flex items-center text-red-800">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    <span className="font-medium">Certificate Error</span>
                  </div>
                  <p className="text-sm text-red-700 mt-1">{certificate.errorMessage}</p>
                </div>
              )}

              {/* Validation Records (for pending certificates) */}
              {certificate?.validationRecords && certificate.status === 'pending' && (
                <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-md">
                  <div className="flex items-center text-orange-800 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-medium">DNS Validation Required</span>
                  </div>
                  <p className="text-sm text-orange-700 mb-3">
                    Add these DNS records to validate domain ownership:
                  </p>
                  {certificate.validationRecords.map((record, index) => (
                    <div key={index} className="bg-white border rounded p-2 mb-2">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                        <div>
                          <strong>Type:</strong> {record.type}
                        </div>
                        <div>
                          <strong>Name:</strong> <code>{record.name}</code>
                        </div>
                        <div>
                          <strong>Value:</strong> <code className="break-all">{record.value}</code>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  {domain.status === 'active' && !domain.sslEnabled && (
                    <button
                      onClick={() => enableSSL(domain.id)}
                      disabled={isProcessing}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center"
                    >
                      {isProcessing ? (
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Shield className="w-4 h-4 mr-2" />
                      )}
                      Enable SSL
                    </button>
                  )}
                  
                  {domain.sslEnabled && certificate && (
                    <>
                      <button
                        onClick={() => disableSSL(domain.id)}
                        disabled={isProcessing}
                        className="text-red-600 hover:text-red-800 px-4 py-2 rounded-lg border border-red-300 hover:bg-red-50 disabled:opacity-50"
                      >
                        Disable SSL
                      </button>
                      
                      {(certificate.status === 'expired' || 
                        (certificate.expiresAt && getDaysUntilExpiry(certificate.expiresAt) < 30)) && (
                        <button
                          onClick={() => renewCertificate(domain.id)}
                          disabled={isProcessing}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
                        >
                          {isProcessing ? (
                            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <RefreshCw className="w-4 h-4 mr-2" />
                          )}
                          Renew Certificate
                        </button>
                      )}
                    </>
                  )}
                </div>
                
                {domain.sslEnabled && certificate?.status === 'active' && (
                  <a
                    href={`https://${domain.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Test SSL
                  </a>
                )}
              </div>

              {/* Auto-Renewal Status */}
              {certificate?.autoRenew && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Auto-renewal enabled - Certificate will renew automatically before expiration
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {domains.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No domains configured</h3>
          <p className="text-gray-600">
            Add domains to your website to enable SSL certificates
          </p>
        </div>
      )}
    </div>
  );
};

export default SSLManagement;