import { useTheme } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { Button, Text } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export const Hero = () => {
   const { type } = useTheme();
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) return null;

   // Calculate the scaling factor for the dark mode image
   const darkScaleFactor = 736 / 800; // Ratio of dark image width to light image width

   return (
      <Flex
         css={{
            'gap': '$3',
            'px': '$6',
            'flexDirection': 'column',
            'alignContent': 'center',
            'justifyContent': 'center',
            'alignItems': 'center',
            'width': '100%',
            '@sm': {
               flexDirection: 'row',
               mt: '$20',
            },
         }}
         justify={'center'}
      >
         <Box
            css={{
               pt: '$13',
               display: 'flex',
               flexDirection: 'column',
               gap: '$5',
            }}
         >
            <Text
               h1
               css={{
                  display: 'inline',
                  fontWeight: '$bold',
                  fontSize: '$5xl',
                  '@sm': {
                     fontSize: '$6xl',
                  },
               }}
            >
               Meet{' '}
               <Text
                  h1
                  css={{
                     display: 'inline',
                     fontWeight: '$bold',
                     fontSize: '$5xl',
                     '@sm': {
                        fontSize: '$6xl',
                     },
                  }}
                  color="primary"
               >
                  RoboGuard
               </Text>
            </Text>
            <Text
               css={{
                  color: '$accents8',
                  maxWidth: '400px',
                  lineHeight: '$lg',
               }}
               size="$xl"
               span
            >
               Your AI-powered factory assistant for enhanced safety and efficiency.
            </Text>
            <Flex
               css={{
                  gap: '$8',
                  pt: '$4',
               }}
               wrap="wrap"
            >
               <Button size="lg">Get Started</Button>
               <Button ghost size="lg">Learn More</Button>
            </Flex>
         </Box>
         <Box
            css={{
               '& img': {
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
               },
               width: '200px',
               maxWidth: '70%',
               '@sm': {
                  width: '450px',
               },
            }}
         >
            {isMounted && (
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  style={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     width: '100%',
                     height: '100%',
                  }}
               >
                  <motion.div
                     style={{
                        width: type === 'dark' ? `${darkScaleFactor * 100}%` : '100%',
                        height: type === 'dark' ? `${darkScaleFactor * 100}%` : '100%',
                     }}
                     whileHover={{ scale: 1.02 }}
                     transition={{ duration: 0.3 }}
                  >
                     <Image
                     src={type === 'dark' ? "/robot_placeholder_dark.png" : "/robot_placeholder_light.png"}
                     alt="RoboGuard"
                     layout="responsive"
                     width={100}
                     height={100}
                     objectFit="contain"
                     />
                  </motion.div>
               </motion.div>
            )}
         </Box>
      </Flex>
   );
};