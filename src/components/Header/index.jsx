import React, {Fragment} from "react";
import './index.less'
import {BiPhoneCall} from "react-icons/bi";
// npm install framer-motion
import {motion} from "framer-motion";
import {headerVariants} from "../../utils/motion";
export default () =>{
    return(
        <Fragment>

            <motion.div
                initial="hidden"
                whileInView="show"
                variants={headerVariants}
                viewport={{once:false,amount:0.25}}
                className="paddings wrapper">

                <div className="flexCenter innerWidth container">
                    <div className="name">
                        Z
                    </div>
                    {/* flexCenter让所有的li居中分布*/}
                    <ul className={'menu flexCenter'}>
                        <li><a href="">Services</a></li>
                        <li><a href="">Experience</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li className={'phone flexCenter'}>
                            <p>+233 323 323</p>
                            <BiPhoneCall size={'40px'}/>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </Fragment>
    )
}