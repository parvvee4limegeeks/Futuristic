


const  initState = {

    duration: 'today',
    availableDurations: [
        {
            key: 'today',
            label: 'Today'
        }, 
        {
            key: 'week',
            label: 'This Week'
        }, 
        {
            key: 'month',
            label: 'This Month'
        }, 
    ],
    isLoading: true,
    tweetStatData: null,
    positiveScores: null,
    negativeScores: null,
    neutralScores: null,
    totalTweets: null,
    tweetDropDownOptions: [
        {
          key: 'low',
          label: 'Low'
        },
        {
          key: "high",
          label: "High"
        },
        {
          key: "all",
          label: "All"
        },
      
      ],
      defaultTweetSentDropDownOption: "all",
      defaultTweetAvgDropDownOption: "all",
      defaultTweetCloudDropDownOption: "all"

}


export default function (state  = initState, action) {

        let newState = null;

        switch (action.type) {
            case "TOGGLE_STAT_VOLUME":

                console.log(   "actionl payload", action.payload);
                
                if(action.payload.key == "tweetCloud") {

                   return  {
                        ...state,
                        defaultTweetCloudDropDownOption: action.payload.volume

                      }
                    }
                else if(action.payload.key == "tweetAvg") {

                   return  {
                        ...state,
                        defaultTweetAvgDropDownOption: action.payload.volume

                      }
                    }
                    else if(action.payload.key == "tweetSent") {

                        return  {
                            ...state,
                            defaultTweetSentDropDownOption: action.payload.volume
    
                          }
                        }






            case "SET_DURATION":
                
                    let transientState = { ...state }
                        transientState.duration = action.payload


                        newState = {
                            ...state,
                            duration: action.payload,
                            positiveScores: null,
                            negativeScores: null,
                            neutralScores: null,
                            totalTweets: null,
                            tweetStats: null,
                        }

                
                break;
            case "TWEET_STATS_FETCHED": 


                newState = {

                    ...state,
                    ...action.payload,
                    isLoading: false

                }

break;
            default:

                break;
        }




        return newState == null ? state : newState
    
}