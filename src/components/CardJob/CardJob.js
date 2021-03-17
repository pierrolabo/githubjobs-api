import './CardJob.scss';
const CardJob = ({created_at, company, location, title, company_logo}) => {
    return (
        <div className="jobs__card">
                   <div className="jobs__card__companyLogo">
                       <img src={company_logo} alt=""/>
                   </div>
                  <div className="jobs__card__time">
                      <h4>5h ago .</h4>
                      <h4> Full Time</h4>
                  </div>
                  <div className="jobs__card__title">
                      <h3>{title}</h3>
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