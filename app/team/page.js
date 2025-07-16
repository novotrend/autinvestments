'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Testimonial from "@/components/sections/home3/Testimonial"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function Team() {

    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Our Expert Team">

        <section className="team-section pt_90 pb_70">
            <div className="auto-container">
                <div className="sec-title pb_60 centred">
                    <span className="sub-title mb_14">Our expert team</span>
                    <h2>Our Talented Team Member</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/team/team-1.jpg" alt=""/></figure>
                                <div className="content-box">
                                    <h3><Link href="/team-details">Olivia Quinn</Link></h3>
                                    <span className="designation">Forex Trader</span>
                                    <ul className="social-links">
                                        <li><Link href="/team-details"><i className="icon-13"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-15"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-14"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/team/team-2.jpg" alt=""/></figure>
                                <div className="content-box">
                                    <h3><Link href="/team-details">Nathan Hayes</Link></h3>
                                    <span className="designation">Consultant</span>
                                    <ul className="social-links">
                                        <li><Link href="/team-details"><i className="icon-13"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-15"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-14"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/team/team-3.jpg" alt=""/></figure>
                                <div className="content-box">
                                    <h3><Link href="/team-details">Ava Jensen</Link></h3>
                                    <span className="designation">Trading Assistant</span>
                                    <ul className="social-links">
                                        <li><Link href="/team-details"><i className="icon-13"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-15"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-14"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/team/team-4.jpg" alt=""/></figure>
                                <div className="content-box">
                                    <h3><Link href="/team-details">Sophia Knight</Link></h3>
                                    <span className="designation">President of Trade</span>
                                    <ul className="social-links">
                                        <li><Link href="/team-details"><i className="icon-13"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-15"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-14"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/team/team-5.jpg" alt=""/></figure>
                                <div className="content-box">
                                    <h3><Link href="/team-details">Ethan brooks</Link></h3>
                                    <span className="designation">Marketing Coordinator</span>
                                    <ul className="social-links">
                                        <li><Link href="/team-details"><i className="icon-13"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-15"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-14"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/team/team-6.jpg" alt=""/></figure>
                                <div className="content-box">
                                    <h3><Link href="/team-details">Aronic kehan</Link></h3>
                                    <span className="designation">Business Assistant</span>
                                    <ul className="social-links">
                                        <li><Link href="/team-details"><i className="icon-13"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-15"></i></Link></li>
                                        <li><Link href="/team-details"><i className="icon-14"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="apps-section alternat-2 pt_120 pb_120">
                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}></div>
                <figure className="image-layer"><img src="assets/images/resource/mockup-1.png" alt=""/></figure>
                <div className="auto-container">
                    <div className="content_block_two">
                        <div className="content-box">
                            <div className="sec-title light pb_40">
                                <span className="sub-title mb_14">Download App</span>
                                <h2>Download Trading App</h2>
                                <p>We use cookines to understand how you use our website and to give you the best possible experience.</p>
                            </div>
                            <ul className="download-list clearfix">
                                <li><Link href="/markets"><i className="fab fa-apple"></i></Link></li>
                                <li><Link href="/markets"><img src="assets/images/icons/icon-2.png" alt=""/></Link></li>
                                <li><Link href="/markets"><i className="fab fa-android"></i></Link></li>
                                <li><Link href="/markets"><img src="assets/images/icons/icon-6.png" alt=""/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonial/>
            <Subscribe/>

        </Layout>
    </div>
    )
}