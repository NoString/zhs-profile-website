import React, {Fragment} from "react";
import './Profile.less'
import {motion} from "framer-motion";
import {fadeIn, slideIn, staggerContainer} from "../../utils/motion";

export default () => {
    return (
        <Fragment>
            <section className={'paddings profileWrapper'}>
                <motion.div
                    variants={staggerContainer}
                    initial={"hidden"}
                    whileInView={'show'}
                    viewport={{once:false,amount:0.25}}
                    className={'innerWidth container'}>
                    <div className={'upperElements'}>
                        <motion.span
                            variants={fadeIn("right","tween",0.2,1)}
                            className={'primaryText'}>
                            Hey There, <br/> I'm Binjan.
                        </motion.span>
                        <motion.span
                            variants={fadeIn("left","tween",0.2,1)}

                            className={'secondaryText'}>
                            I design beautiful simple
                            <br/>
                            things, And I love what I do
                        </motion.span>
                    </div>

                    <motion.div
                        variants={fadeIn("up","tween",0.2,1)}

                        className="person">
                        <motion.img
                            variants={slideIn("up","tween",0.2,1)}

                            src="/img/person.png" alt=""/>
                    </motion.div>

                    <a href="mailto:pro6@qq.com" className="email">
                        pro6@qq.com
                    </a>

                    <div className={'lowerElements'}>
                        <div className="experience">
                            <div className="primaryText">
                                10
                            </div>
                            <div className="secondaryText">
                                <div>Years</div>
                                <div>Experience</div>
                            </div>
                        </div>
                        <div className="certificate">
                            <img src="/img/certificate.png" alt="" />
                            <span>
                                CERTIFIED PROFATIONAL
                            </span>
                            <span>
                                UI/XI DESIGNER
                            </span>
                        </div>
                    </div>
                </motion.div>
            </section>
        </Fragment>
    )
}