import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <div className={"text-center"}>
    <Navbar style={{backgroundColor:'#fff', textAlign:'center'}}>
      <Nav navbar style={{textAlign:'center',alignSelf:'center', flex: 1}}>
        <NavItem style={{textAlign:'center'}}>
          <div> <span >TransGraph Consulting </span><span >Private Limited </span> </div>
        </NavItem>
      </Nav>
    </Navbar>
    </div>
  );
};

export default Footer;
