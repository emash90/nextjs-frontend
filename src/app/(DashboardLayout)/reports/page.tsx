import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const Report: React.FC = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Reports Page">
        <Typography>This is the reports page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Report;