import {  Image, Heading, Flex, Button,  HStack , chakra } from '@chakra-ui/react';
// import Logo from '../public/logo.svg';
import {Link} from 'react-scroll'
import React from "react";
    
    const CTA = "Get Started"
    
    function NavComponent() {
      return (
        <chakra.header id="header">
          <Flex
            w="100%"
            px="6"
            py="5"
            align="center"
            justify="space-between"
          >
           {/* LOGO */}
            {/* <Image src={Logo.src} h="50px" /> */}
            <Heading>Logo</Heading>
            
            {/* Nav Items */}
            <HStack as="nav" spacing="5">
                <Link>
                  <Button variant="nav"> Home </Button>
                </Link>
                <Link>
                  <Button variant="nav"> About </Button>
                </Link>
            </HStack>
    
            {/* Call to action items */}
            <HStack>
              <Button>
                {CTA}
              </Button>
            </HStack>
            
          </Flex>
        </chakra.header>
      );
}

export default NavComponent