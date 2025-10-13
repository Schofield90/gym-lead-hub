'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { gyms } from '@/config/gyms';

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isAuth = sessionStorage.getItem('admin_authenticated');
    if (isAuth === 'true') {
      setAuthenticated(true);
    } else {
      router.push('/admin');
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    router.push('/admin');
  };

  if (!authenticated) {
    return <div>Loading...</div>;
  }

  const landingPages = Object.entries(gyms).map(([key, gym]) => ({
    id: key,
    ...gym,
    primaryUrl: `https://${gym.subdomain}.gymleadhub.co.uk`,
    altUrl: `https://gymleadhub.co.uk/gyms/${gym.subdomain}`,
    variantUrl: gym.demographicAdjective === 'women'
      ? `https://${gym.subdomain}.gymleadhub.co.uk/women-lp`
      : gym.demographicAdjective === 'men'
      ? `https://${gym.subdomain}.gymleadhub.co.uk/men-lp`
      : null,
  }));

  // Microsoft Clarity Dashboard URL
  const clarityDashboardUrl = 'https://clarity.microsoft.com/projects/view/tocj2dkujp/dashboard';

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
          🏋️ Gym Lead Hub Admin
        </h1>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <a
            href={clarityDashboardUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 16px',
              backgroundColor: '#10b981',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            📊 View All Heatmaps
          </a>
          <button
            onClick={handleLogout}
            style={{
              padding: '8px 16px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '40px' }}>
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
            Landing Pages ({landingPages.length})
          </h2>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>
            Manage and monitor all your landing page campaigns
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
          gap: '20px'
        }}>
          {landingPages.map((page) => (
            <div
              key={page.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '25px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb'
              }}
            >
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>
                  {page.name}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                  <span style={{
                    padding: '4px 12px',
                    backgroundColor: '#dbeafe',
                    color: '#1e40af',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {page.demographic} {page.ageRange}
                  </span>
                  <span style={{
                    padding: '4px 12px',
                    backgroundColor: '#fef3c7',
                    color: '#92400e',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {page.location}
                  </span>
                  <span style={{
                    padding: '4px 12px',
                    backgroundColor: '#dcfce7',
                    color: '#166534',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {page.spotsAvailable} spaces
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}>
                  <strong>Primary:</strong>{' '}
                  <a href={page.primaryUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>
                    {page.primaryUrl.replace('https://', '')}
                  </a>
                </div>
                {page.variantUrl && (
                  <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}>
                    <strong>Variant ({page.demographicAdjective}):</strong>{' '}
                    <a href={page.variantUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#10b981' }}>
                      {page.variantUrl.replace('https://', '')}
                    </a>
                  </div>
                )}
                <div style={{ fontSize: '13px', color: '#6b7280' }}>
                  <strong>Alt URL:</strong>{' '}
                  <a href={page.altUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>
                    {page.altUrl.replace('https://', '')}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href={page.primaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    minWidth: '100px',
                    padding: '10px',
                    backgroundColor: '#f3f4f6',
                    color: '#374151',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontSize: '14px',
                    fontWeight: '500',
                    textAlign: 'center',
                    border: '1px solid #e5e7eb'
                  }}
                >
                  👁️ Preview
                </a>
                {page.variantUrl && (
                  <a
                    href={page.variantUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      minWidth: '100px',
                      padding: '10px',
                      backgroundColor: '#dcfce7',
                      color: '#166534',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      fontSize: '14px',
                      fontWeight: '500',
                      textAlign: 'center',
                      border: '1px solid #86efac'
                    }}
                  >
                    👁️ Variant
                  </a>
                )}
                <a
                  href={`/admin/edit/${page.id}`}
                  style={{
                    flex: 1,
                    minWidth: '100px',
                    padding: '10px',
                    backgroundColor: '#667eea',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontSize: '14px',
                    fontWeight: '500',
                    textAlign: 'center'
                  }}
                >
                  ✏️ Edit
                </a>
                <a
                  href={clarityDashboardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    minWidth: '100px',
                    padding: '10px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontSize: '14px',
                    fontWeight: '500',
                    textAlign: 'center'
                  }}
                >
                  📊 Heatmap
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
