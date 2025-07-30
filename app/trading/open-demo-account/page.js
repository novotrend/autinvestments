'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import {
    BiLike,
    BiDesktop,
    BiShield,
    BiLineChart,
    BiUserCircle,
    BiRefresh,
    BiBot,
    BiComment,
    BiCheckShield
} from 'react-icons/bi'

export default function OpenDemoAccount() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Open Demo Account">

                <section className="history-section pt_100 pb_60">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sec-title pb_40">
                                    <span className="sub-title mb_14">Info</span>
                                    <h2>Our Opinion</h2>
                                    <p>Practice trading with zero risk using real-time market conditions</p>
                                </div>
                                <div className="row clearfix g-3 mb_50 align-items-center justify-content-between">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="clearfix sec-title h-100">
                                            <h2 className="mb-3">Experience the Platform Before You Trade Live</h2>
                                            <p className="mb-3">Opening a demo account is the first step toward becoming a confident and informed trader.
                                                At AUT INVESTMENTS LIMITED, our demo account simulates real trading environments using live
                                                market data allowing you to test strategies, explore our platform’s features, and build
                                                confidence without risking your capital.
                                            </p>
                                            <p>Whether you're new to trading or looking to test new approaches, our demo environment gives
                                                you the tools and conditions to practice effectively.</p>
                                            <Link href="/open-account" className="theme-btn btn-one mt-3">
                                                Open Demo Account
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12 col-sm-12 text-lg-end d-lg-block d-none">
                                        <img src="/assets/images/resource/live-trade.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="row clearfix row-deck g-3 align-items-center justify-content-between">
                                    <div className="col-lg-5 col-md-12 col-sm-12 d-lg-block d-none">
                                        <img src="/assets/images/resource/demo-trade-account.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="clearfix sec-title h-100">
                                            <h2 className="mb-3">What is a Demo Trading Account?</h2>
                                            <p className="mb-3">A demo account is a simulated trading environment where you can place buy and sell orders
                                                using virtual funds. It mirrors live markets, providing the same trading conditions, pricing, and
                                                tools as a real account but without financial risk.</p>
                                            <p className="mb-3">It is ideal for:</p>
                                            <ul className="list-style-one clearfix">
                                                <li>New traders learning how to trade</li>
                                                <li>Experienced traders testing strategies</li>
                                                <li>Users exploring platform features before committing real capital</li>
                                            </ul>
                                            <Link href="/open-account" className="theme-btn btn-one mt-3">
                                                Open Demo Account
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="account-section pt_60 pb_100">
                    <div className="auto-container">
                        <div className="sec-title pb_60">
                            <span className="sub-title mb_14">Benefits</span>
                            <h2>Benefits of Using a Demo Account</h2>
                        </div>
                        <div className="row clearfix row-deck">
                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><BiLike size={30} /></div>
                                        <h3>Build Trading Confidence</h3>
                                        <p>Familiarize yourself with trading mechanics, order types, and strategies before transitioning to live markets.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><BiDesktop size={30} /></div>
                                        <h3>Platform Familiarity</h3>
                                        <p>Get comfortable with the AUT Investments trading interface, charting tools, and analytical features.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><BiCheckShield size={30} /></div>
                                        <h3>Strategy Testing</h3>
                                        <p>Validate your trading plans, entry/exit strategies, and risk management rules in a real-time market environment.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><BiShield size={30} /></div>
                                        <h3>No Financial Risk</h3>
                                        <p>Learn from mistakes and improve without affecting your capital.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-one wow fadeInUp animated" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><BiLineChart size={30} /></div>
                                        <h3>Performance Tracking</h3>
                                        <p>Monitor results and review trading history to assess your strategy performance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="working-section apps-section alternat-2 mb_90 pt_100 pb_100">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12 col-sm-12">
                                <img src="/assets/images/resource/demo-account-steps.jpg" alt="" className="rounded" />
                            </div>
                            <div className="col-lg-7 col-md-12 col-sm-12 content-column">
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
                                                <p>Select MT5, or the AUT web platform for a customized trading experience.</p>
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
                                        <div className="icon-box"><BiUserCircle size={30} /></div>
                                        <h3>First-Time Traders</h3>
                                        <p>Testing the waters before investing real money</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12 account-block mb-4">
                                <div className="account-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="inner-box h-100 w-100">
                                        <div className="icon-box"><BiComment size={30} /></div>
                                        <h3>Experienced Traders</h3>
                                        <p>Refining or stress-testing strategies</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12 account-block mb-4">
                                <div className="account-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="inner-box h-100 w-100">
                                        <div className="icon-box"><BiRefresh size={30} /></div>
                                        <h3>Switching Brokers</h3>
                                        <p>Switching Brokers and evaluating execution speed or platform features</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12 account-block mb-4">
                                <div className="account-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box h-100 w-100">
                                        <div className="icon-box"><BiBot size={30} /></div>
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
                                <div className="col-xl-9 col-lg-8 text-column mb-3">
                                    <div className="text-box">
                                        <h2 className="fw-bold">Begin Your Trading Journey Risk-Free</h2>
                                        <p className="text-light fs-6 mt_30">Open your free demo account with AUT INVESTMENTS LIMITED and discover the tools, speed, and reliability of our trading environment. Practice. Learn. Grow — all without financial pressure.</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4">
                                    <Link className="theme-btn btn-one bg-dark me-3" href="/contact">Contact Support</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </div >
    )
}