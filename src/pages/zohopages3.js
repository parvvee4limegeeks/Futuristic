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
            <Col xs={12} md={6} xl={6} lg={6} >
              <Card className="mb-6">
                <CardHeader>{'Global Crude Oil Supply Vs Demand Trends'}</CardHeader>
                <CardBody>
                 
                 

            <BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000007206267/54cd5ee9db370494d76f40117eda7745"
             width="100%"
             height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/>
                   
                </CardBody>
              </Card>
            </Col>


            <Col xs={12} md={6} xl={6} lg={6} >
              <Card className="mb-6">
                <CardHeader>{'Monthly India Lubes S&D Trends'}</CardHeader>
                <CardBody>
                 
            <BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000007205508/bbb7980a6cc4507f4366df20702657b4"
             width="100%"
             height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/>
                   
                </CardBody>
              </Card>
            </Col>


            <Col xs={12} md={6} xl={6} lg={6} >
              <Card className="mb-6">
                <CardHeader>{'Monthly India Naphtha S&D Trends'}</CardHeader>
                <CardBody>
                 
                 

            <BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000007205894/ebb2b3e183ee152b6fd0b289fd6d868c"
             width="100%"
             height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/>
                   
                </CardBody>
              </Card>
            </Col>


            <Col xs={12} md={6} xl={6} lg={6} >
              <Card className="mb-6">
                <CardHeader>{'Quarterly Global Crude Oil S&D Trends'}</CardHeader>
                <CardBody>
                 
                 

            <BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000007204777/e8faeec4d63c457165051be35c6ac26e"
             width="100%"
             height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/>
                   
                </CardBody>
              </Card>
            </Col>



            <Col xs={12} md={6} xl={6} lg={6} >
              <Card className="mb-6">
                <CardHeader>{'Quarterly India Polymers S&D Trends'}</CardHeader>
                <CardBody>
                 
                 

            <BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000007205376/b986b9ac0ca720de37c49f62fb0a5ce8"
             width="100%"
             height="450px"
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
