import React from "react";
import vg from "../assests/react.png";
import { AiFillGoogleCircle, 
  AiFillAmazonCircle, 
  AiFillYoutube, 
  AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className="home" id="home">
     <main>
     <h1>TechGiant</h1>
     <p>One Stop Platform For Your Tech Stack Knowledge.</p>
     </main>
    </div>
    <div className="home2">
    <img src={vg} alt="Graphics" />
    <div>
    <p>Do not get confused with different technologies in the market.
    Create projects and get hands on experiment with technologies.
    </p>
    </div>
    </div>

    <div className="home3" id="about">
    <div>
    <h1>About Us</h1>
    <p>With the rising amount of new tech stack in the market, 
    it can be overwhelming to choose the correct technology for your programming needs. 
    We have listed a basic roadmap for you. Your "One Stop Platform" to explore various technologics from 
    Web development to Mobile development.
    For instance, if you are interested in Web Development, Javascript will be the best fit for you.
    By learning one language, you can quickly build a full stack web application. The most popular tech stack
    based on JS is MEAN & MERN stack.
    MEAN - (MongoDB, Express, Angular, Node)
    MERN - (MongoDB, Express, React, Node)
    We wil be adding more information soon...

    </p>
    </div>
    </div>

    <div className="home4" id="brands">
    <div>
    <h1>Companies</h1>
    <article>
    <div style={{
      animationDelay: "0.3s"
    }}>
    <AiFillGoogleCircle />
    <p>Google</p>
    </div>

    <div style={{
      animationDelay: "0.5s"
    }}>
    <AiFillAmazonCircle />
    <p>Amazon</p>
    </div>

    <div style={{
      animationDelay: "0.7s"
    }}>
    <AiFillYoutube />
    <p>Youtube</p>
    </div>

    <div style={{
      animationDelay: "0.1s"
    }}>
    <AiFillInstagram />
    <p>Instagram</p>
    </div>
    </article>
    </div>
    </div>
    </>
  )
}

export default Home;