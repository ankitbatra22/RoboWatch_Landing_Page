import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';

export const Trial = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               px: '$6',
            }}
            justify={'center'}
            direction={'column'}
            align={'center'}
         >
            <Text h3>Ready to secure your factory?</Text>
            <Text
               span
               css={{
                  color: '$accents8',
                  pb: '$15',
                  textAlign: 'center',
               }}
            >
               Schedule a demo to see RoboWatch in action and learn how it can revolutionize your facility&apos;s safety.
            </Text>

            <Button size="lg" as="a" href="/design-log">Schedule Demo</Button>
         </Flex>
      </>
   );
};
