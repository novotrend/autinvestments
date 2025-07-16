'use client'
import Link from "next/link"
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import VideoPopup from "@/components/elements/VideoPopup"

export default function ForexTrading() {

  const [activeIndex, setActiveIndex] = useState(1)
  const handleOnClick = (index) => {
    setActiveIndex(index)
  }
  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Forex Trading">

        <section className="platform-section alternat-2 pt_90 pb_60">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="sec-title pb_20">
                  <span className="sub-title mb_14">INFO</span>
                  <h2 className="mb-2">What is Forex?</h2>
                  <p>Unlock the potential of currency markets with AUT Investments LTD’s advanced forex trading
                    platform.
                  </p>
                </div>
                <section className="funfact-section">
                  <div className="auto-container px-0">
                    <div className="inner-container d-flex flex-column p-5 aligh-items-start justify-content-start">
                      <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
                      <h4 className="mb-3">Overview of Forex Trading</h4>
                      <p className="mb-3">
                        Forex (foreign exchange) is the world’s largest and most liquid financial market, enabling the
                        exchange of national currencies 24/5. With daily volumes exceeding $6 trillion, forex offers
                        unparalleled access to global opportunities.
                      </p>
                      <p>
                        AUT Investments empowers you with access to <b>60+ currency pairs,</b> including majors, minors,
                        and exotics, through a robust <b>MT4/MT5-compatible trading platform,</b> ensuring seamless
                        execution and advanced charting tools.
                      </p>

                    </div>
                  </div>
                </section>
              </div>
              <div className="col-md-4">
                <img src="../assets/images/resource/forextrading-1.jpg" alt="" className="rounded" />
              </div>
            </div>
          </div>
        </section>

        <section className="markets-section pt_60 pb_70">
          <div className="auto-container">
            <div className="sec-title pb_60">
              <span className="sub-title mb_14">Why Choose</span>
              <h2>Why Choose Our Forex Trading Platform?</h2>
            </div>
            <div className="row clearfix">
              <div className="col-12 content-column">
                <div className="content-box row row-deck">
                  <div className="process-block-one col-md-6">
                    <div className="inner-box">
                      <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                      <span className="count-text">1</span>
                      <h3>Forex Trading Platforms (MT4 & MT5 Ready)</h3>
                      <p>Seamless integration with MetaTrader 4 and MetaTrader 5—globally recognized platforms featuring expert advisors, automated tools, and one-click trading</p>
                    </div>
                  </div>
                  <div className="process-block-one col-md-6">
                    <div className="inner-box">
                      <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                      <span className="count-text">2</span>
                      <h3>Competitive Forex Spreads</h3>
                      <p>Enjoy tight spreads starting at <b>0.0 pips on ECN accounts,</b> ideal for scalping and cost-sensitive strategies</p>
                    </div>
                  </div>
                  <div className="process-block-one col-md-6">
                    <div className="inner-box">
                      <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                      <span className="count-text">3</span>
                      <h3>High Leverage (Up to 1:500)</h3>
                      <p>Amplify your trading power responsibly with flexible leverage, tailored for advanced traders and varied jurisdictions </p>
                    </div>
                  </div>
                  <div className="process-block-one col-md-6">
                    <div className="inner-box">
                      <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                      <span className="count-text">4</span>
                      <h3>Real-Time Market Data</h3>
                      <p>Access live currency quotes, economic calendars, and daily market analysis powered by integrated charting and news feeds</p>
                    </div>
                  </div>
                  <div className="process-block-one col-md-6">
                    <div className="inner-box">
                      <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                      <span className="count-text">5</span>
                      <h3>24/5 Trading Access</h3>
                      <p>React to global market moves as the forex market remains open Monday through Friday (00:00–23:59 GMT).</p>
                    </div>
                  </div>
                  <div className="process-block-one col-md-6">
                    <div className="inner-box">
                      <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                      <span className="count-text">6</span>
                      <h3>Transparent Pricing & Zero Hidden Fees</h3>
                      <p>Benefit from full transparency in spreads, overnight swap rates, and account fees. All
                        costs are clearly published.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="funfact-style-two pb_30">
          <div className="auto-container">
            <div className="sec-title pb_30">
              <span className="sub-title mb_14">Pairs</span>
              <h2>Currency Pairs Offered</h2>
            </div>
            <div className="inner-container">
              <div className="row clearfix justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-two">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                    <div className="inner-box text-start shadow-sm">
                      <div className="count-outer mb-2">
                        <p className="text-capitalize fs-3">Major Pairs</p>
                      </div>
                      <p className="fs-6">EUR/USD, GBP/USD, USD/JPY – highest liquidity, lowest spreads.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-two">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                    <div className="inner-box text-start shadow-sm">
                      <div className="count-outer mb-2">
                        <p className="text-capitalize fs-3">Minor Pairs (Crosses)</p>
                      </div>
                      <p className="fs-6">EUR/GBP, AUD/NZD – ideal for diversified strategies.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-two">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                    <div className="inner-box text-start shadow-sm">
                      <div className="count-outer mb-2">
                        <p className="text-capitalize fs-3">Exotic Pairs</p>
                      </div>
                      <p className="fs-6">USD/TRY, USD/ZAR, EUR/SGD – higher volatility, higher opportunity.F</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="working-section apps-section alternat-2 pt_120 pb_120 pt_100 pb_100">
          <div className="auto-container">
            <div class="shape" style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}></div>
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12 col-sm-12 video-column">
                <img src="/assets/images/resource/how-to-start.jpg" alt="" className="rounded" />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                <div className="content_block_nine">
                  <div className="content-box ml_70">
                    <div className="sec-title light pb_35">
                      <span className="sub-title mb_10">Easy Steps</span>
                      <h2>How to Get Started</h2>
                    </div>
                    <div className="inner-box">
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">1</span>
                        <h3>Sign up, It's Free!</h3>
                        <p>Open a Live or Demo Account - Fast sign-up process</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">2</span>
                        <h3>Find best Deals and Invest</h3>
                        <p>Complete KYC Verification – Secure and compliant onboarding.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">3</span>
                        <h3>Get you profit back</h3>
                        <p>Fund Your Account – Choose from multiple supported payment options.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">4</span>
                        <h3>Get you profit back</h3>
                        <p>Download MT4/MT5 or Use Web Trader, and begin trading.</p>
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
              <span className="sub-title mb_14">trading</span>
              <h2>Trading Platforms</h2>
            </div>
            <div className="tabs-box">
              <div className="row clearfix flex-wrap-reverse g-3">
                <div className="col-xl-8 col-lg-12 col-md-12 content-column">
                  <div className="tabs-content">
                    <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                      <div className="content-box">
                        <h2>Essential Forex Trading Features</h2>
                        <p></p>
                        <ul className="list-style-one clearfix ">
                          <li><b>Micro-Lot Trading:</b> Start with 0.01 lots, accessible for both newcomers and expert traders.</li>
                          <li><b>Advanced Order Types:</b> Market, limit, stop-loss, take-profit, trailing stops, and Negative Balance Protection.</li>
                          <li><b>Low-Latency Execution:</b> Market order execution in less than 20 ms, minimizing slippage and maximizing trade precision.</li>
                          <li><b>Demo Accounts:</b> Practice risk-free with a forex demo account loaded with virtual funds </li>
                          <li><b>Cross-Device Compatibility:</b> Trade on desktop, web, and mobile with intuitive interfaces and synchronized settings.</li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="forex">
                      <div className="content-box">
                        <h2>Forex Terminology & Tools</h2>
                        <p>We support your learning with essential market tools.</p>
                        <ul className="list-style-one clearfix">
                          <li><b>Currency Pair</b> (base vs. quote currency)</li>
                          <li><b>Pips and Spreads:</b> Measure price movements and trading cost</li>
                          <li><b>Leverage & Margin:</b> Trade larger volumes responsibly</li>
                          <li><b>Bid/Ask Price, Slippage, Volatility, Liquidity:</b> All part of our educational glossary and
                            real-time platform décor</li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="cpoy">
                      <div className="content-box">
                        <h2>Who Is Forex Trading For?</h2>
                        <p></p>
                        <ul className="list-style-one clearfix">
                          <li><b>New Traders</b> Can benefit from accessible micro-lot sizes, no-risk demo accounts, and
                            supportive educational content.</li>
                          <li><b>Experienced Traders</b> Gain from ultra-tight spreads, high leverage, lightning-fast
                            execution, and advanced order types</li>
                          <li><b>Algo/Automated Traders</b> Can deploy expert advisor (EA) scripts on MT4/MT5
                            platforms.</li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="cpoy">
                      <div className="content-box">
                        <h2>Forex Trading Benefits at a Glance</h2>
                        <p></p>
                        <ul className="list-style-one clearfix">
                          <li><b>High Liquidity</b> Easy entry and exit, low slippage</li>
                          <li><b>Round-the-Clock Trading </b> Trade across all time zones</li>
                          <li><b>Cost Efficiency</b> Can deploy expert advisor (EA) scripts on MT4/MT5
                            platforms.</li>
                          <li><b>Strategic Flexibility</b> Suitable for scalping, day trading, swing trading</li>
                          <li><b>Risk Management</b> Full negative balance protection, stop/limit orders</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12 btn-column">
                  <ul className="tab-btns tab-buttons shop-tab-btn clearfix">
                    <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>Essential Forex Trading Features</li>
                    <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Forex Terminology & Tools</li>
                    <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>Who Is Forex Trading For?</li>
                    <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}>Forex Trading Benefits at a Glance</li>
                  </ul>
                </div>
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
                    <Link href="/open-account" className="theme-btn btn-one bg-dark me-3">
                      Open Live Account
                    </Link>
                    <Link href="/trading/open-demo-account" className="theme-btn btn-one bg-dark me-3">
                      Try a Demo
                    </Link>
                    <Link href="/contact" className="theme-btn btn-one bg-dark">
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