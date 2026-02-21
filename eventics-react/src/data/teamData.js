import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const speakersSectionData = {
    subtitle: "Event Speakers",
    title: "Meet Our Speakers",
};

const speakers = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
        img: "/assets/img/team-member-3.jpg",
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
    {
        id: 5,
        img: "/assets/img/team-member-1.jpg",
        socials: [
            { icon: faFacebookF, link: "#" },
            { icon: faTwitter, link: "#" },
            { icon: faInstagram, link: "#" },
            { icon: faLinkedinIn, link: "#" },
        ],
        name: "Shelby Hasan",
        link: "#",
        label: "Managing Director",
    },
    {
        id: 6,
        img: "/assets/img/team-member-2.jpg",
        socials: [
            { icon: faFacebookF, link: "#" },
            { icon: faTwitter, link: "#" },
            { icon: faInstagram, link: "#" },
            { icon: faLinkedinIn, link: "#" },
        ],
        name: "Mo Salah",
        link: "#",
        label: "Presenter",
    }
];

export default speakers;