'use client'
import Link from "next/link"
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import VideoPopup from "@/components/elements/VideoPopup"
import Funfact from "@/components/sections/home2/Funfact"
import Cta from "@/components/sections/home3/Cta"
import Account from "@/components/sections/home3/Account"
import Apps from "@/components/sections/home3/Apps"
import Testimonial from "@/components/sections/home3/Testimonial"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function About() {

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
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="About Us">

                <section className="about-style-three pt_90 pb_100">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_seven">
                                    <div className="content-box">
                                        <div className="sec-title pb_50">
                                            <span className="sub-title mb_14">About US</span>
                                            <h2>Our reputation is built on <span>Experience</span></h2>
                                        </div>
                                        <ul className="accordion-box">
                                            <li className="accordion block">
                                                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                    <div className="icon-box"><i className="icon-29"></i></div>
                                                    <h3>Who we are</h3>
                                                </div>
                                                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <p>Facilitating international payments and foreign exchange transactions, issuing credit cards, and more.</p>
                                                        <a href="faq.html">Learn More</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="accordion block">
                                                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                    <div className="icon-box"><i className="icon-29"></i></div>
                                                    <h3>What we do</h3>
                                                </div>
                                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <p>Facilitating international payments and foreign exchange transactions, issuing credit cards, and more.</p>
                                                        <a href="faq.html">Learn More</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="accordion block">
                                                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                    <div className="icon-box"><i className="icon-29"></i></div>
                                                    <h3>How it works</h3>
                                                </div>
                                                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <p>Facilitating international payments and foreign exchange transactions, issuing credit cards, and more.</p>
                                                        <a href="faq.html">Learn More</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                                <div className="video_block_one">
                                    <div className="video-box z_1 p_relative ml_50 centred">
                                        <figure className="image-box"><img src="/assets/images/resource/video-1.png" alt="" /></figure>
                                        <div className="video-content">
                                            <VideoPopup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Funfact />
                <Cta />
                <Account />

                <section className="team-section pt_0 pb_70">
                    <div className="auto-container">
                        <div className="sec-title pb_60 centred">
                            <span className="sub-title mb_14">Our expert team</span>
                            <h2>Our Talented Team Member</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="/assets/images/team/team-1.jpg" alt="" /></figure>
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
                                        <figure className="image-box"><img src="/assets/images/team/team-2.jpg" alt="" /></figure>
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
                                        <figure className="image-box"><img src="/assets/images/team/team-3.jpg" alt="" /></figure>
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
                                        <figure className="image-box"><img src="/assets/images/team/team-4.jpg" alt="" /></figure>
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
                                        <figure className="image-box"><img src="/assets/images/team/team-5.jpg" alt="" /></figure>
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
                                        <figure className="image-box"><img src="/assets/images/team/team-6.jpg" alt="" /></figure>
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

                <Apps />
                <Testimonial />

                <section className="news-section pt_0 pb_70">
                    <div className="auto-container">
                        <div className="sec-title centred pb_60">
                            <span className="sub-title mb_14">Media Center</span>
                            <h2>Latest News Update</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <span className="post-date">20TH April, 2024</span>
                                        <h3><Link href="/blog-details">USD/JPY Stages the more upsides can Bulls Aim for 160x Bonus?</Link></h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Curaitur in euismod odio gravida gravida. Discovery of the text's origin is attributed</p>
                                        <div className="link"><Link href="/blog-details">Read More</Link></div>
                                    </div>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="/assets/images/resource/testimonial-1.png" alt="" /></figure>
                                        <span>Daniel Marcon</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <span className="post-date">19TH April, 2024</span>
                                        <h3><Link href="/blog-details">Nemo's Eurovision win fires up Swiss advocates for non-binary rights</Link></h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Curaitur in euismod odio gravida gravida. Discovery of the text's origin is attributed</p>
                                        <div className="link"><Link href="/blog-details">Read More</Link></div>
                                    </div>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="/assets/images/resource/testimonial-2.png" alt="" /></figure>
                                        <span>Robert Henry</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <span className="post-date">18TH April, 2024</span>
                                        <h3><Link href="/blog-details">Wall St Week Ahead-Earnings bolster US stocks but crucial inflation report looms</Link></h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Curaitur in euismod odio gravida gravida. Discovery of the text's origin is attributed</p>
                                        <div className="link"><Link href="/blog-details">Read More</Link></div>
                                    </div>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="/assets/images/resource/testimonial-3.png" alt="" /></figure>
                                        <span>Victor classNameic</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Subscribe />

            </Layout>
        </div>
    )
}