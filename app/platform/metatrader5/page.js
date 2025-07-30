"use client";
import Layout from "@/components/layout/Layout";
import { useEffect } from "react";
import Link from "next/link";

export default function MetaTrader5Page() {
    useEffect(() => {
        if (typeof window !== "undefined" && window.location.hash) {
            const id = window.location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="MetaTrader 5 (MT5)">
                <section className="platform-section alternat-2 pt_90 pb_60">
                    <div className="auto-container">
                        <div className="row align-items-center g-3 flex-wrap-reverse justify-content-between">
                            <div className="col-lg-5">
                                <div className="sec-title pb_20 d-none d-lg-block">
                                    <span className="sub-title mb_14">Info</span>
                                    <h2 className="mb-3">An Advanced Trading Platform for Modern Traders</h2>
                                    <p>
                                        Trade smarter with next-generation features, deeper insights, and multi-asset capabilities.
                                    </p>
                                </div>
                                <section className="funfact-section my-2">
                                    <div className="auto-container px-0">
                                        <div className="inner-container d-flex flex-column align-items-start justify-content-start">
                                            <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-35.png)" }}></div>
                                            <p>
                                                MetaTrader 5 (MT5) is the upgraded, multi-asset trading platform designed for traders who
                                                demand speed, flexibility, and analytical depth. Whether you're trading forex, stocks,
                                                commodities, indices, MT5 delivers a seamless trading experience
                                                backed by superior execution and institutional-grade infrastructure.
                                            </p>
                                            <p className="mt-3">
                                                At AUT INVESTMENTS LIMITED, we empower you to trade on MT5 across desktop, web, and mobile,
                                                supported by real-time data, advanced charting tools, and integrated algorithmic trading features.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-lg-5 text-lg-end">
                                <div className="sec-title pb_20 d-lg-none">
                                    <span className="sub-title mb_14">Info</span>
                                    <h2 className="mb-2">An Advanced Trading Platform for Modern Traders</h2>
                                    <p>
                                        Trade smarter with next-generation features, deeper insights, and multi-asset capabilities.
                                    </p>
                                </div>
                                <img src="/assets/images/resource/metatrader_5-info.jpg" alt="Trade with Confidence Using MetaTrader 5" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="markets-section pt_60 pb_70">
                    <div className="auto-container">
                        <div className="row align-items-center g-3">
                            <div className="sec-title pb_30">
                                <span className="sub-title mb_14">Why MetaTrader 5 With AUT</span>
                                <h2>Why Trade on MetaTrader 5 with AUT INVESTMENTS LIMITED?</h2>
                            </div>
                            <div className="col-lg-4">
                                <img src="/assets/images/resource/metatrader_5-why.jpg" alt="" className="rounded" />
                            </div>
                            <div className="col-lg-8 feature-account">
                                <div className="row clearfix education-details-content">
                                    <div className="col-12 content-column">
                                        <div className="text-box">
                                            <ul className="list-item clearfix">
                                                <li className="lh-lg"><b className="fs-6">Multi-Asset Trading:</b> <br />Trade multiple asset classes - forex, CFDs on stocks, indices, commodities - from a single platform</li>
                                                <li className="lh-lg"><b className="fs-6">Faster Execution Engine:</b> <br />Enhanced order-matching technology and multi-threaded processing deliver lightning-fast trade execution with minimal latency.</li>
                                                <li className="lh-lg"><b className="fs-6">38+ Built-In Indicators & 21 Timeframes:</b> <br />MT5 gives you more analytical options with higher precision for technical analysis and trend tracking.</li>
                                                <li className="lh-lg"><b className="fs-6">Integrated Economic Calendar:</b> <br />Stay informed with real-time macroeconomic events and market-moving data directly inside your terminal.</li>
                                                <li className="lh-lg"><b className="fs-6">Advanced Order Types & Depth of Market (DOM):</b> <br />Access market depth, partial order filling, and six pending order types for increased control and execution flexibility. </li>
                                                <li className="lh-lg"><b className="fs-6">Support for Expert Advisors (EAs):</b> <br />Automate your strategies using custom or pre-built Expert Advisors (EAs) with MQL5 — more powerful and flexible than MT5's scripting environment.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="award-section mt5 pt_60 pb_70">
                    <div className="auto-container">
                        <div className="sec-title pb_60">
                            <span className="sub-title mb_14">Features</span>
                            <h2>Key Features of MetaTrader 5</h2>
                        </div>
                        <div className="table-outer">
                            <table className="award-table">
                                <thead>
                                    <tr>
                                        <th className="text-muted">Feature</th>
                                        <th className="text-muted">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Asset Coverage</th>
                                        <td>Forex, Indices, Stocks, Commodities</td>
                                    </tr>
                                    <tr>
                                        <th>Charting & Indicators</th>
                                        <td>38+ indicators, 44 graphic tools, 21 timeframes</td>
                                    </tr>
                                    <tr>
                                        <th>Order Types</th>
                                        <td>6 types (including Buy/Sell Stop Limit)</td>
                                    </tr>
                                    <tr>
                                        <th>Time & Sales (T&S)</th>
                                        <td>Track real-time trade volumes</td>
                                    </tr>
                                    <tr>
                                        <th>Strategy Tester</th>
                                        <td>Backtest multi-currency EAs with tick data</td>
                                    </tr>
                                    <tr>
                                        <th>Built-in Economic Calendar</th>
                                        <td>Analyze market impact events in real time</td>
                                    </tr>
                                    <tr>
                                        <th>Multi-Threaded Execution</th>
                                        <td>Enables faster and more reliable performance</td>
                                    </tr>
                                    <tr>
                                        <th>Depth of Market (DOM)</th>
                                        <td>Visual order book for accurate liquidity view</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="news-section pt_100 pb_70">
                    <div className="auto-container">
                        <div className="sec-title pb_60">
                            <span className="sub-title mb_14">Info & Steps</span>
                            <h2>Information With Steps</h2>
                        </div>
                        <div className="row clearfix row-deck">
                            <div className="col-lg-6 col-md-12 news-block d-flex flex-column">
                                <div className="news-block-one w-100 d-flex flex-column h-100 wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <h2>Platform Compatibility</h2>
                                        <ul className="list-style-one mt_40 clearfix">
                                            <li className="mb-3"><b className="fs-6">Desktop (Windows & macOS):</b> <br />Full-featured terminal with advanced tools and multi-monitor support.</li>
                                            <li className="mb-3"><b className="fs-6">WebTrader:</b> <br />Secure, browser-based version with all core functions — no download required.</li>
                                            <li className="mb-3"><b className="fs-6">Mobile (iOS & Android):</b> <br />Trade, monitor, and analyze markets with the full power of MT5 in your pocket.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 news-block d-flex flex-column">
                                <div className="news-block-one w-100 d-flex flex-column h-100 wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <h2>How to Get Started with MT5</h2>
                                        <ul className="list-style-one mt_40 clearfix">
                                            <li className="mb-3"><b className="fs-6">Open a Live or Demo Account:</b> <br />Register online and select MetaTrader 5 as your preferred platform.</li>
                                            <li className="mb-3"><b className="fs-6">Download MT5 Terminal or Use WebTrader:</b> <br />Access MT5 on desktop or directly in your browser — fast and secure.</li>
                                            <li className="mb-3"><b className="fs-6">Log In with Your AUT Credentials:</b> <br />Connect to the AUT INVESTMENTS LIMITED trading server using your unique login.</li>
                                            <li className="mb-3"><b className="fs-6">Customize Your Workspace:</b> <br />Add charts, tools, and indicators tailored to your trading strategy.</li>
                                            <li className="mb-3"><b className="fs-6">Begin Trading:</b> <br />Analyze markets, place orders, monitor performance, and manage risk in real-time.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 education-details-content feature-account">
                                <div className="w-100 d-flex flex-column h-100 wow fadeInUp animated text-box inner-container" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-35.png)", backgroundAttachment: "fixed" }}></div>
                                    <div className="inner-box bg-transparent">
                                        <h2>Who Should Use MT5?</h2>
                                        <ul className="list-item mt_40 clearfix" style={{ listStyle: "disc" }}>
                                            <li className="mb-0 mt-2 pt-1 fs-6"><b className="fs-5 text-dark">Multi-Asset Traders</b> seeking access to broader markets.</li>
                                            <li className="mb-0 mt-2 pt-1 fs-6"><b className="fs-5 text-dark">Algorithmic Traders</b> running advanced or multi-currency EAs.</li>
                                            <li className="mb-0 mt-2 pt-1 fs-6"><b className="fs-5 text-dark">Day Traders and Scalpers</b> requiring ultra-fast order execution.</li>
                                            <li className="mb-0 mt-2 pt-1 fs-6"><b className="fs-5 text-dark">Technical Analysts</b> relying on detailed charting and data insights.</li>
                                            <li className="mb-0 mt-2 pt-1 fs-6"><b className="fs-5 text-dark">Long-Term Investors</b> trading across instruments from a single platform.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="award-section mt5 pt_60 pb_70" id="compare-section">
                    <div className="auto-container">
                        <div className="sec-title pb_60">
                            <span className="sub-title mb_14">Compare</span>
                            <h2>MT5 vs MT4 - What’s New in MT5?</h2>
                        </div>
                        <div className="table-outer">
                            <table className="award-table">
                                <thead>
                                    <tr>
                                        <th className="text-muted">Feature</th>
                                        <th className="text-muted">MetaTrader 4 (MT4)</th>
                                        <th className="text-muted">MetaTrader 5 (MT5)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Asset Classes</th>
                                        <td>Forex, CFDs</td>
                                        <td>21</td>
                                    </tr>
                                    <tr>
                                        <th>Timeframes</th>
                                        <td>9</td>
                                        <td>21</td>
                                    </tr>
                                    <tr>
                                        <th>Built-in Indicators</th>
                                        <td>30+</td>
                                        <td>38+</td>
                                    </tr>
                                    <tr>
                                        <th>Economic Calendar</th>
                                        <td>No</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <th>Strategy Testing</th>
                                        <td>Single-threaded</td>
                                        <td>Multi-threaded</td>
                                    </tr>
                                    <tr>
                                        <th>Order Types</th>
                                        <td>4</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <th>Depth of Market (DOM)</th>
                                        <td>No</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <th>Programming Language</th>
                                        <td>MQL4</td>
                                        <td>MQL5 (more powerful)</td>
                                    </tr>
                                </tbody>
                            </table>
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
                                        <h2 className="fw-bold">Unlock Next-Level Trading with MetaTrader 5</h2>
                                        <p className="text-light fs-6 mt_30">
                                            Join AUT INVESTMENTS LIMITED on MetaTrader 5 and take full control of your trading with superior
                                            technology, greater market access, and deeper insight. Whether you're scaling up or starting
                                            out, MT5 is your platform for intelligent, professional-grade trading.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4">
                                    <Link className="theme-btn btn-one bg-dark me-3" href="/contact">
                                        Contact Support
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </Layout>
        </div>
    );
}