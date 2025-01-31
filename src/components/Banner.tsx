import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faGoodreads } from "@fortawesome/free-brands-svg-icons";
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const biographyItems = [
    'Am a 17-year-old web developer presently situated in Kaohsiung, Taiwan',
    'Hold a black belt in Taekwondo',
    'Speak English, Chinese, Vietnamese and Portuguese (in order of fluency)',
    'Play the piano'
]

const links = [
    {
        name: 'Github',
        icon: faGithub,
        url: "https://github.com/yangyi-shen",
    },
    {
        name: 'LinkedIn',
        icon: faLinkedin,
        url: "https://linkedin.com/in/yangyi-shen",
    },
    {
        name: "Goodreads",
        icon: faGoodreads,
        url: "https://www.goodreads.com/user/show/39238499-yang-yi-shen",
    },
    {
        name: 'Resumé',
        icon: faFile,
        url: "resume.pdf",
    },
    {
        name: 'Email',
        icon: faEnvelope,
        url: "mailto:mrshenyangyi@gmail.com",
    },
];

const Banner: React.FC = () => {
    return (
        <section className="w-full px-4 my-12">
            <p className="text-3xl font-semibold mb-2">Hi, I'm Yang! I...</p>
            <ul className="font-light">
                {biographyItems.map((item) => (
                    <li>
                        <p>- {item}</p>
                    </li>
                ))}
            </ul>
            <ul className="flex gap-4 mt-4">
                {links.map((link, index) => (
                    <a className="flex gap-1.5 items-center" href={link.url} target="_blank" key={index}>
                        <FontAwesomeIcon icon={link.icon} className="text-slate-500 hover:text-slate-600" />
                        <p>{link.name}</p>
                    </a>
                ))}
            </ul>
        </section>
    );
};

export default Banner;
