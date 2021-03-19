import './JobDetails.scss'
const JobDetails = ({id, company, company_logo, company_url, title, location, type}) => {
    console.log("mounted")
    return (
        <>
        <main className="jobdetails__container">

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
            <section className="jobdetails__content">
                <div className="jobdetails__content__company">
                    <div className="jobdetails__content__company__info">
                        <div className="jobdetails__content__company__info__details">
                            <div className="jobdetails__content__company__info__details__time">
                                <h4>1w ago</h4>
                                <h4>. {type}</h4>
                            </div>
                            <h3 className="jobdetails__content__company__info__details--title">{title}</h3>
                            <h4 className="jobdetails__content__company__info__details--location">{location}</h4>
                            </div>
                            <div className="jobdetails__content__company__apply">
                                <button className="jobdetails__content__company__apply--buttonapply">Apply Now</button>
                            </div>
                        </div>
                   
                  
                </div>
                <div className="jobdetails__description">
                <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus laborum dicta officia. Nostrum repudiandae unde quia earum maiores qui! Excepturi quasi, iusto numquam alias ut fugiat atque explicabo magni architecto! Quisquam, cum consectetur. Nostrum amet a fugiat facere autem consectetur molestias voluptatem, in ratione necessitatibus, cumque iusto ullam eaque perferendis!
                    </p>
                    <p>

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quibusdam eveniet iure, temporibus omnis ipsam cupiditate inventore maxime sint deserunt? Aliquam a necessitatibus beatae. Eos commodi accusamus, eveniet modi repellendus, provident quaerat totam magnam quas amet aspernatur excepturi labore? Id iste ipsa dignissimos, aliquid sequi cupiditate! Sed repudiandae maiores nesciunt!
                    </p>
                </div>
                <div className="jobdetails__requirement">
                    <h3>Requirements</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur omnis excepturi natus illum ratione consequatur, numquam pariatur tempora perferendis maxime delectus quia facere? Tempora voluptatum quos aliquid minus non nulla excepturi. Repellat libero nesciunt tempora, quaerat autem sint assumenda quidem inventore voluptate modi id suscipit aliquid laborum quos accusamus reiciendis deserunt architecto quod maxime amet illo alias nostrum. Accusamus quasi cum fugiat eveniet rerum molestias architecto labore excepturi saepe deleniti adipisci expedita, aliquam ipsa assumenda? Eos, iure dolor. Consequuntur voluptas aspernatur sapiente cupiditate at minus. Voluptate, quas tempora sed natus numquam tempore rerum fugit, non eum inventore rem ducimus at!
                    </p>
                </div>
                <div className="jobdetails__taskdescription">
                    <h3>What You Will Do</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nisi ut. Asperiores possimus, in et facere aspernatur atque quaerat ab eaque assumenda adipisci magnam est quisquam natus libero animi eligendi laboriosam ex. Laboriosam tempore iure maiores molestiae, voluptatem consectetur, incidunt minima reiciendis, eligendi accusamus accusantium voluptate veritatis nihil ratione impedit nesciunt consequatur temporibus pariatur quis. Eveniet ratione ipsa dignissimos alias illum veritatis? Repellat neque rem dolorum natus aspernatur. Laboriosam magnam voluptatum officiis voluptatibus deserunt, quos tempore veniam reprehenderit quisquam dolores placeat! Beatae nihil tempora itaque fugiat quis possimus saepe sed perspiciatis necessitatibus odio non voluptate quo cupiditate voluptas, dignissimos mollitia.
                    </p>
                </div>
            </section>
                <section className="jobdetails__howtoapply">
                    <h3 className="jobdetails__howtoapply--title">How to Apply</h3>
                    <p className="jobdetails__howtoapply--text"> Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetursit amet consectetur</p>
                    <a className="jobdetails__howtoapply--link" href="#">http://examplelink.com/how-to-apply</a>
                </section>
        </main>

                <section className="jobdetails__footer__container">
                    <div className="jobdetails__footer">

                    <div className="jobdetails__footer__info hide-on-mobile">
                        <h4 className="jobdetails__footer__info--title">{title}</h4>
                        <h3 className="jobdetails__footer__info--company">{company}</h3>
                    </div>
                    <div className="jobdetails__footer__apply">
                    <button className="jobdetails__footer__apply--buttonapply">Apply Now</button>

                    </div>
                    </div>
                </section>

        </>
    )
}

export default JobDetails;