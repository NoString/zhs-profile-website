import React, {Fragment} from "react";
import './Footer.less'
import {motion} from "framer-motion";
import {footerVariants, staggerChildren} from "../../utils/motion";

export default () => {
    return (
        <Fragment>
            <motion.div
                variants={staggerChildren}
                initial={"hidden"}
                whileInView={'show'}
                viewport={{
                    once: false,
                    amount: 0.25
                }}
                className="paddings footerWrapper">
                <motion.div
                    variants={footerVariants}
                    className="container innerWidth yPaddings flexCenter">



                    <div className="left">
                        <span className="primaryText">
                            Let's make something <br/> amazing together.

                        </span>
                        <span className={'primaryText'}>
                            Start by <a href="mailto:pro6@qq.com">saying hi</a>
                        </span>
                    </div>



                    <div className={'right'}>
                        <div className={'info'}>
                            <span className="secondaryText">Information</span>
                            <p>145 New York, FL 5467, USA</p>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>Services</li>
                                <li>Works</li>
                                <li>Notes</li>
                                <li>Experience</li>
                            </ul>
                        </div>
                    </div>


                </motion.div>
            </motion.div>
        </Fragment>
    )
}