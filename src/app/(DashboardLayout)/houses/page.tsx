import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const House: React.FC = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="House Page">
        <Typography>This is the house page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default House;