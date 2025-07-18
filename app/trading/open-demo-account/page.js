'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"

export default function OpenDemoAccount() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Open Demo Account">

                <section className="history-section pt_100 pb_60">
                    <div className="auto-container">
                        <div className="sec-title pb_40">
                            <span className="sub-title mb_14">INFO</span>
                            <h2>Our Opinion</h2>
                            <p>Practice trading with zero risk using real-time market conditions</p>
                        </div>
                        <div className="row clearfix row-deck g-3">
                            <div className="col-lg-6 col-md-12 col-sm-12 history-block">
                                <div className="history-block-one">
                                    <div className="inner-box p-sm-5 p-4 clearfix h-100">
                                        <div>
                                            <h3>Experience the Platform Before You Trade Live</h3>
                                            <p>Opening a demo account is the first step toward becoming a confident and informed trader.
                                                At AUT Investments LTD, our demo account simulates real trading environments using live
                                                market data allowing you to test strategies, explore our platform’s features, and build
                                                confidence without risking your capital.
                                            </p>
                                            <p>Whether you're new to trading or looking to test new approaches, our demo environment gives
                                                you the tools and conditions to practice effectively.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 history-block">
                                <div className="history-block-one">
                                    <div className="inner-box p-sm-5 p-4 clearfix h-100">
                                        <div>
                                            <h3>What is a Demo Trading Account?</h3>
                                            <p>A demo account is a simulated trading environment where you can place buy and sell orders
                                                using virtual funds. It mirrors live markets, providing the same trading conditions, pricing, and
                                                tools as a real account but without financial risk.</p>
                                            <p className="mb-3">It is ideal for:</p>
                                            <ul className="list-style-one clearfix ">
                                                <li>New traders learning how to trade</li>
                                                <li>Experienced traders testing strategies</li>
                                                <li>Users exploring platform features before committing real capital</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="markets-section pt_60 pb_70">
                    <div className="auto-container">
                        <div className="row align-items-center g-3 flex-wrap-reverse">
                            <div className="col-lg-8">
                                <div className="sec-title pb_30 d-none d-lg-block">
                                    <span className="sub-title mb_14">Features of AUT</span>
                                    <h2>Key Features of AUT Investments LTD Demo Account</h2>
                                </div>
                                <div className="row clearfix education-details-content shadow-sm py-5 px-sm-4 px-2 rounded-4" >
                                    <div className="col-12 content-column ">
                                        <div className="text-box">
                                            <ul className="list-item clearfix">
                                                <li className="lh-lg"><b className="fs-6 text-dark">Virtual Funds:</b> <br />Start with a pre-loaded balance of virtual money, so you can learn and test without pressure.</li>
                                                <li className="lh-lg"><b className="fs-6 text-dark">Live Market Conditions:</b> <br />Get real-time quotes, dynamic charts, and live spreads — identical to a live trading environment.</li>
                                                <li className="lh-lg"><b className="fs-6 text-dark">All Asset Classes Available:</b> <br />Trade forex, stocks, indices, metals, commodities, and crypto from a single dashboard. </li>
                                                <li className="lh-lg"><b className="fs-6 text-dark">Access to MT4, MT5, or Web Platform:</b> <br />Choose your preferred platform and test trading with professional tools and automated features. </li>
                                                <li className="lh-lg"><b className="fs-6 text-dark">Unlimited Use Period:</b> <br />Keep your demo account active for as long as you need. No time limits, no hidden conditions. </li>
                                                <li className="lh-lg"><b className="fs-6 text-dark">Risk-Free Learning:</b> <br />Explore risk management techniques like stop-loss and take-profit, without the fear of losing real money.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sec-title pb_30 d-lg-none">
                                    <span className="sub-title mb_14">Features of AUT</span>
                                    <h2>Key Features of AUT Investments LTD Demo Account</h2>
                                </div>
                                <img src="/assets/images/resource/opendemoacc-feature.jpg" alt="" className="rounded" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="feature-account pt_60 pb_100">
                    <div className="auto-container">
                        <div className="sec-title pb_60">
                            <span className="sub-title mb_14">Benefits</span>
                            <h2>Benefits of Using a Demo Account</h2>
                        </div>
                        <div className="inner-container clearfix">
                            <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-35.png)" }}></div>
                            <div className="single-item">
                                <div className="icon-box"><i className="fa fa-thumbs-up fw-lighter"></i></div>
                                <h6>Build Trading Confidence</h6>
                                <p>Familiarize yourself with trading mechanics, order types, and strategies before transitioning to live markets.</p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="fa fa-desktop fw-lighter"></i></div>
                                <h6>Platform Familiarity</h6>
                                <p>Get comfortable with the AUT Investments trading interface, charting tools, and analytical features</p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="fa fa-flask fw-lighter"></i></div>
                                <h6>Strategy Testing</h6>
                                <p>Validate your trading plans, entry/exit strategies, and risk management rules in a real-time market environment.</p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="fa fa-shield-halved fw-lighter"></i></div>
                                <h6>No Financial Risk</h6>
                                <p>Learn from mistakes and improve without affecting your capital.</p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="fa fa-chart-line fw-lighter"></i></div>
                                <h6>Performance Tracking</h6>
                                <p>Monitor results and review trading history to assess your strategy performance.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="working-section apps-section alternat-2 mb_90 pt_100 pb_100">
                    <div className="auto-container">
                        <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-4.png)" }}></div>
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <img src="/assets/images/resource/demo-account-steps.jpg" alt="" className="rounded" />
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                <div className="content_block_nine">
                                    <div className="content-box ml_70">
                                        <div className="sec-title light pb_35">
                                            <span className="sub-title mb_10">Accoutns Steps</span>
                                            <h2>How to Open a Demo Account</h2>
                                        </div>
                                        <div className="inner-box">
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">1</span>
                                                <h3>Register Online</h3>
                                                <p>Complete the simple signup form with your name and email address</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">2</span>
                                                <h3>Choose Your Platform</h3>
                                                <p>Select MT4, MT5, or the AUT web platform for a customized trading experience.</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">3</span>
                                                <h3>Start Trading</h3>
                                                <p>Log in using your demo credentials and begin placing virtual trades.</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">4</span>
                                                <h3>Practice Anytime, Anywhere</h3>
                                                <p>Our platform is compatible with desktop, mobile, and tablet so you can learn on the go.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="account-style-two account-page clear-bg pt_20 pb_70">
                    <div className="auto-container">
                        <div className="sec-title pb_50">
                            <span className="sub-title mb_14">Accounts Info</span>
                            <h2>Who Should Use a Demo Account?</h2>
                        </div>
                        <div className="row clearfix row-deck">
                            <div className="col-xl-3 col-md-6 col-sm-12 account-block mb-4">
                                <div className="account-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box h-100 w-100">
                                        <div className="icon-box"><i className="fa fa-user-graduate"></i></div>
                                        <h3>First-Time Traders</h3>
                                        <p>Testing the waters before investing real money</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12 account-block mb-4">
                                <div className="account-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="inner-box h-100 w-100">
                                        <div className="icon-box"><i className="fa fa-user-tie"></i></div>
                                        <h3>Experienced Traders</h3>
                                        <p>Refining or stress-testing strategies</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12 account-block mb-4">
                                <div className="account-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="inner-box h-100 w-100">
                                        <div className="icon-box"><i className="fa fa-repeat fw-lighter"></i></div>
                                        <h3>Switching Brokers</h3>
                                        <p>Switching Brokers and evaluating execution speed or platform features</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12 account-block mb-4">
                                <div className="account-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box h-100 w-100">
                                        <div className="icon-box"><i className="fa fa-robot fw-lighter"></i></div>
                                        <h3>Algo Traders</h3>
                                        <p>Algo Traders running expert advisor scripts in a controlled environment
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="subscribe-section">
                    <div className="bg-color"></div>
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-5.png)" }}></div>
                            <div className="row align-items-center">
                                <div className="col-12 text-column">
                                    <div className="text-box">
                                        <h2 className="fw-bold">Begin Your Trading Journey Risk-Free</h2>
                                        <p className="text-light fs-6 mt_30">Open your free demo account with AUT Investments LTD and discover the tools, speed, and reliability of our trading environment. Practice. Learn. Grow — all without financial pressure.</p>
                                        <Link className="theme-btn btn-one bg-dark me-3 mt-3" href="/contact">Contact Support</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div >
    )
}