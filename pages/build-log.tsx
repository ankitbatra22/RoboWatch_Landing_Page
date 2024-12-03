import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Nav } from '../components/navbar/navbar';
import { Layout } from '../components/navbar/layout';
import { Box } from '../components/styles/box';
import { Text, Image } from '@nextui-org/react';
import { styled } from '@nextui-org/react';

interface LogEntry {
  date: string;
  title: string;
  content: Array<{
    type: string;
    value?: string;
    items?: string[];
    src?: string;
    alt?: string;
  }>;
}

const StyledUl = styled('ul', {
  mb: '$5',
  pl: '$10',
  listStyleType: 'disc',
  '& li': {
    marginBottom: '$2',
    fontFamily: 'inherit',
    fontSize: 'inherit'
  }
});

const BuildLog: NextPage = () => {
  const [entries, setEntries] = useState<LogEntry[]>([]);

  useEffect(() => {
    fetch('/build.log.json')
      .then(response => response.json())
      .then(data => setEntries(data)); // Remove .reverse() to keep newest first
  }, []);

  return (
    <Layout>
      <Nav />
      <Box as="main" css={{ px: '$12', mt: '$8', '@xsMax': { px: '$10' } }}>
        <Text h1>Build Log</Text>
        <Box css={{ display: 'flex', flexWrap: 'wrap', gap: '$10' }}>
          {entries.map((entry, index) => (
            <Box 
              key={index} 
              css={{ 
                width: '100%',
                maxWidth: '400px',
                border: '1px solid $accents4',
                borderRadius: '$md',
                padding: '$10',
                boxShadow: '$md',
                backgroundColor: '$background',
              }}
            >
              <Text h3 css={{ mb: '$2' }}>{entry.title}</Text>
              <Text css={{ color: '$accents7', mb: '$5' }}>{entry.date}</Text>
              <Box css={{ mt: '$5' }}>
                {entry.content.map((item, itemIndex) => {
                  switch (item.type) {
                    case 'text':
                      return <Text key={itemIndex} css={{ mb: '$5' }}>{item.value}</Text>;
                    case 'list':
                      return (
                        <StyledUl key={itemIndex}>
                          {item.items?.map((listItem, listItemIndex) => (
                            <li key={listItemIndex}>{listItem}</li>
                          ))}
                        </StyledUl>
                      );
                    case 'image':
                      return item.src ? (
                        <Image 
                          key={itemIndex} 
                          src={item.src} 
                          alt={item.alt || ''} 
                          css={{ maxWidth: '100%', height: 'auto', mb: '$5' }}
                        />
                      ) : null;
                    default:
                      return null;
                  }
                })}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default BuildLog;