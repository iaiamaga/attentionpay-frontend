import { DashboardLayout } from '@/components/layout';
import { WelcomeCard, AttentionScore, WeeklyChart } from '@/components/dashboard';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <WelcomeCard />
        
        <section className="space-y-6">
          <AttentionScore score={82} />
          <WeeklyChart />
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;