'use client'
import Layout from "@/components/layout/Layout";
import Link from "next/link"
import VideoPopup from "@/components/elements/VideoPopup"
import { useState } from "react"

export default function CopyTrading() {
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
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Copy Trading">

        <section className="platform-section alternat-2 pt_90 pb_60">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="sec-title pb_20">
                  <span className="sub-title mb_14">INFO</span>
                  <h2 className="mb-2">Copy Trading</h2>
                  <p>
                    Trade like the pros — automatically. Let top traders lead the way while you grow your portfolio.
                  </p>
                </div>
                <section className="funfact-section">
                  <div className="auto-container px-0">
                    <div className="inner-container d-flex flex-column p-sm-5 p-4 aligh-items-start justify-content-start">
                      <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-16.png)" }}></div>
                      <h4 className="mb-3">What is Copy Trading?</h4>

                      <p className="mb-3">
                        Copy Trading allows you to automatically mirror the trades of experienced and successful
                        traders directly into your own account. Instead of executing trades manually, you choose a
                        professional trader (also known as a strategy provider), and every trade they make is copied in
                        real-time — proportionally and transparently.
                      </p>
                      <p>
                        At AUT Investments LTD, Copy Trading is designed for beginners, busy investors, and
                        diversified portfolio builders who want exposure to global markets without the need for active
                        trading or technical analysis.
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
              <span className="sub-title mb_14">Accounts</span>
              <h2>Why Choose Copy Trading with AUT Investments LTD?</h2>
            </div>
            <div className="row clearfix row-deck">
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa fa-user-graduate fw-lighter"></i></div>
                    <h3>Zero Trading Experience Needed</h3>
                    <p>
                      Start participating in the markets without deep knowledge or manual execution. Ideal for
                      new traders or passive investors.
                    </p>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa fa-bolt fw-lighter"></i></div>
                    <h3>Instant Execution</h3>
                    <p>All trades are copied automatically with real-time synchronization and minimal delay.</p>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa fa-gamepad fw-lighter"></i></div>
                    <h3>Full Control Over Your Account</h3>
                    <p>You can pause, modify, or stop copying a trader at any time. Your funds always remain in your control.</p>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa fa-users fw-lighter"></i></div>
                    <h3>Diverse Trader Pool</h3>
                    <p>Browse and follow traders by performance, strategy, risk level, and historical results.</p>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="800ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa fa-trophy fw-lighter"></i></div>
                    <h3>Performance-Based Selection</h3>
                    <p>Choose from top-ranked strategy providers who trade in forex, indices, stocks, commodities, crypto, and more.</p>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                <div className="account-block-two text-start wow fadeInUp animated" data-wow-delay="1000ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <div className="icon-box"><i className="fa fa-chart-bar fw-lighter"></i></div>
                    <h3>Transparent Reporting</h3>
                    <p>View real-time stats on ROI, drawdown, total trades, win rate, and active followers.</p>
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
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="sec-title light pb_35 d-lg-none">
                  <span className="sub-title mb_10">Guidance</span>
                  <h2>How Copy Trading Works</h2>
                </div>
                <img src="/assets/images/resource/copytrading.jpg" alt="" className="rounded" />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_nine">
                  <div className="content-box ml_70">
                    <div className="sec-title light pb_35 d-lg-block d-none">
                      <span className="sub-title mb_10">Guidance</span>
                      <h2>How Copy Trading Works</h2>
                    </div>
                    <div className="inner-box">
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">1</span>
                        <h3>Open a Live Trading Account</h3>
                        <p>Register with AUT Investments LTD and verify your identity</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">2</span>
                        <h3>Access the Copy Trading Platform</h3>
                        <p>Log in to your client dashboard and explore the Copy Trading interface.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">3</span>
                        <h3>Select a Strategy Provider</h3>
                        <p>Use filters to find a trader that suits your goals — conservative, balanced, or aggressive.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">4</span>
                        <h3>Set Investment Amount & Risk</h3>
                        <p>Allocate capital and adjust trade size ratios or risk limits.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">5</span>
                        <h3>Start Copying</h3>
                        <p>Trades will be mirrored in your account automatically. You can monitor, adjust, or stop copying any time.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-style-two mt_60">
          <div className="auto-container">
            <div className="inner-container">
              <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-33.png)" }}></div>
              <div className="upper-box p_relative mb_55">
                <div className="row align-items-center">
                  <div className="col-md-12 col-sm-12 title-column">
                    <div className="sec-title audience w-100">
                      <span className="sub-title mb_14">Audience</span>
                      <h2>Who Can Use Copy Trading?</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lower-box">
                <div className="row clearfix row-deck g-4">
                  <div className="col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                      <h2>New Traders</h2>
                      <p>Gain market exposure without deep trading knowledge.</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                      <h2>Busy Professionals</h2>
                      <p>Let experienced traders work for you while you focus on other priorities.</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                      <h2>Diversified Investors</h2>
                      <p>Follow multiple traders with different strategies to spread your risk.</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                      <h2>Learners & Observers</h2>
                      <p>Watch how professionals manage trades and improve your trading knowledge.</p>
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
              <span className="sub-title mb_14">Empowerment</span>
              <h2>Comprehensive Copy Trading Features & Benefits</h2>
            </div>
            <div className="tabs-box">
              <ul className="tab-btns tab-buttons clearfix border-bottom text-center">
                <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>
                  <div className="icon-box"><i className="fa fa-cogs"></i></div>
                  <h4>Features & Tools</h4>
                </li>
                <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>
                  <div className="icon-box"><i className="fa fa-pie-chart"></i></div>
                  <h4>For Strategy Providers</h4>
                </li>
                <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>
                  <div className="icon-box"><i className="fa fa-star"></i></div>
                  <h4>Benefits at a Glance</h4>
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
                                <h2>Features & Tools</h2>
                              </div>
                              <div className="table-outer">
                                <table className="award-table">
                                  <thead>
                                    <tr>
                                      <th>Feature</th>
                                      <th>Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Top Trader Rankings</td>
                                      <td>View ranked profiles based on consistent performance</td>
                                    </tr>
                                    <tr>
                                      <td>Flexible Allocation</td>
                                      <td>Invest any amount, starting from $100</td>
                                    </tr>
                                    <tr>
                                      <td>Risk Management Settings</td>
                                      <td>Set loss limits and max trade volume</td>
                                    </tr>
                                    <tr>
                                      <td>No Performance Fees</td>
                                      <td>You keep 100% of your profits unless otherwise stated</td>
                                    </tr>
                                    <tr>
                                      <td>Multi-Strategy Following</td>
                                      <td>Copy multiple traders at the same time</td>
                                    </tr>
                                    <tr>
                                      <td>Real-Time Statistics</td>
                                      <td>Full transparency on each trader’s history</td>
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
                          <div className="award-section pt_60 pb_100">
                            <div className="auto-container">
                              <div className="sec-title pb_60">
                                <h2>For Strategy Providers</h2>
                              </div>
                              <p className="mb-0">Are you a skilled trader with a proven track record?</p>
                              <p>Join as a Strategy Provider and:</p>
                              <ul className="list-style-one clearfix mb_20">
                                <li>Earn commissions from each follower</li>
                                <li>Grow your own trader profile and reputation</li>
                                <li>Get listed on our global copy trading leaderboard</li>
                                <li>Receive performance-based rewards</li>
                              </ul>
                              <p>
                                <b>Requirements: </b> Verified account, trading consistency, and responsible risk management.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                  <div className="row align-items-center">
                    <div className="col-md-12 col-sm-12 content-column">
                      <div className="content_block_three">
                        <div className="content-box mr_30">
                          <div className="award-section pt_60 pb_100">
                            <div className="auto-container">
                              <div className="sec-title pb_60">
                                <h2>Benefits at a Glance</h2>
                              </div>
                              <div className="table-outer">
                                <table className="award-table">
                                  <thead>
                                    <tr>
                                      <th>For Investors</th>
                                      <th>For Strategy Providers</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>No experience required</td>
                                      <td>Monetize your trading skills</td>
                                    </tr>
                                    <tr>
                                      <td>Hands-free portfolio management</td>
                                      <td>Build a global following</td>
                                    </tr>
                                    <tr>
                                      <td>Full transparency & risk control </td>
                                      <td>Earn commission per copied trade</td>
                                    </tr>
                                    <tr>
                                      <td>Access to global markets</td>
                                      <td>Professional exposure</td>
                                    </tr>
                                    <tr>
                                      <td>Start from $100</td>
                                      <td>Incentives for consistent results</td>
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

        <section className="about-section pt_100 pb_100">
          <div className="auto-container">
            <div className="row align-items-center g-5 flex-wrap-reverse">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_one">
                  <div className="content-box mr_80">
                    <div className="sec-title pb_30 d-none d-lg-block">
                      <span className="sub-title mb_14">Resolve</span>
                      <h2>Frequently Asked Questions</h2>
                    </div>
                    <ul className="accordion-box">
                      <li className="accordion block active-block">
                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                          <div className="icon-box"><i className="icon-29"></i></div>
                          <h3>Can I stop copying a trader at any time?</h3>
                        </div>
                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                          <div className="content">
                            <p>Yes. You can pause or stop copying instantly, without penalties.</p>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                          <div className="icon-box"><i className="icon-29"></i></div>
                          <h3>Do I have to copy all trades?</h3>
                        </div>
                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                          <div className="content">
                            <p>You can copy all or set specific limits based on your preferences.</p>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                          <div className="icon-box"><i className="icon-29"></i></div>
                          <h3>What if the trader makes a loss?</h3>
                        </div>
                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                          <div className="content">
                            <p>Copy trading carries risk. Use risk controls and diversify by copying multiple providers.</p>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                          <div className="icon-box"><i className="icon-29"></i></div>
                          <h3>Are there any hidden fees?</h3>
                        </div>
                        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                          <div className="content">
                            <p>No hidden charges. Any performance-based sharing will be clearly visible before subscribing.</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="sec-title pb_30 d-lg-none">
                  <span className="sub-title mb_14">Resolve</span>
                  <h2>Frequently Asked Questions</h2>
                </div>
                <img src="/assets/images/resource/copytrading-faq.jpg" alt="" className="rounded" />
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
                    <h2 className="fw-bold">Let Experts Trade. You Follow.</h2>
                    <p className="text-light fs-6 mt_30">
                      With Copy Trading at AUT Investments LTD, you gain exposure to professional-level trading
                      while maintaining full control and flexibility. Whether you want to grow passively or learn actively
                      — this is your smarter way to trade.
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