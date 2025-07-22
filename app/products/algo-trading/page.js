'use client'
import Layout from "@/components/layout/Layout";
import Link from "next/link"
import { useState } from "react"
import {
    FiSend,
    FiCpu,
    FiClock,
    FiRewind,
    FiMonitor,
    FiServer,
    FiCode,
    FiActivity,
    FiTrendingUp,
    FiShoppingCart,
    FiSettings,
    FiShield,
    FiThumbsUp,
    FiUsers
} from 'react-icons/fi';


export default function AlgoTrading() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Algo Trading">

                <section className="platform-section alternat-2 pt_90 pb_60">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="sec-title pb_20">
                                    <span className="sub-title mb_14">INFO</span>
                                    <h2 className="mb-2">Algo Trading </h2>
                                    <p>
                                        Automate your strategy. Execute trades with speed, precision, and zero emotion.
                                    </p>
                                </div>
                                <section className="funfact-section">
                                    <div className="auto-container px-0">
                                        <div className="inner-container d-flex flex-column p-sm-5 p-4 aligh-items-start justify-content-start">
                                            <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-16.png)" }}></div>
                                            <h4 className="mb-3">What is Algo Trading ?</h4>

                                            <p className="mb-3">
                                                Algo Trading, short for Algorithmic Trading, is the use of computer-coded strategies to execute
                                                trades automatically based on pre-defined rules. These rules can include price, volume, timing,
                                                technical indicators, and even complex mathematical models. Once set up, the algorithm runs
                                                continuously, monitoring the markets and placing trades without manual intervention.
                                            </p>
                                            <p>
                                                At AUT Investments Limited, we offer a high-performance infrastructure for traders and
                                                developers to create, backtest, deploy, and manage automated trading systems across multiple
                                                asset classes — including forex, indices, stocks, commodities, metals.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="account-style-two clear-bg pt_80 pb_70">
                    <div className="auto-container">
                        <div className="sec-title pb_50">
                            <span className="sub-title mb_14">Automation</span>
                            <h2>Why Choose Algo Trading with AUT Investments Limited?</h2>
                        </div>

                        <div className="row clearfix row-deck">
                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><FiSend size={40} /></div>
                                        <h3>Ultra-Fast Execution</h3>
                                        <p>Trade at speeds no human can match, ideal for scalping, arbitrage, and high-frequency strategies.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><FiCpu size={40} /></div>
                                        <h3>Emotion-Free Trading</h3>
                                        <p>Eliminate impulsive decisions. Algorithms follow logic, not fear or greed.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><FiClock size={40} /></div>
                                        <h3>24/5 Market Monitoring</h3>
                                        <p>Never miss an opportunity. Let your algorithm run continuously through live market hours.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><FiRewind size={40} /></div>
                                        <h3>Backtesting Environment</h3>
                                        <p>Test your strategy using historical data before deploying it in a live environment.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><FiMonitor size={40} /></div>
                                        <h3>Full MT5 Compatibility</h3>
                                        <p>Build and run Expert Advisors (EAs) using MQL4 or MQL5, with direct integration to MetaTrader platforms.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="1000ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><FiServer size={40} /></div>
                                        <h3>Infrastructure Optimized for Speed & Stability</h3>
                                        <p>Enjoy low-latency execution, deep liquidity, and a server environment engineered for algorithmic trading.</p>
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
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="sec-title light pb_35 d-lg-none">
                                    <span className="sub-title mb_10">Steps</span>
                                    <h2>How to Get Started with Algo Trading at AUT Investments Limited</h2>
                                </div>
                                <img src="/assets/images/resource/socialtrading.jpg" alt="" className="rounded" />
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                <div className="content_block_nine">
                                    <div className="content-box ml_70">
                                        <div className="sec-title light pb_35 d-none d-lg-block">
                                            <span className="sub-title mb_10">Steps</span>
                                            <h2>How to Get Started with Algo Trading at AUT Investments Limited</h2>
                                        </div>
                                        <div className="inner-box">
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">1</span>
                                                <h3>
                                                    Open a Trading Account</h3>
                                                <p>
                                                    Choose MT4 or MT5 as your preferred platform during signup.</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">2</span>
                                                <h3>
                                                    Develop or Upload Your Algorithm</h3>
                                                <p>
                                                    Use MQL4 or MQL5 to code your strategy, or choose from pre-built EAs.</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">3</span>
                                                <h3>
                                                    Test on a Demo Account</h3>
                                                <p>
                                                    Run simulations using live market conditions to test performance.</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">4</span>
                                                <h3>
                                                    Deploy in Live Market</h3>
                                                <p>
                                                    Transfer your EA to a live account and monitor results in real-time.</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">5</span>
                                                <h3>
                                                    Optimize & Monitor</h3>
                                                <p>
                                                    Use strategy testing tools and live analytics to improve efficiency and reduce drawdowns.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="feature-account pt_80 pb_100">
                    <div className="auto-container">
                        <div className="sec-title pb_60">
                            <span className="sub-title mb_14">Toolkit</span>
                            <h2>Algo Trading Tools & Resources</h2>
                        </div>

                        <div className="inner-container clearfix">
                            <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-35.png)" }}></div>

                            <div className="single-item">
                                <div className="icon-box"><FiCode size={40} /></div>
                                <h4>MetaEditor (MT4/MT5)</h4>
                                <p className="mt-3">Code and modify trading algorithms</p>
                            </div>

                            <div className="single-item">
                                <div className="icon-box"><FiActivity size={40} /></div>
                                <h4>Strategy Tester</h4>
                                <p className="mt-3">Run backtests using historical data</p>
                            </div>

                            <div className="single-item">
                                <div className="icon-box"><FiTrendingUp size={40} /></div>
                                <h4>Tick Charts & Custom Feeds</h4>
                                <p className="mt-3">Fine-tune high-frequency strategies</p>
                            </div>

                            <div className="single-item">
                                <div className="icon-box"><FiShoppingCart size={40} /></div>
                                <h4>EA Marketplace</h4>
                                <p className="mt-3">Access free and premium algorithmic bots</p>
                            </div>

                            <div className="single-item">
                                <div className="icon-box"><FiServer size={40} /></div>
                                <h4>VPS Hosting</h4>
                                <p className="mt-3">Run EAs 24/7 without platform downtime</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="trading-style-four pt_100 pb_100">
                    <div className="auto-container">
                        <div className="sec-title pb_60">
                            <span className="sub-title mb_14">Precision</span>
                            <h2>Automate Your Edge with Intelligent Algo Trading</h2>
                        </div>
                        <div className="tabs-box">
                            <ul className="tab-btns tab-buttons clearfix border-bottom text-center">
                                <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>
                                    <div className="icon-box"><FiSettings size={28} /></div>
                                    <h4>Key Features</h4>
                                </li>
                                <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>
                                    <div className="icon-box"><FiShield size={28} /></div>
                                    <h4>Security & Privacy</h4>
                                </li>
                                <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>
                                    <div className="icon-box"><FiThumbsUp size={28} /></div>
                                    <h4>Top Reasons</h4>
                                </li>
                                <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}>
                                    <div className="icon-box"><FiUsers size={28} /></div>
                                    <h4>Social vs Copy Trading</h4>
                                </li>
                            </ul>

                            <div className="tabs-content">
                                <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                    <div className="row align-items-center">
                                        <div className="col-md-12 col-sm-12 content-column">
                                            <div className="content_block_three">
                                                <div className="content-box mr_30">
                                                    <div className="award-section pt_60 pb_100">
                                                        <div className="auto-container">
                                                            <div className="sec-title pb_60">
                                                                <h2>What You Can Automate</h2>
                                                            </div>
                                                            <div className="table-outer">
                                                                <table className="award-table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Type of Strategy</th>
                                                                            <th>Examples</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>Trend Following</td>
                                                                            <td>Moving Average Crossovers, RSI Momentum Triggers</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Arbitrage</td>
                                                                            <td>Price discrepancies across instruments or markets</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Scalping</td>
                                                                            <td>Rapid-fire trades based on volume and tick data</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Breakout Strategies</td>
                                                                            <td>Entering trades during key support/resistance breaches</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>News-Based Trading</td>
                                                                            <td>Volatility spikes triggered by economic announcements</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Portfolio Rebalancing</td>
                                                                            <td>Scheduled, rule-based allocation adjustments</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
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
                                                <div className="content-box">
                                                    <h2>Who is Algo Trading For?</h2>
                                                    <ul className="list-style-one clearfix">
                                                        <li> <b> Retail Traders </b> looking to automate repetitive setups</li>
                                                        <li> <b> Professional Traders </b> managing portfolios at scale</li>
                                                        <li> <b> Developers & Quants </b> creating data-driven strategies</li>
                                                        <li> <b> Hedge Fund Models & Signal Providers </b> deploying advanced algorithms</li>
                                                        <li> <b> Systematic Traders </b> who rely on rules, not speculation</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                                    <div className="row align-items-center">
                                        <div className="col-md-12 col-sm-12 content-column">
                                            <div className="content_block_three">
                                                <div className="content-box">
                                                    <h2 className="mb-4">Key Features of Our Algo Trading Environment</h2>
                                                    <ul className="list-style-one clearfix">
                                                        <li>
                                                            <h4>Expert Advisor (EA) Hosting Support</h4>
                                                            <p>
                                                                – Seamless integration with MetaTrader for creating and managing automated strategies.
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <h4>VPS Hosting (Optional Add-on)</h4>
                                                            <p>
                                                                – Keep your bots running 24/7 with high-speed, low-latency virtual private servers.
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <h4>Historical Market Data</h4>
                                                            <p>
                                                                – Access quality tick-level data for better strategy backtesting and refinement.
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <h4>Custom Indicator Integration</h4>
                                                            <p>
                                                                – Build or import your own indicators to use within your EAs.
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <h4>Multi-Asset Capability</h4>
                                                            <p>
                                                                – Automate trades across forex, indices, commodities, and digital assets — all from single account.

                                                            </p>
                                                        </li>
                                                        <li>
                                                            <h4>Risk Management Automation</h4>
                                                            <p>
                                                                – Set predefined take-profit, stop-loss, trailing stops, and equity protection rules.
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 4 ? "tab active-tab" : "tab"}>
                                    <div className="row align-items-center">
                                        <div className="col-md-12 col-sm-12 content-column">
                                            <div className="content_block_three">
                                                <div className="content-box">
                                                    <h2>Benefits at a Glance</h2>
                                                    <ul className="list-style-one clearfix">
                                                        <li>Instant execution of trading signals</li>
                                                        <li>Unbiased, rules-based trading logic</li>
                                                        <li>Higher accuracy for repetitive tasks</li>
                                                        <li>Ability to scale across instruments and timeframes</li>
                                                        <li>Continuous strategy optimization through analytics</li>
                                                        <li>24/5 market presence without manual effort</li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
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
                                        <h2 className="fw-bold">Automate with Confidence. Trade with Intelligence.</h2>
                                        <p className="text-light fs-6 mt_30">
                                            With AUT Investments Limited’s Algo Trading environment, you're not just keeping up with the
                                            market — you're staying ahead of it. Whether you're building from scratch or using a pre-built
                                            strategy, automate your edge and experience trading the smart way.
                                        </p>
                                        <Link href="/contact" className="theme-btn btn-one bg-dark mt-4">
                                            Contact Support
                                        </Link>
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