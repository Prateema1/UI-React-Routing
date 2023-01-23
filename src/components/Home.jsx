import React from "react";
import vg from "../assests/2.webp";

const Home = () => {
  return (
    <>
    <div className="home">
     <main>
     <h1>TechGiant</h1>
     <p>Solution to all your technical needs.</p>
     </main>
    </div>
    <div className="home2">
    <img src={vg} alt="Graphics" />
    <div>
    <p>This is a dummy text.This is a dummy text.
    This is a dummy text.This is a dummy text.
    This is a dummy text.This is a dummy text.
    </p>
    </div>
    <div>
    </div>
    </div>
    </>
  )
}

export default Home;