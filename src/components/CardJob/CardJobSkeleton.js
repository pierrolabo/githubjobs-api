import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

const CardJobSkeleton = () => {
    return (
        <SkeletonTheme color="#6E8098">

        <div className="jobs__card">
        <div className={`jobs__card__companyLogo`}>
            <Skeleton height={50} width={50}/>
        </div>
       <div className="jobs__card__time">
           <h4><Skeleton/></h4>
       </div>
       <div className="jobs__card__title">
           <a href="http://" target="_blank" rel="noopener noreferrer">
           <h3><Skeleton/></h3>
           </a>
       </div>
       <div className="jobs__card__company">
           <h4><Skeleton/></h4>
       </div>
       <div className="jobs__card__location">
           <h4><Skeleton/></h4>
       </div>
    </div>
        </SkeletonTheme>
    )
}
export default CardJobSkeleton;