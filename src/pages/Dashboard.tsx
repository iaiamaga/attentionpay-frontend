import { DashboardLayout } from '@/components/layout';
import { WelcomeCard, AttentionEvents, WeeklyChart } from '@/components/dashboard';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <WelcomeCard />
        
        <section className="space-y-6">
          <AttentionEvents />
          <WeeklyChart />
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;