'use client'
import Link from "next/link"
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/sections/home1/Subscribe"
import Testimonial from "@/components/sections/home5/Testimonial"

export default function Education_details() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Book Details">

                <section className="education-details pt_90 pb_90">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="education-details-content">
                                    <div className="inner-box mb_70">
                                        <div className="author-box">
                                            <figure className="thumb-box"><img src="assets/images/resource/author-1.png" alt="" /></figure>
                                            <h5>Liam Benjamin</h5>
                                            <span className="designation">Manager</span>
                                        </div>
                                        <ul className="info-list mb_45">
                                            <li><span>Beguiled demo going to Learn</span></li>
                                            <li><img src="assets/images/icons/icon-16.png" alt="" />5 Lectures _ 2hr 25mins</li>
                                        </ul>
                                        <ul className="accordion-box">
                                            <li className="accordion block active-block">
                                                <div className="acc-btn active">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt="" /></div>
                                                    What is Fortradex?
                                                </div>
                                                <div className="acc-content current">
                                                    <div className="content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="accordion block">
                                                <div className="acc-btn">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt="" /></div>
                                                    How it’s Work?
                                                </div>
                                                <div className="acc-content">
                                                    <div className="content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="accordion block">
                                                <div className="acc-btn">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt="" /></div>
                                                    How to Start Fortradex Trading?
                                                </div>
                                                <div className="acc-content">
                                                    <div className="content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="text-box">
                                        <h3>Book Features:</h3>
                                        <ul className="list-item clearfix">
                                            <li>A beginner friendly overview explaining.</li>
                                            <li>Explains how economic indicators, geopolitical events.</li>
                                            <li>Covers chart patterns, indicators  and tools used to analyze price movements.</li>
                                            <li>Discusses techniques for managing risk, such as setting stop-loss orders.</li>
                                            <li>Presents various trading strategies, including trend following.</li>
                                            <li>Includes discussions on advanced trading concepts like algorithmic trading.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="education-sidebar ml_10">
                                    <h4>$54.00<del className="ml_10 mr_15">$60.00</del><span>2 days left at this price!</span></h4>
                                    <div className="rating mb_25"><i className="icon-37"></i>4.8<span>(3,726 Reviews)</span></div>
                                    <ul className="info-list mb_50 clearfix">
                                        <li><span>Language</span><span>English</span></li>
                                        <li><span>Access</span><span>Lifetime</span></li>
                                        <li><span>Certificate</span><span>Yes</span></li>
                                        <li><span>Enrolled</span><span>55 Students</span></li>
                                    </ul>
                                    <div className="btn-box mb_50"><Link href="/education-details" className="theme-btn btn-one">Buy Now</Link></div>
                                    <ul className="share-option">
                                        <li><span>Share With:</span></li>
                                        <li><Link href="/education-details"><i className="icon-12"></i></Link></li>
                                        <li><Link href="/education-details"><i className="icon-13"></i></Link></li>
                                        <li><Link href="/education-details"><i className="icon-14"></i></Link></li>
                                        <li><Link href="/education-details"><i className="icon-15"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="video-section p_relative">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="video_block_one">
                                <div className="video-box z_1 p_relative centred">
                                    <div className="video-inner">
                                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/video-3.jpg)" }}></div>
                                        <div className="video-content">
                                            <VideoPopup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Testimonial />
                <Subscribe />

            </Layout>
        </div>
    )
}
