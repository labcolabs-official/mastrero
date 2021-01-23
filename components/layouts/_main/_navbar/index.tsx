import * as React from 'react';
import { Flex, TabList, Tab, Button } from '@chakra-ui/react';

interface INavbar {
  tabs: string[];
}

const Navbar = ({ tabs = [] }: INavbar): JSX.Element => (
  <TabList
    as="nav"
    w={['100vw', null, '100%']}
    h="45px"
    overflowY="hidden"
    overflowX="auto"
    pr="0px"
    position="sticky"
    top="0"
    zIndex="100">
    <Flex w="100%" className="custom-scroll" justify="flex-start" alignItems="baseline" overflowY="auto" h="100%">
      {tabs.map(
        (tab: string, i: number): JSX.Element => (
          <Button key={tab + i} id={tab} as={Tab} variant="nav-tab" className="Font__Raleway" ml="10px">
            {tab}
          </Button>
        )
      )}
    </Flex>
  </TabList>
);

export default Navbar;
