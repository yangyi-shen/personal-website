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
        icon: faGithub,
        url: "https://github.com/yangyi-shen",
    },
    {
        icon: faLinkedin,
        url: "https://linkedin.com/in/yangyi-shen",
    },
    {
        icon: faGoodreads,
        url: "https://www.goodreads.com/user/show/39238499-yang-yi-shen",
    },
    {
        icon: faFile,
        url: "cv.pdf",
    },
    {
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
                    <a href={link.url} target="_blank" key={index}>
                        <FontAwesomeIcon icon={link.icon} className="h-5 text-slate-800 hover:text-slate-600" />
                    </a>
                ))}
            </ul>
        </section>
    );
};

export default Banner;
