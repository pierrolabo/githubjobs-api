import {Link} from 'react-router-dom';
import {getRelativeTimeFromNow} from '../../utils/utils'
import './CardJob.scss';
const CardJob = ({created_at, company, location, title, company_logo, type, id}) => {
    const timeElapsed = getRelativeTimeFromNow(created_at)
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