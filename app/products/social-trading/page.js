'use client'
import Layout from "@/components/layout/Layout";
import Link from "next/link"
import { useState } from "react"

export default function SocialTrading() {
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
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Social Trading">

        <section className="platform-section alternat-2 pt_90 pb_60">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="sec-title pb_20">
                  <span className="sub-title mb_14">INFO</span>
                  <h2 className="mb-2">Social Trading </h2>
                  <p>
                    Join a community of traders. Share insights, follow strategies, and grow together.
                  </p>
                </div>
                <section className="funfact-section">
                  <div className="auto-container px-0">
                    <div className="inner-container d-flex flex-column p-sm-5 p-4 aligh-items-start justify-content-start">
                      <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-16.png)" }}></div>
                      <h4 className="mb-3">What is Social Trading ?</h4>

                      <p className="mb-3">
                        Social Trading is a collaborative approach to trading that allows users to connect, observe, and
                        interact with fellow traders in real-time. Instead of trading in isolation, you become part of a
                        transparent, knowledge-sharing ecosystem where you can learn from top performers, follow
                        proven strategies, and share your own trading ideas.
                      </p>
                      <p>
                        At AUT Investments LTD, our Social Trading platform brings together the best of fintech and
                        social networking to help traders make smarter decisions through community-driven insights.
                      </p>
                    </div>
                  </div>
                </section>
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
                  <span className="sub-title mb_10">Guidance</span>
                  <h2>How Social Trading Works</h2>
                </div>
                <img src="/assets/images/resource/socialtrading.jpg" alt="" className="rounded" />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                <div className="content_block_nine">
                  <div className="content-box ml_70">
                    <div className="sec-title light pb_35 d-none d-lg-block ">
                      <span className="sub-title mb_10">Guidance</span>
                      <h2>How Social Trading Works</h2>
                    </div>
                    <div className="inner-box">
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">1</span>

                        <p> <b>View Trades in Real Time</b> View trades and strategies of other traders in real time</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">2</span>
                        <p> <b>Engage with the trading Community</b> through comments, discussions, and reactions </p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">3</span>
                        <p> <b> Follow successful traders </b> and receive updates on their activities.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">4</span>
                        <p> <b> Share your own trading moves </b> and build your profile and reputation</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">5</span>
                        <p> <b> Build confidence </b> by learning from the crowd, observing outcomes, and adapting strategies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="funfact-section pt_120 pb_70">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="sec-title pb_20">
                  <span className="sub-title mb_14">BENEFITS</span>
                  <h2 className="mb-2">Benefits of Social Trading</h2>
                </div>
              </div>
            </div>
            <div className="inner-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-one h-100">
                    <div className="inner-box h-100">
                      <h3 className="mb-3">For New Traders</h3>
                      <div className="education-details-content">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">Learn faster by watching real trades and strategies</li>
                            <li className="lh-lg">Avoid common mistakes by observing experienced traders</li>
                            <li className="lh-lg">Build confidence without diving in blindly</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-one h-100">
                    <div className="inner-box h-100">
                      <h3 className="mb-3">For Intermediate Traders</h3>
                      <div className="education-details-content">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">Validate your own strategies against others</li>
                            <li className="lh-lg">Exchange views and get feedback on trade setups</li>
                            <li className="lh-lg">Follow traders aligned with your style or goals</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-one h-100">
                    <div className="inner-box h-100">
                      <h3 className="mb-3">For Expert Traders</h3>
                      <div className="education-details-content">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">Share insights and earn a following</li>
                            <li className="lh-lg">Monetize your expertise through subscriptions or recognition</li>
                            <li className="lh-lg">Build your brand and reputation across a growing trader base</li>
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
            <div className="row align-items-center g-3 flex-wrap-reverse">
              <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                <div className="content_block_nine">
                  <div className="content-box ml_70">
                    <div className="sec-title light pb_35 d-none d-lg-block">
                      <span className="sub-title mb_10">Guidance</span>
                      <h2 className="text-dark">How to Start Social Trading</h2>
                    </div>
                    <div className="inner-box">
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">1</span>
                        <h5 className="text-dark fw-semibold">Open a Live Account</h5>
                        <p className="text-dark text-start">
                          Sign up with AUT Investments LTD and access the social trading dashboard.
                        </p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">2</span>
                        <h5 className="text-dark fw-semibold">Set Up Your Profile</h5>
                        <p className="text-dark text-start">
                          Add a photo, trading bio, risk level, and favorite instruments to make your profile discoverable.
                        </p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">3</span>
                        <h5 className="text-dark fw-semibold">Explore the Community</h5>
                        <p className="text-dark text-start">
                          Use filters to find traders by ROI, asset class, strategy, or popularity.
                        </p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">4</span>
                        <h5 className="text-dark fw-semibold">Engage and Observe</h5>
                        <p className="text-dark text-start">
                          Comment on trades, ask questions, follow traders, and build your network.
                        </p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">5</span>
                        <h5 className="text-dark fw-semibold">Trade, Share & Grow</h5>
                        <p className="text-dark text-start">
                          Place your own trades and optionally share them with the community to build your reputation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="sec-title light pb_35 d-lg-none">
                  <span className="sub-title mb_10">Guidance</span>
                  <h2 className="text-dark">How to Start Social Trading</h2>
                </div>
                <img src="/assets/images/resource/socialtrading-step.jpg" alt="" className="rounded" />
              </div>
            </div>
          </div>
        </section>

        <section className="trading-style-four pt_100 pb_100">
          <div className="auto-container">
            <div className="sec-title pb_60">
              <span className="sub-title mb_14">Community</span>
              <h2>Unlock the Power of Social Trading with AUT Investments LTD</h2>
            </div>
            <div className="tabs-box">
              <ul className="tab-btns tab-buttons clearfix border-bottom text-center">
                <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>
                  <div className="icon-box"><i className="fa fa-sliders"></i></div>
                  <h4>Key Features</h4>
                </li>
                <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>
                  <div className="icon-box"><i className="fa fa-shield"></i></div>
                  <h4>Security & Privacy</h4>
                </li>
                <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>
                  <div className="icon-box"><i className="fa fa-thumbs-up"></i></div>
                  <h4>Top Reasons</h4>
                </li>
                <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}>
                  <div className="icon-box"><i className="icon-21"></i></div>
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
                                <h2>Key Features of AUT Investments LTD Social Trading</h2>
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
                                      <td>Live Feed </td>
                                      <td>See real-time trades, wins/losses, and updates from traders across the platform</td>
                                    </tr>
                                    <tr>
                                      <td>Public Profiles</td>
                                      <td>View detailed stats like ROI, risk level, drawdown, trade frequency, and win ratio</td>
                                    </tr>
                                    <tr>
                                      <td>Comment & React</td>
                                      <td>Interact with trader activity by commenting or reacting — just like a social network</td>
                                    </tr>
                                    <tr>
                                      <td>Strategy Subscriptions</td>
                                      <td>Subscribe to trading ideas, track portfolio moves, and get notified instantly</td>
                                    </tr>
                                    <tr>
                                      <td>Community Rankings</td>
                                      <td>Discover top-performing traders through a public leaderboard</td>
                                    </tr>
                                    <tr>
                                      <td>Tag Instruments & Strategies</td>
                                      <td>Traders can tag their trades with asset classes or strategies like #forex, #gold, #scalping</td>
                                    </tr>
                                    <tr>
                                      <td>Reputation Building </td>
                                      <td>Get followed, earn engagement, and build credibility as a trader within the platform</td>
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
                                <h2>Security & Privacy</h2>
                              </div>
                              <ul className="list-style-one clearfix">
                                <li>Your funds and trade executions remain fully secure within your trading account</li>
                                <li>Sharing trades is optional — you can choose to remain private or become a public trader</li>
                                <li>Community rules and moderation ensure a respectful and trustworthy environment</li>
                              </ul>
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
                        <div className="content-box">
                          <div className="award-section pt_60 pb_100">
                            <div className="auto-container">
                              <div className="sec-title pb_60">
                                <h2>Top Reasons to Use Social Trading at AUT Investments LTD</h2>
                              </div>
                              <ul className="list-style-one clearfix">
                                <li>Collaborative learning environment</li>
                                <li>Smart trader discovery tools</li>
                                <li>Transparent performance insights</li>
                                <li>No coding or technical setup required</li>
                                <li>Built-in risk indicators for informed following</li>
                                <li>Access on desktop and mobile platforms</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={activeIndex === 4 ? "tab active-tab" : "tab"}>
                  <div className="row align-items-center">
                    <div className="col-md-12 col-sm-12 content-column">
                      <div className="content_block_three">
                        <div className="content-box mr_30">
                          <div className="award-section pt_60 pb_100">
                            <div className="auto-container">
                              <div className="sec-title pb_60">
                                <h2>Social Trading vs Copy Trading – What’s the Difference?</h2>
                              </div>
                              <div className="table-outer">
                                <table className="award-table">
                                  <thead>
                                    <tr>
                                      <th>Aspect</th>
                                      <th>Social Trading</th>
                                      <th>Copy Trading</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Engagement</td>
                                      <td>Interactive – like, comment, discuss</td>
                                      <td>Passive – no interaction required</td>
                                    </tr>
                                    <tr>
                                      <td>Control</td>
                                      <td>Full control over your own trades </td>
                                      <td>Automated mirroring of chosen trader's actions</td>
                                    </tr>
                                    <tr>
                                      <td>Learning Curve</td>
                                      <td>More educational and community-driven</td>
                                      <td>Ideal for passive income or hands-off investing</td>
                                    </tr>
                                    <tr>
                                      <td>Access to global markets</td>
                                      <td>Professional exposure</td>
                                    </tr>
                                    <tr>
                                      <td>Transparency</td>
                                      <td>View trader thoughts and strategy explanations</td>
                                      <td>Execution without detailed reasoning</td>
                                    </tr>
                                    <tr>
                                      <td>Audience</td>
                                      <td>Best for those who want to learn and engage</td>
                                      <td>Best for those who want automation</td>
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

        <section className="subscribe-section">
          <div className="bg-color"></div>
          <div className="auto-container">
            <div className="inner-container">
              <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-5.png)" }}></div>
              <div className="row align-items-center">
                <div className="col-12 text-column">
                  <div className="text-box">
                    <h2 className="fw-bold">Trade Smarter Together</h2>
                    <p className="text-light fs-6 mt_30">
                      Social Trading at AUT Investments LTD isn’t just about trades — it’s about community,
                      transparency, and growth. Whether you're here to learn, teach, follow, or lead — connect with a
                      global network of traders and make informed decisions together.
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