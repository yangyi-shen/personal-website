import React from "react"

const Header: React.FC = () => {
    return (
        <header className="w-full border-b border-slate-700 flex items-center border-box p-4">
            <div className="h-full bg-slate-700 text-slate-50 px-2 py-1">
                {/* using &nbsp; instead of flexbox & gap to save unnecessary calculations */}
                <span className="font-bold">Yang-Yi Shen</span>
                &nbsp;
                <span className="font-extralight">/</span>
                &nbsp;
                <span className="font-bold font-serif">沈洋逸</span>
            </div>
        </header>
    )
}

export default Header