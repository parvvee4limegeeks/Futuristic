import {takeLatest , call, put, select} from 'redux-saga/effects'
import _ from 'lodash'
import Axios from 'axios'
const url = "https://lztwdd29tl.execute-api.ap-south-1.amazonaws.com/Prod/fetchTweets";


const aggregateTweetStatistics = (data) => {


    const groupedData = _.groupBy(data, 'tweetFrom')
  
    // const preFinalData = _.mapKeys(groupedData,handleGroupItem)
  
      
  
    console.log("prefinalData",  Object.keys(groupedData)  );
  
    var aggregationArray = [];
  
    _.each(  Object.keys(groupedData), function(key) {
            let positiveTweetsArray = [];
            let negativeTweetsArray = [];
            let neutralTweetsArray = [];
  
  
      _.each(groupedData[key], function(item) {
  
        positiveTweetsArray.push(parseInt(item.positiveTweets));
        negativeTweetsArray.push(parseInt(item.negativeTweets));
        neutralTweetsArray.push(parseInt(item.neutralTweets) );
  
  
        })
  
              let groupObj = {
  
                text: key,
                tweetCount:  positiveTweetsArray.reduce((a,b) => a + b, 0) + negativeTweetsArray.reduce((a,b) => a + b , 0 ) + neutralTweetsArray.reduce((a,b) => a + b , 0) , 
                positiveTweets: positiveTweetsArray.reduce((a,b) => a + b, 0),
                negativeTweets: negativeTweetsArray.reduce((a,b) => a + b , 0 ),
                neutralTweets: neutralTweetsArray.reduce((a,b) => a + b , 0)
              }
  
              aggregationArray.push(groupObj);
  
    })
  
    console.log(aggregationArray);
  
  
    return aggregationArray;
  
  
   }
  
  
  



const  fetchStatistics = async (duration) => await Axios.get(url,{
    params: {
      "duration": duration
    }
  }).then(function(res) {
   
    if(res.status == 200) {
      
      return res.data
    }
    

  }). catch(function(err) {
    return false;
  });






function* fetchDurationStatsGen(action) {

    let handleStats;

  const data =  yield call(fetchStatistics, action.payload);


    if(data) {



             handleStats  = yield call(aggregateTweetStatistics, data)


       
    

    let totalTweetCountArray = [];

    let positiveTweetsArray = [];

    let negativeTweetsArray = [];
    let neutralTweetsArray = [];

      _.each(data, function(tweet) {

        positiveTweetsArray.push(tweet.positiveTweets);
        negativeTweetsArray.push(tweet.negativeTweets);
        neutralTweetsArray.push(tweet.neutralTweets);

      })


        const positivTweetSum =  positiveTweetsArray.reduce((a,b) => a + b, 0);


          console.log(positivTweetSum);
          

        const negativeTweetSum =  negativeTweetsArray.reduce((a,b) => a + b, 0);
        const neutralTweetSum = neutralTweetsArray.reduce((a,b) => a + b, 0);



        yield put( {
            
            type: "TWEET_STATS_FETCHED", 
            payload: {
        tweetStats: handleStats,
          positiveScores: parseInt(positivTweetSum),
          negativeScores: parseInt(negativeTweetSum),
          neutralScores: parseInt(neutralTweetSum) ,
          totalTweets: positivTweetSum + negativeTweetSum + neutralTweetSum
        }
    
    
    });






            yield put({
                type: 'SENT_STATS_FETCHED'
            })

    }






}



export default function* root() {




    yield takeLatest("FETCH_DURATION_STAT", fetchDurationStatsGen)





}