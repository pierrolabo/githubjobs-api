import {extractURL, getRelativeTimeFromNow} from '../../utils/utils';

import './JobDetails.scss'
const JobDetails = ({id, company, company_logo, company_url, title, location, type, description, how_to_apply, created_at}) => {
    how_to_apply = `<h3 className="jobdetails__howtoapply--title jobsdetails--title">How to Apply</h3>` + how_to_apply
    const APPLICATION_URL = extractURL(how_to_apply)
    const TIME_ELAPSED = getRelativeTimeFromNow(created_at)
    console.log(APPLICATION_URL)
    return (
        <>
        <main className="jobdetails__container">

            <section className="jobdetails__header">
                <div className="jobdetails__header__companyLogo">
                <img className={company_logo ? "" : ".fallback--companyLogo"} src={company_logo ? company_logo : ""} alt={`${company_logo ? `${company_logo} logo` : ""}`}/>
                </div>
                <div className="jobdetails__header__info">
                <div className="jobdetails__header__info--title">
                <h1>{company}</h1>
                </div>
                <div className="jobdetails__header__info--url">
                    <h4>versiti.org</h4>
                </div>
                </div>
                <a href={company_url} target="_blank" rel="noreferrer">
                <button className="jobdetails__header__sitebutton">Company Site</button>
                </a>
            </section>
            <section className="jobdetails__content">
                <div className="jobdetails__content__company">
                    <div className="jobdetails__content__company__info">
                        <div className="jobdetails__content__company__info__details">
                            <div className="jobdetails__content__company__info__details__time">
                                <h4>{TIME_ELAPSED}</h4>
                                <span style={{margin: '0 3px'}}>.</span>
                                <h4>{type}</h4>
                            </div>
                            <h3 className="jobdetails__content__company__info__details--title">{title}</h3>
                            <h4 className="jobdetails__content__company__info__details--location">{location}</h4>
                            </div>
                            <div className="jobdetails__content__company__apply">
                                <a href={APPLICATION_URL} target="__blank">
                                <button className="jobdetails__content__company__apply--buttonapply">Apply Now</button>
                                </a>
                            </div>
                        </div>
                </div>
                <div className="jobdetails__description" dangerouslySetInnerHTML={{__html: description}}></div>
            </section>
                <section className="jobdetails__howtoapply" dangerouslySetInnerHTML={{__html: how_to_apply}}></section>
        </main>
                <section className="jobdetails__footer__container">
                    <div className="jobdetails__footer">
                    <div className="jobdetails__footer__info hide-on-mobile">
                        <h4 className="jobdetails__footer__info--title">{title}</h4>
                        <h3 className="jobdetails__footer__info--company">{company}</h3>
                    </div>
                    <div className="jobdetails__footer__apply">
                        <a href={APPLICATION_URL} target="__blank">
                    <button className="jobdetails__footer__apply--buttonapply">Apply Now</button>
                        </a>
                    </div>
                    </div>
                </section>

        </>
    )
}

export default JobDetails;