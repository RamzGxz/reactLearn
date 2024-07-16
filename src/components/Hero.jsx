/* eslint-disable react/prop-types */
const Hero = ({setShow, show}) => {
    return(
        <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-5">
                <div className="flex lg:flex-row flex-col w-full justify-between items-start gap-5">
                <h1 className="text-6xl leading-snug font-bold">Digital product <span className="text-orange-500">marketing agency</span></h1>
                <div className="flex-col flex w-full gap-10 text-2xl">
                    <p>As a result of our philosophy to be the most forward thinking home cleaning company and our focus on understanding customer needs. Image from <span className="text-orange-500">Freepik</span></p>
                    <button className="px-5 py-5 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg text-white w-1/2"
                    onClick={ ()=>setShow(!show) }
                    >Readmore</button>
                </div>
                </div>  
                <div className="w-full h-[50vh] from-orange-500 to-purple-500 bg-gradient-to-r"></div>
            </div>
    )
}
export default Hero;