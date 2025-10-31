'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import DomainDashboard from '../../../../components/DomainDashboard';

export default function DomainsPage() {
  const params = useParams();
  const websiteId = params.websiteId as string;

  if (!websiteId) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Website Not Found</h1>
          <p className="text-gray-600">Invalid website ID provided.</p>
        </div>
      </div>
    );
  }

  return <DomainDashboard websiteId={websiteId} />;
}