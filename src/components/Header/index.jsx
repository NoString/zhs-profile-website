import React, {Fragment, useState} from "react";
import './index.less'
import {BiMenuAltRight, BiPhoneCall} from "react-icons/bi";
// npm install framer-motion
import {motion} from "framer-motion";
import {getMenuStyles, headerVariants} from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
export default () =>{
    const [menuOpened, setMenuOpened] = useState(true);
    const headerShadow = useHeaderShadow()

    return(
        <Fragment>

            <motion.div
                initial="hidden"
                whileInView="show"
                variants={headerVariants}
                viewport={{once:false,amount:0.25}}
                className="paddings wrapper"
                style={{boxShadow:headerShadow}}
            >

                <div className="flexCenter innerWidth container">
                    <div className="name">
                        Z
                    </div>
                    {/* flexCenter让所有的li居中分布*/}
                    <ul className={'menu flexCenter'}
                        style={getMenuStyles(menuOpened)}>
                        <li><a href="">Services</a></li>
                        <li><a href="">Experience</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Testimonials</a></li>
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