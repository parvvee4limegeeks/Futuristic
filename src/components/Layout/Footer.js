import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <div className={"text-center"}>
    <Navbar style={{backgroundColor:'#fff', textAlign:'center'}}>
      <Nav navbar style={{textAlign:'center',alignSelf:'center', flex: 1}}>
        <NavItem style={{textAlign:'center'}}>
         Work in Progress By <SourceLink> <span style={{color:'#7fab4e'}}>LIME</span><span style={{fontWeight:'bolder', color:'gray'}}>GEEKS </span> </SourceLink>
        </NavItem>
      </Nav>
    </Navbar>
    </div>
  );
};

export default Footer;
