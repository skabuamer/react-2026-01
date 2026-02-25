import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenu((prev) => !prev);
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);

		// cleanup
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const headerData = {
		logo: "/assets/img/logo-white.png",
		logoLink: "#",
		btn: {
			link: "#",
			text: "Get Ticket",
		},
	};

	const headerNavItems = [
		{
			label: "Home",
			submenu: [
				{ label: "Home", link: "/" },
				{ label: "Home 02", link: "/home-2" },
				{ label: "Home 03", link: "/home-3" },
				{ label: "Home 04", link: "/home-4" },
			],
		},
		{
			label: "About us",
			link: "/about",
		},
		{
			label: "Events",
			submenu: [
				{ label: "All Events", link: "/events" },
				{ label: "Events Details", link: "/events/1" },
			],
		},
		{
			label: "Pages",
			submenu: [
				{ label: "Pricing Plan", link: "/pricing" },
				{ label: "Gallery", link: "/gallery" },
				{ label: "FAQ", link: "/faq" },
				{ label: "Sponsors", link: "/sponsor" },
				{ label: "Venue", link: "/venue" },
				{ label: "Error 404", link: "/404" },
			],
		},
		{
			label: "Team",
			submenu: [
				{ label: "Team Members", link: "/team" },
				{ label: "Team Details", link: "/team/1" },
			],
		},
		{
			label: "News",
			submenu: [
				{ label: "All News", link: "/news" },
				{ label: "News Details", link: "/news/1" },
			],
		},
		{
			label: "Contact",
			link: "/contact",
		},
	];

	return (
		//<!-- sidebar -->
		<>
			<Sidebar mobileMenu={mobileMenu} toggleMobileMenu={toggleMobileMenu} headerData={headerData} navItems={headerNavItems} />

			<header className={`et-header to-be-fixed py-[30px] xxs:py-[20px] fixed top-0 w-full px-[155px] xxxl:px-[100px] xxl:px-[40px] xs:px-[20px] z-50 ${isSticky ? "et-sticky" : ""}`}>
				<div className="flex justify-between items-center">
					<div className="logo shrink-0">
						<a href={headerData.logoLink}>
							<img src={headerData.logo} alt="logo" />
						</a>
					</div>

					<div className="et-header-right flex items-center gap-[60px] xl:gap-[30px]">
						<div className="to-go-to-sidebar-in-mobile flex md:flex-col md:items-start items-center gap-[100px] xl:gap-[30px] md:gap-y-[15px] md:hidden">
							<ul className="et-header-nav flex md:flex-col gap-x-[43px] xl:gap-x-[33px] font-kanit text-[17px] font-normal">
								{headerNavItems.map((navItem, idx) => {
									return (
										<li key={idx} className={`${navItem.submenu ? "has-sub-menu relative" : ""}`}>
											{navItem.submenu ? (
												<>
													<a role="button">{navItem.label}</a>
													<ul className="et-header-submenu">
														{navItem.submenu.map((submenuItem, idx) => {
															return (
																<li key={idx}>
																	{/* <a href={submenuItem.link}>{submenuItem.label}</a> */}
																	<Link to={submenuItem.link}>{submenuItem.label}</Link>
																</li>
															);
														})}
													</ul>
												</>
											) : (
												<Link to={navItem.link}>{navItem.label}</Link>
											)}
										</li>
									);
								})}
							</ul>

							<a href={headerData.btn.link} className="et-btn bg-white flex items-center justify-center gap-x-[15px] h-[50px] px-[15px] text-etBlue font-medium text-[17px] rounded-full group">
								<span className="icon">
									<svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8.02101 0H0.844661C0.378197 0 0 0.378144 0 0.844662V5.12625C0 5.59277 0.378197 5.97091 0.844661 5.97091C1.96347 5.97091 2.8737 6.88114 2.8737 8C2.8737 9.11886 1.96347 10.029 0.844661 10.029C0.378197 10.029 0 10.4071 0 10.8736V15.1553C0 15.6218 0.378197 15.9999 0.844661 15.9999H8.02101V0Z" className="fill-etBlue group-hover:fill-white transition" />
										<path d="M26.0001 5.97091C26.4665 5.97091 26.8447 5.59277 26.8447 5.12625V0.844662C26.8447 0.378144 26.4665 0 26.0001 0H9.71094V16H26.0001C26.4665 16 26.8447 15.6219 26.8447 15.1553V10.8737C26.8447 10.4072 26.4665 10.029 26.0001 10.029C24.8813 10.029 23.971 9.11886 23.971 8C23.971 6.88114 24.8813 5.97091 26.0001 5.97091Z" className="fill-etBlue group-hover:fill-white transition" />
									</svg>
								</span>
								{headerData.btn.text}
							</a>
						</div>

						<button type="button" onClick={toggleMobileMenu} className="et-mobile-menu-open-btn hidden md:inline-block bg-etBlue rounded-full w-[50px] aspect-square text-white text-[18px] hover:bg-etBlue">
							<FontAwesomeIcon icon={faBars} />
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
