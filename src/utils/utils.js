import moment from 'moment';

const extractURL = (str) => {
    const url = str.match(/<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/);
    console.log("extract url: ", url)
    if(url === null) {
        return null
    } else {
        return url[url.length -1]
    }
}

const getRelativeTimeFromNow = (time) => {
    let finalDate = '';
    const elapsedTime = moment(time).fromNow().split(' ');
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
            case "hours": 
            case "hour": 
                finalDate  =`${dateNumber}h ago`
                break;
                case "minutes": 
                finalDate  =`${dateNumber}m ago`
                break;
            case "day" : 
            case "days":
                finalDate  =`${dateNumber}d ago`
                break;
            case "weeks":     
                finalDate  =`${dateNumber}w ago`
                break;
                case "months":     
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

export {extractURL, getRelativeTimeFromNow}