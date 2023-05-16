import React, {Fragment} from "react";
import './index.less'

export default () => {
    return (
        <Fragment>
            <section className={'paddings wrapper'}>
                <div className={'innerWidth container'}>
                    <div className={'upperElements'}>
                        <span className={'primaryText'}>
                            Hey There, <br/> I'm Binjan.
                        </span>
                        <span className={'secondaryText'}>
                            I design beautiful simple
                            <br/>
                            things, And I love what I do
                        </span>
                    </div>

                    <div className="person">
                        <img src="/img/person.png" alt=""/>
                    </div>

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
                </div>
            </section>
        </Fragment>
    )
}