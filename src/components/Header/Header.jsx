import React, {Fragment, useRef, useState} from "react";
import './Header.less'
import {BiMenuAltRight, BiPhoneCall} from "react-icons/bi";
// npm install framer-motion
import {motion} from "framer-motion";
import {getMenuStyles, headerVariants} from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
export default () =>{
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow()

    return(
        <Fragment>

            <motion.div
                initial="hidden"
                whileInView="show"
                variants={headerVariants}
                viewport={{once:false,amount:0.25}}
                className="paddings headerWrapper bg-primary"
                style={{boxShadow:headerShadow}}
            >
                <div className="flexCenter innerWidth container">
                    <div className="name">
                        Z
                    </div>
                    {/* flexCenter让所有的li居中分布*/}
                    <ul className={'menu flexCenter'}
                        style={getMenuStyles(menuOpened)}
                    >
                        <li><a href="#services">Services</a></li>
                        <li><a href="#work">Experience</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#people">Testimonials</a></li>
                        <li className={'phone flexCenter'}>
                            <p>+233 323 323</p>
                            <BiPhoneCall size={'40px'}/>
                        </li>
                    </ul>
                    <div className="mainIcon"
                        onClick={()=>setMenuOpened( prev => !prev)}>
                        <BiMenuAltRight size={30}/>
                    </div>
                </div>
            </motion.div>
        </Fragment>
    )
}