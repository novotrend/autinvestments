'use client'
import Layout from "@/components/layout/Layout";
import Link from "next/link"
import { useState } from "react";
import {
  BiLineChart,
  BiCommentDetail,
  BiUserCircle,
  BiCheckShield,
  BiRefresh,
  BiBot
} from "react-icons/bi";

import {
  FiLayers,
  FiSliders,
  FiBarChart2,
  FiZap,
  FiTrendingUp,
  FiMonitor,
  FiFileText,
  FiCreditCard
} from "react-icons/fi";

export default function MetalsTrading() {

  const [activeIndex, setActiveIndex] = useState(1)
  const handleOnClick = (index) => {
    setActiveIndex(index)
  }


  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Metals Trading">
        <section className="platform-section alternat-2 pt_90 pb_60">
          <div className="auto-container">
            <div className="row align-items-center g-3 flex-wrap-reverse">
              <div className="col-lg-8">
                <div className="sec-title pb_20 d-none d-lg-block">
                  <span className="sub-title mb_14">INFO</span>
                  <h2 className="mb-2">Metals Trading</h2>
                  <p>
                    Access global metal markets with precision, performance, and portfolio protection.
                  </p>
                </div>
                <section className="funfact-section">
                  <div className="auto-container px-0">
                    <div className="inner-container d-flex flex-column p-sm-5 p-4 aligh-items-start justify-content-start">
                      <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
                      <h4 className="mb-3">Trade Precious and Industrial Metals with Confidence</h4>
                      <p>
                        Metals trading offers both stability and opportunity.**<br></br>
                        Whether you're hedging against inflation with gold or speculating on industrial growth with silver
                        and platinum, trading metals is a powerful way to diversify your portfolio and protect your capital
                        in volatile times. At AUT Investments Limited, we enable you to trade CFDs on a range of metals —
                        with institutional-grade execution, tight spreads, and 24/5 access.
                      </p>

                    </div>
                  </div>
                </section>
              </div>
              <div className="col-lg-4">
                <div className="sec-title pb_20 d-lg-none">
                  <span className="sub-title mb_14">INFO</span>
                  <h2 className="mb-2">Metals Trading</h2>
                  <p>
                    Access global metal markets with precision, performance, and portfolio protection.
                  </p>
                </div>
                <img src="/assets/images/resource/metalstrading-1.jpg" alt="" className="rounded" />
              </div>
            </div>
          </div>
        </section>

        <section className="account-style-two clear-bg pt_80 pb_70">
          <div className="auto-container">
            <div className="sec-title pb_50">
              <span className="sub-title mb_14">Social Trading</span>
              <h2>How Social Trading Works</h2>
            </div>
            <div className="row clearfix">

              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><BiLineChart size={30} /></div>
                    <h3>Real Time Trades</h3>
                    <p>View trades and strategies of other traders in real time to learn and make informed decisions.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><BiCommentDetail size={30} /></div>
                    <h3>Engage with the Community</h3>
                    <p>Connect with traders through comments, discussions, and reactions to build knowledge collaboratively.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><BiUserCircle size={30} /></div>
                    <h3>Follow Top Traders</h3>
                    <p>Identify and follow successful traders to mirror their strategies and improve your own performance.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><BiCheckShield size={30} /></div>
                    <h3>Strategy Testing</h3>
                    <p>Safely test strategies with demo accounts or low-risk trades before committing fully.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="800ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><BiRefresh size={30} /></div>
                    <h3>Smart Copy Trading</h3>
                    <p>Automatically copy trades from proven traders using advanced copying algorithms.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="1000ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><BiBot size={30} /></div>
                    <h3>AI Powered Bots</h3>
                    <p>Leverage AI trading bots for efficient, automated strategies driven by data and behavior analytics.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section className="funfact-section pt_120 pb_70">
          <div className="auto-container">
            <div className="row">
              <div className="col-md-12">
                <div className="sec-title pb_20">
                  <span className="sub-title mb_14">PLATFORM</span>
                  <h2 className="mb-2">Trading Platform</h2>
                </div>
              </div>
            </div>
            <div className="inner-container">
              <div className="row clearfix row-deck">
                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-one">
                    <div className="inner-box h-100">
                      <h3 className="mb-3">Gold (XAU/USD)</h3>
                      <div className="education-details-content">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">Gold is one of the most actively traded and watched commodities in the world.</li>
                            <li className="lh-lg">Used as a store of value, a hedge, and a strategic reserve by institutions and governments.</li>
                            <li className="lh-lg">Offers consistent demand, lower volatility, and macroeconomic sensitivity that creates reliable trading opportunities.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-one">
                    <div className="inner-box h-100">
                      <h3 className="mb-3">Silver (XAG/USD)</h3>
                      <div className="education-details-content">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">Combines safe-haven and industrial properties.</li>
                            <li className="lh-lg">More volatile than gold, appealing to traders seeking sharper movements.</li>
                            <li className="lh-lg">Heavily influenced by demand in electronics, solar energy, and medical sectors.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-one">
                    <div className="inner-box h-100">
                      <h3 className="mb-3">Platinum (XPT/USD)</h3>
                      <div className="education-details-content">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">Rarer metal than gold or silver.</li>
                            <li className="lh-lg">Value closely tied to industrial output, especially in the automotive sector.</li>
                            <li className="lh-lg">Offers higher volatility and speculative potential, especially during economic expansions.</li>
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

        <section className="markets-section pt_60 pb_70">
          <div className="auto-container">
            <div className="row align-items-center g-3 flex-wrap-reverse">
              <div className="col-lg-8">
                <div className="sec-title pb_30 d-none d-lg-block">
                  <span className="sub-title mb_14">Features of AUT</span>
                  <h2>Advantages of Trading Metal CFDs</h2>
                </div>
                <div className="row clearfix education-details-content shadow-sm py-5 px-sm-4 px-2 rounded-4" >
                  <div className="col-12 content-column ">
                    <div className="text-box">
                      <ul className="list-item clearfix">
                        <li className="lh-lg"><b className="fs-6 text-dark">No Physical Ownership Required:</b> <br />Trade on price movements without handling physical delivery, storage, or logistics.</li>
                        <li className="lh-lg"><b className="fs-6 text-dark">Go Long or Short:</b> <br />Capitalize on both rising and falling metal prices through CFDs.</li>
                        <li className="lh-lg"><b className="fs-6 text-dark">Low Entry Barriers:</b> <br />Begin trading with micro-lot sizes and low minimum deposit requirements.</li>
                        <li className="lh-lg"><b className="fs-6 text-dark">Fast Execution and Minimal Slippage:</b> <br />Our infrastructure ensures trades are placed swiftly, reducing missed opportunities
                          during market spikes. </li>
                        <li className="lh-lg"><b className="fs-6 text-dark">Risk Management Tools:</b> <br />Apply stop-loss, take-profit, and trailing stop orders to lock in profits and protect your capital </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sec-title pb_30 d-lg-none">
                  <span className="sub-title mb_14">Features of AUT</span>
                  <h2>Advantages of Trading Metal CFDs</h2>
                </div>
                <img src="/assets/images/resource/tradingmetal-2.jpg" alt="" className="rounded" />
              </div>

            </div>
          </div>
        </section>

        <section className="account-section mt_60 pt_60 pb_70">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(/assets/images/shape/shape-1.png)" }}
          ></div>
          <div className="auto-container">
            <div className="sec-title pb_60">
              <span className="sub-title mb_14">features</span>
              <h2>Trading Conditions Snapshot</h2>
            </div>
            <div className="row clearfix row-deck">
              {[
                {
                  Icon: FiLayers,
                  title: "Instruments Available",
                  desc: "Gold, Silver, Platinum"
                },
                {
                  Icon: FiSliders,
                  title: "Trading Style",
                  desc: "CFDs (Contract for Difference)"
                },
                {
                  Icon: FiBarChart2,
                  title: "Spreads",
                  desc: "From 0.3 pips"
                },
                {
                  Icon: FiZap,
                  title: "Trade Size",
                  desc: "From 0.01 lot"
                },
                {
                  Icon: FiTrendingUp,
                  title: "Leverage",
                  desc: "Up to 1:200"
                },
                {
                  Icon: FiMonitor,
                  title: "Platforms",
                  desc: "Web, Mobile, Desktop"
                },
                {
                  Icon: FiCreditCard,
                  title: "Execution",
                  desc: "Market Execution, Ultra-Low Latency"
                },
                {
                  Icon: FiFileText,
                  title: "Trading Hours",
                  desc: "24/5 (Based on Market Session)"
                }
              ].map(({ Icon, title, desc }, idx) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-12 account-block"
                  key={idx}
                >
                  <div
                    className="account-block-one wow fadeInUp animated"
                    data-wow-delay={`${(idx % 4) * 200}ms`}
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <Icon size={28} />
                      </div>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="working-section apps-section alternat-2 pt_120 pb_120 pt_100 pb_100">
          <div className="auto-container">
            <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-4.png)" }}></div>
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="sec-title light pb_35 d-lg-none">
                  <span className="sub-title mb_10">Onboard</span>
                  <h2>How to Start Trading Metals</h2>
                </div>
                <img src="/assets/images/resource/how-to-start-metals-trading.jpg" alt="" className="rounded" />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                <div className="content_block_nine">
                  <div className="content-box ml_70">
                    <div className="sec-title light pb_35 d-none d-lg-block">
                      <span className="sub-title mb_10">Onboard</span>
                      <h2>How to Start Trading Metals</h2>
                    </div>
                    <div className="inner-box">
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">1</span>
                        <h3>Open an Account</h3>
                        <p>Choose live or demo based on your experience level.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">2</span>
                        <h3>Verify Your Identity</h3>
                        <p>Fast and secure compliance process.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">3</span>
                        <h3>Deposit Funds</h3>
                        <p>Multiple trusted payment options available.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">4</span>
                        <h3>Launch the Platform</h3>
                        <p>Available across desktop, web, and mobile.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">5</span>
                        <h3>Analyze and Trade</h3>
                        <p>Use professional tools and market data to enter and exit trades.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="platform-section alternat-2 pt_90 pb_130">
          <div className="auto-container">
            <div className="sec-title pb-sm-5">
              <span className="sub-title mb_14">trading</span>
              <h2>Trading Platforms</h2>
            </div>
            <div className="tabs-box">
              <div className="row clearfix flex-wrap-reverse g-3">
                <div className="col-xl-8 col-lg-12 col-md-12 content-column">
                  <div className="tabs-content">
                    <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                      <div className="content-box">
                        <h2>Who Should Trade Metals?</h2>
                        <p></p>
                        <ul className="list-style-one clearfix ">
                          <li><b>Portfolio Diversifiers:</b> seeking to reduce exposure to equities and currency markets.</li>
                          <li><b>Inflation Hedge Seekers:</b>  using gold and silver as a store of long-term value.</li>
                          <li><b>Technical Traders:</b>looking for patterns and price actions in volatile commodities.</li>
                          <li><b>Fundamental Traders:</b>  reacting to macroeconomic shifts, geopolitical tensions, and
                            central bank policies. </li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="forex">
                      <div className="content-box">
                        <h2>Popular Metal Trading Strategies</h2>
                        <p>We support your learning with essential market tools.</p>
                        <ul className="list-style-one clearfix">
                          <li><b>Breakout Trading:</b>Capitalize on sharp moves after resistance/support levels break.</li>
                          <li><b>Trend Following:</b> Use moving averages and price action to ride sustained market
                            moves.</li>
                          <li><b>Mean Reversion:</b> Trade based on overbought/oversold signals in metals like silver.</li>
                          <li><b>Hedging Portfolios:</b> Offset currency or equity risk by going long on metals.</li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="cpoy">
                      <div className="content-box">
                        <h2>Metals Market Drivers</h2>
                        <p></p>
                        <ul className="list-style-one clearfix">
                          <li><b>US Dollar Strength/Weakness</b></li>
                          <li><b>Inflation Data and Interest Rates</b></li>
                          <li><b>Global Supply Chain Trends</b></li>
                          <li><b>Central Bank Reserve Strategies</b></li>
                          <li><b>Industrial Demand (especially for silver and platinum)</b></li>
                          <li><b>Geopolitical Stability/Conflict</b></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12 btn-column">
                  <ul className="three tab-btns tab-buttons shop-tab-btn clearfix">
                    <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>Who Should Trade Metals?</li>
                    <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Popular Metal Trading Strategies</li>
                    <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>Metals Market Drivers</li>
                  </ul>
                </div>
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
                    <h2 className="fw-bold">Discover the Value of Trading Metals</h2>
                    <p className="text-light fs-6 mt_30">
                      Trade precious metals with a platform built for precision and performance. Take advantage of real-time pricing, technical insights, and trusted execution.
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