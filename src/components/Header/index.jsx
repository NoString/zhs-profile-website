import React, {Fragment} from "react";
import './index.less'
import {BiPhoneCall} from "react-icons/bi";
export default () =>{
    return(
        <Fragment>
            <div className="paddings wrapper">
                <div className="flexCenter innerWidth container">
                    <div className="name">
                        ZHU HANGSHUAI
                    </div>
                    <ul className={'menu'}>
                        <li><a href="">Services</a></li>
                        <li><a href="">Experience</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li>
                            <p>+233 323 323</p>
                            <BiPhoneCall size={'40px'}/>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}