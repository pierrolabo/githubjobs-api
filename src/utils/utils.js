import moment from 'moment';

const extractURL = (str) => {
    const url = str.match(/<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/);
    if(url === null) {
        return null
    } else {
        return url[url.length -1]
    }
}

const extractURI = (str) => {
        if(str === undefined || str === 'undefined') return ""
        const uri = /^(?:[^:]+:\/\/(?:[^@\/?]+@)?([^:\/?]+))?/.exec(str)[1]
        return uri
}
const getRelativeTimeFromNow = (time) => {
    let finalDate = '';
    const elapsedTime = moment(time).fromNow().split(' ');
    //  Handle "a few seconds ago case"
    if(elapsedTime[1] === "few") {
        return `1${elapsedTime[2]}`
    }
    try {
        //  A number that define a category
        let dateNumber = elapsedTime[0];
        //  handle case when the datenumber can be a letter
        if(isNaN(Number.parseInt(dateNumber))) {
            if(dateNumber === 'a' || 'an') {dateNumber = 1} else {throw Error}
        }
        //  Represent hours, days, weeks, month, year
        const dateCategory = elapsedTime[1]
        switch(dateCategory) {
            case "seconds":
            case "second":
                finalDate  =`${dateNumber}s ago`
            break;
            case "hours":
            case "hour": 
                finalDate  =`${dateNumber}h ago`
                break;
            case "minutes": 
            case "minute":
                finalDate  =`${dateNumber}m ago`
                break;
            case "day" : 
            case "days":
                finalDate  =`${dateNumber}d ago`
                break;
            case "weeks":  
            case "week":   
                finalDate  =`${dateNumber}w ago`
                break;
                case "months": 
                case "month":    
                finalDate  =`${dateNumber}mo ago`
                break;    
            default:
                console.log("A dateCategory isn't handled correctly ",elapsedTime)
                throw Error
            }       
    }catch(error) {
        console.log("Error: getRelativeTimeFromNow ", elapsedTime)
    }
    return finalDate;
}

export {extractURL, getRelativeTimeFromNow, extractURI}

/*

A dateCategory isn't handled correctly  
Array(3) [ "a", "month", "ago" ]
utils.js:56
Error: getRelativeTimeFromNow  
Array(3) [ "a", "month", "ago" ]
utils.js:60
A dateCategory isn't handled correctly  
Array(3) [ "a", "month", "ago" ]
utils.js:56
Error: getRelativeTimeFromNow  
Array(3) [ "a", "month", "ago" ]
utils.js:60
A dateCategory isn't handled correctly  
Array(3) [ "a", "month", "ago" ]
utils.js:56
Error: getRelativeTimeFromNow  
Array(3) [ "a", "month", "ago" ]
utils.js:60
A dateCategory isn't handled correctly  
Array(3) [ "a", "month", "ago" ]
utils.js:56
Error: getRelativeTimeFromNow  
Array(3) [ "a", "month", "ago" ]
*/