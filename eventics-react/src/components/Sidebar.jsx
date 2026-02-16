import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Sidebar = (props) => {
   const [subMenuOpen, setsubMenuOpen] = useState(null);

   const toggleSubMenu = (index) => {
      setsubMenuOpen((prev) => (prev === index ? null : index));
   };

   return (
      <>
         <div className={`et-sidebar group ${props.mobileMenu ? "active" : ""}`}>
            <div className=" group-[.active]:translate-x-0 translate-x-[100%] transition-transform ease-linear duration-300 fixed right-0 w-full max-w-[25%] xl:max-w-[30%] lg:max-w-[40%] md:max-w-[50%] sm:max-w-[60%] xxs:max-w-full bg-[#18377e] h-full z-[100] overflow-auto p-[50px] lg:p-[30px] space-y-[40px]">
               {/* <!-- heading --> */}
               <div className="et-sidebar-heading">
                  <div className="logo flex justify-between items-center">
                     <a href="index.html">
                        <img src={props.headerData.logo} alt="logo" />
                     </a>

                     <button type="button" onClick={props.toggleMobileMenu} className="et-sidebar-close-btn border border-white/50 w-[45px] aspect-square shrink-0 text-white text-[22px] rounded-full place-content-center grid hover:text-etBlue hover:bg-white">
                        <FontAwesomeIcon icon={faXmark} />
                     </button>
                  </div>
               </div>

               {/* <!-- mobile menu --> */}
               <div className="et-header-nav-in-mobile">
                  <div className="to-go-to-sidebar-in-mobile flex md:flex-col md:items-start items-center gap-[100px] xl:gap-[30px] md:gap-y-[15px]">
                     <ul className="et-header-nav flex md:flex-col gap-x-[43px] xl:gap-x-[33px] font-kanit text-[17px] font-normal">
                        {props.navItems.map((navItem, idx) => {
                           return (
                              <li key={idx} className={`${navItem.submenu ? "has-sub-menu relative" : ""} ${subMenuOpen === idx ? "active" : ""}`}>
                                 {navItem.submenu ? (
                                    <>
                                       <a role="button" onClick={() => toggleSubMenu(idx)}>
                                          {navItem.label}
                                       </a>
                                       <ul className="et-header-submenu">
                                          {navItem.submenu.map((submenuItem, idx) => {
                                             return (
                                                <li key={idx}>
                                                   <a href={submenuItem.link}>{submenuItem.label}</a>
                                                </li>
                                             );
                                          })}
                                       </ul>
                                    </>
                                 ) : (
                                    <a href={navItem.link}>{navItem.label}</a>
                                 )}
                              </li>
                           );
                        })}
                     </ul>

                     <a href={props.headerData.btn.link} className="et-btn bg-white flex items-center justify-center gap-x-[15px] h-[50px] px-[15px] text-etBlue font-medium text-[17px] rounded-full group">
                        <span className="icon">
                           <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.02101 0H0.844661C0.378197 0 0 0.378144 0 0.844662V5.12625C0 5.59277 0.378197 5.97091 0.844661 5.97091C1.96347 5.97091 2.8737 6.88114 2.8737 8C2.8737 9.11886 1.96347 10.029 0.844661 10.029C0.378197 10.029 0 10.4071 0 10.8736V15.1553C0 15.6218 0.378197 15.9999 0.844661 15.9999H8.02101V0Z" className="fill-etBlue group-hover:fill-white transition" />
                              <path d="M26.0001 5.97091C26.4665 5.97091 26.8447 5.59277 26.8447 5.12625V0.844662C26.8447 0.378144 26.4665 0 26.0001 0H9.71094V16H26.0001C26.4665 16 26.8447 15.6219 26.8447 15.1553V10.8737C26.8447 10.4072 26.4665 10.029 26.0001 10.029C24.8813 10.029 23.971 9.11886 23.971 8C23.971 6.88114 24.8813 5.97091 26.0001 5.97091Z" className="fill-etBlue group-hover:fill-white transition" />
                           </svg>
                        </span>
                        {props.headerData.btn.text}
                     </a>
                  </div>
               </div>
            </div>
         </div>
         {props.mobileMenu && <div onClick={props.toggleMobileMenu} className="fixed inset-0 bg-black/50 z-40 duration-300 ease-in-out" />}
      </>
   );
};

export default Sidebar;
