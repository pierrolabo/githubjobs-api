import {Link} from 'react-router-dom';
import moment from 'moment';
import './CardJob.scss';
const CardJob = ({created_at, company, location, title, company_logo, type, id}) => {
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
    const timeElapsed = getRelativeTimeFromNow(created_at)
    //  Remove job with date error in their created_at 
    //if(timeElapsed === "") return null;
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
                      <Link to={`/details/${id}`}><h3>{title}</h3></Link>
                      
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