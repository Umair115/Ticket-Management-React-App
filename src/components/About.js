import React from 'react';
import TicketManage from '../images/ticket-manage.png';
function About(){
    return(
        <div className="about-sec pc-p-6 background-dark">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="primary-heading color-light">
                        <h3 className="mc-b-4">What is a Secure Ticket</h3>
                        <p>Nowadays,There are two things which are in the top news.</p>
                        <ol>
                            <li className="color-white">1. Corona</li>
                            <li className="color-white">2. Blockchain</li>
                        </ol>
                        <p>
                            Covid is currently interrupting the life of almost every citizen. Due to covid it is dangerous to go out and purchase anything onsite. So the solution to this issue, is to promote shopping online, but then again in online shopping there is a high risk
                            of hacking. So in order to get rid of all these issues, we are proposing an idea of using Blockchain in online purchasing.
                        </p>

                        <ol>
                            <li className="color-white">Make an easy and attractive ticket purchasing process, In order to get rid of complexity.</li>
                            <li className="color-white">Make sure that the tickets are secured enough, so that hacking can be prevent using Blockchain.</li>
                            <li className="color-white">Experimenting Blockchain with new concepts like this idea instead of using it only for Crypto Currency</li>
                            <li className="color-white">Make sure that the user get what it wants in an easy and secure way.</li>
                        </ol>


                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-img">
                        <figure className="about-img-big">
                            <img src={TicketManage} alt="About Image"/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About;