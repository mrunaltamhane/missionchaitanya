import React from "react";
// import '../Donate.css'
import '../AboutUs.css'



export default function AboutUs() {
    return (
        <div className="about" >

            <div className="about-text">
                Mission Chaitanya is a initiative to spread awareness among
                the people about the rich culture of our country.
                Our mission focuses on clearing misconceptions regarding our
                culture and giving the people ,
                the idea of perfect living with facts that our ancestors have discovered centuries back.
            </div>
            <div className="developer-div">
                <h3 className="developer-div-title">Connect with Us</h3>
                <div className="container-1">
                    <div>  
                     <div class="card developer-card">
                        <div class="card-body">
                            <h5 class="card-title developer-title">Suyog Havare</h5>


                            <div className="social-icons">
                            <a  href="https://github.com/suyoghavare">  <img className='icons' src={require('./github.png')}  /></a>
                            <a  href="https://www.linkedin.com/in/suyog-havare-3221a7251/">  <img className='icons' src={require('./linkedin.png')} /></a>
                             
                            </div>
                        </div>
                    </div>
                    </div>
                    <div> <div class="card developer-card">
                        <div class="card-body">
                            <h5 class="card-title developer-title">Renuka Patwari</h5>


                            <div className="social-icons">
                            <a  href="https://github.com/itsRenuka22"> <img className='icons' src={require('./github.png')}/></a>
                            <a  href="https://www.linkedin.com/in/renuka-patwari-4181361b9/?originalSubdomain=in"> <img className='icons' src={require('./linkedin.png')}  /></a>
                                 
                            </div>
                        </div>
                    </div></div>
                </div>
                <div className="container-1">
                    <div>
                    <div class="card developer-card">
                        <div class="card-body">
                            <h5 class="card-title developer-title">Mrunal Tamhane</h5>


                            <div className="social-icons">
                               <a  href="https://github.com/mrunaltamhane"> <img className='icons' src={require('./github.png')}/></a>
                               <a  href="https://www.linkedin.com/in/mrunaltamhane/">   <img className='icons' src={require('./linkedin.png')} /></a>
                               
                            </div>
                        </div>
                    </div>
                    </div>
                    <div> <div class="card developer-card">
                        <div class="card-body">
                            <h5 class="card-title developer-title">Yash Jagdale</h5>


                            <div className="social-icons">
                            <a  href="https://github.com/YashJagdale45"> <img className='icons' src={require('./github.png')} /></a>
                            <a  href=""> <img className='icons' src={require('./linkedin.png')} /></a>
                                
                            </div>
                        </div>
                    </div></div>

                </div>
            </div>

        </div>

    )
}