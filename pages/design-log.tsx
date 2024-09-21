import type { NextPage } from 'next';
import { Nav } from '../components/navbar/navbar';
import { Layout } from '../components/navbar/layout';
import { Box } from '../components/styles/box';
import { Text } from '@nextui-org/react';

const DesignLog: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main" css={{ px: '$12', mt: '$8', '@xsMax': { px: '$10' } }}>
        <Text h1>Design Log</Text>
        {/* Add your design log content here */}
      </Box>
    </Layout>
  );
};

export default DesignLog;