import React, {Component} from "react";
import Navbar from "../general/navbar";
import Footer from "../general/footer";
import "./mainpage.css";

class Impressum extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Navbar/>
            <div className='main'>
            <div className="impressum-container">
            <h1>Impressum</h1>
            <h2>Angaben gemäß § 5 TMG:</h2>
            <li>Simeon Wagner</li>  
            <li>Markgröninger Straße 50</li>
            <li>70435 Stuttgart</li>
            <h2>Vertreten durch:</h2> 
            <li>Simeon Wagner</li>
            <h2>Kontakt</h2>
            <li>Email: wagnersimeon01@gmail.com</li>
            <h2>Redaktionell verantwortlich</h2>
            <li>Simeon Wagner</li>
            <h2>EU-Streitschlichtung:</h2>
            <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum.
             </p>
             <h2>Verbraucherstreitbeilegung/ Universalschlichtungsstelle:</h2>
             <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
             </p>                
            </div>
            </div>
            <Footer/>
            </>
        );
    }
}
 
export default Impressum;