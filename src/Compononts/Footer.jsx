import "./Footer.css"
import Services from "../Compononts/Services";
import chat from "../assets/icons/icons8-chat-50.png"
const Footer = () => {
   
    return (
        <>
            <Services />
            <div className="footer">
                <div className="footer-body">
                    <div className="footer-body-left">
                        <h4>Contact us</h4>
                        <h6>Classyshop - Mega super store </h6>
                        <h6>507 - Union trade cetre</h6>
                        <h6 className="c-email">sales@mycompany.com</h6>
                        <h4 className="c-mobile">(+91) 93454 - 88130</h4>
                    </div>
                    <div className="footer-body-right">
                        <div className="our-company">
                            <h4>Our company</h4>
                            <h6>Delivery</h6>
                            <h6>Terms & conditons</h6>
                            <h6>About us</h6>
                            <h6>Secure payment</h6>
                            <h6>Contact us</h6>
                        </div>
                        <div className="subscribe">
                            <h4>Subscribe to newsletter</h4>
                            <h6>Subscribe to our latest newsletter to get news about <br /> special discounts</h6>
                            <input type="text" className="subscribe-email" />
                            <div className="subscribe-btn">Subscribe</div>
                            <div className="tandc">
                                <input type="checkbox" name="" id="" />
                                <div className="tandc-text"><h6>I agree the <span>terms and conditions</span> and the <span>privacy policy</span></h6></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;