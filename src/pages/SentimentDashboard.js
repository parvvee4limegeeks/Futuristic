import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { render } from 'react-dom';
import CountUp from 'react-countup';
import { Dots } from 'react-activity';
import 'react-activity/dist/react-activity.css';
import _ from 'lodash'
import { randomNum } from 'utils/demos';
import Page from 'components/Page';
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';
import { IconWidget, NumberWidget } from 'components/Widget';
import WordCloud from 'react-d3-cloud';
import { Line, Pie, Doughnut, Bar, Radar, Polar, Bubble } from 'react-chartjs-2';
import {
  MdBubbleChart,
  MdInsertChart,
  MdPersonPin,
  MdPieChart,
  MdRateReview,
  MdShare,
  MdShowChart,
  MdThumbUp,
} from 'react-icons/md';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Button,
  Card,
  CardText,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
  Row,
  UncontrolledButtonDropdown,
} from 'reactstrap';
import { getColor } from 'utils/colors';
import Axios from 'axios';
import { dispatch } from 'rxjs/internal/observable/range';
import sentStatSelector from '../selectors/sentStatSelector';
import sentAvgStatSelector from '../selectors/sentStatAvgSelector'
import sentWordCloudStatSelector from '../selectors/sentStatCloudSelector'

import { thisExpression } from '@babel/types';



  const url = " https://lztwdd29tl.execute-api.ap-south-1.amazonaws.com/Prod/fetchTweets" 



  let  tweetStatDataFn = async (duration) => await Axios.get(url,{
    params: {
      "duration": duration
    }
  }).then(function(res) {
   
    if(res.status == 200) {
      
      return res.data
    }
    

  }). catch(function(err) {
    return err;
  });









const getTweetStats = (tweetStats) =>  {

console.log( "tweetStats", tweetStats);



let hashes = [];
let positiveDataSet = [];
let negativeDataSet = [];
let neutralDataSet =  [];
let tweetCountDataSet = [];

tweetStats.map(function(tweetStat) {
hashes.push(tweetStat.text);
positiveDataSet.push(tweetStat.positiveTweets)
negativeDataSet.push(tweetStat.negativeTweets);
neutralDataSet.push(tweetStat.neutralTweets);
tweetCountDataSet.push(tweetStat.tweetCount);
})


const posdataSetObjForBar =  {
    label: "Positive Tweets",
    backgroundColor: getColor('success'),
   
    
    data: positiveDataSet
};





const negdataSetObjForBar =  {
    label: "Negative Tweets",
    backgroundColor: getColor('danger'),
    width: 20,
   
    data: positiveDataSet
};

const neutralDataSetObjForBar = {

    label: "Neutral Tweets",
    backgroundColor: getColor('info'),
  
    data: neutralDataSet

}


return  {



  

    labels: hashes,
    datasets: [posdataSetObjForBar, negdataSetObjForBar, neutralDataSetObjForBar]
}


}





const getTweetStatsBubble =  (tweetStats) => {



  let hashes = [];


  let btsDataSets = [];
  tweetStats.forEach(element => {

    hashes.push(element.text);


        let btsDataSetObj = {
 
             label: element.text,
             fill: true,
            //  showLabel:false,
          //    legend: {
          //     display: false
          // },
            //  lineTension: 0.1,
             backgroundColor: randomColor(),
             borderColor: 'rgba(75,192,192,1)',
             borderCapStyle: 'butt',
             borderDash: [],
             borderDashOffset: 0.0,
             borderJoinStyle: 'miter',
             pointBorderColor: 'rgba(75,192,192,1)',
             pointBackgroundColor: '#fff',
             pointBorderWidth: 1,
             pointHoverRadius: 5,
             pointHoverBackgroundColor: element.negativeTweets > element.positiveTweets ?  'red' : 'green',
             pointHoverBorderColor: element.negativeTweets > element.positiveTweets ?  'red' : 'green',
             pointHoverBorderWidth: 10,
             pointRadius: 6,
             pointHitRadius: 10,
             data: [{y:element.positiveTweets,x:element.negativeTweets,r: Math.sqrt(element.tweetCount) }]
 
         }
 
         btsDataSets.push(btsDataSetObj);
 });
 





return {
  labels: hashes,
  datasets: btsDataSets
}

}



