import React from "react";
import Hero from "../Hero/Hero";
import Footer from "../Shared/Navbar/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import TopProduct from "../TopProducts/TopProduct";
import './Home.css';



const Home = ()=>{



    return(
        <section>
            < Navbar  />
            <div  className="container hero-container my-5">
            <Hero />
            </div>
            <h2  className='my-3 container' style={{fontSize:'22px', color:'#212529', fontWeight:'700', textAlign:'left'}} >Top product of this week</h2>

            <TopProduct />
            <h2 className=' my-3 container' style={{fontSize:'22px', color:'#212529', fontWeight:'700', textAlign:'left'}} >Top product of this Month</h2>

            <TopProduct />
            <h2 className=' my-3 container' style={{fontSize:'22px', color:'#212529', fontWeight:'700', textAlign:'left'}} >Our some exciting product</h2>
            <TopProduct />


            <Footer />

        </section>
    )
}
export default Home;