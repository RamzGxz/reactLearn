import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { useState } from "react";

const Home = () => {
    const [show, setShow] = useState(true);
    return (
        <div className="w-full flex flex-col gap-16 lg:px-0 px-6">
            <Navbar />
            <Hero setShow={setShow} show={show} />
            <Card show={show} />
        </div>
    )
}

export default Home;