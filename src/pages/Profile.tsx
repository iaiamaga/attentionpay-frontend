import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout';
import { ProfileTabs, PersonalDataCard, WalletCard, ProfileHeader } from '@/components/profile';
import SupportTab from '@/pages/SupportTab';
import SettingsTab from '@/pages/SettingsTab';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <DashboardLayout>
      <div className="mb-8">
        <ProfileHeader />
      </div>
      
      <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="mt-6 px-container-margin">
        {activeTab === 'overview' && (
          <div className="max-w-2xl mx-auto space-y-4">
            <PersonalDataCard />
            <WalletCard onClick={() => navigate('/connect-wallet')} />
          </div>
        )}
        
        {activeTab === 'activities' && <SupportTab />}
        
        {activeTab === 'settings' && <SettingsTab />}
      </div>
    </DashboardLayout>
  );
};

export default Profile;