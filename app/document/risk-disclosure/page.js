'use client'
import Layout from "@/components/layout/Layout";
import Link from "next/link"
import { useState } from "react"
import VideoPopup from "@/components/elements/VideoPopup"

export default function RiskDisclosure() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Risk Disclosure">
                <section className="platform-section alternat-2 pt_90 pb_60">
                    <div className="auto-container">
                        <div className="row align-items-center g-3">
                            <div className="col-lg-4">
                                <div className="sec-title pb_20 d-lg-none">
                                    <span className="sub-title mb_14">INFO</span>
                                    <h2 className="mb-2">Risk Disclosure</h2>
                                    <p>Trading involves risk. Understand it before you begin.
                                    </p>
                                </div>
                                <img src="/assets/images/resource/riskdisclosure.jpg" alt="" className="rounded" />
                            </div>
                            <div className="col-lg-8">
                                <div className="sec-title pb_20 d-none d-lg-block">
                                    <span className="sub-title mb_14">INFO</span>
                                    <h2 className="mb-2">Risk Disclosure</h2>
                                    <p>Trading involves risk. Understand it before you begin.
                                    </p>
                                </div>
                                <section className="funfact-section">
                                    <div className="auto-container px-0">
                                        <div className="inner-container d-flex flex-column p-sm-5 p-4 aligh-items-start justify-content-start">
                                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
                                            <h4 className="text-dark fw-semibold mb-3">Purpose of This Risk Disclosure</h4>
                                            <p>AUT Investments LTD is committed to providing full transparency about the potential risks
                                                involved in trading financial instruments. This document is intended to help clients make
                                                informed decisions by outlining the nature of the risks associated with <b> Forex, CFDs, Indices,
                                                    Metals, Stocks, Cryptocurrencies, and Commodities.</b>
                                            </p>
                                            <p className="mt-3">By opening an account or using our services, you acknowledge that you understand and accept these risks.</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="process-section">
                    <div className="auto-container">
                        <div className="inner-container pt_100 pb_70">
                            <div className="sec-title pb_20">
                                <span className="sub-title mb_14">TRADING</span>
                                <h2>General Trading Risks</h2>
                            </div>
                            <div className="row clearfix">
                                <div className="col-12 content-column">
                                    <div className="content-box row row-deck">
                                        <div className="process-block-one col-md-6">
                                            <div className="inner-box">
                                                <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                                                <span className="count-text">1</span>
                                                <h3>Market Volatility</h3>
                                                <p>
                                                    Prices of financial instruments can change rapidly and unpredictably due to global
                                                    events, economic data, political developments, or technical factors. Such volatility may
                                                    result in significant gains — or losses — in a very short time.


                                                </p>
                                            </div>
                                        </div>
                                        <div className="process-block-one col-md-6">
                                            <div className="inner-box">
                                                <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                                                <span className="count-text">2</span>
                                                <h3>Leverage Risk</h3>
                                                <p>
                                                    Trading on margin allows you to control larger positions with a smaller deposit. While
                                                    this can amplify profits, it equally increases the potential for losses, possibly exceeding
                                                    your initial investment.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="process-block-one col-md-6">
                                            <div className="inner-box">
                                                <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                                                <span className="count-text">3</span>
                                                <h3>No Guaranteed Returns</h3>
                                                <p>
                                                    Trading is speculative. There is no guarantee of profit or protection against loss. Past
                                                    performance of any trader, strategy, or instrument is not a reliable indicator of future
                                                    performance.

                                                </p>
                                            </div>
                                        </div>
                                        <div className="process-block-one col-md-6">
                                            <div className="inner-box">
                                                <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                                                <span className="count-text">4</span>
                                                <h3>Market Gaps</h3>
                                                <p>
                                                    Sudden price movements or “gaps” can occur when the market opens after a weekend,
                                                    holiday, or economic event, causing orders to be filled at worse-than-expected prices.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="process-block-one col-md-6">
                                            <div className="inner-box">
                                                <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                                                <span className="count-text">5</span>
                                                <h3>Liquidity Risk</h3>
                                                <p>
                                                    In certain market conditions, it may become difficult to close a position, especially with
                                                    less frequently traded instruments. This may affect your ability to limit losses.

                                                </p>
                                            </div>
                                        </div>
                                        <div className="process-block-one col-md-6">
                                            <div className="inner-box">
                                                <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                                                <span className="count-text">6</span>
                                                <h3>Execution Risk</h3>
                                                <p>
                                                    Orders may not be executed at expected prices due to factors such as latency, slippage,
                                                    or fast-moving markets. Delays in order execution can lead to unfavorable outcomes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="account-section mt_60 pt_60 pb_70">
                    <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-1.png)" }}></div>
                    <div className="auto-container">
                        <div className="sec-title pb_60">
                            <span className="sub-title mb_14">Variability</span>
                            <h2>Product-Specific Risks</h2>
                        </div>
                        <div className="row clearfix row-deck">
                            <div className="col-md-6 col-sm-12 account-block">
                                <div className="account-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="fa fa-money-bill fw-lighter"></i></div>
                                        <h3>Forex and CFDs</h3>
                                        <div className="education-details-content">
                                            <div className="text-box">
                                                <ul className="list-item clearfix">
                                                    <li className="lh-md">Prices are highly sensitive to economic data, central bank decisions, and geopolitical developments.</li>
                                                    <li className="lh-md">The use of high leverage can lead to rapid losses.</li>
                                                    <li className="lh-md">Not all CFD markets may be available during all trading hours.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 account-block">
                                <div className="account-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="fa fa-chart-line fw-lighter"></i></div>
                                        <h3>Stocks & Indices</h3>
                                        <div className="education-details-content">
                                            <div className="text-box">
                                                <ul className="list-item clearfix">
                                                    <li className="lh-md">Prices are influenced by company performance, earnings, mergers, and broader market sentiment.</li>
                                                    <li className="lh-md">Corporate actions (e.g., dividends, stock splits) can impact open positions.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 account-block">
                                <div className="account-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="fa fa-scale-unbalanced fw-lighter"></i></div>
                                        <h3>Commodities & Metals</h3>
                                        <div className="education-details-content">
                                            <div className="text-box">
                                                <ul className="list-item clearfix">
                                                    <li className="lh-md">Influenced by seasonal demand, global supply chain issues, and geopolitical tensions.</li>
                                                    <li className="lh-md">High price volatility is common, especially in energy and precious metals.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 account-block">
                                <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="fa fa-brands fa-bitcoin fw-lighter"></i></div>
                                        <h3>Cryptocurrencies</h3>
                                        <div className="education-details-content">
                                            <div className="text-box">
                                                <ul className="list-item clearfix">
                                                    <li className="lh-md">Extremely volatile and affected by speculative trading, regulatory developments, security breaches, and technological shifts.</li>
                                                    <li className="lh-md">Market prices can fluctuate significantly even within minutes.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="trading-style-four pt_100 pb_100">
                    <div className="auto-container">
                        <div className="sec-title pb_60">
                            <span className="sub-title mb_14">Resilience</span>
                            <h2>Risk Awareness</h2>
                        </div>
                        <div className="tabs-box">
                            <ul className="tab-btns tab-buttons clearfix">
                                <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>
                                    <div className="icon-box"><i className="fa fa-microchip fw-lighter"></i></div>
                                    <h4>Technical & System Risks</h4>
                                </li>
                                <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>
                                    <div className="icon-box"><i className="fa fa-scale-balanced fw-lighter"></i></div>
                                    <h4>Legal & Regulatory Risks</h4>
                                </li>
                                <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>
                                    <div className="icon-box"><i className="fa fa-user-shield fw-lighter"></i></div>
                                    <h4>Client Responsibility</h4>
                                </li>
                            </ul>
                            <div className="tabs-content">
                                <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                    <div className="row align-items-center">
                                        <div className="col-md-12 col-sm-12 content-column">
                                            <div className="content_block_three">
                                                <div className="content-box mr_30">
                                                    <h2>Technical & System Risks</h2>
                                                    <div className="education-details-content">
                                                        <div className="text-box">
                                                            <ul className="list-item clearfix">
                                                                <li className="lh-md">
                                                                    <b className="fs-6 text-dark">Platform Downtime:</b> <br></br>Technology failures, internet disruptions, or server outages can limit access to the platform and prevent order placement or execution.
                                                                </li>
                                                                <li className="lh-md">
                                                                    <b className="fs-6 text-dark">Third-Party Risks:</b> <br></br>
                                                                    AUT Investments LTD is not responsible for any delays or failures caused by third-party providers such as internet services, data vendors, payment processors, or VPS hosts.
                                                                </li>
                                                                <li className="lh-md">
                                                                    <b className="fs-6 text-dark">Execution Delays:</b> <br></br>
                                                                    During high volatility, orders may experience slippage or partial fills. Automated systems (including EAs) are not immune to these delays.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="forex">
                                    <div className="row align-items-center">
                                        <div className="col-md-12 col-sm-12 content-column">
                                            <div className="content_block_three">
                                                <div className="content-box mr_30">
                                                    <h2>Legal & Regulatory Risks</h2>
                                                    <div className="education-details-content">
                                                        <div className="text-box">
                                                            <ul className="list-item clearfix">
                                                                <li className="lh-md">
                                                                    <b className="fs-6 text-dark">Regulatory Changes:</b><br />
                                                                    Trading conditions, leverage limits, and market access may change based on regulatory decisions in your jurisdiction. Such changes may affect open or future trades.
                                                                </li>
                                                                <li className="lh-md">
                                                                    <b className="fs-6 text-dark">Jurisdictional Restrictions:</b><br />
                                                                    Some financial instruments or trading features may not be available to residents in certain countries due to legal restrictions.
                                                                </li>
                                                                <li className="lh-md">
                                                                    <b className="fs-6 text-dark">Tax Implications:</b><br />
                                                                    Clients are solely responsible for understanding and complying with any tax obligations related to their trading activities.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="overview">
                                    <div className="row align-items-center">
                                        <div className="col-md-12 col-sm-12 content-column">
                                            <div className="content_block_three">
                                                <div className="content-box mr_30">
                                                    <h2>Client Responsibility</h2>
                                                    <div className="education-details-content">
                                                        <div className="text-box">
                                                            <ul className="list-item clearfix">
                                                                <li className="lh-md">You are responsible for understanding the products you trade, how leverage works, and the implications of your trading decisions</li>
                                                                <li className="lh-md">You must ensure your account is adequately funded to maintain open positions and manage margin requirements.</li>
                                                                <li className="lh-md">It is your duty to monitor your trades and adjust or close them based on changing market conditions.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="working-section apps-section alternat-2 pt_120 pb_120 pt_100 pb_100">
                    <div className="auto-container">
                        <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-4.png)" }}></div>
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12 col-sm-12 video-column">
                                <div className="video_block_one">
                                    <div className="video-box z_1 p_relative pt_50 pb_30 centred">
                                        <div className="video-inner">
                                            <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/resource/video-2.jpg)" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                <div className="content_block_nine">
                                    <div className="content-box ml_70">
                                        <div className="sec-title light pb_35">
                                            <span className="sub-title mb_10">Easy Steps</span>
                                            <h2>Risk Mitigation Best Practices</h2>
                                        </div>
                                        <div className="inner-box p-4">
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">1</span>
                                                <p><b>Start with a Demo Account</b>  to understand platform mechanics</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">2</span>
                                                <p><b>Use Stop-Loss and Take-Profit</b> orders for risk control</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">3</span>
                                                <p><b>Trade with Capital You Can Afford to Lose</b></p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">4</span>
                                                <p><b>Limit Leverage Usage,</b> especially as a beginner</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">5</span>
                                                <p><b>Diversify Your Portfolio</b>  across asset classes</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">6</span>
                                                <p><b>Stay Informed</b>  on market news, events, and economic releases</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">7</span>
                                                <p><b>Avoid Emotional Trading</b> — stick to your strategy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="platform-section alternat-2 pt_90 pb_60">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="sec-title pb_20">
                                    <span className="sub-title mb_14">Note</span>
                                    <h2 className="mb-2">Final Note</h2>
                                </div>
                                <section className="funfact-section">
                                    <div className="auto-container px-0">
                                        <div className="inner-container d-flex flex-column p-sm-5 p-4 aligh-items-start justify-content-start">
                                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
                                            <p>Trading involves <b>substantial risk </b> and may not be suitable for all investors. Before trading, you
                                                should carefully consider your financial objectives, experience level, and risk tolerance. If
                                                needed, seek independent financial advice.

                                            </p>
                                            <p className="mt-3">By opening an account or using our services, you acknowledge that you understand and accept these risks.AUT Investments LTD provides tools and educational resources to support risk-aware trading, but <b> ultimate responsibility lies with the client.</b></p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="subscribe-section">
                    <div className="bg-color"></div>
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}></div>
                            <div className="row align-items-center">
                                <div className="col-12 text-column">
                                    <div className="text-box">
                                        <h2 className="fw-bold">Trade Responsibly. Stay Informed.</h2>
                                        <p className="text-light fs-6 mt_30">Understanding risk is the first step toward successful trading. At AUT Investments LTD, we’re committed to transparency, control, and equipping you with everything you need to navigate the markets responsibly.</p>
                                        <Link className="theme-btn btn-one bg-dark me-3 mt-3" href="/contact">Contact Support</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </div>
    );
} 