import React, {Fragment} from "react";
import './Experience.less'
import {projectExperience, WhatDoIHelp} from "../../utils/data";
import {fadeIn, staggerContainer, textVariant} from "../../utils/motion";
import {motion} from "framer-motion";
export default () => {
    return (
        <Fragment>
            <motion.section
                variants={staggerContainer}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{once:false,amount:0.25}}

                className={'experienceWrapper'}>
                <a className="anchor" id="services"></a>

                <div className="paddings yPaddings flexCenter innerWidth container">
                    <div className="leftSide">
                        {
                            projectExperience.map((e, i) => {
                                return (
                                    <motion.div
                                        variants={fadeIn("right","tween",(i+1)*0.2,1)}
                                        className="exp" key={i}>
                                        <div className="flexCenter expChild1">
                                            <e.icon size={25} color={'white'} style={{background:e.bg}}/>
                                        </div>
                                        <div>
                                            <span>
                                            {e.name}
                                            </span>
                                            <span className={'secondaryText'}>
                                            {e.projects} Projects
                                            </span>
                                        </div>
                                    </motion.div>)
                            })
                        }
                    </div>
                    <motion.div
                        variants={textVariant(0.5)}
                        className="rightSide">
                        <span className={'primaryText'}>What do I help?</span>
                        {
                            WhatDoIHelp.map((item,i) =>{
                                return (
                                    <span className={'secondaryText'} key={i}>
                                        {item}
                                    </span>
                                )
                            })
                        }

                        <div className="flexCenter stats">
                            <div className="flexCenter stat">
                                <span className={'primaryText'}>
                                    285+
                                </span>
                                <span className={'secondaryText'}>
                                    Projects Completed
                            </span>
                            </div>
                            <div className="flexCenter stat">
                                <span className={'primaryText'}>
                                    190+
                                </span>
                                <span className={'secondaryText'}>
                                    Happy Clients
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </Fragment>
    )
}