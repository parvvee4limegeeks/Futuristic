

import React, { PureComponent } from 'react'
import Iframe from 'react-iframe'
import styled from '@emotion/styled'
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const BorderLessIframe = styled(Iframe)`
    border-width: 0;
    width: "100%";
    height: "100%"
`;


class TenderAnalysis extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            

           <div>
            <Row key={123}>
            <Col xs={12} md={12} xl={12} lg={12} >
              <Card className="mb-6">
                <CardHeader>{'Optimal Bid Price(000 USD), Probability of Win(%) WRT Winners Curse(Alpha)'}</CardHeader>
                <CardBody>
                 
                 

            <BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000008480691/d3e66d4fe47a799c640bb14b723ccfb4"
             width="100%"
             height="450px"
            id="calculateddataset"
            className="myClassname"
            display="initial"
            position="relative"/>
                   
                </CardBody>
              </Card>
            </Col>



          </Row>




<Row key={123}>
<Col xs={12} md={12} xl={12} lg={12} >
  <Card className="mb-6">
    <CardHeader>{'Profit Margin(%) WRT Winners Curse(Alpha)'}</CardHeader>
    <CardBody>
     
     

<BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000008480656/c367bcd2b02f07cb291302f5bcb9048d"
 width="100%"
 height="450px"
id="traindata"
className="myClassname"
display="initial"
position="relative"/>
       
    </CardBody>
  </Card>
</Col>



</Row>


<Row key={123}>
<Col xs={12} md={12} xl={12} lg={12} >
  <Card className="mb-6">
    <CardHeader>{'Profit Margin(%), Probability of Win(%) WRT Optimal Bid Price(000 USD)'}</CardHeader>
    <CardBody>
     
     

<BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000008480673/a0f39b1b607dd2d24c13089a454f4d2e"
 width="100%"
 height="450px"
id="testdata"
className="myClassname"
display="initial"
position="relative"/>
       
    </CardBody>
  </Card>
</Col>



</Row>






<Row key={123}>
<Col xs={12} md={12} xl={12} lg={12} >
  <Card className="mb-6">
    <CardHeader>{'Optimal Bid Price-Algorithm Results'}</CardHeader>
    <CardBody>
     
     

<BorderLessIframe url="https://analytics.zoho.com/open-view/1254398000008482293/11d5eac208290aeb43de9058be6e14a0"
 width="100%"
 height="450px"
id="testdata"
className="myClassname"
display="initial"
position="relative"/>
       
    </CardBody>
  </Card>
</Col>



</Row>



</div>

        )
    }
}

export default TenderAnalysis
