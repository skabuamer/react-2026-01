import { faFacebookF, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

const blogs = [
    {
        id: 1,
        img: "/assets/img/blog-4.jpg",
        title: "How Technology Is Transforming Event Booking",
        titleLink: "#",
        author: "admin",
        commentCount: "02",
        descr: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac platea habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus.",
        category: "Education",
        date: 31,
        month: "Dec",
        textContent: `
        <h3 className="text-[30px] lg:text-[27px] sm:text-[24px] xxs:text-[22px] font-medium text-etBlack mb-[21px]">Sample Inner Title</h3>
        <p class="font-light text-[16px] text-etGray mb-[16px]">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>

        <p class="font-light text-[16px] text-etGray mb-[16px]">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.</p>

        <p class="font-light text-[16px] text-etGray mb-[16px]">Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat auctor.</p>`,

        innerImgs: [
            { img: "/assets/img/news-details-img-1.jpg" },
            { img: "/assets/img/news-details-img-2.jpg" }
        ],

        textContent2: `<p className="font-light text-[16px] text-etGray mb-[16px]">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac sodales habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is augue consequat.</p>`,

        blockquote: `ellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel ultricies urnacondimentum, sapien neque lobortis tortor, quis efficitur mi eu metus. Praesent eleifend orci sit amet est vehicula.`,

        textContent3: `<p class="font-light text-[16px] text-etGray mb-[16px]">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>`,
        shareOptions: [
            { link: "#", icon: faFacebookF },
            { link: "#", icon: faInstagram },
            { link: "#", icon: faLinkedin },
            { link: "#", icon: faYoutube },
        ],
        comments: [
            {
                author: {
                    img: '/assets/img/speaker-3.jpg',
                    name: 'Ralph edwards',
                    email: "demo@gmail.com",
                },
                time: 'February 10, 2024 at 2:37 pm',
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum quaerat nemo eaque delectus ratione maiores expedita pariatur illum facilis at repellendus nesciunt veniam animi, omnis corrupti reiciendis explicabo itaque id.'
            },
            {
                author: {
                    img: '/assets/img/speaker-2.jpg',
                    name: 'Esther Howard',
                    email: "demo@gmail.com",
                },
                time: 'February 10, 2024 at 2:37 pm',
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum quaerat nemo eaque delectus ratione maiores expedita pariatur illum facilis at repellendus nesciunt veniam animi, omnis corrupti reiciendis explicabo itaque id.'
            }
        ]
    },
    {
        id: 2,
        img: "/assets/img/blog-5.jpg",
        title: "From Click to Celebration: The Evolution of Event Management",
        titleLink: "#",
        author: "John",
        commentCount: "02",
        descr: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac platea habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus.",
        category: "Education",
        date: 25,
        month: "May",
        textContent: `
        <h3 className="text-[30px] lg:text-[27px] sm:text-[24px] xxs:text-[22px] font-medium text-etBlack mb-[21px]">Sample Inner Title</h3>
        <p class="font-light text-[16px] text-etGray mb-[16px]">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>

        <p class="font-light text-[16px] text-etGray mb-[16px]">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.</p>

        <p class="font-light text-[16px] text-etGray mb-[16px]">Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat auctor.</p>`,

        innerImgs: [
            { img: "/assets/img/news-details-img-1.jpg" },
            { img: "/assets/img/news-details-img-2.jpg" }
        ],

        textContent2: `<p className="font-light text-[16px] text-etGray mb-[16px]">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac sodales habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is augue consequat.</p>`,

        blockquote: `ellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel ultricies urnacondimentum, sapien neque lobortis tortor, quis efficitur mi eu metus. Praesent eleifend orci sit amet est vehicula.`,

        textContent3: `<p class="font-light text-[16px] text-etGray mb-[16px]">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>`,
        shareOptions: [
            { link: "#", icon: faFacebookF },
            { link: "#", icon: faInstagram },
            { link: "#", icon: faLinkedin },
            { link: "#", icon: faYoutube },
        ],
        comments: [
            {
                author: {
                    img: '/assets/img/speaker-3.jpg',
                    name: 'Ralph edwards',
                    email: "demo@gmail.com",
                },
                time: 'February 10, 2024 at 2:37 pm',
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum quaerat nemo eaque delectus ratione maiores expedita pariatur illum facilis at repellendus nesciunt veniam animi, omnis corrupti reiciendis explicabo itaque id.'
            },
            {
                author: {
                    img: '/assets/img/speaker-2.jpg',
                    name: 'Esther Howard',
                    email: "demo@gmail.com",
                },
                time: 'February 10, 2024 at 2:37 pm',
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum quaerat nemo eaque delectus ratione maiores expedita pariatur illum facilis at repellendus nesciunt veniam animi, omnis corrupti reiciendis explicabo itaque id.'
            }
        ]
    },
    {
        id: 3,
        img: "/assets/img/blog-6.jpg",
        title: "Budget-Friendly Event Planning: Smart Booking Strategies",
        titleLink: "#",
        author: "Michelle",
        commentCount: "02",
        descr: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac platea habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus.",
        category: "Education",
        date: 13,
        month: "Aug",
        textContent: `
        <h3 className="text-[30px] lg:text-[27px] sm:text-[24px] xxs:text-[22px] font-medium text-etBlack mb-[21px]">Sample Inner Title</h3>
        <p class="font-light text-[16px] text-etGray mb-[16px]">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>

        <p class="font-light text-[16px] text-etGray mb-[16px]">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.</p>

        <p class="font-light text-[16px] text-etGray mb-[16px]">Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat auctor.</p>`,

        innerImgs: [
            { img: "/assets/img/news-details-img-1.jpg" },
            { img: "/assets/img/news-details-img-2.jpg" }
        ],

        textContent2: `<p className="font-light text-[16px] text-etGray mb-[16px]">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac sodales habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is augue consequat.</p>`,

        blockquote: `ellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel ultricies urnacondimentum, sapien neque lobortis tortor, quis efficitur mi eu metus. Praesent eleifend orci sit amet est vehicula.`,

        textContent3: `<p class="font-light text-[16px] text-etGray mb-[16px]">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>`,
        shareOptions: [
            { link: "#", icon: faFacebookF },
            { link: "#", icon: faInstagram },
            { link: "#", icon: faLinkedin },
            { link: "#", icon: faYoutube },
        ],
        comments: [
            {
                author: {
                    img: '/assets/img/speaker-3.jpg',
                    name: 'Ralph edwards',
                    email: "demo@gmail.com",
                },
                time: 'February 10, 2024 at 2:37 pm',
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum quaerat nemo eaque delectus ratione maiores expedita pariatur illum facilis at repellendus nesciunt veniam animi, omnis corrupti reiciendis explicabo itaque id.'
            },
            {
                author: {
                    img: '/assets/img/speaker-2.jpg',
                    name: 'Esther Howard',
                    email: "demo@gmail.com",
                },
                time: 'February 10, 2024 at 2:37 pm',
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum quaerat nemo eaque delectus ratione maiores expedita pariatur illum facilis at repellendus nesciunt veniam animi, omnis corrupti reiciendis explicabo itaque id.'
            }
        ]
    },
    {
        id: 4,
        img: "/assets/img/blog-7.jpg",
        title: "New Features That Will Transform the Way You Plan Events",
        titleLink: "#",
        author: "Michelle",
        commentCount: "02",
        descr: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac platea habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus.",
        category: "Technology",
        date: 13,
        month: "Aug",
        textContent: `
        <h3 className="text-[30px] lg:text-[27px] sm:text-[24px] xxs:text-[22px] font-medium text-etBlack mb-[21px]">Sample Inner Title</h3>
        <p class="font-light text-[16px] text-etGray mb-[16px]">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>

        <p class="font-light text-[16px] text-etGray mb-[16px]">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.</p>

        <p class="font-light text-[16px] text-etGray mb-[16px]">Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat auctor.</p>`,

        innerImgs: [
            { img: "/assets/img/news-details-img-1.jpg" },
            { img: "/assets/img/news-details-img-2.jpg" }
        ],

        textContent2: `<p class="font-light text-[16px] text-etGray mb-[16px]">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac sodales habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is augue consequat.</p>`,

        blockquote: `ellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel ultricies urnacondimentum, sapien neque lobortis tortor, quis efficitur mi eu metus. Praesent eleifend orci sit amet est vehicula.`,

        textContent3: `<p class="font-light text-[16px] text-etGray mb-[16px]">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>`,
        shareOptions: [
            { link: "#", icon: faFacebookF },
            { link: "#", icon: faInstagram },
            { link: "#", icon: faLinkedin },
            { link: "#", icon: faYoutube },
        ],
        comments: [
            {
                author: {
                    img: '/assets/img/speaker-3.jpg',
                    name: 'Ralph edwards',
                    email: "demo@gmail.com",
                },
                time: 'February 10, 2024 at 2:37 pm',
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum quaerat nemo eaque delectus ratione maiores expedita pariatur illum facilis at repellendus nesciunt veniam animi, omnis corrupti reiciendis explicabo itaque id.'
            },
            {
                author: {
                    img: '/assets/img/speaker-2.jpg',
                    name: 'Esther Howard',
                    email: "demo@gmail.com",
                },
                time: 'February 10, 2024 at 2:37 pm',
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum quaerat nemo eaque delectus ratione maiores expedita pariatur illum facilis at repellendus nesciunt veniam animi, omnis corrupti reiciendis explicabo itaque id.'
            }
        ]
    },
];

export default blogs;