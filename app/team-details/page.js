'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function Team_details() {

    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Team Details">

        <section className="team-details pt_90 pb_90">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="content-one mb_40">
                                <h2>Ethan brooks</h2>
                                <span className="designation">Marketing Coordinator</span>
                                <ul className="social-links">
                                    <li><Link href="/team-details"><i className="icon-12"></i></Link></li>
                                    <li><Link href="/team-details"><i className="icon-13"></i></Link></li>
                                    <li><Link href="/team-details"><i className="icon-14"></i></Link></li>
                                    <li><Link href="/team-details"><i className="icon-15"></i></Link></li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a lobortis tortor, sit amet congue purus. Maecenas pharetra lacus quis nisi porta facilisis. Morbi fermentum bibendum arcu, a porttitor eros volutpat et. Praesent nec magna tincidunt, placerat justo non, egestas quam.</p>
                            </div>
                            <div className="content-two mb_40">
                                <h3>My Expertise & Skills</h3>
                                <p>Etiam scelerisque nibh vitae purus blandit, sed iaculis dolor fringilla. Aenean luctus est sed justo pellentesque, quis fermentum felis pellentesque. Morbi varius, massa eget euismod finibus, elit urna ullamcorper est, et ultrices odio nunc sed nulla. Phasellus sed cursus erat. Nullam et nulla magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia at mauris at tempus. Nulla sed mi vel lorem tempor euismod. </p>
                            </div>
                            <div className="content-three">
                                <div className="progress-box">
                                    <div className="single-progress-box">
                                        <p>Trading Advice</p>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" style={{ width: '85%' }}><span>85%</span></div>
                                        </div>
                                    </div>
                                    <div className="single-progress-box">
                                        <p>Business Consulting</p>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" style={{ width: '90%' }}><span>90%</span></div>
                                        </div>
                                    </div>
                                    <div className="single-progress-box">
                                        <p>Investment Strategy</p>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" style={{ width: '70%' }}><span>70%</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-box mt_20">
                                    <p>Phasellus sed cursus erat. Nullam et nulla magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia at mauris at tempus. Nulla sed mi vel lorem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box ml_40">
                            <figure className="image"><img src="assets/images/team/team-7.jpg" alt=""/></figure>
                            <ul className="info-list">
                                <li><i className="icon-47"></i><Link href="tel:91213-6660027">+91-213-666-0027</Link></li>
                                <li><i className="icon-46"></i><Link href="mailto:hallo@hawkins.com">hallo@hawkins.com</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Subscribe/>

        </Layout>
    </div>
    )
}