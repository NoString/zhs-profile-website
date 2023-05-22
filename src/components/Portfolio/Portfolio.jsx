import React, {Fragment} from "react";
import './Portfolio.less'
import {motion} from "framer-motion";
import {fadeIn, staggerChildren} from "../../utils/motion";

export default () => {
    return (
        <Fragment>
            <motion.div
                variants={staggerChildren}
                initial={'hidden'}
                whileInView={"show"}
                viewport={{once:false,amount:0.25}}
                className="portfolioWrapper paddings">
                <a className="anchor" id="portfolio"></a>
                <div className="container innerWidth flexCenter">
                    <div className="flexCenter heading">
                        <div>
                            <span className="primaryText">
                                My latest work
                            </span>
                            <p style={{marginTop: "10px"}}>
                                Perfect solution for digital experience
                            </p>
                        </div>
                        <span className="secondaryText">
                            Explore more works
                        </span>
                    </div>

                    <div className="showCase flexCenter">
                        <motion.img
                            variants={fadeIn("up", "tween", 0.5, 0.6)}
                            src={"/img/showCase1.png"}
                            alt={'project'}
                        >
                        </motion.img>
                        <motion.img
                            variants={fadeIn("up", "tween", 0.7, 0.6)}
                            src={"/img/showCase2.png"}
                            alt={'project'}
                        >
                        </motion.img>
                        <motion.img
                            variants={fadeIn("up", "tween", 0.9, 0.6)}
                            src={"/img/showCase3.png"}
                            alt={'project'}
                        >
                        </motion.img>
                    </div>
                </div>
            </motion.div>
        </Fragment>
    )
}