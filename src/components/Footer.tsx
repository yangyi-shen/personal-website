import React from "react";

const Footer:React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-slate-700 p-4">
            <p className="text-sm">Copyright © {currentYear}</p>
        </footer>
    )
}

export default Footer