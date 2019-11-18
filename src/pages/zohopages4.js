import React, { Component } from 'react'
import IFrame from 'react-iframe'
import styled from '@emotion/styled'
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
const BorderLessIframe = styled(IFrame)`
    border-width: 0;
    width: "100%";
    height: "100%"
`;


export default class zohopages1 extends Component {
    render() {
        return (



            <Row key={123}>
            <Col xs={12} md={12} xl={12} lg={12} >
              <Card className="mb-6">
                <CardHeader>{'Value Chain Yield Spot basis Forecast vs Actual price chart'}</CardHeader>
                <CardBody>
                 
                 

            <BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000007257836/b3c76d748d1b3c5cb577a7015edbbd60"
             width="1280px"
             height="650px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/>
                   
                </CardBody>
              </Card>
            </Col>


            <Col xs={12} md={12} xl={12} lg={12} >
              <Card className="mb-6">
                <CardHeader>{'Value Chain Yield Spot basis Forecast vs Actual price revision chart'}</CardHeader>
                <CardBody>
                 
            <BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000007257883/cd621a0f659caee97232232e980aa007"
             width="1280px"
             height="650px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/>
                   
                </CardBody>
              </Card>
            </Col>






          </Row>
       
  
     





        )
    }
}
