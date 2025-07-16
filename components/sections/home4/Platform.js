'use client'
import Link from "next/link"
import { useState } from "react"

export default function Platform() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

  return (
    <>
        <section className="platform-section pt_0 pb_100">
            <div className="auto-container">
                <div className="sec-title light centred pb_60">
                    <span className="sub-title mb_14">Platforms</span>
                    <h2>Trading Platforms</h2>
                </div>
                <div className="tabs-box">
                    <div className="row clearfix">
                        <div className="col-xl-8 col-lg-12 col-md-12 content-column">
                            <div className="tabs-content">
                                <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                    <div className="content-box">
                                        <figure className="image-box"><img src="assets/images/resource/platform-1.png" alt=""/></figure>
                                        <h2>FXT App</h2>
                                        <p>Navigate the financial waves with FXT’s premier trading app, designed to put the power of the markets in your palm. Our cutting-edge app blends sophisticated functionality with user-friendly design, enabling traders of all levels to seize market opportunities anytime, anywhere.</p>
                                        <ul className="list-style-one clearfix">
                                            <li>Trade with one tap, anywhere, anytime</li>
                                            <li>Seamlessly manage your account and portfolio</li>
                                            <li>Stay ahead with real-time charts and indicators</li>
                                            <li>Trade with confidence through encrypted</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="mt">
                                    <div className="content-box">
                                        <figure className="image-box"><img src="assets/images/resource/platform-1.png" alt=""/></figure>
                                        <h2>MT4/MT</h2>
                                        <p>Navigate the financial waves with FXT’s premier trading app, designed to put the power of the markets in your palm. Our cutting-edge app blends sophisticated functionality with user-friendly design, enabling traders of all levels to seize market opportunities anytime, anywhere.</p>
                                        <ul className="list-style-one clearfix">
                                            <li>Trade with one tap, anywhere, anytime</li>
                                            <li>Seamlessly manage your account and portfolio</li>
                                            <li>Stay ahead with real-time charts and indicators</li>
                                            <li>Trade with confidence through encrypted</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="fxt">
                                    <div className="content-box">
                                        <figure className="image-box"><img src="assets/images/resource/platform-1.png" alt=""/></figure>
                                        <h2>FXT Cpoy</h2>
                                        <p>Navigate the financial waves with FXT’s premier trading app, designed to put the power of the markets in your palm. Our cutting-edge app blends sophisticated functionality with user-friendly design, enabling traders of all levels to seize market opportunities anytime, anywhere.</p>
                                        <ul className="list-style-one clearfix">
                                            <li>Trade with one tap, anywhere, anytime</li>
                                            <li>Seamlessly manage your account and portfolio</li>
                                            <li>Stay ahead with real-time charts and indicators</li>
                                            <li>Trade with confidence through encrypted</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12 btn-column">
                            <ul className="tab-btns tab-buttons clearfix">
                                <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>FXT Webtrader</li>
                                <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>MT4/MT</li>
                                <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>FXT Cpoy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
