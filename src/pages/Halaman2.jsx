import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { useState } from "react";

const Halaman2 = () => {
    const [show, setShow] = useState(true);
    return (
        <div className="w-full flex flex-col gap-16 lg:px-0 px-6">
            <Card show={show} />
            <Hero setShow={setShow} show={show} />
            <Navbar />
        </div>
    )
}

export default Halaman2;