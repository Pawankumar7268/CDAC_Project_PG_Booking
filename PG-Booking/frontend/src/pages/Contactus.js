import './Contactus.css';
import Swal from "sweetalert2";

export default function Contactus() {
    const handleClick = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Thanks!',
            text: 'Message sent Seccessfully!',
            icon: 'success',
            confirmButtonText: 'OK',
        });
    };
    return (
        <>
            <div className="outermain">
                <h3 className='ctmain'>Contact Us</h3>
                <hr className='hrline' />
                <div className="innerclass">
                    <form onSubmit={handleClick}>
                        <input type="text" className="inp" placeholder="Enter your name" required /><br />
                        <input type="email" className="inp" placeholder="Enter your Email" required /><br />
                        <input type="text" className="inp" placeholder="Enter Subject" /><br />
                        <input type="text" className="msg" placeholder="Enter Your Message" required />
                        <button className='btn btn1 btn-warning' type="submit" value="submit">SEND</button>
                    </form>
                </div >
            </div>

        </>

    );
}










