import React from "react"

import Header from "./components/Header"
import Banner from "./components/Banner"
import Projects from "./components/Projects"

const App: React.FC = () => {
  return (
    <main className="bg-slate-50 text-slate-700 font-serif min-h-screen w-screen flex justify-center">
      <div className="w-[700px]">
        <Header />
        <Banner />
        <Projects />
      </div>
    </main>
  )
}

export default App
