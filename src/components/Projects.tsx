import React from "react"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

const projectsList = [
    {
        name: "Book Browser 📚",
        url: "https://book-browser.yyshen.com",
        github: "https://github.com/yangyi-shen/book-browser",
        description: "A website that uses web scraping to help you search multiple online bookstores at once",
    },
    {
        name: "UBikeFind 🚲",
        url: "https://dinerfind.vercel.app",
        github: "https://github.com/yangyi-shen/ubikefind",
        description: "A single-page-application that uses the OpenStreetMap API to help you find restaurants quickly",
    },
    {
        name: 'csvlib 🔧',
        url: null,
        github: 'https://github.com/yangyi-shen/csvlib',
        description: 'A simple C library for parsing .csv files'
    }
]

const Projects: React.FC = () => {
    return (
        <section className="p-4 mb-12">
            <p className="text-3xl font-bold mb-6">Projects</p>
            <div className="grid grid-cols-2 gap-6">
                {
                    projectsList.map(project => (
                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="font-semibold text-lg">{project.name}</p>
                                <p>{project.description}</p>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <a className="text-slate-500 hover:text-slate-600" href={project.github}><FontAwesomeIcon icon={faGithub} /></a>
                                {project.url && <a className="text-slate-500 hover:text-slate-600" href={project.url}><FontAwesomeIcon icon={faGlobe} /></a>}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects