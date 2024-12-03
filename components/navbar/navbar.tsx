import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {icons} from './icons';
import {RoboWatchLogo} from './logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';

export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const collapseItems = [
      'Features',
      'Meet the Team',
      { name: 'Design Log', href: '/design-log' },
      { name: 'Build Log', href: '/build-log' },
   ];
   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <Link href="/" css={{ display: 'flex', alignItems: 'center' }}>
               <RoboWatchLogo />
            <Text b color="inherit" hideIn="xs">
               RoboWatch
               </Text>
            </Link>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Dropdown isBordered>
                  <Navbar.Item>
                     <Dropdown.Button
                        auto
                        light
                        css={{
                           px: 0,
                           dflex: 'center',
                           svg: {pe: 'none'},
                        }}
                        iconRight={icons.chevron}
                        ripple={false}
                     >
                        Features
                     </Dropdown.Button>
                  </Navbar.Item>
                  <Dropdown.Menu
                     aria-label="RoboWatch features"
                     css={{
                        '$$dropdownMenuWidth': '340px',
                        '$$dropdownItemHeight': '70px',
                        '& .nextui-dropdown-item': {
                           'py': '$4',
                           'svg': {
                              color: '$secondary',
                              mr: '$4',
                           },
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$semibold',
                           },
                        },
                     }}
                  >
                     <Dropdown.Item
                        key="ai_monitoring"
                        showFullDescription
                        description="Advanced AI-powered monitoring for hazards, spills, and dangers in your facility."
                        icon={icons.scale}
                     >
                        AI Monitoring
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="real_time_alerts"
                        showFullDescription
                        description="Instant notifications and alerts for any detected issues or potential dangers."
                        icon={icons.activity}
                     >
                        Real-time Alerts
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="custom_patrols"
                        showFullDescription
                        description="Customizable patrol routes and schedules tailored to your facility's needs."
                        icon={icons.flash}
                     >
                        Custom Patrols
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="data_analytics"
                        showFullDescription
                        description="Comprehensive data analytics and reporting for improved safety and efficiency."
                        icon={icons.server}
                     >
                        Data Analytics
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="integration"
                        showFullDescription
                        description="Seamless integration with existing security and management systems."
                        icon={icons.user}
                     >
                        System Integration
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
               <Navbar.Link isActive href="/#">
                  Meet the Team
               </Navbar.Link>
               <Navbar.Link href="/design-log">Design Log</Navbar.Link>
               <Navbar.Link href="/build-log">Build Log</Navbar.Link>
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={typeof item === 'string' ? item : item.name}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href={typeof item === 'string' ? '#' : item.href}
                  >
                     {typeof item === 'string' ? item : item.name}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/RobotGPT"
               >
                  <GithubIcon />
               </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem>
         </Navbar.Collapse>
         <Navbar.Content>

            <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/RobotGPT"
               >
                  <GithubIcon />
               </Link>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
