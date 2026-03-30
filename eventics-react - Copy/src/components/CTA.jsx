const CTA = () => {
   const ctaData = {
      subTitle: "Build Your Career",
      title: "Get Join Our Event",
      descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look",
      btn: {
         text: "Get Ticket Now",
         link: "#",
      },
      img: "/assets/img/cta-img.jpg",
   };
   return (
      <div className="bg-etBlue p-[40px] lg:p-[30px] xs:px-[20px] xs:pb-0 pb-0 lg:pb-0 rounded-[20px] overflow-hidden relative z-[1] before:absolute before:inset-0 before:bg-[url('../assets/img/cta-bg-2.jpg')] before:bg-cover before:bg-no-repeat before:bg-center before:-z-[1] before:opacity-30 before:mix-blend-overlay">
         <div className="mb-[34px]">
            <h6 className="et-section-sub-title !text-white before:!bg-white anim-text">{ctaData.subTitle}</h6>
            <h2 className="et-section-title !text-white mb-[18px] anim-text">{ctaData.title}</h2>
            <p className="text-[16px] text-white font-light mb-[25px]">{ctaData.descr}</p>
            <a href={ctaData.btn.link} className="bg-etBlue border border-white rounded-full h-[45px] px-[15px] text-[17px] text-white inline-flex items-center justify-center hover:bg-white hover:text-etBlue">
               {ctaData.btn.text}
            </a>
         </div>

         <div className="rounded-tl-[20px] rounded-tr-[20px] overflow-hidden">
            <img src={ctaData.img} alt="Image" />
         </div>
      </div>
   );
};

export default CTA;