const fontSizeMapper = word =>  {
  console.log("font", word);
  

  return  word.tweetCount * Math.log(word.positiveTweets + 1)
}  ;
const rotate = word => 0 ;

 class SentimentDashboard extends React.PureComponent {
    static propTypes = {
        prop: PropTypes
    }



  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      tweetStats: null,
      duration:'week',
      positiveScores: null,
      negativeScores: null,
      neutralScores: null,
      totalTweets: null,
      tweetSentimentDropDown: false,
      tweetAverageDropDown: false,
      tweetCloudDropDown: false,
    }
  }




  async componentDidMount() {

    await tweetStatDataFn(this.state.duration).then(this.handleData)
    
    this.setupNeutralScores();

  }


  setupNeutralScores = () => {


    let totalTweetCountArray = [];

    let positiveTweetsArray = [];

    let negativeTweetsArray = [];
    let neutralTweetsArray = [];

      _.each(this.props.sentStats.tweetStats, function(tweet) {

        positiveTweetsArray.push(tweet.positiveTweets);
        negativeTweetsArray.push(tweet.negativeTweets);
        neutralTweetsArray.push(tweet.neutralTweets);

      })


        const positivTweetSum =  positiveTweetsArray.reduce((a,b) => a + b, 0);


          console.log(positivTweetSum);
          

        const negativeTweetSum =  negativeTweetsArray.reduce((a,b) => a + b, 0);
        const neutralTweetSum = neutralTweetsArray.reduce((a,b) => a + b, 0);



        this.setState( {

          positiveScores: parseInt(positivTweetSum),
          negativeScores: parseInt(negativeTweetSum),
          neutralScores: parseInt(neutralTweetSum) ,
          totalTweets: positivTweetSum + negativeTweetSum + neutralTweetSum
        });


        console.log(this.state);
        

  }


  async  componentDidMount() {



   await this.props.initSentRequest();





  }


    render() {

      const durationKey = this.props.sentStats.duration;
      const tweetStats = this.props.sentStats.tweetStats
      const {defaultTweetCloudDropDownOption, defaultTweetAvgDropDownOption, defaultTweetSentDropDownOption} = this.props
      const setDropDownItem = (item, type) => {
       
        this.props.toggleStatVolume(item.key, type)
        
      
      } 

      console.log(this.props.sentStats);
      

        return (
            
            <Page
            className="SentimentDashboardPage"
            title="SentimentDashboard"
            extraComponent = {() => {
                return (<span> Some Text Comes here  </span>) 

            } }
            breadcrumbs={[{ name: 'Sentiment Dashboard', active: true }]}
          >





<Row>



<Col lg={3} md={6} sm={6} xs={12}>
    <Card 
                  inverse
                  className={`bg-gradient-primary text-center`}
    >

              <CardBody>

              

         { this.props.sentStats != null &&  this.props.sentStats.totalTweets != null ? <CountUp   suffix="+" start={0} end={this.props.sentStats.totalTweets} delay={0}>
  {({ countUpRef }) => (
    <div>
      <h1 ref={countUpRef} />
      <h4> Tweets   {_.filter(this.props.sentStats.availableDurations, function(item) {

        console.log(item);
        
        return item.key ==    durationKey
      })[0].label}  </h4>
    </div>
      
  )}
</CountUp> :<Dots  color="#fff" style={{color:'#fff'}} />}       

              </CardBody>
            </Card>

    </Col>
    <Col lg={3} md={6} sm={6} xs={12}>
<Card
              inverse
              className={`bg-gradient-danger text-center`}
>

              <CardBody >
  
                
         { this.props.sentStats != null &&  this.props.sentStats.negativeScores != null ? <CountUp   suffix="+" start={0} end={this.props.sentStats.negativeScores} delay={0}>
  {({ countUpRef }) => (
    <div>
      <h1 ref={countUpRef} />
      <h4> Negative Tweets  {_.filter(this.props.sentStats.availableDurations, function(item) {
        return item.key ==    durationKey
      })[0].label} </h4>
    </div>
      
  )}
</CountUp> :<Dots  color="#fff"  style={{color:'#fff'}}/>}       


              </CardBody>
            </Card>

   

    </Col>
    <Col lg={3} md={6} sm={6} xs={12}>

    <Card
                  inverse
                  className={`bg-gradient-success text-center`}
    >

              <CardBody>


                
  
                
              {this.props.sentStats != null &&   this.props.sentStats.positiveScores != null ? <CountUp   suffix="+" start={0} end={this.props.sentStats.positiveScores} delay={0}>
  {({ countUpRef }) => (
    <div>
      <h1 ref={countUpRef} />
      <h4> Postive Tweets   {_.filter(this.props.sentStats.availableDurations, function(item) {
        return item.key ==    durationKey
      })[0].label}  </h4>
    </div>
      
  )}
</CountUp> :<Dots  color="#fff" style={{color:'#fff'}} />}       



              </CardBody>
            </Card>

    </Col>
    <Col lg={3} md={6} sm={6} xs={12}>

    <Card
                      inverse
                      className={`bg-gradient-info text-center`}
    >
   
              <CardBody>
  

               
              {this.props.sentStats != null &&    this.props.sentStats.neutralScores != null ? <CountUp   suffix="+" start={0} end={this.props.sentStats.neutralScores} delay={0}>
  {({ countUpRef }) => (
    <div>
      <h1 ref={countUpRef} />
      <h4> Neutral Tweets   {_.filter(this.props.sentStats.availableDurations, function(item) {
        return item.key ==    durationKey
      })[0].label}  </h4>
    </div>
      
  )}
</CountUp> :<Dots  color="#fff" style={{color:'#fff'}} />}       


                
  
                
 
              </CardBody>
            </Card>

    </Col>


    </Row>


    <Row>

    <Col lg={12} md={12} sm={6} xs={12}>
              
         
               
                
    
               
<Card>
<CardHeader>
              <span>Tweet Cloud </span>
                <small className="text-muted text-capitalize"> { this.props.sentStats.duration}</small>                
              </CardHeader>
<CardBody>
{this.props.sentWordCloudStats != null &&   this.props.sentWordCloudStats.tweetStats!= null ? <WordCloud
  data={  this.props.sentWordCloudStats.tweetStats}
  fontSizeMapper={fontSizeMapper}
  rotate={rotate}
/> : <Dots  size={100} animating={true} style={{zindex: 5000}} /> }

               
               </CardBody>
            </Card>

      

      </Col>


    </Row>

<Row>


<Col md={6} lg={6}>
<Card>
    <CardHeader>
    <span>Machine Learning Statistics </span>
                <small className="text-muted text-capitalize"> {this.state.duration}</small> 
    </CardHeader>
    <CardBody>
        <div>
<NumberWidget
              title="Classification Jobs Completed"
              subtitle="This month"
              number="10"
              color="secondary"
              progress={{
                value: 70,
              }}
            />
</div>

<div style={{marginTop: 20, backgroundColor:'gray'}}>
<NumberWidget
              title="Entity Trainings Completed"
              subtitle="This month"
              number="20"
              color="secondary"
              progress={{
                value: 80,
              }}
            />

</div>
            </CardBody>
</Card>
</Col>


<Col md={6} lg={6} xs={12}>
<Row style={{marginTop: 24}}>
<Col xs={12} sm={6} lg={6} xl={6}>
<Card
              inverse
              className={`bg-gradient-success text-center`}
              style={{ height: 200 }}
            >
                <CardHeader className={`bg-gradient-success text-center`} inverse>
                  <strong>  <span> Most Positive Tweet</span></strong>
                </CardHeader>
              <CardBody className="d-flex flex-column flex-wrap justify-content-center align-items-center">
                <CardTitle>Save on Gas! Win $1, Gas in your area > ⠀⠀ gascard fuel…</CardTitle>
                <CardText>#fuel</CardText>
              </CardBody>
            </Card>

</Col>
<Col xs={12} sm={6} lg={6} xl={6}>
<Card
              inverse
              className={`bg-gradient-danger text-center`}
              style={{ height: 200 }}
            >
                                <CardHeader className={`bg-gradient-danger text-center`} inverse>
                   <strong><span> Most Negative Tweet</span></strong> 
                </CardHeader>
              <CardBody className="d-flex flex-column flex-wrap justify-content-center align-items-center">
                
                <CardText>Oil risk premium if mkts believe clearest Saudi statement so far. CNN interview, Saudi doesn’t want war, but if mi…</CardText>
                <CardTitle className={"pull-right"}>#Oil</CardTitle>
              </CardBody>
            </Card>

</Col>

</Row>
</Col>




</Row>


<Row>
<Col md={12} lg={12} sm={12} xs={12}>
<Card>
    <CardHeader>
        <span>  Tweet Sentiment Statistics </span>

        <Dropdown    style={{

fontSize: 14,

}} isOpen={this.state.tweetSentimentDropDown} toggle={() =>this.setState({
tweetSentimentDropDown : !this.state.tweetSentimentDropDown
})}>



<DropdownToggle
caret

 tag="div"
 onClick={() => () => {
  this.setState({
    tweetDropDown : !this.state.tweetSentimentDropDown
  })

 } }
 data-toggle="dropdown"
 aria-expanded={this.state.tweetSentimentDropDown}
>
{ this.props.sentStats.defaultTweetSentDropDownOption }
</DropdownToggle>
<DropdownMenu
   modifiers={{
    setMaxHeight: {
      enabled: true,
      order: 890,
      fn: (data) => {
        return {
          ...data,
          styles: {
            ...data.styles,
            fontSize: 14,
            overflow: 'auto',
            maxHeight: 100,
          },
        };
      },
    },
  }}
>

  {this.props.sentStats.tweetDropDownOptions.map(function(item) {

    return  <DropdownItem key={item.key} 
    onClick={() =>setDropDownItem(item, "tweetSent")} 
    >
    

     {item.label}  </DropdownItem> 
  })}


 </DropdownMenu> 
 

</Dropdown>

    </CardHeader>
  {this.props.sentStats != null &&    this.props.sentStats.tweetStats!= null ? <Bar options={{responsive:true}}  data={getTweetStats(
 this.props.sentStats.tweetStats     
     
     
     )} /> : <Dots /> }  
</Card>
</Col>




<Col xl={12} lg={12} md={12} sm={12} xs={12}>

<Card>
            <CardHeader style={{flex: 1, flexDirection: 'row'}}>
              
              <div>Tweet Averages  </div>
            
            <Dropdown    style={{

    fontSize: 14,
    
  }} isOpen={this.state.tweetAverageDropDown} toggle={() =>this.setState({
    tweetAverageDropDown : !this.state.tweetAverageDropDown
  })}>



   <DropdownToggle
   caret

     tag="div"
     onClick={() => () => {
      this.setState({
        tweetAverageDropDown : !this.state.tweetAverageDropDown
      })

     } }
     data-toggle="dropdown"
     aria-expanded={this.state.tweetAverageDropDown}
   >
    { this.props.sentStats.defaultTweetAvgDropDownOption }
   </DropdownToggle>
   <DropdownMenu
       modifiers={{
        setMaxHeight: {
          enabled: true,
          order: 890,
          fn: (data) => {
            return {
              ...data,
              styles: {
                ...data.styles,
                fontSize: 14,
                overflow: 'auto',
                maxHeight: 100,
              },
            };
          },
        },
      }}
   >

      {this.props.sentStats.tweetDropDownOptions.map(function(item) {

        return  <DropdownItem key={item.key} 
        onClick={() =>setDropDownItem(item, "tweetAvg")} 
        >
        

         {item.label}  </DropdownItem> 
      })}
   
    
     </DropdownMenu> 
     

 </Dropdown>

     
       </CardHeader>
            <CardBody >
            {this.props.sentStats != null &&    this.props.sentStats.tweetStats!= null ? <Bubble options={{ 
            legend: {
                display: this.props.sentStats.tweetStats.length > 250 ?   false : true,
            },
      tooltips: {

         callbacks: {
          label: function(t, d) {

              console.log( "chartindex",  t);
              console.log("dataset", d)
                  console.log(t);
                  
                const tweetCount = Math.round(Math.pow( d.datasets[t.datasetIndex].data[0]['r'],2)  ) 

               const neutralTweetCountMap = _.findLast(tweetStats, function(data) {


                  return   data.text ==  d.datasets[t.datasetIndex].label
                 })

                const neutralTweetCount = neutralTweetCountMap != null ?  neutralTweetCountMap['neutralTweets'] : 0

                  console.log("neutral", neutralTweetCount);
                  
               return d.datasets[t.datasetIndex].label + 
                      ': (Positive:' + t['yLabel'] + ',  Negative:' + t.xLabel + ',  Neutral:' + neutralTweetCount +   ', Total:' + tweetCount + ')';
            }
         }
      }
   }   } data={getTweetStatsBubble(  this.props.sentAvgStats.tweetStats   )} /> : <Dots /> }  
            </CardBody>
          </Card>
</Col>

</Row>

              </Page>
        )
    }
}


const mapStateToProps = (state) => {

  return {
    stats: state.sentimentStats, 
    sentStats:  sentStatSelector(state.sentimentStats) ,
    sentAvgStats: sentAvgStatSelector(state.sentimentStats),
    sentWordCloudStats: sentWordCloudStatSelector(state.sentimentStats)
  }

}



const mapDispatchToProps = (dispatch) => {
  return {
    initSentRequest: () => {
        return dispatch({
          type: "FETCH_DURATION_STAT",
          payload: "today"
        })
    },
    toggleStatVolume: (value, key) =>  {
        return dispatch({
          type: "TOGGLE_STAT_VOLUME",
          payload: {
            key: key,
            volume: value
          }
        })



    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SentimentDashboard)