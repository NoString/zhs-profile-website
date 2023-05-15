import React, {Fragment} from "react";
import './index.less'

export default () => {
    return (
        <Fragment>
            <section className={'paddings wrapper'}>
                <div className={'innerWidth container'}>
                    <div className={'upperElements'}>
                        <span>
                            dsadsads
                            <br/>
                            sdadasda
                        </span>
                        <span>
                            dasdsadasddsa
                        </span>
                    </div>
                    <div className={'lowerElements'}>
                        <div className="experience">
                            <div className="primaryText">
                                3
                            </div>
                            <div className="secondaryText">
                                <div>Years</div>
                                <div>Experience</div>
                            </div>
                        </div>
                        <div className="certificate">
                            <img src="../../../public/img/certificate.png" alt=""/>
                            <span>
                                prwqeqweqw
                            </span>
                            <span>
                                dasdsa
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}