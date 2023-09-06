import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./Footer.css";
import slide1 from '../pages/images/blackwall.jpg';

export default function Footer() {
  return (
    <footer className="Footer stick-bottom  text-center text-white mx-auto " style={{ background: "#5595f4",width:"96%",margin:0, background: `url(${slide1})`}} >
      <div >
        <h2>Pg-Mates</h2>
        <p>Explore the website for much more Amazing experience !
        </p>
        <p>Contact No: +917496952632    &ensp; &ensp; &ensp;    Gmail: pgmates@gmail.com</p>

      </div>
      <div className="text-center p-1" >
        © 2022 Copyright by Team-pgMates .
        
      </div>
<br />
    </footer>
  );
}
