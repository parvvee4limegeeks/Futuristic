import {createSelector} from 'reselect'
import _ from 'lodash'

const sentStatSelector = sentStats => sentStats != null ? {
    ...sentStats, 
    
    
    
    
    
    
    tweetStats: _.filter(sentStats.tweetStats, function(stat) {

        console.log("statdata", stat);
        

        if(sentStats.defaultTweetCloudDropDownOption == "all") {
                console.log( "sentStats",  sentStats);
                
            return stat.tweetCount > 5

        } else if (sentStats.defaultTweetCloudDropDownOption == "low") {
    
            return stat.tweetCount > 5 &&  stat.tweetCount  < 40

        } else if(sentStats.defaultTweetCloudDropDownOption == "high") {

            return    stat.tweetCount > 40
        }  
        
        








        
    }
    
    
    
    
    )
}   : null

export default  createSelector(
    sentStatSelector,
                (sentimentStats) => {
                    return { 
                            duration: sentimentStats != null && sentimentStats.duration != null ?   sentimentStats.duration : 'today',
                            tweetStats: sentimentStats != null && sentimentStats.tweetStats != null ?  sentimentStats.tweetStats : null,
                            positiveScores: sentimentStats != null && sentimentStats.positiveScores != null ?    sentimentStats.positiveScores : null,
                            ...sentimentStats
                            // availableDurations: sentimentStats.availableDurations, 
                            // negativeScores: sentimentStats.negativeScores, 
                            // neutralScores: sentimentStats.neutralScores,
                            // totalTweets: sentimentStats.totalTweets,
                            // tweetDropDownOptions:sentimentStats.tweetDropDownOptions,
                            // defaultTweetSentDropDownOption: sentimentStats.defaultTweetSentDropDownOption,
                            // defaultTweetAvgDropDownOption: sentimentStats.defaultTweetAvgDropDownOption,
                            // defaultTweetCloudDropDownOption: sentimentStats.defaultTweetCloudDropDownOption

                        }

                    }
)   
