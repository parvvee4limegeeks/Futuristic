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
                <CardHeader>{'Blow Moulding High MFI'}</CardHeader>
                <CardBody>
                 
                 

            <BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000007033293"
             width="470px"
             height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            styles={styles.iframe}
            position="relative"/>
                   
                </CardBody>
              </Card>
            </Col>


            <Col xs={12} md={6} xl={6} lg={6} >
              <Card className="mb-6">
                <CardHeader>{'Blow Moulding High MFI Geo Map'}</CardHeader>
                <CardBody>
                 
            <BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000007033858/d6a3553756c143dcd657fa457faf2f65"
             width="470px"
             height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            styles={styles.iframe}
            position="relative"/>
                   
                </CardBody>
              </Card>
            </Col>


            <Col xs={12} md={6} xl={6} lg={6} >
              <Card className="mb-6">
                <CardHeader>{'Blow Moulding High MFI Price Trend'}</CardHeader>
                <CardBody>
                 
                 

            <BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000007047033/a8ab01bde9064674fff67cffb632baad"
             width="470px"
             height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            styles={styles.iframe}
            position="relative"/>
                   
                </CardBody>
              </Card>
            </Col>


            <Col xs={12} md={6} xl={6} lg={6} >
              <Card className="mb-6">
                <CardHeader>{'Blow Moulding Low MFI'}</CardHeader>
                <CardBody>
                 
                 

            <BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000007043876/cd23bdcb09ee0e86045e3eb69441c1ce"
             width="470px"
             height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            styles={styles.iframe}
            position="relative"/>
                   
                </CardBody>
              </Card>
            </Col>



            <Col xs={12} md={6} xl={6} lg={6} >
              <Card className="mb-6">
                <CardHeader>{'Blow Moulding Low MFI Geo Map'}</CardHeader>
                <CardBody>
                 
                 

            <BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000007071007/2c3fab97d413af506d76834bd75e87b4"
             width="470px"
             height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            styles={styles.iframe}
            position="relative"/>
                   
                </CardBody>
              </Card>
            </Col>



            <Col xs={12} md={6} xl={6} lg={6} >
              <Card className="mb-6">
                <CardHeader>{'Blow Moulding Low MFI Price Trend'}</CardHeader>
                <CardBody>
                 
                 

            <BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000007071497/37124e1d0ba89597e594a448f86e7e7c"
             width="470px"
             height="450px"
            id="myId"
            className="myClassname"
            styles={styles.iframe}
            display="initial"
            position="relative"/>
                   
                </CardBody>
              </Card>
            </Col>



          </Row>
       
  
     





        )
    }
}



 const styles =  {


  iframe: {
    display:'none'

  }


 }