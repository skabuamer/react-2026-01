import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const schedules = [
    {
        id: 1,
        day: "day1",
        category: "corporate",
        img: "/assets/img/evenet-sched-1.jpg",
        date: "24 Jan - 2024",
        time: "10:00 AM - 12:00 AM",
        title: {
            text: "Global Leadership and Innovation Summit 2026",
            link: "#",
        },
        location: "135 W, 46nd Street, New York",
        btn: {
            text: "Buy Tickets",
            link: "#",
        },
        speakers: {
            textSpan: "Spe",
            text: "akers",
        },
        detailsText: `
        <h4 class="text-[30px] xs:text-[25px] xxs:text-[22px] font-medium text-etBlack mb-[11px] mt-[27px]">Overview</h4>

        <p class="font-light text-[16px] text-etGray mb-[15px]">Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>

        <p class="font-light text-[16px] text-etGray">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac augu ehabitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.</p>

        <h4 class="text-[30px] xs:text-[25px] xxs:text-[22px] font-medium text-etBlack mb-[11px] mt-[19px]">Requirements for the event</h4>

        <p class="font-light text-[16px] text-etGray mb-[21px]">Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat auctor.</p>

        <ul class="et-event-details-requirements-list font-light text-[16px] text-etGray grid grid-cols-2 xxs:grid-cols-1 gap-[20px] xxs:gap-[10px]">
            <li>Ut viverra bibendum lorem, at tempus nibh</li>
            <li>Duis aute irure and dolor in reprehenderit.</li>
            <li>quis nostrud exercitation ullamco laboris nisi</li>
            <li>ante rutrum sed the is sodales augue</li>
        </ul>`,
        innerImgs: [
            "/assets/img/event-detailsimg-2.jpg",
            "/assets/img/event-detailsimg-3.jpg"
        ],
        detailsText2: `<p class="font-light text-[16px] text-etGray mb-[43px]">Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>`,
        actions: {
            btnText: "Resgister Yourself",
            btnLink: "#",
            callText: "Call Us Now",
            callNumber: "+208-555-0112"
        },
        artistsTitle: "Event Artists",
        artists: [
            {
                img: "/assets/img/artist-4.jpg",
                name: "Ronald Richards",
                role: "Speaker",
                descr: "Pellentesque pretium, mi in viverra faucibus, justo nunc dapibus lacus, sit amet consequat diam nisi eu mi. Integer diam erat, accumsan eget nisl eu, maximus feugiat odio. Proin eleifend.",
                socials: [
                    { link: "#", icon: faFacebookF },
                    { link: "#", icon: faTwitter },
                    { link: "#", icon: faLinkedinIn },
                    { link: "#", icon: faYoutube },
                ]
            }
        ],
        ticket: {
            timings: [
                "06:00", "12:00", "15:00", "18:00", "21:00", "24:00"
            ],
            levels: [
                { label: "Regular", price: "12.00" },
                { label: "Standard", price: "15.00" },
                { label: "VIP", price: "20.00" },
            ]
        },
        locationMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.3318974837207!2d90.4133514479341!3d23.794983684888223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a494861707%3A0x59ab371b6ff2e0fd!2zR3Vsc2hhbiBTcXVhcmUg4KaX4KeB4Kay4Ka24Ka-4KaoIOCmuOCnjeCmleCmr-CmvOCmvuCmsA!5e0!3m2!1sen!2sbd!4v1710998994716!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-[280px] rounded-[30px]"></iframe>`
    },
    {
        id: 2,
        day: "day1",
        category: "club",
        img: "/assets/img/evenet-sched-2.jpg",
        date: "24 Jan - 2024",
        time: "10:00 AM - 12:00 AM",
        title: {
            text: "Elegant Garden Wedding and Reception Showcase",
            link: "#",
        },
        location: "135 W, 46nd Street, New York",
        btn: {
            text: "Buy Tickets",
            link: "#",
        },
        speakers: {
            textSpan: "Spe",
            text: "akers",
        },
        detailsText: `
        <h4 class="text-[30px] xs:text-[25px] xxs:text-[22px] font-medium text-etBlack mb-[11px] mt-[27px]">Overview</h4>

        <p class="font-light text-[16px] text-etGray mb-[15px]">Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>

        <p class="font-light text-[16px] text-etGray">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac augu ehabitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.</p>

        <h4 class="text-[30px] xs:text-[25px] xxs:text-[22px] font-medium text-etBlack mb-[11px] mt-[19px]">Requirements for the event</h4>

        <p class="font-light text-[16px] text-etGray mb-[21px]">Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat auctor.</p>

        <ul class="et-event-details-requirements-list font-light text-[16px] text-etGray grid grid-cols-2 xxs:grid-cols-1 gap-[20px] xxs:gap-[10px]">
            <li>Ut viverra bibendum lorem, at tempus nibh</li>
            <li>Duis aute irure and dolor in reprehenderit.</li>
            <li>quis nostrud exercitation ullamco laboris nisi</li>
            <li>ante rutrum sed the is sodales augue</li>
        </ul>`,
        innerImgs: [
            "/assets/img/event-detailsimg-2.jpg",
            "/assets/img/event-detailsimg-3.jpg"
        ],
        detailsText2: `<p class="font-light text-[16px] text-etGray mb-[43px]">Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>`,
        actions: {
            btnText: "Resgister Yourself",
            btnLink: "#",
            callText: "Call Us Now",
            callNumber: "+208-555-0112"
        },
        artistsTitle: "Event Artists",
        artists: [
            {
                img: "/assets/img/artist-4.jpg",
                name: "Ronald Richards",
                role: "Speaker",
                descr: "Pellentesque pretium, mi in viverra faucibus, justo nunc dapibus lacus, sit amet consequat diam nisi eu mi. Integer diam erat, accumsan eget nisl eu, maximus feugiat odio. Proin eleifend.",
                socials: [
                    { link: "#", icon: faFacebookF },
                    { link: "#", icon: faTwitter },
                    { link: "#", icon: faLinkedinIn },
                    { link: "#", icon: faYoutube },
                ]
            }
        ],
        ticket: {
            timings: [
                "06:00", "12:00", "15:00", "18:00", "21:00", "24:00"
            ],
            levels: [
                { label: "Regular", price: "12.00" },
                { label: "Standard", price: "15.00" },
                { label: "VIP", price: "20.00" },
            ]
        },
        locationMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.3318974837207!2d90.4133514479341!3d23.794983684888223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a494861707%3A0x59ab371b6ff2e0fd!2zR3Vsc2hhbiBTcXVhcmUg4KaX4KeB4Kay4Ka24Ka-4KaoIOCmuOCnjeCmleCmr-CmvOCmvuCmsA!5e0!3m2!1sen!2sbd!4v1710998994716!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-[280px] rounded-[30px]"></iframe>`
    },
    {
        id: 3,
        day: "day2",
        category: "concert",
        img: "/assets/img/evenet-sched-3.jpg",
        date: "24 Jan - 2024",
        time: "10:00 AM - 12:00 AM",
        title: {
            text: "Personal Branding and Career Growth Masterclass",
            link: "#",
        },
        location: "135 W, 46nd Street, New York",
        btn: {
            text: "Buy Tickets",
            link: "#",
        },
        speakers: {
            textSpan: "Spe",
            text: "akers",
        },
        detailsText: `
        <h4 class="text-[30px] xs:text-[25px] xxs:text-[22px] font-medium text-etBlack mb-[11px] mt-[27px]">Overview</h4>

        <p class="font-light text-[16px] text-etGray mb-[15px]">Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>

        <p class="font-light text-[16px] text-etGray">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac augu ehabitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.</p>

        <h4 class="text-[30px] xs:text-[25px] xxs:text-[22px] font-medium text-etBlack mb-[11px] mt-[19px]">Requirements for the event</h4>

        <p class="font-light text-[16px] text-etGray mb-[21px]">Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat auctor.</p>

        <ul class="et-event-details-requirements-list font-light text-[16px] text-etGray grid grid-cols-2 xxs:grid-cols-1 gap-[20px] xxs:gap-[10px]">
            <li>Ut viverra bibendum lorem, at tempus nibh</li>
            <li>Duis aute irure and dolor in reprehenderit.</li>
            <li>quis nostrud exercitation ullamco laboris nisi</li>
            <li>ante rutrum sed the is sodales augue</li>
        </ul>`,
        innerImgs: [
            "/assets/img/event-detailsimg-2.jpg",
            "/assets/img/event-detailsimg-3.jpg"
        ],
        detailsText2: `<p class="font-light text-[16px] text-etGray mb-[43px]">Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>`,
        actions: {
            btnText: "Resgister Yourself",
            btnLink: "#",
            callText: "Call Us Now",
            callNumber: "+208-555-0112"
        },
        artistsTitle: "Event Artists",
        artists: [
            {
                img: "/assets/img/artist-4.jpg",
                name: "Ronald Richards",
                role: "Speaker",
                descr: "Pellentesque pretium, mi in viverra faucibus, justo nunc dapibus lacus, sit amet consequat diam nisi eu mi. Integer diam erat, accumsan eget nisl eu, maximus feugiat odio. Proin eleifend.",
                socials: [
                    { link: "#", icon: faFacebookF },
                    { link: "#", icon: faTwitter },
                    { link: "#", icon: faLinkedinIn },
                    { link: "#", icon: faYoutube },
                ]
            }
        ],
        ticket: {
            timings: [
                "06:00", "12:00", "15:00", "18:00", "21:00", "24:00"
            ],
            levels: [
                { label: "Regular", price: "12.00" },
                { label: "Standard", price: "15.00" },
                { label: "VIP", price: "20.00" },
            ]
        },
        locationMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.3318974837207!2d90.4133514479341!3d23.794983684888223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a494861707%3A0x59ab371b6ff2e0fd!2zR3Vsc2hhbiBTcXVhcmUg4KaX4KeB4Kay4Ka24Ka-4KaoIOCmuOCnjeCmleCmr-CmvOCmvuCmsA!5e0!3m2!1sen!2sbd!4v1710998994716!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-[280px] rounded-[30px]"></iframe>`
    },
    {
        id: 4,
        day: "day2",
        category: "club",
        img: "/assets/img/evenet-sched-1.jpg",
        date: "24 Jan - 2024",
        time: "10:00 AM - 12:00 AM",
        title: {
            text: "Advanced Web Development Hands-On Coding Workshop",
            link: "#",
        },
        location: "135 W, 46nd Street, New York",
        btn: {
            text: "Buy Tickets",
            link: "#",
        },
        speakers: {
            textSpan: "Spe",
            text: "akers",
        },
        detailsText: `
        <h4 class="text-[30px] xs:text-[25px] xxs:text-[22px] font-medium text-etBlack mb-[11px] mt-[27px]">Overview</h4>

        <p class="font-light text-[16px] text-etGray mb-[15px]">Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>

        <p class="font-light text-[16px] text-etGray">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac augu ehabitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.</p>

        <h4 class="text-[30px] xs:text-[25px] xxs:text-[22px] font-medium text-etBlack mb-[11px] mt-[19px]">Requirements for the event</h4>

        <p class="font-light text-[16px] text-etGray mb-[21px]">Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat auctor.</p>

        <ul class="et-event-details-requirements-list font-light text-[16px] text-etGray grid grid-cols-2 xxs:grid-cols-1 gap-[20px] xxs:gap-[10px]">
            <li>Ut viverra bibendum lorem, at tempus nibh</li>
            <li>Duis aute irure and dolor in reprehenderit.</li>
            <li>quis nostrud exercitation ullamco laboris nisi</li>
            <li>ante rutrum sed the is sodales augue</li>
        </ul>`,
        innerImgs: [
            "/assets/img/event-detailsimg-2.jpg",
            "/assets/img/event-detailsimg-3.jpg"
        ],
        detailsText2: `<p class="font-light text-[16px] text-etGray mb-[43px]">Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>`,
        actions: {
            btnText: "Resgister Yourself",
            btnLink: "#",
            callText: "Call Us Now",
            callNumber: "+208-555-0112"
        },
        artistsTitle: "Event Artists",
        artists: [
            {
                img: "/assets/img/artist-4.jpg",
                name: "Ronald Richards",
                role: "Speaker",
                descr: "Pellentesque pretium, mi in viverra faucibus, justo nunc dapibus lacus, sit amet consequat diam nisi eu mi. Integer diam erat, accumsan eget nisl eu, maximus feugiat odio. Proin eleifend.",
                socials: [
                    { link: "#", icon: faFacebookF },
                    { link: "#", icon: faTwitter },
                    { link: "#", icon: faLinkedinIn },
                    { link: "#", icon: faYoutube },
                ]
            }
        ],
        ticket: {
            timings: [
                "06:00", "12:00", "15:00", "18:00", "21:00", "24:00"
            ],
            levels: [
                { label: "Regular", price: "12.00" },
                { label: "Standard", price: "15.00" },
                { label: "VIP", price: "20.00" },
            ]
        },
        locationMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.3318974837207!2d90.4133514479341!3d23.794983684888223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a494861707%3A0x59ab371b6ff2e0fd!2zR3Vsc2hhbiBTcXVhcmUg4KaX4KeB4Kay4Ka24Ka-4KaoIOCmuOCnjeCmleCmr-CmvOCmvuCmsA!5e0!3m2!1sen!2sbd!4v1710998994716!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-[280px] rounded-[30px]"></iframe>`
    },
    {
        id: 5,
        day: "day3",
        category: "corporate",
        img: "/assets/img/evenet-sched-2.jpg",
        date: "24 Jan - 2024",
        time: "10:00 AM - 12:00 AM",
        title: {
            text: "Entrepreneurs Networking and Growth Conference Live",
            link: "#",
        },
        location: "135 W, 46nd Street, New York",
        btn: {
            text: "Buy Tickets",
            link: "#",
        },
        speakers: {
            textSpan: "Spe",
            text: "akers",
        },
        detailsText: `
        <h4 class="text-[30px] xs:text-[25px] xxs:text-[22px] font-medium text-etBlack mb-[11px] mt-[27px]">Overview</h4>

        <p class="font-light text-[16px] text-etGray mb-[15px]">Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>

        <p class="font-light text-[16px] text-etGray">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac augu ehabitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.</p>

        <h4 class="text-[30px] xs:text-[25px] xxs:text-[22px] font-medium text-etBlack mb-[11px] mt-[19px]">Requirements for the event</h4>

        <p class="font-light text-[16px] text-etGray mb-[21px]">Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat auctor.</p>

        <ul class="et-event-details-requirements-list font-light text-[16px] text-etGray grid grid-cols-2 xxs:grid-cols-1 gap-[20px] xxs:gap-[10px]">
            <li>Ut viverra bibendum lorem, at tempus nibh</li>
            <li>Duis aute irure and dolor in reprehenderit.</li>
            <li>quis nostrud exercitation ullamco laboris nisi</li>
            <li>ante rutrum sed the is sodales augue</li>
        </ul>`,
        innerImgs: [
            "/assets/img/event-detailsimg-2.jpg",
            "/assets/img/event-detailsimg-3.jpg"
        ],
        detailsText2: `<p class="font-light text-[16px] text-etGray mb-[43px]">Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>`,
        actions: {
            btnText: "Resgister Yourself",
            btnLink: "#",
            callText: "Call Us Now",
            callNumber: "+208-555-0112"
        },
        artistsTitle: "Event Artists",
        artists: [
            {
                img: "/assets/img/artist-4.jpg",
                name: "Ronald Richards",
                role: "Speaker",
                descr: "Pellentesque pretium, mi in viverra faucibus, justo nunc dapibus lacus, sit amet consequat diam nisi eu mi. Integer diam erat, accumsan eget nisl eu, maximus feugiat odio. Proin eleifend.",
                socials: [
                    { link: "#", icon: faFacebookF },
                    { link: "#", icon: faTwitter },
                    { link: "#", icon: faLinkedinIn },
                    { link: "#", icon: faYoutube },
                ]
            }
        ],
        ticket: {
            timings: [
                "06:00", "12:00", "15:00", "18:00", "21:00", "24:00"
            ],
            levels: [
                { label: "Regular", price: "12.00" },
                { label: "Standard", price: "15.00" },
                { label: "VIP", price: "20.00" },
            ]
        },
        locationMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.3318974837207!2d90.4133514479341!3d23.794983684888223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a494861707%3A0x59ab371b6ff2e0fd!2zR3Vsc2hhbiBTcXVhcmUg4KaX4KeB4Kay4Ka24Ka-4KaoIOCmuOCnjeCmleCmr-CmvOCmvuCmsA!5e0!3m2!1sen!2sbd!4v1710998994716!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-[280px] rounded-[30px]"></iframe>`
    },
    {
        id: 6,
        day: "day3",
        category: "concert",
        img: "/assets/img/evenet-sched-1.jpg",
        date: "24 Jan - 2024",
        time: "10:00 AM - 12:00 AM",
        title: {
            text: "Neon Nights Electronic Dance Music Experience",
            link: "#",
        },
        location: "135 W, 46nd Street, Khulna",
        btn: {
            text: "Buy Tickets",
            link: "#",
        },
        speakers: {
            textSpan: "Spe",
            text: "akers",
        },
        detailsText: `
        <h4 class="text-[30px] xs:text-[25px] xxs:text-[22px] font-medium text-etBlack mb-[11px] mt-[27px]">Overview</h4>

        <p class="font-light text-[16px] text-etGray mb-[15px]">Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>

        <p class="font-light text-[16px] text-etGray">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac augu ehabitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.</p>

        <h4 class="text-[30px] xs:text-[25px] xxs:text-[22px] font-medium text-etBlack mb-[11px] mt-[19px]">Requirements for the event</h4>

        <p class="font-light text-[16px] text-etGray mb-[21px]">Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat auctor.</p>

        <ul class="et-event-details-requirements-list font-light text-[16px] text-etGray grid grid-cols-2 xxs:grid-cols-1 gap-[20px] xxs:gap-[10px]">
            <li>Ut viverra bibendum lorem, at tempus nibh</li>
            <li>Duis aute irure and dolor in reprehenderit.</li>
            <li>quis nostrud exercitation ullamco laboris nisi</li>
            <li>ante rutrum sed the is sodales augue</li>
        </ul>`,
        innerImgs: [
            "/assets/img/event-detailsimg-2.jpg",
            "/assets/img/event-detailsimg-3.jpg"
        ],
        detailsText2: `<p class="font-light text-[16px] text-etGray mb-[43px]">Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>`,
        actions: {
            btnText: "Resgister Yourself",
            btnLink: "#",
            callText: "Call Us Now",
            callNumber: "+208-555-0112"
        },
        artistsTitle: "Event Artists",
        artists: [
            {
                img: "/assets/img/artist-4.jpg",
                name: "Ronald Richards",
                role: "Speaker",
                descr: "Pellentesque pretium, mi in viverra faucibus, justo nunc dapibus lacus, sit amet consequat diam nisi eu mi. Integer diam erat, accumsan eget nisl eu, maximus feugiat odio. Proin eleifend.",
                socials: [
                    { link: "#", icon: faFacebookF },
                    { link: "#", icon: faTwitter },
                    { link: "#", icon: faLinkedinIn },
                    { link: "#", icon: faYoutube },
                ]
            }
        ],
        ticket: {
            timings: [
                "06:00", "12:00", "15:00", "18:00", "21:00", "24:00"
            ],
            levels: [
                { label: "Regular", price: "12.00" },
                { label: "Standard", price: "15.00" },
                { label: "VIP", price: "20.00" },
            ]
        },
        locationMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.3318974837207!2d90.4133514479341!3d23.794983684888223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a494861707%3A0x59ab371b6ff2e0fd!2zR3Vsc2hhbiBTcXVhcmUg4KaX4KeB4Kay4Ka24Ka-4KaoIOCmuOCnjeCmleCmr-CmvOCmvuCmsA!5e0!3m2!1sen!2sbd!4v1710998994716!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-[280px] rounded-[30px]"></iframe>`
    },
];

export default schedules;