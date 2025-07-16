'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function Faq() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Frequently asked question">

        <section className="faq-section pt_90 pb_100">
            <div className="auto-container">
                <div className="sec-title pb_60 centred">
                    <span className="sub-title mb_14">FAQS</span>
                    <h2>General FAQ’s</h2>
                </div>
                <div className="inner-box">
                    <ul className="accordion-box">
                        <li className="accordion block active-block">
                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                <div className="icon-box"><i className="icon-29"></i></div>
                                <h5>How can I start trading For tradex?</h5>
                            </div>
                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                <div className="icon-box"><i className="icon-29"></i></div>
                                <h5>How much money do I need to start?</h5>
                            </div>
                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                <div className="icon-box"><i className="icon-29"></i></div>
                                <h5>Can I lose more than I invest in For tradex?</h5>
                            </div>
                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                <div className="icon-box"><i className="icon-29"></i></div>
                                <h5>How much money do I need to start?</h5>
                            </div>
                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                <div className="icon-box"><i className="icon-29"></i></div>
                                <h5>How can I start trading For tradex?</h5>
                            </div>
                            <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <Subscribe/>

        </Layout>
    </div>
    )
}