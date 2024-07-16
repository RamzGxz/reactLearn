import { useState } from "react"

function App() {
  const [view, setView] = useState(false)
  return (
    <div className="w-full flex flex-col gap-16 lg:px-0 px-6">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between py-5 sticky top-0  bg-white">
        <div className="w-8 h-8 rounded-md bg-black"></div>
        <div className="lg:inline-flex justify-between gap-5 hidden">
          <a href="" className="text-xl">Home</a>
          <a href="" className="text-xl">About</a>
          <a href="" className="text-xl">Galery</a>
          <a href="" className="text-xl">Team</a>
          <a href="" className="text-xl">Contact</a>
        </div>
        <button onClick={() => setView(!view)} className="lg:hidden"><svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
        <div className={`lg:hidden ${view ? 'opacity-100': 'h-0 opacity-0'} z-50 transition-all duration-300 flex flex-col absolute top-20 bg-white w-full justify-between gap-5 `}>
          <a href="" className="text-xl">Home</a>
          <a href="" className="text-xl">About</a>
          <a href="" className="text-xl">Galery</a>
          <a href="" className="text-xl">Team</a>
          <a href="" className="text-xl">Contact</a>
        </div>
      </div>

      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-5">
        <div className="flex lg:flex-row flex-col w-full justify-between items-start gap-5">
          <h1 className="text-6xl leading-snug font-bold">Digital product <span className="text-orange-500">marketing agency</span></h1>
          <div className="flex-col flex w-full gap-10 text-2xl">
            <p>As a result of our philosophy to be the most forward thinking home cleaning company and our focus on understanding customer needs. Image from <span className="text-orange-500">Freepik</span></p>
            <button className="px-5 py-5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg text-white w-1/2">Readmore</button>
          </div>
        </div>
        <div className="w-full h-[50vh] from-orange-500 to-purple-500 bg-gradient-to-r"></div>
      </div>
    </div>
  )
}

export default App
