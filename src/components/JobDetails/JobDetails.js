import './JobDetails.scss'
const JobDetails = ({id, company, company_logo, company_url}) => {
    console.log("mounted")
    return (
        <>
            <section className="jobdetails__header">
                <div className="jobdetails__header__companyLogo">
                <img src={company_logo ? company_logo : ""} alt={`${company_logo ? `${company_logo} logo` : ""}`}/>
                </div>
                <div className="jobdetails__header__info">
                <div className="jobdetails__header__info--title">
                <h1>{company}</h1>
                </div>
                <div className="jobdetails__header__info--url">
                    <h4>versiti.org</h4>
                </div>

                </div>
                <a href={company_url} target="_blank">
                <button className="jobdetails__header__sitebutton">Company Site</button>
                </a>
            </section>
        </>
    )
}

export default JobDetails;