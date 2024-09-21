import type { NextPage } from 'next';
import { Nav } from '../components/navbar/navbar';
import { Layout } from '../components/navbar/layout';
import { Box } from '../components/styles/box';
import { Text } from '@nextui-org/react';

const BuildLog: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main" css={{ px: '$12', mt: '$8', '@xsMax': { px: '$10' } }}>
        <Text h1>Build Log</Text>
        {/* Add your build log content here */}
      </Box>
    </Layout>
  );
};

export default BuildLog;