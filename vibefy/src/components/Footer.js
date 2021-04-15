import React from 'react'
import '../App.css';

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*Column 1*/}
                    <div className="col-sm-4">
                        <h4><i>VIBEFY</i></h4>
                        <ul className="list-unstyled">
                            <li><i>Web Application with React JS</i></li>
                            <li><i>Istanbul, Turkey</i></li>
                            <li><i>Ozyegin University</i></li>
                            <li><i>Web Application Development Course</i></li>
                        </ul>
                    </div>
                    {/*Column 2*/}
                    <div className="col-sm-4">
                        <h4><i>Developers</i></h4>
                        <ul className="list-unstyled">
                            <li><i>Tuna Tuncer</i></li>
                            <li><i>Onur Alaçam</i></li>
                            <li><i>Uygar Kaya</i></li>
                            <li><i>Tuğcan Hoşer</i></li>
                        </ul>
                    </div>

                    <div className="col-sm-4">
                        <h4><i>E-Mails</i></h4>
                        <ul className="list-unstyled">
                            <li><i>tuna.tuncer@ozu.edu.tr</i></li>
                            <li><i>onur.alacam@ozu.edu.tr</i></li>
                            <li><i>uygar.kaya@ozu.edu.tr</i></li>
                            <li><i>tugcan.hoser@ozu.edu.tr</i></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="row">
                    <p className="col-sm-12">
                    <i>Created By <i>VIBEFY</i> &copy;&nbsp;{new Date().getFullYear()} | All rights reserved</i> 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
