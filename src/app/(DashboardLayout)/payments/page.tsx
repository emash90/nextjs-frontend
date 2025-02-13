import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const Payment: React.FC = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Payments Page">
        <Typography>This is the payments page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Payment;