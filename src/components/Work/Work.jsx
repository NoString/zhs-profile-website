import React, {Fragment} from "react";
import {motion} from "framer-motion";
import {fadeIn, staggerChildren, textVariant2, zoomIn} from "../../utils/motion";
import {workExp} from "../../utils/data";
import './Work.less'

export default () => {
    return (
        <Fragment>
            <motion.div
                variants={staggerChildren}
                initial={'hidden'}
                whileInView={'show'}
                viewPort={{once: false, amount: 0.25}}
                className={'workWrapper'}
            >
                <div className={'container flexCenter innerWidth'}>
                    <span className={'primaryText yPaddings'}>
                        My work experience
                    </span>
                    <div className="flexCenter experience">
                        {
                            workExp.map((exp, i) => {
                                return (
                                    <motion.div
                                        variants={textVariant2}
                                        className={'flexCenter exp'} key={i}>
                                        <div className={'post'}>
                                            <h1>{exp.place}</h1>
                                            <p>{exp.tenure}</p>
                                        </div>
                                        <div className={'role'}>
                                            <h1>{exp.role}</h1>
                                            <p>{exp.detail}</p>
                                        </div>
                                    </motion.div>
                                )
                            })
                        }

                        <motion.div
                            variants={zoomIn(1,1)}
                            className="progressbar">
                            <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className="line">
                                <div><div className={'circle'} style={{background: "#286F6C"}}></div></div>
                                <div><div className={'circle'} style={{background: "#F2704E"}}></div></div>
                                <div><div className={'circle'} style={{background: "#EEC048"}}></div></div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </Fragment>
    )
}