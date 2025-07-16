'use client'
import Layout from "@/components/layout/Layout";
import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"
import { useState } from "react"

export default function CryptoTrading() {

  const [activeIndex, setActiveIndex] = useState(1)
  const handleOnClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Crypto Trading">

        <section className="platform-section alternat-2 pt_90 pb_60">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="sec-title pb_20">
                  <span className="sub-title mb_14">INFO</span>
                  <h2 className="mb-2">Crypto Trading</h2>
                  <p>
                    Step into the future of finance — trade the world’s most popular cryptocurrencies with advanced
                    tools and institutional-grade reliability.
                  </p>
                </div>
                <section className="funfact-section">
                  <div className="auto-container px-0">
                    <div className="inner-container d-flex flex-column p-5 aligh-items-start justify-content-start">
                      <div className="shape" style={{ backgroundImage: "url(../assets/images/shape/shape-16.png)" }}></div>
                      <h4 className="mb-3">Overview of Crypto Trading</h4>

                      <p className="mb-3">
                        Cryptocurrencies are digital assets that use cryptographic technology to ensure secure,
                        decentralized transactions across global networks. These digital currencies, led by Bitcoin
                        (BTC) and Ethereum (ETH), have transformed the financial landscape by offering new
                        opportunities for speculation, long-term investing, and diversification.
                      </p>
                      <p>
                        At AUT Investments LTD, we provide secure and real-time access to top-traded
                        cryptocurrencies through crypto CFDs — allowing traders to benefit from price movements
                        without needing wallets or direct ownership of the assets.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-md-4">
                <img src="../assets/images/resource/crypto-1.jpg" alt="" className="rounded" />
              </div>
            </div>
          </div>
        </section>

        <section className="account-style-two clear-bg centred pt_80 pb_70">
          <div className="auto-container">
            <div className="sec-title pb_50">
              <span className="sub-title mb_14">Crypto</span>
              <h2>Why Trade Cryptocurrencies with AUT Investments LTD?</h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa-solid fa-coins"></i></div>
                    <h3>Top Cryptocurrencies Available</h3>
                    <p>
                      Trade leading digital assets including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC),
                      Ripple (XRP), Cardano (ADA), and more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa-solid fa-clock-rotate-left"></i></div>
                    <h3>24/7 Crypto Market Access</h3>
                    <p>
                      Unlike traditional financial markets, cryptocurrencies never sleep. Trade day or night,
                      including weekends and holidays.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa-solid fa-right-left"></i></div>
                    <h3>CFD Trading on Crypto</h3>
                    <p>
                      Go long or short on crypto pairs — speculate on price movements without holding the
                      actual coins.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa-solid fa-bolt"></i></div>
                    <h3>Fast Order Execution & Low Spreads</h3>
                    <p>
                      Execute trades in milliseconds with highly competitive spreads to capture even small
                      price fluctuations efficiently.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa-solid fa-lock"></i></div>
                    <h3>No Need for Crypto Wallets</h3>
                    <p>
                      Avoid the complexity of managing private keys and wallets. Trade securely through our
                      regulated platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa-solid fa-chart-line"></i></div>
                    <h3>Integrated Charting & Risk Tools</h3>
                    <p>
                      Use professional charting tools, technical indicators, and risk management settings like
                      stop-loss and take-profit orders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="award-section pt_60 pb_100">
          <div className="auto-container">
            <div className="sec-title pb_60">
              <span className="sub-title mb_14">Accounts</span>
              <h2>Key Crypto Pairs Offered</h2>
            </div>
            <div className="table-outer">
              <table className="award-table">
                <thead>
                  <tr>
                    <th>Cryptocurrency</th>
                    <th>Trading Symbol</th>
                    <th>Paired Against</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bitcoin</td>
                    <td>BTC/USD</td>
                    <td>US Dollar</td>
                  </tr>
                  <tr>
                    <td>Ethereum</td>
                    <td>ETH/USD</td>
                    <td>US Dollar</td>
                  </tr>
                  <tr>
                    <td>Litecoin</td>
                    <td>LTC/USD </td>
                    <td>US Dollar</td>
                  </tr>
                  <tr>
                    <td>Ripple </td>
                    <td>XRP/USD </td>
                    <td>US Dollar</td>
                  </tr>
                  <tr>
                    <td>Cardano</td>
                    <td>ADA/USD</td>
                    <td>US Dollar</td>
                  </tr>
                  <tr>
                    <td>Solana</td>
                    <td>SOL/USD</td>
                    <td>US Dollar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="working-section apps-section alternat-2 pt_120 pb_120 pt_100 pb_100">
          <div className="auto-container">
            <div class="shape" style={{ backgroundImage: "url(../assets/images/shape/shape-4.png)" }}></div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                <div className="video_block_one">
                  <div className="video-box z_1 p_relative pl_50 pt_50 pb_30 centred">
                    <div className="video-inner">
                      <div className="bg-layer" style={{ backgroundImage: "url(../assets/images/resource/video-2.jpg)" }}></div>
                      <div className="video-content">
                        <VideoPopup />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_nine">
                  <div className="content-box ml_70">
                    <div className="sec-title light pb_35">
                      <span className="sub-title mb_10">Onboard</span>
                      <h2>How to Start Trading Crypto with AUT Investments LTD</h2>
                    </div>
                    <div className="inner-box">
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">1</span>
                        <h3> Open a Live or Demo Account</h3>
                        <p>– Register within minutes.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">2</span>
                        <h3>Complete KYC Verification</h3>
                        <p>Ensures secure and compliant onboarding.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">3</span>
                        <h3>Deposit Funds</h3>
                        <p> Multiple payment methods supported, including crypto-friendly options.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">4</span>
                        <h3>Choose Your Crypto Pair</h3>
                        <p>Browse the list of available cryptocurrencies.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">5</span>
                        <h3>Analyze and Execute Trades</h3>
                        <p> Use technical and fundamental tools to guide your decisions.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">6</span>
                        <h3>Manage Positions</h3>
                        <p>Track your trades in real time with full transparency and control.</p>
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
            <div className="sec-title pb_60">
              <span className="sub-title mb_14">Momentum</span>
              <h2>Exploring Crypto CFD Trading with AUT Investments LTD</h2>
            </div>
            <div className="tabs-box">
              <div className="row clearfix flex-wrap-reverse g-3">
                <div className="col-xl-8 col-lg-12 col-md-12 content-column">
                  <div className="tabs-content">
                    <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                      <div className="content-box">
                        <h2>Crypto CFD Trading Benefits</h2>
                        <p></p>
                        <ul className="list-style-one clearfix ">
                          <li><b>No Ownership Required</b> Participate in the crypto market without holding or transferring digital coins.</li>
                          <li><b>Profit in Any Market Direction</b> Whether prices rise or fall, use long or short strategies to trade momentum or reversals.</li>
                          <li><b>Tight Spreads & Transparent Fees</b> Pay only the spread — no commissions on most account types.</li>
                          <li><b>Seasonal Factors:</b> Particularly relevant for agricultural commodities, affected by harvest cycles and weather events.</li>
                          <li><b>Micro-Lot Trading:</b> Trade with flexibility using small position sizes that suit your risk appetite.</li>
                          <li><b>High Volatility:</b> Take advantage of significant daily price movements, ideal for day traders and swing traders.</li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="forex">
                      <div className="content-box">
                        <h2>Market Drivers for Cryptocurrencies</h2>
                        <ul className="list-style-one clearfix">
                          <li><b>Adoption and Regulatory Developments:</b > Global news about crypto regulation, exchange licenses, and ETF approvals can affect prices rapidly.</li>
                          <li><b>Market Sentiment and Social Trends:</b> Influential social media activity, public figures, and community adoption often trigger major moves.</li>
                          <li><b>Technology Upgrades and Blockchain Events:</b> Events like hard forks, staking updates, and blockchain scalability improvements can drive volatility.</li>
                          <li><b>Institutional Participation:</b> Involvement of large funds and publicly listed companies adds momentum and credibility.</li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="cpoy">
                      <div className="content-box">
                        <h2>Who Trades Crypto CFDs?</h2>
                        <p></p>
                        <ul className="list-style-one clearfix">
                          <li>
                            <b>Day Traders</b>
                            looking for short-term volatility opportunities
                          </li>
                          <li><b>Swing Traders</b> capturing multi-day trend cycles</li>
                          <li><b>Hedgers</b> managing exposure against currency or equity holdings</li>
                          <li><b>Traditional Traders</b> seeking diversification into alternative assets</li>
                          <li><b>New Investors</b> exploring crypto without handling wallets or exchanges</li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="cpoy">
                      <div className="content-box">
                        <h2>Popular Crypto Trading Strategies</h2>
                        <p></p>
                        <ul className="list-style-one clearfix">
                          <li><b>Trend Following - </b> Ride upward or downward momentum using moving averages and volume indicators.</li>
                          <li><b>Breakout Trading - </b> – Enter positions during high-volume price spikes after support or resistance breaks.</li>
                          <li><b>Scalping - </b> Execute frequent small trades during periods of high volatility.</li>
                          <li><b>Range Trading – </b> Identify support/resistance zones and trade within established price ranges.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12 btn-column">
                  <ul className="tab-btns tab-buttons shop-tab-btn clearfix">
                    <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>Crypto CFD Trading Benefits</li>
                    <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Market Drivers</li>
                    <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>Who Trades Crypto CFDs?</li>
                    <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}>Popular Crypto Trading Strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="account-section mt_60 pt_60 pb_70">
          <div className="pattern-layer" style={{ backgroundImage: "url(../assets/images/shape/shape-1.png)" }}></div>
          <div className="auto-container">
            <div className="sec-title pb_60">
              <span className="sub-title mb_14">features</span>
              <h2>Commodities Trading Conditions Snapshot</h2>
            </div>
            <div className="row clearfix row-deck">
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa fa-clock fw-lighter"></i></div>
                    <h3>Trading Hours </h3>
                    <p>24/7, including weekends and holidays</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa fa-ruler-combined fw-lighter"></i></div>
                    <h3>Minimum Trade Size</h3>
                    <p>0.01 lot</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa fa-scale-balanced fw-lighter"></i></div>
                    <h3>Leverage</h3>
                    <p>Up to 1:20 (subject to regulation)</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa fa-chart-line fw-lighter"></i></div>
                    <h3>Spread Range </h3>
                    <p>Dynamic and competitive</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa fa-bolt fw-lighter"></i></div>
                    <h3>Execution Type</h3>
                    <p>Market Execution</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa fa-globe fw-lighter"></i></div>
                    <h3>Platforms</h3>
                    <p>Web, Mobile, Desktop</p>
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
              <div className="shape" style={{ backgroundImage: "url(../assets/images/shape/shape-5.png)" }}></div>
              <div className="row align-items-center">
                <div className="col-12 text-column">
                  <div className="text-box">
                    <h2 className="text-dark fw-bold">Seize Opportunities in the Crypto Market</h2>
                    <p className="text-light fs-5 mt_30">
                      With round-the-clock access, high volatility, and institutional-grade tools, cryptocurrency trading
                      at AUT Investments LTD opens new dimensions for active traders and long-term investors.
                    </p>
                     <Link href="/contact" className="theme-btn btn-one bg-dark mt-4">
                      Contact Us
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