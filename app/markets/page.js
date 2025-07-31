'use client'
import Link from "next/link"
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import Cta from "@/components/sections/home3/Cta"
import News from "@/components/sections/home1/News"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function Markets() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Markets Place">

                <section className="platform-section alternat-2 pt_90 pb_130">
                    <div className="auto-container">
                        <div className="sec-title centred pb_60">
                            <span className="sub-title mb_14">Platforms</span>
                            <h2>Trading Platforms</h2>
                        </div>
                        <div className="tabs-box">
                            <div className="row clearfix">
                                <div className="col-xl-8 col-lg-12 col-md-12 content-column">
                                    <div className="tabs-content">
                                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                            <div className="content-box">
                                                <figure className="image-box"><img src="/assets/images/resource/platform-1.png" alt="" /></figure>
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
                                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="forex">
                                            <div className="content-box">
                                                <figure className="image-box"><img src="/assets/images/resource/platform-1.png" alt="" /></figure>
                                                <h2>MT5</h2>
                                                <p>Navigate the financial waves with FXT’s premier trading app, designed to put the power of the markets in your palm. Our cutting-edge app blends sophisticated functionality with user-friendly design, enabling traders of all levels to seize market opportunities anytime, anywhere.</p>
                                                <ul className="list-style-one clearfix">
                                                    <li>Trade with one tap, anywhere, anytime</li>
                                                    <li>Seamlessly manage your account and portfolio</li>
                                                    <li>Stay ahead with real-time charts and indicators</li>
                                                    <li>Trade with confidence through encrypted</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="cpoy">
                                            <div className="content-box">
                                                <figure className="image-box"><img src="/assets/images/resource/platform-1.png" alt="" /></figure>
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
                                    <ul className="tab-btns tab-buttons shop-tab-btn clearfix">
                                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>FXT Webtrader</li>
                                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>MT5</li>
                                        <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>FXT Cpoy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Cta />

                <section className="markets-section centred pt_130 pb_70">
                    <div className="auto-container">
                        <div className="sec-title pb_60">
                            <span className="sub-title mb_14">Our Range</span>
                            <h2>Our range of markets</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 markets-block">
                                <div className="markets-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/markets-details"><img src="/assets/images/resource/markets-1.jpg" alt="" /></Link></figure>
                                            <figure className="overlay-image"><Link href="/markets-details"><img src="/assets/images/resource/markets-1.jpg" alt="" /></Link></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><a href="markets-details.html">Trade Forex</a></h3>
                                            <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                                            <div className="btn-box">
                                                <Link href="/markets-details" className="theme-btn btn-two">Forex Trading</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 markets-block">
                                <div className="markets-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><a href="markets-details.html"><img src="/assets/images/resource/markets-2.jpg" alt="" /></a></figure>
                                            <figure className="overlay-image"><a href="markets-details.html"><img src="/assets/images/resource/markets-2.jpg" alt="" /></a></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><a href="markets-details.html">Indices</a></h3>
                                            <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                                            <div className="btn-box">
                                                <Link href="/markets-details" className="theme-btn btn-two">Forex Trading</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 markets-block">
                                <div className="markets-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><a href="markets-details.html"><img src="/assets/images/resource/markets-3.jpg" alt="" /></a></figure>
                                            <figure className="overlay-image"><a href="markets-details.html"><img src="/assets/images/resource/markets-3.jpg" alt="" /></a></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><a href="markets-details.html">Cryptocurrenciesices</a></h3>
                                            <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                                            <div className="btn-box">
                                                <Link href="/markets-details" className="theme-btn btn-two">Forex Trading</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 markets-block">
                                <div className="markets-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><a href="markets-details.html"><img src="/assets/images/resource/markets-4.jpg" alt="" /></a></figure>
                                            <figure className="overlay-image"><a href="markets-details.html"><img src="/assets/images/resource/markets-4.jpg" alt="" /></a></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><a href="markets-details.html">Commodities</a></h3>
                                            <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                                            <div className="btn-box">
                                                <Link href="/markets-details" className="theme-btn btn-two">Forex Trading</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="apps-section alternat-2 pt_120 pb_120">
                    <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-4.png)" }}></div>
                    <figure className="image-layer"><img src="/assets/images/resource/mockup-1.png" alt="" /></figure>
                    <div className="auto-container">
                        <div className="content_block_two">
                            <div className="content-box">
                                <div className="sec-title light pb_40">
                                    <span className="sub-title mb_14">Download App</span>
                                    <h2>Download Trading App</h2>
                                    <p>We use cookies to understand how you use our website and to give you the best possible experience.</p>
                                </div>
                                <ul className="download-list clearfix">
                                    <li><Link href="/markets"><i className="fab fa-apple"></i></Link></li>
                                    <li><Link href="/markets"><img src="/assets/images/icons/icon-2.png" alt="" /></Link></li>
                                    <li><Link href="/markets"><i className="fab fa-android"></i></Link></li>
                                    <li><Link href="/markets"><img src="/assets/images/icons/icon-6.png" alt="" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <News />
                <Subscribe />

            </Layout>
        </div>
    )
}