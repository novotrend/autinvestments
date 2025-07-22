'use client'
import Layout from "@/components/layout/Layout";
import Link from "next/link"
import { useState } from "react";
import {
  FiDroplet,
  FiRefreshCw,
  FiTrendingUp,
  FiCpu,
  FiShield,
  FiLayers,
  FiSliders,
  FiZap,
  FiArrowDown,
  FiScale,
  FiMonitor,
  FiClock,
  FiBarChart2,
} from 'react-icons/fi';

export default function CommoditiesTrading() {

  const [activeIndex, setActiveIndex] = useState(1)
  const handleOnClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Commodities Trading">

        <section className="platform-section alternat-2 pt_90 pb_60">
          <div className="auto-container">
            <div className="row align-items-center g-3 flex-wrap-reverse">
              <div className="col-lg-8">
                <div className="sec-title pb_20 d-none d-lg-block">
                  <span className="sub-title mb_14">INFO</span>
                  <h2 className="mb-2">Commodities Trading</h2>
                  <p>
                    Diversify your portfolio by trading some of the world's most essential resources — from energy
                    to agriculture.
                  </p>
                </div>
                <section className="funfact-section">
                  <div className="auto-container px-0">
                    <div className="inner-container d-flex flex-column p-sm-5 p-4 aligh-items-start justify-content-start">
                      <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-16.png)" }}></div>
                      <h4 className="mb-3">Overview of Commodities Trading</h4>
                      <p className="mb-3">
                        Commodities are raw materials or primary agricultural products that are traded globally. These
                        include physical goods like crude oil, natural gas, gold, silver, and wheat. Commodities
                        trading offers investors and traders a way to hedge against inflation, speculate on price
                        movements, or diversify their asset exposure beyond traditional financial markets.
                      </p>
                      <p>
                        At AUT Investments Limited, we provide access to a wide range of commodity CFDs, giving you
                        the ability to trade on price fluctuations without owning the physical assets. Our platform offers
                        real-time data, fast execution, and low spreads across major global commodities.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-lg-4">
                <div className="sec-title pb_20 d-lg-none">
                  <span className="sub-title mb_14">INFO</span>
                  <h2 className="mb-2">Commodities Trading</h2>
                  <p>
                    Diversify your portfolio by trading some of the world's most essential resources — from energy
                    to agriculture.
                  </p>
                </div>
                <img src="/assets/images/resource/commodities-1.jpg" alt="" className="rounded" />
              </div>
            </div>
          </div>
        </section>

        <section className="account-style-two clear-bg pt_80 pb_70">
          <div className="auto-container">
            <div className="sec-title pb_50">
              <span className="sub-title mb_14">Access</span>
              <h2>Why Trade Metals with AUT Investments Limited?</h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <FiDroplet size={24} />
                    </div>
                    <h3>Wide Range of Instruments</h3>
                    <p>
                      Trade energy products like Brent Crude, WTI, and Natural Gas; metals such as gold,
                      silver, platinum; and agricultural products including coffee, sugar, and corn
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <FiRefreshCw size={24} />
                    </div>
                    <h3>CFD-Based Flexibility</h3>
                    <p>
                      Speculate on both rising and falling prices with the ability to go long or short. No need to
                      manage physical delivery, storage, or logistics.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <FiClock size={24} />
                    </div>
                    <h3>Real-Time Pricing and Execution</h3>
                    <p>
                      Trade with institutional-grade pricing and execution speeds designed to minimize
                      slippage and latency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <FiTrendingUp size={24} />
                    </div>
                    <h3>Low Margin Requirements and Adjustable Leverage</h3>
                    <p>
                      Use capital efficiently with leverage settings that adapt to your risk preference and
                      jurisdiction.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <FiCpu size={24} />
                    </div>
                    <h3>Advanced Trading Infrastructure</h3>
                    <p>
                      Access commodities markets across devices with integrated charting tools, technical
                      indicators, and order types.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <FiShield size={24} />
                    </div>
                    <h3>Transparent and Secure Trading Conditions</h3>
                    <p>
                      No hidden fees. Clear swap rates and reliable margin requirements are published for all
                      accounts.
                    </p>
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
                  <h2 className="mb-2">Types of Commodities You Can Trade</h2>
                </div>
              </div>
            </div>
            <div className="inner-container">
              <div className="row clearfix row-deck">
                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-one">
                    <div className="inner-box h-100">
                      <h3 className="mb-3 h4">1. Energy Commodities</h3>
                      <div className="education-details-content">
                        <div className="text-box">
                          <p>Used as a store of value, a hedge, and a strategic reserve by institutions and governments.</p>
                          <ul className="list-item clearfix mt-3">
                            <li className="lh-lg"><b>Crude Oil (Brent & WTI): </b>
                              Key driver of global energy markets.</li>
                            <li className="lh-lg">
                              <b>Natural Gas :</b>
                              Volatile commodity influenced by seasonal demand and geopolitical supply issues
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-one">
                    <div className="inner-box h-100">
                      <h3 className="mb-3 h4">2. Precious Metals</h3>
                      <div className="education-details-content">
                        <div className="text-box">
                          <p>Ideal for investors seeking long-term value preservation and economic hedge.</p>
                          <ul className="list-item clearfix mt-3">
                            <li className="lh-lg">
                              <b>Gold (XAU/USD)</b>
                            </li>
                            <li className="lh-lg">
                              <b>Silver (XAG/USD)</b>
                            </li>
                            <li className="lh-lg">
                              <b>Platinum (XPT/USD)</b>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-one">
                    <div className="inner-box h-100">
                      <h3 className="mb-3 h4">3. Agricultural Commodities</h3>
                      <div className="education-details-content">
                        <div className="text-box">
                          <p>Highly seasonal and responsive to global weather patterns, production cycles, and demand trends.</p>
                          <ul className="list-item clearfix mt-3">
                            <li className="lh-lg">
                              Coffee
                            </li>
                            <li className="lh-lg">
                              Sugar
                            </li>
                            <li className="lh-lg">
                              Corn
                            </li>
                            <li className="lh-lg">
                              Soybeans
                            </li>
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

        <section className="account-section mt_60 pt_60 pb_70">
          <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-1.png)" }}></div>
          <div className="auto-container">
            <div className="sec-title pb_60">
              <span className="sub-title mb_14">features</span>
              <h2>Commodities Trading Conditions Snapshot</h2>
            </div>
            <div className="row clearfix row-deck">
              <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <FiLayers size={24} />
                    </div>
                    <h3>Instruments Available</h3>
                    <p>Energy, Precious Metals, Agriculture</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <FiSliders size={24} />
                    </div>
                    <h3>Trading Type</h3>
                    <p>CFDs</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <FiTrendingUp size={24} />
                    </div>
                    <h3>Minimum Lot Size</h3>
                    <p>0.01 lot</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <FiZap size={24} />
                    </div>
                    <h3>Execution Type</h3>
                    <p>Market Execution</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <FiArrowDown size={24} />
                    </div>
                    <h3>Spreads</h3>
                    <p>From 0.3 pips</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <FiBarChart2 size={24} />
                    </div>
                    <h3>Leverage</h3>
                    <p>Up to 1:200</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <FiMonitor size={24} />
                    </div>
                    <h3>Platforms</h3>
                    <p>Web, Mobile, Desktop</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box">
                      <FiClock size={24} />
                    </div>
                    <h3>Trading Hours</h3>
                    <p>24/5 (Market Dependent)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="working-section apps-section alternat-2 pt_120 pb_120 pt_100 pb_100">
          <div className="auto-container">
            <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-4.png)" }}></div>
            <div className="row align-items-center g-3">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="sec-title light pb_35 d-lg-none">
                  <span className="sub-title mb_10">Onboard</span>
                  <h2>How to Start Trading Commodities</h2>
                </div>
                <img src="/assets/images/resource/how-to-start-commodities-trading.jpg" alt="" className="rounded" />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                <div className="content_block_nine">
                  <div className="content-box ml_70">
                    <div className="sec-title light pb_35 d-none d-lg-block">
                      <span className="sub-title mb_10">Onboard</span>
                      <h2>How to Start Trading Commodities</h2>
                    </div>
                    <div className="inner-box">
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">1</span>
                        <h3>Register Your Account</h3>
                        <p>Quick setup with live and demo options.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">2</span>
                        <h3>Complete Verification</h3>
                        <p>Simple and secure KYC process.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">3</span>
                        <h3>Deposit Funds</h3>
                        <p> Choose from a range of convenient funding options.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">4</span>
                        <h3>Select Your Instruments</h3>
                        <p>Pick from metals, energies, or agriculture.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">5</span>
                        <h3>Apply Your Strategy</h3>
                        <p>Use professional-grade charts and indicators.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">6</span>
                        <h3>Manage and Monitor</h3>
                        <p> Use alerts, news, and stop-loss features for precision control.</p>
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
              <span className="sub-title mb_14">Depth</span>
              <h2>Mastering Commodity Trading with AUT Investments Limited</h2>
            </div>
            <div className="tabs-box">
              <div className="row clearfix flex-wrap-reverse g-3">
                <div className="col-xl-8 col-lg-12 col-md-12 content-column">
                  <div className="tabs-content">
                    <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                      <div className="content-box">
                        <h2>Commodity Market Drivers</h2>
                        <ul className="list-style-one clearfix ">
                          <li><b>Supply and Demand Dynamics</b> Influenced by global production trends, natural disasters, and consumer demand.</li>
                          <li><b>Geopolitical Events</b> Wars, trade sanctions, and diplomatic conflicts can directly affect oil and agricultural commodities.</li>
                          <li><b>Macroeconomic Indicators</b> Inflation, interest rates, and GDP data often impact the perceived value of hard and soft commodities.</li>
                          <li><b>Seasonal Factors:</b> Particularly relevant for agricultural commodities, affected by harvest cycles and weather events.</li>
                          <li><b>Currency Fluctuations:</b> Since commodities are generally priced in USD, any movement in the dollar can influence pricing.</li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="forex">
                      <div className="content-box">
                        <h2>Benefits of Commodity Trading</h2>
                        <ul className="list-style-one clearfix">
                          <li><b>Diversification:</b >Reduce your exposure to equities or currencies by investing in global raw materials.</li>
                          <li><b>Inflation Protection:</b> Commodities tend to perform well during inflationary cycles, particularly metals and energy products.</li>
                          <li><b>High Volatility = High Opportunity:</b> Crude oil, natural gas, and agricultural assets are often subject to sharp and frequent price movements.</li>
                          <li><b>Hedging Capabilities:</b> Businesses and investors can use commodities to hedge against rising input costs or market uncertainty.</li>
                          <li><b>Global Relevance:</b> Commodity prices reflect worldwide events and cycles, making them a powerful barometer of economic health.</li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="cpoy">
                      <div className="content-box">
                        <h2>Common Trading Strategies</h2>
                        <p></p>
                        <ul className="list-style-one clearfix">
                          <li>
                            <b>Trend Following: </b>
                            Ride sustained uptrends or downtrends in key commodities like crude oil.
                          </li>
                          <li><b>Breakout Trading:</b> Target sharp price movements driven by data releases or inventory reports.</li>
                          <li><b>Spread Trading:</b> Capitalize on price differences between related commodities (e.g., Brent vs. WTI).</li>
                          <li><b>Hedging Strategies:</b> Lock in input costs or manage risk in diversified portfolios.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12 btn-column">
                  <ul className="three tab-btns tab-buttons shop-tab-btn clearfix">
                    <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>Commodity Market Drivers</li>
                    <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Benefits of Commodity Trading</li>
                    <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>Common Trading Strategies</li>
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
              <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-5.png)" }}></div>
              <div className="row align-items-center">
                <div className="col-12 text-column">
                  <div className="text-box">
                    <h2 className="fw-bold">Trade Commodities with Confidence at AUT Investments Limited</h2>
                    <p className="text-light fs-6 mt_30">
                      Access diverse global markets with a platform designed for traders who value clarity, speed, and
                      control. Whether you're hedging risk, managing inflation exposure, or speculating on price
                      action, commodity trading opens the door to new possibilities.
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