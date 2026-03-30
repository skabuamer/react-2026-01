import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = () => {
   const socials = [
      { link: "#", icon: faFacebookF },
      { link: "#", icon: faTwitter },
      { link: "#", icon: faLinkedinIn },
      { link: "#", icon: faInstagram },
   ];

   return (
      <div className="et-socials flex gap-[10px] text-[14px] *:border *:border-[#9EAACB] *:text-[#9EAACB] *:w-[40px] *:aspect-square *:shrink-0 *:inline-flex *:items-center *:justify-center *:rounded-full ">
         {socials.map((social, idx) => {
            return (
               <a key={idx} href={social.link} className="hover:text-white hover:bg-etBlue hover:border-etBlue">
                  <FontAwesomeIcon icon={social.icon} />
               </a>
            );
         })}
      </div>
   );
};

export default Socials;
