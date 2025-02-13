import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const Tenant: React.FC = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Tenants Page">
        <Typography>This is the tenants page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Tenant;