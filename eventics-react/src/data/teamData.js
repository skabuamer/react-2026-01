import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const speakersSectionData = {
    subtitle: "Event Speakers",
    title: "Meet Our Speakers",
};

const speakers = [
    {
        img: "/assets/img/speaker-1.jpg",
        socials: [
            { icon: faFacebookF, link: "#" },
            { icon: faTwitter, link: "#" },
            { icon: faInstagram, link: "#" },
            { icon: faLinkedinIn, link: "#" },
        ],
        name: "Esther Howard",
        link: "#",
        label: "Music speaker",
    },
    {
        img: "/assets/img/speaker-2.jpg",
        socials: [
            { icon: faFacebookF, link: "#" },
            { icon: faTwitter, link: "#" },
            { icon: faInstagram, link: "#" },
            { icon: faLinkedinIn, link: "#" },
        ],
        name: "John Doe",
        link: "#",
        label: "Nursing Assistant",
    },
    {
        img: "/assets/img/speaker-3.jpg",
        socials: [
            { icon: faFacebookF, link: "2#" },
            { icon: faTwitter, link: "2#" },
            { icon: faInstagram, link: "2#" },
            { icon: faLinkedinIn, link: "#" },
        ],
        name: "Billie Simmons",
        link: "#",
        label: "President of Sales",
    },
    {
        img: "/assets/img/speaker-1.jpg",
        socials: [
            { icon: faFacebookF, link: "#" },
            { icon: faTwitter, link: "#" },
            { icon: faInstagram, link: "#" },
            { icon: faLinkedinIn, link: "#" },
        ],
        name: "Thomas Smith",
        link: "#",
        label: "Music speaker",
    },
];

export default speakers;