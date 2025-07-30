'use client'
import Link from "next/link"
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import {
  RiSettingsLine,
  RiLineChartLine,
  RiFlashlightLine,
  RiArrowUpDownLine,
  RiFileList3Line,
  RiWalletLine,
  RiComputerLine,
  RiLayoutGridLine
} from 'react-icons/ri'

export default function OpenTradingAccount() {
  const [activeIndex, setActiveIndex] = useState(1)
  const handleOnClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Open Trading Account">
        <section className="platform-section alternat-2 pt_90 pb_60">
          <div className="auto-container">
            <div className="row align-items-center g-3 flex-wrap-reverse justify-content-between">
              <div className="col-lg-5">
                <div className="sec-title pb_20 d-none d-lg-block">
                  <span className="sub-title mb_14">Info</span>
                  <h2 className="mb-3">What is Open Trading Account?</h2>
                  <p>Start your journey in global financial markets with a live trading account tailored to your goals.</p>
                </div>
                <section className="funfact-section my-2">
                  <div className="auto-container px-0">
                    <div className="inner-container d-flex flex-column align-items-start justify-content-start rounded-0">
                      <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-16.png)" }}></div>
                      <h4 className="fw-semibold mb-3">Your Gateway to Real-Time Global Trading</h4>
                      <p>Opening a trading account with AUT INVESTMENTS LIMITED gives you access to powerful tools, competitive pricing, and a seamless experience across forex, stocks, indices, metals, commodities. Designed for beginners, active traders, and professionals alike, our platform offers flexible conditions and a secure environment to help you trade confidently.</p>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-lg-5 text-lg-end">
                <div className="sec-title pb_20 d-lg-none">
                  <span className="sub-title mb_14">Info</span>
                  <h2 className="mb-2">What is Open Trading Account?</h2>
                  <p>Start your journey in global financial markets with a live trading account tailored to your goals.
                  </p>
                </div>
                <img src="/assets/images/resource/opentrading-1.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section className="markets-section mb-sm-5 pt_60 pb_70">
          <div className="auto-container">
            <div className="row align-items-center justify-content-between row-deck">
              <div className="col-12">
                <div className="sec-title max-w-c pb_30">
                  <span className="sub-title mb_14">Features of AUT</span>
                  <h2>Why Open a Live Trading Account with AUT INVESTMENTS LIMITED?</h2>
                </div>
              </div>
              <div className="col-lg-5">
                <img src="/assets/images/resource/opentrading-feature.jpg" alt="" className="img-fluid h-100" />
              </div>
              <div className="col-lg-7">
                <div className="row clearfix education-details-content">
                  <div className="col-12 content-column">
                    <div className="text-box">
                      <ul className="list-item clearfix">
                        <li className="lh-lg"><b className="fs-6">Access 100+ Trading Instruments:</b> <br />Trade CFDs on currency pairs, global indices, blue-chip stocks, precious metals, energy commodities.</li>
                        <li className="lh-lg"><b className="fs-6">Institutional-Grade Execution:</b> <br />Experience fast order processing, low latency, and minimal slippage, powered by deep liquidity and smart routing.</li>
                        <li className="lh-lg"><b className="fs-6">Flexible Account Types:</b> <br />Choose from Standard, ECN, or Swap-Free accounts — each designed to suit different strategies and risk preferences.</li>
                        <li className="lh-lg"><b className="fs-6">Regulated & Transparent:</b> <br />Trade with confidence through a secure and compliant trading environment backed by</li>
                        <li className="lh-lg"><b className="fs-6">Advanced Trading Platforms:</b> <br />Access your account via MetaTrader 5 (MT5), or our proprietary Web Trader — all optimized for desktop and mobile.</li>
                        <li className="lh-lg"><b className="fs-6">Risk Management Tools:</b> <br />Protect your capital using stop-loss, take-profit, margin alerts, and negative balance protection.</li>
                        <li className="lh-lg"><b className="fs-6">24/5 Market Access:</b> <br />Participate in global markets around the clock, Monday to Friday 24/7.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="account-section pt_60 pb_70">
          <div className="auto-container">
            <div className="sec-title pb_60">
              <span className="sub-title mb_14">Why Go Live</span>
              <h2>What You Get with a Live Account</h2>
            </div>
            <div className="row clearfix row-deck">
              <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><RiSettingsLine size={30} /></div>
                    <h3>Spreads</h3>
                    <p>From 0.1 pips on ECN accounts</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><RiLineChartLine size={30} /></div>
                    <h3>Leverage</h3>
                    <p>Up to 1:500 (as per regulation)</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><RiFlashlightLine size={30} /></div>
                    <h3>Order Execution</h3>
                    <p>Market execution with fast processing</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><RiArrowUpDownLine size={30} /></div>
                    <h3>Trade Size </h3>
                    <p>From 0.01 lot</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><RiFileList3Line size={30} /></div>
                    <h3>Commissions</h3>
                    <p>Zero on standard; fixed on ECN</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><RiWalletLine size={30} /></div>
                    <h3>Minimum Deposit</h3>
                    <p>As low as 100$ To 1000$ (varies by account type)</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><RiComputerLine size={30} /></div>
                    <h3>Available Platforms</h3>
                    <p>MT5, Web, Android, iOS</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><RiLayoutGridLine size={30} /></div>
                    <h3>Instruments Offered</h3>
                    <p>Forex, Stocks, Indices, Commodities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="working-section apps-section alternat-2 pt_120 pb_120 pt_100 pb_100">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <img src="/assets/images/resource/easy-steps.jpg" alt="" className="rounded" />
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                <div className="content_block_nine">
                  <div className="content-box ml_70">
                    <div className="sec-title light pb_35">
                      <span className="sub-title mb_10">Easy Steps</span>
                      <h2>Steps to Open Your Trading Account</h2>
                    </div>
                    <div className="inner-box">
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">1</span>
                        <h3>Register Online</h3>
                        <p>Fill in the short application form with your basic details and create your account credentials.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">2</span>
                        <h3>Verify Your Identity (KYC)</h3>
                        <p>Upload valid identification and proof of residence to comply with regulatory standards.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">3</span>
                        <h3>Choose Your Account Type</h3>
                        <p>Select the best-suited account based on your trading style, capital, and strategy.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">4</span>
                        <h3>Fund Your Account</h3>
                        <p>Use multiple payment options including bank transfer, credit/debit card, or supported e-wallets</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">5</span>
                        <h3>Download the Platform</h3>
                        <p>Access MT5 or log in to the web platform on any device.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">6</span>
                        <h3>Start Trading</h3>
                        <p>Analyze the markets, place your first trade, and begin your live trading journey.</p>
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
                <div className="col-xxl-8 col-xl-6 col-lg-12 col-md-12 content-column">
                  <div className="tabs-content">
                    <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                      <div className="content-box">
                        <h2>Account Types Available</h2>
                        <ul className="list-style-one clearfix ">
                          <li><b>Standard:</b> No commission, fixed/variable spreads, ideal for beginners</li>
                          <li><b>ECN:</b> Raw spreads from 0.1 pips, commission-based, high-speed execution</li>
                          <li><b>Swap-Free:</b> Interest-free, designed for traders who follow Islamic finance principles </li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="forex">
                      <div className="content-box">
                        <h2>Documents Required for Verification</h2>
                        <ul className="list-style-one clearfix">
                          <li><b>Government-issued ID</b> Passport, Driver’s License, or National ID</li>
                          <li><b>Proof of Address:</b> Utility bill or bank statement (issued within the last 3 months)</li>
                        </ul>
                        <p>Verification is typically completed within 24 hours.</p>
                      </div>
                    </div>
                    <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="cpoy">
                      <div className="content-box">
                        <h2>Benefits of Trading with AUT INVESTMENTS LIMITED</h2>
                        <ul className="list-style-one clearfix">
                          <li>Global market access from a single account</li>
                          <li>Negative balance protection</li>
                          <li>Fast deposits and withdrawals</li>
                          <li>Dedicated client support</li>
                          <li>Secure and encrypted platform infrastructure</li>
                          <li>Multi-device trading compatibility</li>
                          <li>Educational resources and market insights</li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="cpoy">
                      <div className="content-box">
                        <h2>Who Can Open a Trading Account?</h2>
                        <p></p>
                        <ul className="list-style-one clearfix">
                          <li>Individual traders aged 18 and above</li>
                          <li>Beginner traders looking for a reliable entry point</li>
                          <li>Experienced traders seeking professional-grade tools</li>
                          <li> High-frequency and algo traders using EAs or automated systems</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-12 btn-column content-column">
                  <ul className="tab-btns tab-buttons shop-tab-btn clearfix">
                    <li onClick={() => handleOnClick(1)} className={`${activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}`}>Account Types Available</li>
                    <li onClick={() => handleOnClick(2)} className={`${activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}`}>Documents Required for Verification</li>
                    <li onClick={() => handleOnClick(3)} className={`${activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}`}>Benefits of Trading with...</li>
                    <li onClick={() => handleOnClick(4)} className={`${activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}`}>Who Can Open a Trading Account?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="subscribe-section overflow-hidden">
          <div className="bg-color"></div>
          <div className="auto-container">
            <div className="inner-container">
              <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-5.png)" }}></div>
              <div className="row align-items-center">
                <div className="col-xl-9 col-lg-8 text-column mb-3">
                  <div className="text-box">
                    <h2 className="fw-bold">Take Control of Your Financial Future</h2>
                    <p className="text-light fs-6 mt_30">Open your live trading account today and gain direct access to global markets with a broker built for performance, transparency, and support.</p>
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
    </div>
  );
} 