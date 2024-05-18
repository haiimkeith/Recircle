import React from "react";
import Navbar from "./Navbar";
import about from "./assets/images/thrift2.png"

const images = Object.values(import.meta.glob('./assets/images/scroll_images/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, query: '?url', import: 'default' }))

function Home() {
  return (
    <div className="gallery-container">
      <div className="scroll">
          {images.map((image, index) => (
              <div key={index} className="scrollPortion" style={{backgroundImage: `url(${image})`}}>
              </div>
          ))}
          <div className="scrollPortion about" style={{backgroundImage: `url(${about})`}}>
              <div className="aboutText">
                  Welcome to ReCircle, where style meets sustainability! We're not your average thrift store; 
                  we're a vibrant community passionate about redefining fashion's footprint. 
                  Our curated selection ensures only the best-quality thrifted gems find their way to you, 
                  reducing waste and promoting eco-conscious shopping. With every purchase, 
                  you're not just getting great deals on fabulous clothes—you're joining a movement towards a greener future. 
                  Join us, browse our collection, and be a part of the ReCircle revolution!
              </div>
          </div>
          <div className="scrollPortion footer">
              <div className="footerText">
                  Contact Us!<br></br>
                  (123) 456-7890<br></br>
                  email@gmail.com
              </div>
          </div>
      </div>
      <div className="navigate">
          <h1 className="poetsen-one-regular">Recircle</h1>
          <Navbar />
      </div>
    </div>
  );
}

export default Home;