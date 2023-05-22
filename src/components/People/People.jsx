import React, {Fragment} from "react";
import './People.less'
import {motion} from "framer-motion";
import {footerVariants, staggerChildren} from "../../utils/motion";
import {comments, sliderSettings} from "../../utils/data";
import Slider from "react-slick";
export default () =>{

    return(
        <Fragment>
            <motion.div
                variants={staggerChildren}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{
                    once:false,
                    amount:0.25
                }}
                className="peopleWrapper paddings">

                <a className="anchor" id="people"></a>
                <motion.div
                    variants={footerVariants}

                    className="container yPaddings innerWidth">
                    <div className="flexCenter heading">
                        <span className="primaryText">
                            People talk about us
                        </span>
                        <p style={{marginTop:"2rem"}}>
                            I got a job that was in accordance with the salary and field of work
                        </p>
                        <p>The process of submitting an application was quite cosy</p>
                    </div>




                    <div className="comments yPaddings">
                        <Slider
                            {...sliderSettings}
                            className={'slider'}
                        >
                            {
                                comments.map((c,i) =>{
                                    return (
                                        <div className="comment flexCenter" key={i}>
                                            <img src={c.img} alt=""/>
                                            <p>{c.comment}</p>
                                            <div className="line"></div>
                                            <div className="bio">
                                                <span>{c.name}</span>
                                                <span>{c.post}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>

                </motion.div>
            </motion.div>
        </Fragment>
    )
}