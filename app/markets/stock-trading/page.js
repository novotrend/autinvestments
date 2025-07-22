'use client'
import Layout from "@/components/layout/Layout";
import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"
import { useState } from "react"

export default function StockTrading() {

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

  const [activeIndex, setActiveIndex] = useState(1)
  const handleOnClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Stock Trading">

        <section className="platform-section alternat-2 pt_90 pb_60">
          <div className="auto-container">
            <div className="row align-items-center g-3 flex-wrap-reverse">
              <div className="col-lg-8">
                <div className="sec-title pb_20 d-none d-lg-block">
                  <span className="sub-title mb_14">INFO</span>
                  <h2 className="mb-2">What is Stock Trading?</h2>
                  <p>
                    Explore global equity markets with precision, performance, and powerful tools
                  </p>
                </div>
                <section className="funfact-section">
                  <div className="auto-container px-0">
                    <div className="inner-container d-flex flex-column p-sm-5 p-4 aligh-items-start justify-content-start">
                      <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-16.png)" }}></div>
                      <h4 className="mb-3">Overview of Stock Trading</h4>
                      <p className="mb-3">
                        Stock trading involves buying and selling shares of publicly listed companies across global
                        exchanges such as NYSE, NASDAQ, LSE, and more. Whether you're interested in growth
                        stocks, dividend stocks, or blue‑chip stocks, AUT Investments provides access to a wide
                        range of equity instruments to suit varied trader goals.
                      </p>
                      <p>
                        The stock market is an accessible way to build wealth, offering investors and traders
                        opportunities through price appreciation, dividends, and portfolio diversification. With shifts in
                        earnings, market sentiment, and macroeconomic indicators, stock trading presents both
                        short‑term and long‑term potential.
                      </p>

                    </div>
                  </div>
                </section>
              </div>
              <div className="col-lg-4">
                <div className="sec-title pb_20 d-lg-none">
                  <span className="sub-title mb_14">INFO</span>
                  <h2 className="mb-2">What is Stock Trading?</h2>
                  <p>
                    Explore global equity markets with precision, performance, and powerful tools
                  </p>
                </div>
                <img src="/assets/images/resource/stocktrading-1.jpg" alt="" className="rounded" />
              </div>
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="auto-container">
            <div className="inner-container pt_100 pb_70">
              <div className="sec-title pb_20">
                <span className="sub-title mb_14">COMPLETE</span>
                <h2>Everything You Need to Trade Smarter</h2>
              </div>
              <div className="row clearfix">
                <div className="col-12 content-column">
                  <div className="content-box row row-deck">
                    <div className="process-block-one col-md-6">
                      <div className="inner-box">
                        <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                        <span className="count-text">1</span>
                        <h3>Global Market Access</h3>
                        <p>
                          Trade US, European, and Asian equities on a single platform. Access major indices like
                          the Dow Jones and S&P 500 alongside trending sector leaders such as Tesla, Apple,
                          and Microsoft .

                        </p>
                      </div>
                    </div>
                    <div className="process-block-one col-md-6">
                      <div className="inner-box">
                        <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                        <span className="count-text">2</span>
                        <h3>Commission‑Free Trading</h3>
                        <p>
                          Execute trades without commission on qualifying accounts. Our transparent fee
                          structure ensures no unexpected costs and competitive spreads.
                        </p>
                      </div>
                    </div>
                    <div className="process-block-one col-md-6">
                      <div className="inner-box">
                        <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                        <span className="count-text">3</span>
                        <h3>Advanced Trading Software</h3>
                        <p>
                          Benefit from robust charting, technical analysis, real‑time quotes, order flow, and
                          customizable watchlists. Integrates seamlessly with desktop, web, and mobile.
                        </p>
                      </div>
                    </div>
                    <div className="process-block-one col-md-6">
                      <div className="inner-box">
                        <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                        <span className="count-text">4</span>
                        <h3>Fractional & Micro‑Lot Shares</h3>
                        <p>
                          Invest in high‑price stocks by buying fractional shares. Ideal for diversification even with
                          limited capital.
                        </p>
                      </div>
                    </div>
                    <div className="process-block-one col-md-6">
                      <div className="inner-box">
                        <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                        <span className="count-text">5</span>
                        <h3>Pre‑Market & After‑Hours Trading</h3>
                        <p>
                          Respond to breaking news and earnings announcements outside standard exchanges.
                          Reflecting industry trends like Robinhood’s 24/7 access.
                        </p>
                      </div>
                    </div>
                    <div className="process-block-one col-md-6">
                      <div className="inner-box">
                        <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                        <span className="count-text">6</span>
                        <h3>Educational & Research Tools</h3>
                        <p>
                          Access equity research, trade ideas, market analysis, and company fundamentals.
                          Suitable for both beginners and seasoned traders; we support your journey with guides,
                          glossaries, and webinars.
                        </p>
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
            <div className="sec-title pb_70">
              <span className="sub-title mb_14">GROW</span>
              <h2>Powerful Stock Trading with AUT Investments Limited</h2>
            </div>
            <div className="tabs-box">
              <div className="row clearfix">
                <div className="col-xl-8 col-lg-12 col-md-12 content-column">
                  <div className="tabs-content">
                    <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                      <div className="content-box">
                        <figure className="image-box"><img src="assets/images/resource/platform-1.png" alt="" /></figure>
                        <h2>Key Stock Trading Features</h2>
                        <ul className="list-style-one clearfix">
                          <li>
                            <b>Order Types: </b>
                            Market, limit, stop‑loss, stop‑limit, bracket orders, trailing stop
                          </li>
                          <li>
                            <b>Margin & Leverage: </b>
                            Use margin responsibly per local regulation
                          </li>
                          <li>
                            <b>Watchlists & Alerts: </b>
                            Monitor price triggers, dividend dates, earnings announcements
                          </li>
                          <li>
                            <b>Trade Execution Speed: </b>
                            Low latency, direct market routing
                          </li>
                          <li>
                            <b>Risk Controls: </b>
                            Negative balance protection, position limits, real‑time margin checks
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="forex">
                      <div className="content-box">
                        <figure className="image-box"><img src="assets/images/resource/platform-1.png" alt="" /></figure>
                        <h2>Popular Stock Market Strategies</h2>
                        <ul className="list-style-one clearfix">
                          <li>
                            <b>Growth Investing: </b>
                            Focus on fast‑growing companies like tech and biotech
                          </li>
                          <li>
                            <b>Dividend Investing: </b>
                            Focus on yield‑generating, stable companies—often blue‑chip stocks
                          </li>
                          <li>
                            <b>Day Trading & Swing Trading: </b>
                            Short‑term strategies using technical indicators and chart patterns
                          </li>
                          <li>
                            <b>Value Investing: </b>
                            Long‑term positions based on undervalued fundamentals
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="cpoy">
                      <div className="content-box">
                        <figure className="image-box"><img src="assets/images/resource/platform-1.png" alt="" /></figure>
                        <h2>Why Trade Stocks with AUT Investments Limited?</h2>
                        <ul className="list-style-one clearfix">
                          <li>
                            <b>All‑In‑One Platform: </b>
                            Stocks, ETFs, indices, and more
                          </li>
                          <li>
                            <b>High Liquidity & Tight Spreads: </b>
                            Efficient execution across global exchanges
                          </li>
                          <li>
                            <b>Fractional & Micro‑Lot Flexibility: </b>
                            Build portfolios with any budget
                          </li>
                          <li>
                            <b>Commission‑Free Trades: </b>
                            Transparent and affordable pricing
                          </li>
                          <li>
                            <b>Pre‑Market & After‑Hours Access</b>
                          </li>
                          <li>
                            <b>Professional Tools & Education: </b>
                            Research, analytics, and glossaries supporting informed decisions
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12 btn-column">
                  <ul className="three tab-btns tab-buttons shop-tab-btn clearfix">
                    <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>Key Stock Trading Features</li>
                    <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Popular Stock Market Strategies</li>
                    <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>Why Trade Stocks...</li>
                  </ul>
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
                <img src="/assets/images/resource/how-to-start-stock-trading.jpg" alt="" className="rounded" />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                <div className="content_block_nine">
                  <div className="content-box ml_70">
                    <div className="sec-title light pb_35">
                      <span className="sub-title mb_10">Onboard</span>
                      <h2>How to Get Started in Stock Trading</h2>
                    </div>
                    <div className="inner-box">
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">1</span>
                        <h3>Open Live or Demo Account</h3>
                        <p>Quick registration process</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">2</span>
                        <h3>Identity Verification (KYC) </h3>
                        <p> Secure and compliant onboarding</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">3</span>
                        <h3>Fund Your Wallet</h3>
                        <p>Multiple deposit methods available</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">4</span>
                        <h3>Choose Your Platform</h3>
                        <p>Web, desktop, or mobile</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">5</span>
                        <h3>Place Your First Trade</h3>
                        <p>Use market or limit orders</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">6</span>
                        <h3>Learn & Optimize</h3>
                        <p>Use research tools and test with demo before scaling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section pt_100 pb_100">
          <div className="auto-container">
            <div className="row align-items-center g-5 flex-wrap-reverse">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_one">
                  <div className="content-box mr_80">
                    <div className="sec-title pb_30 d-none d-lg-block">
                      <span className="sub-title mb_14">Help</span>
                      <h2>Frequently Asked Questions (FAQ)</h2>
                    </div>
                    <ul className="accordion-box">
                      <li className="accordion block active-block">
                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                          <div className="icon-box"><i className="icon-29"></i></div>
                          <h3>Can I trade US stocks and Indian stocks together?</h3>
                        </div>
                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                          <div className="content">
                            <p>
                              Yes. Open a global trading subaccount and start trading across different exchanges seamlessly.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                          <div className="icon-box"><i className="icon-29"></i></div>
                          <h3>What are fractional shares?</h3>
                        </div>
                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                          <div className="content">
                            <p>
                              They allow you to own a piece of a full share, enabling you to invest in expensive stocks like
                              Apple or Tesla with minimal capital.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                          <div className="icon-box"><i className="icon-29"></i></div>
                          <h3>How does margin trading work?</h3>
                        </div>
                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                          <div className="content">
                            <p>
                              Margin lets you buy securities using borrowed funds from us, subject to regulations and risk
                              management rules. It's ideal for experienced traders seeking leverage.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                          <div className="icon-box"><i className="icon-29"></i></div>
                          <h3>Is stock trading risky?</h3>
                        </div>
                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                          <div className="content">
                            <p>
                              All trading involves risk. Use stop-loss orders, diversify your holdings, and monitor your
                              positions. Our tools support responsible and informed trading.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                <div className="sec-title pb_30 d-lg-none">
                  <span className="sub-title mb_14">Help</span>
                  <h2>Frequently Asked Questions (FAQ)</h2>
                </div>
                <img src="/assets/images/resource/faq.jpg" alt="" className="rounded" />
              </div>
            </div>
          </div>
        </section>

        <section className="apps-style-two pt_80 pb_80">
          <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-10.png)" }}></div>
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <figure className="image"><img src="/assets/images/resource/apps-1.png" alt="" /></figure>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_four">
                  <div className="content-box ml_80">
                    <div className="sec-title light pb_40">
                      <span className="sub-title mb_14">Final Call to Action</span>
                      <h2>Ready to Trade Forex?</h2>
                      <p>
                        Take control of currency markets now. Open a live account or start with a demo to explore our
                        forex trading platform.
                      </p>
                    </div>
                    <Link href="/open-account" className="theme-btn btn-one bg-dark mb-2 me-3">
                      Open Live Account
                    </Link>
                    <Link href="/trading/open-demo-account" className="theme-btn btn-one bg-dark mb-2 me-3">
                      Try a Demo
                    </Link>
                    <Link href="/contact" className="theme-btn btn-one bg-dark mb-2">
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