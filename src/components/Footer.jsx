import {motion} from 'framer-motion';
import logo from '../assets/images/CeyncFuture-white.png'
import {contactDetails} from "../utils/Constants";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Footer = () => {
    return(
        <div style={{position:'relative'}}>
            <motion.button 
                className="to-top-button" 
                onClick={()=>window.scrollTo(0,0)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <KeyboardDoubleArrowUpIcon/>
                <span>Top</span>
            </motion.button>

            <div className="footer-container">
                <img className="footer-logo" src={logo} alt='logo'/>
                <div className="Contact-details">
                    <div>{contactDetails.email}</div>
                    <div>{contactDetails.phoneNumbers}</div>
                </div>
                <div className="copyright-message">
                    &copy; {`${new Date().getFullYear()} ${contactDetails.name}`}. All rights reserved.
                </div>
            </div>
        </div>

    )
}

export default Footer;