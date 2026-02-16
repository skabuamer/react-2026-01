import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPage }) => {
   return (
      // <!-- BREADCRUMB SECTION START -->
      <section className="et-breadcrumb bg-[#000D83] pt-[210px] lg:pt-[190px] sm:pt-[160px] pb-[130px] lg:pb-[110px] sm:pb-[80px] relative z-[1] before:absolute before:inset-0 before:bg-[url('../assets/img/breadcrumb-bg.jpg')] before:bg-no-repeat before:bg-cover before:bg-center before:-z-[1] before:opacity-30">
         <div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full text-center text-white">
            <h1 className="et-breadcrumb-title font-medium text-[56px] md:text-[50px] xs:text-[45px]">{currentPage}</h1>
            <ul className="inline-flex items-center gap-[10px] font-medium text-[16px]">
               <li className="opacity-80">
                  <Link to="/" className="hover:text-etBlue">
                     Home
                  </Link>
               </li>
               <li>
                  <FontAwesomeIcon icon={faAnglesRight} />
               </li>
               <li className="current-page">{currentPage}</li>
            </ul>
         </div>
      </section>
      // <!-- BREADCRUMB SECTION END -->
   );
};

export default Breadcrumb;
