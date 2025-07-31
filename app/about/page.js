'use client';

import Layout from "@/components/layout/Layout";
import Link from "next/link"
import {
    FiZap,
    FiMonitor,
    FiGlobe,
    FiShield,
    FiBookOpen,
    FiHeadphones,
    FiCheckCircle,
    FiUsers,
    FiLock,
    FiUnlock,
    FiAward,
    FiCreditCard,
    FiEye,
    FiUser,
    FiLink,
    FiBriefcase
} from 'react-icons/fi';

export default function about() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About">
                <section className="platform-section alternat-2 pt_90 pb_60">
                    <div className="auto-container">
                        <div className="row align-items-center g-3 flex-wrap-reverse">
                            <div className="col-lg-8">
                                <section className="funfact-section">
                                    <div className="auto-container px-0">
                                        <div className="d-flex flex-column align-items-start justify-content-start">
                                            <div className="sec-title pb_20">
                                                <span className="sub-title mb_14">About Us</span>
                                                <h2 className="mb-2">Empowering Traders. Enabling Confidence.</h2>
                                            </div>
                                            <h3 className="mb-2">Our Mission</h3>
                                            <p>
                                                To provide a transparent, secure, and client-first trading environment where individuals and
                                                institutions can access global markets with confidence, control, and clarity.
                                            </p>
                                            <p>
                                                We believe in democratizing financial trading through technology, regulation, and integrity—
                                                helping our clients trade smarter, not harder.
                                            </p>
                                            <h3 className="mt-4 mb-2">Who We Are</h3>
                                            <p>
                                                AUT Investments Limited is a multi-asset financial services provider offering seamless access to
                                                global markets including Forex, Commodities, Indices, Metals, Crypto, and Stocks. Built on a
                                                foundation of innovation, regulation, and technology, we empower traders of all levels with
                                                intuitive platforms, advanced tools, and unwavering support.
                                            </p>
                                            <p>
                                                Our services are tailored for retail traders, institutional investors, affiliates, and financial
                                                partners looking for reliable market execution, real-time data, and ethical brokerage solutions.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-lg-4">
                                <img src="/assets/images/resource/about-us.png" alt="" className="rounded" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="account-section pt_100 pb_70">
                    <div className="auto-container">
                        <div className="sec-title pb_60">
                            <span className="sub-title mb_14">Offer</span>
                            <h2>What We Offer</h2>
                        </div>

                        <div className="row clearfix row-deck">

                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><FiZap size={28} /></div>
                                        <h3>Tight Spreads & Fast Execution</h3>
                                        <p>Trade with competitive pricing and lightning-fast order execution across all asset classes.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><FiMonitor size={28} /></div>
                                        <h3>MT5 Platforms</h3>
                                        <p>Access powerful, professional trading platforms for desktop, mobile, and web.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><FiGlobe size={28} /></div>
                                        <h3>Wide Market Coverage</h3>
                                        <p>Choose from 100+ instruments across Forex, Crypto, Stocks, Commodities, and more.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><FiShield size={28} /></div>
                                        <h3>Security & Transparency</h3>
                                        <p>Your funds are held in segregated accounts, and we follow strict compliance and AML protocols.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-one wow fadeInUp animated" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><FiBookOpen size={28} /></div>
                                        <h3>Educational Resources</h3>
                                        <p>Get access to expert insights, trading tools, and market analysis.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-one wow fadeInUp animated" data-wow-delay="1000ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><FiHeadphones size={28} /></div>
                                        <h3>Multilingual Client Support</h3>
                                        <p>Our global support team is available 24/5 for technical, operational, and trading assistance.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="process-section">
                    <div className="auto-container">
                        <div className="inner-container pt_100 pb_70">
                            <div className="sec-title pb_60">
                                <span className="sub-title mb_14">Values</span>
                                <h2>Our Values</h2>
                            </div>

                            <div className="row clearfix">
                                <div className="col-12 content-column">
                                    <div className="content-box row g-0">

                                        <div className="process-block-one col-md-6 d-flex p-3">
                                            <div className="inner-box w-100 mb-0">
                                                <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                                                <span className="count-text">1</span>
                                                <h3><FiCheckCircle className="me-2" size={25} />Integrity</h3>
                                                <p>Every trade, interaction, and transaction is built on honesty and transparency.</p>
                                            </div>
                                        </div>

                                        <div className="process-block-one col-md-6 d-flex p-3">
                                            <div className="inner-box w-100 mb-0">
                                                <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                                                <span className="count-text">2</span>
                                                <h3><FiZap className="me-2" size={25} />Innovation</h3>
                                                <p>We embrace and deliver cutting-edge solutions to empower traders.</p>
                                            </div>
                                        </div>

                                        <div className="process-block-one col-md-6 d-flex p-3">
                                            <div className="inner-box w-100 mb-0">
                                                <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                                                <span className="count-text">3</span>
                                                <h3><FiUsers className="me-2" size={25} />Client-Centricity</h3>
                                                <p>Our strategies, services, and support revolve around your success.</p>
                                            </div>
                                        </div>

                                        <div className="process-block-one col-md-6 d-flex p-3">
                                            <div className="inner-box w-100 mb-0">
                                                <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                                                <span className="count-text">4</span>
                                                <h3><FiLock className="me-2" size={25} />Security</h3>
                                                <p>Protecting your data, funds, and trust is our top priority.</p>
                                            </div>
                                        </div>

                                        <div className="process-block-one col-md-6 d-flex p-3">
                                            <div className="inner-box w-100 mb-0">
                                                <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                                                <span className="count-text">5</span>
                                                <h3><FiUnlock className="me-2" size={25} />Accessibility</h3>
                                                <p>From demo accounts to advanced tools, we make trading available to all.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="feature-account pt_60 pb_100">
                    <div className="auto-container">
                        <div className="sec-title pb_60">
                            <span className="sub-title mb_14">Why Choose Us</span>
                            <h2>Why Choose AUT Investments Limited?</h2>
                        </div>

                        <div className="inner-container clearfix">
                            <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-35.png)" }}></div>

                            <div className="single-item">
                                <div className="icon-box"><FiGlobe size={40} /></div>
                                <h6>Global Reach, Local Understanding</h6>
                                <p>While we operate across international markets, we understand local needs and regulatory expectations.</p>
                            </div>

                            <div className="single-item">
                                <div className="icon-box"><FiAward size={40} /></div>
                                <h6>Multi-Licensed & Compliant</h6>
                                <p>Operating under strict regulatory frameworks ensures security and ethical operations.</p>
                            </div>

                            <div className="single-item">
                                <div className="icon-box"><FiCreditCard size={40} /></div>
                                <h6>Segregated Funds</h6>
                                <p>All client funds are maintained in segregated bank accounts with Tier-1 institutions.</p>
                            </div>

                            <div className="single-item">
                                <div className="icon-box"><FiZap size={40} /></div>
                                <h6>Innovative Products</h6>
                                <p>From <b>Copy Trading</b> to <b>Algo Trading,</b> we offer tools designed for modern traders.</p>
                            </div>

                            <div className="single-item">
                                <div className="icon-box"><FiEye size={40} /></div>
                                <h6>Transparent Conditions</h6>
                                <p>No hidden fees. No surprises. Just clear, accessible, and fair trading conditions.</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="apps-style-two pt_80 pb_80">
                    <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-10.png)" }}></div>
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 content-column">
                                <div className="content_block_four">
                                    <div className="content-box ml_80">
                                        <div className="sec-title light pb_30">
                                            <span className="sub-title mb_14">Commitment</span>
                                            <h2>Regulatory Commitment</h2>
                                            <p className="mb-3">AUT Investments Limited is committed to compliance with global regulatory standards. We adhere
                                                to anti-money laundering (AML) protocols, Know Your Customer (KYC) regulations, and data
                                                protection policies to ensure a safe and responsible trading environment.</p>
                                            <p>All operations and transactions are monitored in accordance with regional and international
                                                financial laws.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="funfact-style-two mt_90 mb_90">
                    <div className="auto-container">
                        <div className="sec-title pb_30">
                            <span className="sub-title mb_14">Clients</span>
                            <h2>Our Clients</h2>
                        </div>
                        <div className="inner-container">
                            <div className="row clearfix justify-content-center g-sm-4 g-3 pairs">

                                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                                    <div className="funfact-block-two mb-0 pb-0">
                                        <div className="inner-box text-start shadow-sm">
                                            <div className="count-outer mb-2">
                                                <FiUser size={45} />
                                                <p className="text-capitalize fs-3 mt-4">Individual Traders</p>
                                            </div>
                                            <p className="fs-6">Beginner to advanced traders from around the world.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                                    <div className="funfact-block-two mb-0 pb-0">
                                        <div className="inner-box text-start shadow-sm">
                                            <div className="count-outer mb-2">
                                                <FiUsers size={45} />
                                                <p className="text-capitalize fs-3 mt-4">IBs & Brokers</p>
                                            </div>
                                            <p className="fs-6">Introducing brokers and IBs partnering for growth.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                                    <div className="funfact-block-two mb-0 pb-0">
                                        <div className="inner-box text-start shadow-sm">
                                            <div className="count-outer mb-2">
                                                <FiZap size={45} />
                                                <p className="text-capitalize fs-3 mt-4">Fintech Entrepreneurs</p>
                                            </div>
                                            <p className="fs-6">Innovators building new financial solutions and platforms.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                                    <div className="funfact-block-two mb-0 pb-0">
                                        <div className="inner-box text-start shadow-sm">
                                            <div className="count-outer mb-2">
                                                <FiLink size={45} />
                                                <p className="text-capitalize fs-3 mt-4">Affiliate Marketers</p>
                                            </div>
                                            <p className="fs-6">Partners driving growth through digital marketing and referrals.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                                    <div className="funfact-block-two mb-0 pb-0">
                                        <div className="inner-box text-start shadow-sm">
                                            <div className="count-outer mb-2">
                                                <FiBriefcase size={45} />
                                                <p className="text-capitalize fs-3 mt-4">Institutional Investors</p>
                                            </div>
                                            <p className="fs-6">Fund managers and institutions seeking robust trading solutions.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="office-section pt_60 pb_60 mb_60">
                    <div className="auto-container">
                        <div className="sec-title pb_30">
                            <span className="sub-title mb_14">Our Offices</span>
                            <h2>Head Office</h2>
                        </div>
                        <div className="row justify-content-center g-3">
                            <div className="col-lg-5 col-md-6">
                                <div className="office-block funfact-section">
                                    <h5 className="mb-3 fw-bold">AUT Investments Limited</h5>
                                    <ul className="list-unstyled mb-3">
                                        <li>6th Floor, Ken Lee Building</li>
                                        <li>20 Edith Cavell Street</li>
                                        <li>Port-Louis, 11302</li>
                                        <li>Mauritius</li>
                                    </ul>
                                    <p className="mb-1"><b>Support Hours:</b> Monday to Friday – 09:00 to 18:00 (GMT+4)</p>
                                    <div class="inner-container mt-3"><div class="row align-items-center"><div class="col-12 text-column"><div class="text-box"><h2 class="fw-bold">Join Us</h2><p class="fs-6 mt_30">Whether you want to trade, invest, partner, or learn—AUT Investments Limited gives you the access, guidance, and resources to achieve your financial goals.</p><a class="theme-btn btn-two bg-dark mt-4" href="/contact">Contact Support</a></div></div></div></div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 d-md-block d-none">
                                <img src="/assets/images/resource/head-office.jpg" alt="Head Office" className="rounded img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}