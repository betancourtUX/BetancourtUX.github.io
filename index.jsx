import React from "react";
import { Link } from "react-router-dom";
import { ArrowForward } from "./ArrowForward";
import { IconComponentNode } from "./IconComponentNode";
import { MainTabHorizontal } from "./MainTabHorizontal";
import { RocheBlue } from "./RocheBlue";
import { StyleBorderlessWrapper } from "./StyleBorderlessWrapper";
import { Tag } from "./Tag";
import "./style.css";

export const Desktop = () => {
    return (
        <div className="desktop">
            <div className="div">
                <div className="me">
                    <div className="group">
                        <div className="group-2">
                            <div className="heavy">Nathaly Betancourt</div>
                            <div className="display-large-heavy">Researcher &amp; Designer</div>
                            <p className="f-heavy">UX Researcher • Service Designer • UX designer</p>
                        </div>
                    </div>
                </div>
                <div className="POC-solution">
                    <div className="frame-wrapper">
                        <div className="frame">
                            <div className="frame-2">
                                <Tag
                                    className="design-component-instance-node-2"
                                    mainTagWrapperMainTagText="UX researcher"
                                    state="info"
                                    style="outlined"
                                />
                                <Tag
                                    className="design-component-instance-node-2"
                                    mainTagWrapperMainTagText="Service Design"
                                    state="info"
                                    style="outlined"
                                />
                                <Tag
                                    className="design-component-instance-node-2"
                                    mainTagWrapperMainTagText="Storyboard"
                                    state="info"
                                    style="outlined"
                                />
                                <Tag
                                    className="design-component-instance-node-2"
                                    mainTagWrapperMainTagText="Service blueprint"
                                    state="info"
                                    style="outlined"
                                />
                            </div>
                            <p className="text-wrapper">Explore underserved user needs to create digital solutions</p>
                            <p className="p">
                                Shadowing, interviews, and surveys with healthcare professionals to understand current challenges and
                                explore innovation opportunities. Creating service blueprints, system maps, and storyboards for
                                definition of solutions.
                            </p>
                            <StyleBorderlessWrapper
                                buttonWrapperButtonIcon={<ArrowForward className="arrow-forward" />}
                                buttonWrapperButtonText="More details"
                                buttonWrapperButtonTextClassName="button-3"
                                className="button-2"
                                color="primary"
                                fixedWidth={false}
                                icon="none"
                                size="small"
                                stateProp="default"
                                style="borderless"
                            />
                        </div>
                    </div>
                    <div className="group-3" />
                </div>
                <div className="edge">
                    <div className="div-wrapper">
                        <div className="frame">
                            <div className="frame-2">
                                <Tag
                                    className="design-component-instance-node-2"
                                    mainTagWrapperMainTagText="UX Lead"
                                    state="info"
                                    style="outlined"
                                />
                                <Tag
                                    className="design-component-instance-node-2"
                                    mainTagWrapperMainTagText="UX researcher"
                                    state="info"
                                    style="outlined"
                                />
                                <Tag
                                    className="design-component-instance-node-2"
                                    mainTagWrapperMainTagText="User journey"
                                    state="info"
                                    style="outlined"
                                />
                                <Tag
                                    className="design-component-instance-node-2"
                                    mainTagWrapperMainTagText="UI designer"
                                    state="info"
                                    style="outlined"
                                />
                            </div>
                            <p className="text-wrapper">
                                Evaluate changes in customer behavior within a full-service experience to digital self-service.
                            </p>
                            <p className="p">
                                Evaluate solution desirability through customer research. Explore the user experience end-to-end to
                                develop service blueprint, user journeys, prototypes, and test them via usability testing.
                            </p>
                            <StyleBorderlessWrapper
                                buttonWrapperButtonIcon={<IconComponentNode className="arrow-forward" />}
                                buttonWrapperButtonText="More details"
                                buttonWrapperButtonTextClassName="button-3"
                                className="button-2"
                                color="primary"
                                fixedWidth={false}
                                icon="none"
                                size="small"
                                stateProp="default"
                                style="borderless"
                            />
                        </div>
                    </div>
                    <div className="group-4" />
                </div>
                <footer className="footer">
                    <div className="group-5">
                        <div className="frame-3">
                            <div className="heavy-2">Clients:</div>
                            <img className="contentwise-logo" alt="Contentwise logo" src="contentwise-logo-orange-1.svg" />
                            <div className="frame-4">
                                <RocheBlue className="design-system-logo" />
                                <img className="image" alt="Image" src="image-3.png" />
                                <img className="si" alt="Si" src="si2001.png" />
                            </div>
                        </div>
                        <div className="frame-5">
                            <p className="heavy-3">Wanna chat? Say 👋 via:</p>
                            <a className="heavy-4" href="mailto:betancourt.ux@gmail.com" rel="noopener noreferrer" target="_blank">
                                betancourt.ux@gmail.com
                            </a>
                            <a
                                className="heavy-4"
                                href="https://www.linkedin.com/in/nathaly-belen94/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </footer>
                <div className="header">
                    <div className="header-2">
                        <Link className="group-6" to="/desktop-u45-1">
                            <div className="heavy-5">Nathaly Betancourt</div>
                            <img className="rectangle" alt="Rectangle" src="rectangle-18408.svg" />
                        </Link>
                        <div className="tab-horizontal">
                            <MainTabHorizontal
                                className="design-component-instance-node-2"
                                divClassName="main-tab-horizontal-instance"
                                hasUnderline={false}
                                text="About"
                                visible={false}
                                visible1={false}
                                visible2={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
