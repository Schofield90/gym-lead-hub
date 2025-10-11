'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { gyms, GymConfig } from '@/config/gyms';

export default function EditLandingPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [authenticated, setAuthenticated] = useState(false);
  const [gymData, setGymData] = useState<GymConfig | null>(null);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isAuth = sessionStorage.getItem('admin_authenticated');
    if (isAuth === 'true') {
      setAuthenticated(true);
      const gym = gyms[resolvedParams.id];
      if (gym) {
        setGymData(gym);
      }
    } else {
      router.push('/admin');
    }
  }, [resolvedParams.id, router]);

  const handleSave = async () => {
    setSaving(true);

    // In a real app, this would save to a database or update the config file
    // For now, we'll show a message that changes need to be made in the code
    alert('To update landing page content:\n\n1. Edit src/config/gyms.ts directly\n2. Update the gym configuration\n3. Commit and push changes\n\nFor a more advanced setup, we can implement a database-backed CMS.');

    setSaving(false);
  };

  const handleBack = () => {
    router.push('/admin/dashboard');
  };

  if (!authenticated || !gymData) {
    return <div>Loading...</div>;
  }

  const previewUrl = `https://${gymData.subdomain}.gymleadhub.co.uk`;

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
        <div>
          <button
            onClick={handleBack}
            style={{
              padding: '8px 16px',
              backgroundColor: '#f3f4f6',
              color: '#374151',
              border: '1px solid #e5e7eb',
              borderRadius: '5px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              marginBottom: '10px'
            }}
          >
            ← Back to Dashboard
          </button>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
            Edit: {gymData.name} ({gymData.ageRange})
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a
            href={previewUrl}
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
            👁️ Preview Live
          </a>
          <button
            onClick={handleSave}
            disabled={saving}
            style={{
              padding: '8px 16px',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              opacity: saving ? 0.6 : 1
            }}
          >
            {saving ? 'Saving...' : '💾 Save Changes'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {/* Edit Form */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '30px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>
              Page Configuration
            </h2>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                Gym Name
              </label>
              <input
                type="text"
                value={gymData.name}
                onChange={(e) => setGymData({ ...gymData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '5px',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                Location
              </label>
              <input
                type="text"
                value={gymData.location}
                onChange={(e) => setGymData({ ...gymData, location: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '5px',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                Target Demographic
              </label>
              <input
                type="text"
                value={gymData.demographic}
                onChange={(e) => setGymData({ ...gymData, demographic: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '5px',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                Age Range
              </label>
              <input
                type="text"
                value={gymData.ageRange}
                onChange={(e) => setGymData({ ...gymData, ageRange: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '5px',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374141' }}>
                Spaces Available
              </label>
              <input
                type="text"
                value={gymData.spotsAvailable}
                onChange={(e) => setGymData({ ...gymData, spotsAvailable: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '5px',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{
              padding: '15px',
              backgroundColor: '#fef3c7',
              borderRadius: '5px',
              marginTop: '20px'
            }}>
              <p style={{ fontSize: '13px', color: '#92400e', margin: 0 }}>
                💡 <strong>Note:</strong> Currently, changes require updating the code directly in <code>src/config/gyms.ts</code>.
                For a database-backed CMS with instant updates, we can implement that next!
              </p>
            </div>
          </div>

          {/* Info Panel */}
          <div>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '30px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              marginBottom: '20px'
            }}>
              <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>
                Current Settings
              </h2>
              <div style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.8' }}>
                <p><strong>Subdomain:</strong> {gymData.subdomain}</p>
                <p><strong>Primary URL:</strong> <a href={previewUrl} target="_blank" style={{ color: '#3b82f6' }}>{previewUrl}</a></p>
                <p><strong>Program Duration:</strong> {gymData.programDuration}</p>
                <p><strong>Trainer:</strong> {gymData.trainerName}</p>
              </div>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '30px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>
                Quick Actions
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '12px',
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
                  🌐 View Live Page
                </a>
                <a
                  href="https://clarity.microsoft.com/projects/view/tocj2dkujp/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '12px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontSize: '14px',
                    fontWeight: '500',
                    textAlign: 'center'
                  }}
                >
                  📊 View Heatmaps
                </a>
                <button
                  onClick={() => window.open(`/gyms/${gymData.subdomain}`, '_blank')}
                  style={{
                    padding: '12px',
                    backgroundColor: '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  👁️ Preview Alt URL
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
