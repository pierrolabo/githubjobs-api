import './CardJob.scss';
import moment from 'moment';
const CardJob = ({created_at, company, location, title, company_logo, type}) => {
    const getRelativeTimeFromNow = (time) => {
        let finalDate = '';
        const elapsedTime = moment(time).fromNow().split(' ');
        try {
            //  A number that define a category
            const dateNumber = elapsedTime[0];
            if(isNaN(Number.parseInt(dateNumber))) {throw Error}
            //  Represent hours, days, weeks, month, year
            const dateCategory = elapsedTime[1]
            switch(dateCategory) {
                case "hours": 
                    finalDate  =`${dateNumber}h ago`
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
    const timeElapsed = getRelativeTimeFromNow(created_at)
    //  Remove job with date error in their created_at 
    if(timeElapsed === "") return null;
    return (
        <div className="jobs__card">
                   <div className={`jobs__card__companyLogo ${company_logo ? "" : "fallback--companyLogo"}`}>
                       <img src={company_logo ? company_logo : ""} alt={`${company_logo ? `${company_logo} logo` : ""}`}/>
                   </div>
                  <div className="jobs__card__time">
                      <h4>{timeElapsed}</h4>
                      <h4> . {type}</h4>
                  </div>
                  <div className="jobs__card__title">
                      <a href="http://" target="_blank" rel="noopener noreferrer">
                      <h3>{title}</h3>
                      </a>
                  </div>
                  <div className="jobs__card__company">
                      <h4>{company}</h4>
                  </div>
                  <div className="jobs__card__location">
                      <h4>{location}</h4>
                  </div>
               </div>
    )
}

export default CardJob;