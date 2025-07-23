'use client'
import Layout from "@/components/layout/Layout";
import Link from "next/link"
import { useState } from "react";
import { FiTrendingUp, FiColumns } from "react-icons/fi";
import { GiWorld } from "react-icons/gi";
import { FaExchangeAlt } from "react-icons/fa";
import { MdDonutLarge, MdSpeed, MdNightsStay } from "react-icons/md";
import { IoIosPulse } from "react-icons/io";


export default function IndicesTrading() {

  const [activeIndex, setActiveIndex] = useState(1)
  const handleOnClick = (index) => {
    setActiveIndex(index)
  }


  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Indices Trading">

        <section className="platform-section alternat-2 pt_90 pb_60">
          <div className="auto-container">
            <div className="row align-items-center g-3 flex-wrap-reverse">
              <div className="col-lg-8">
                <div className="sec-title pb_20 d-none d-lg-block">
                  <span className="sub-title mb_14">INFO</span>
                  <h2 className="mb-2">Indices Trading</h2>
                  <p>Track the performance of global markets with index CFDs — trade the momentum of
                    economies, sectors, and sentiment.
                  </p>
                </div>
                <section className="funfact-section">
                  <div className="auto-container px-0">
                    <div className="inner-container d-flex flex-column p-sm-5 p-4 aligh-items-start justify-content-start">
                      <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-16.png)" }}></div>
                      <h4 className="mb-3">What is Indices Trading?</h4>
                      <p className="mb-3">
                        Indices represent the performance of a group of selected stocks from a particular market or
                        sector. Trading index CFDs allows you to speculate on the movement of entire markets like the
                        US 30 (Dow Jones), GER 40 (DAX), or UK 100 (FTSE) without owning the underlying assets.
                      </p>
                      <p>
                        At AUT Investments Limited, we offer real-time access to leading global indices through a powerful,
                        flexible trading platform — enabling retail and institutional traders to capitalize on market-wide
                        trends, volatility, and economic cycles.
                      </p>

                    </div>
                  </div>
                </section>
              </div>
              <div className="col-lg-4">
                <div className="sec-title pb_20 d-lg-none">
                  <span className="sub-title mb_14">INFO</span>
                  <h2 className="mb-2">Indices Trading</h2>
                  <p>Track the performance of global markets with index CFDs — trade the momentum of
                    economies, sectors, and sentiment.
                  </p>
                </div>
                <img src="/assets/images/resource/indices-trading.png" alt="" className="rounded" />
              </div>
            </div>
          </div>
        </section>

        <section className="account-style-two clear-bg pt_80 pb_70">
          <div className="auto-container">
            <div className="sec-title pb_50">
              <span className="sub-title mb_14">Edge</span>
              <h2>Why Trade Indices with AUT Investments Limited?</h2>
            </div>
            <div className="row clearfix">

              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><GiWorld size={30} /></div>
                    <h3>Access to Major Global Indices</h3>
                    <p>Trade top-performing indices including S&P 500, NASDAQ 100, Dow Jones (US 30), DAX 40, FTSE 100, CAC 40, and Nikkei 225 across American, European, and Asian markets.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><MdDonutLarge size={30} /></div>
                    <h3>Diversified Exposure</h3>
                    <p>With a single trade, gain exposure to a broad range of companies across sectors — from tech and finance to energy and consumer goods.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><MdSpeed size={30} /></div>
                    <h3>Tight Spreads and Fast Execution</h3>
                    <p>Benefit from low spreads, high liquidity, and rapid execution even during peak market hours.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><FaExchangeAlt size={30} /></div>
                    <h3>Trade Both Rising and Falling Markets</h3>
                    <p>Go long or short with ease using index CFDs, taking advantage of bullish or bearish trends.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="800ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><IoIosPulse size={30} /></div>
                    <h3>High Volatility = More Opportunities</h3>
                    <p>Indices often respond sharply to economic data, earnings seasons, and geopolitical events, creating opportunities for short-term and swing trading.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="1000ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><MdNightsStay size={30} /></div>
                    <h3>No Overnight Swap on Select Accounts</h3>
                    <p>Hold positions overnight without paying fees on eligible accounts, helping manage long-term strategies more efficiently.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="trading-style-four pt_100 pb_100">
          <div className="auto-container">
            <div className="sec-title  pb_60">
              <span className="sub-title mb_14">Learn More</span>
              <h2>What is Trading</h2>
            </div>
            <div className="tabs-box">
              <ul className="tab-btns tab-buttons clearfix">
                <li
                  onClick={() => handleOnClick(1)}
                  className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}
                >
                  <div className="icon-box">
                    <FiTrendingUp size={24} />
                  </div>
                  <h4>Popular Indices</h4>
                </li>
                <li
                  onClick={() => handleOnClick(2)}
                  className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}
                >
                  <div className="icon-box">
                    <FiColumns size={24} />
                  </div>
                  <h4>CFDs vs. Stocks</h4>
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
                                <h2>Popular Indices You Can Trade</h2>
                              </div>
                              <div className="table-outer">
                                <table className="award-table">
                                  <thead>
                                    <tr>
                                      <th>Index</th>
                                      <th>Region</th>
                                      <th>Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>US 30 </td>
                                      <td>United States</td>
                                      <td>Tracks 30 large-cap blue-chip stocks (Dow Jones)</td>
                                    </tr>
                                    <tr>
                                      <td>S&P 500</td>
                                      <td>United States</td>
                                      <td>Represents 500 largest companies in the US</td>
                                    </tr>
                                    <tr>
                                      <td>NASDAQ 100 </td>
                                      <td>United States</td>
                                      <td>Tech-heavy index, includes top non-financial companies</td>
                                    </tr>
                                    <tr>
                                      <td>DAX 40 </td>
                                      <td>Germany</td>
                                      <td>Germany’s top 40 listed companies on the Frankfurt Exchange</td>
                                    </tr>
                                    <tr>
                                      <td>FTSE 100</td>
                                      <td>United Kingdom</td>
                                      <td>The 100 largest UK companies by market cap</td>
                                    </tr>
                                    <tr>
                                      <td>CAC 40</td>
                                      <td>France</td>
                                      <td>A key barometer of the French equity market</td>
                                    </tr>
                                    <tr>
                                      <td>Nikkei 225</td>
                                      <td>Japan</td>
                                      <td>Japan’s leading stock index representing top companies</td>
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
                        <div className="content-box mr_30">
                          <div className="award-section pt_60 pb_100">
                            <div className="auto-container">
                              <div className="sec-title pb_60">
                                <h2>Trading Index CFDs vs. Stocks</h2>
                              </div>
                              <div className="table-outer">
                                <table className="award-table">
                                  <thead>
                                    <tr>
                                      <th>Criteria</th>
                                      <th>Index CFDs</th>
                                      <th>Individual Stocks</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Exposure</td>
                                      <td>Broad market exposure</td>
                                      <td>Company-specific</td>
                                    </tr>
                                    <tr>
                                      <td>Volatility</td>
                                      <td>Moderately high</td>
                                      <td>Depends on earnings/news</td>
                                    </tr>
                                    <tr>
                                      <td>Risk</td>
                                      <td>Diversified risk</td>
                                      <td>Concentrated risk</td>
                                    </tr>
                                    <tr>
                                      <td>Research</td>
                                      <td>Macro-level focus</td>
                                      <td>Company-level analysis</td>
                                    </tr>
                                    <tr>
                                      <td>Cost</td>
                                      <td>Lower spreads, fewer trades</td>
                                      <td>Can be higher due to multiple entries</td>
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
                  <span className="sub-title mb_10">Setup</span>
                  <h2>Getting Started with Indices Trading</h2>
                </div>
                <img src="/assets/images/resource/how-to-start-indices-trading.png" alt="" className="rounded" />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                <div className="content_block_nine">
                  <div className="content-box ml_70">
                    <div className="sec-title light pb_35 d-none d-lg-block">
                      <span className="sub-title mb_10">Setup</span>
                      <h2>Getting Started with Indices Trading</h2>
                    </div>
                    <div className="inner-box">
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">1</span>
                        <h3>Open Your Trading Account</h3>
                        <p>Choose between demo and live setups.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">2</span>
                        <h3>Verify & Fund</h3>
                        <p>Secure onboarding with global payment options.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">3</span>
                        <h3>Select Your Index</h3>
                        <p>Browse our global list of indices.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">4</span>
                        <h3>Analyze Market Trends</h3>
                        <p>Use integrated tools to time your entry.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">5</span>
                        <h3>Place Your Trade</h3>
                        <p>Define your position, risk, and target.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">6</span>
                        <h3>Manage & Monitor</h3>
                        <p>Track performance across your portfolio in real time</p>
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
                        <h2>What Drives Index Movements?</h2>
                        <p></p>
                        <ul className="list-style-one clearfix ">
                          <li><b>Macroeconomic Reports:</b> GDP, inflation, interest rate changes</li>
                          <li><b>Corporate Earnings Seasons</b></li>
                          <li><b>Geopolitical Events and Policy Announcements</b></li>
                          <li><b>Monetary Policy and Central Bank Decisions</b></li>
                          <li><b>Market Sentiment and Global Risk Appetite</b></li>
                          <li><b>Currency Fluctuations Affecting Global Exposure</b></li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="forex">
                      <div className="content-box">
                        <h2>Benefits of Index Trading</h2>
                        <ul className="list-style-one clearfix">
                          <li><b>Trade the Economy, Not Just a Stock:</b>Focus on broader economic outlooks rather than individual corporate performance.</li>
                          <li><b>Liquidity and Transparency:</b> High trading volume ensures tight spreads and consistent pricing.</li>
                          <li><b>Leverage with Control:</b> Open larger trades with smaller capital using adjustable leverage settings.</li>
                          <li><b>Trade Around the Clock:</b> Global market access lets you take advantage of indices across time zones.</li>
                          <li><b>Ideal for All Strategies:</b>Whether you’re a scalper, swing trader, or long-term investor, indices provide structure and opportunity.</li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="cpoy">
                      <div className="content-box">
                        <h2>Advanced Trading Features</h2>
                        <p></p>
                        <ul className="list-style-one clearfix">
                          <li>Customizable charts with real-time price feeds</li>
                          <li>One-click trading and order execution</li>
                          <li>Risk control tools: stop-loss, take-profit, trailing stops</li>
                          <li> Economic calendar and news integration</li>
                          <li>Web, mobile, and desktop platform support</li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="cpoy">
                      <div className="content-box">
                        <h2>Who Trades Indices?</h2>
                        <p></p>
                        <ul className="list-style-one clearfix">
                          <li><b>Short-Term Traders</b> looking to capitalize on volatility</li>
                          <li><b>Macro Traders</b> speculating on interest rates, inflation, or geopolitical tension</li>
                          <li><b>Hedgers</b> balancing exposure against equity portfolios</li>
                          <li><b>Long-Term Trend Followers</b> riding economic growth cycles</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12 btn-column">
                  <ul className="tab-btns tab-buttons shop-tab-btn clearfix">
                    <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>What Drives Index Movements?</li>
                    <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Benefits of Index Trading</li>
                    <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>Advanced Trading Features</li>
                    <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}>Who Trades Indices?</li>
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
                    <h2 className="fw-bold">Explore the Power of Indices with AUT Investments Limited</h2>
                    <p className="text-light fs-6 mt_30">
                      Broaden your trading scope with one of the most efficient ways to capture global momentum.
                      Trade the world’s top indices with technology, transparency, and trust.
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