'use client'
import Layout from "@/components/layout/Layout";
import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"
import { useState } from "react"

export default function DepositWithdraw() {

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
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Deposit & Withdraw">
        <section className="platform-section alternat-2 pt_90 pb_60">
          <div className="auto-container">
            <div className="row align-items-center g-3">
              <div className="col-lg-4">
                <div className="sec-title pb_20 d-lg-none">
                  <span className="sub-title mb_14">INFO</span>
                  <h2 className="mb-2">What is Open Deposit & Withdraw?</h2>
                  <p>Fund your trading journey with fast, secure, and transparent payment methods.</p>
                </div>
                <img src="/assets/images/resource/depositwithdraw-1.jpg" alt="" className="rounded" />
              </div>
              <div className="col-lg-8">
                <div className="sec-title pb_20 d-lg-block d-none">
                  <span className="sub-title mb_14">INFO</span>
                  <h2 className="mb-2">What is Open Deposit & Withdraw?</h2>
                  <p>Fund your trading journey with fast, secure, and transparent payment methods.</p>
                </div>
                <section className="funfact-section">
                  <div className="auto-container px-0">
                    <div className="inner-container d-flex flex-column p-sm-5 p-4 aligh-items-start justify-content-start">
                      <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-16.png)" }}></div>
                      <h4 className="text-dark fw-semibold mb-3">Seamless Transactions for Traders Worldwide</h4>
                      <p>At AUT Investments LTD, we understand that easy deposits and reliable withdrawals are
                        essential for your trading experience. That’s why we offer a streamlined funding process
                        designed for speed, flexibility, and global accessibility. Whether you’re starting your first trade or
                        managing active profits, our platform ensures that your money moves safely — in and out.</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        <section className="markets-section pt_70 pb_70">
          <div className="auto-container">
            <div className="row align-items-center g-3 flex-wrap-reverse">
              <div className="col-lg-8">
                <div className="sec-title d-lg-block d-none">
                  <span className="sub-title mb_14">Features of AUT</span>
                  <h2>Why Deposit & Withdraw with AUT <span className="d-block text-dark"> Investments LTD?</span></h2>
                </div>
                <div className="row clearfix education-details-content shadow-sm py-5 px-sm-4 px-2 rounded-4" >
                  <div className="col-12 content-column ">
                    <div className="text-box">
                      <ul className="list-item clearfix">
                        <li className="lh-lg"><b className="fs-6 text-dark">Multiple Funding Options:</b> <br />Choose from a variety of trusted methods including <b>bank transfers, credit/debit cards, UPI, e-wallets, and crypto payments</b>  — tailored for traders around the world.</li>
                        <li className="lh-lg"><b className="fs-6 text-dark">Fast Processing Times:</b> <br />Most deposits are processed instantly or within a few hours. Withdrawals are generally completed within <b>24 business hours</b>  depending on the method.</li>
                        <li className="lh-lg"><b className="fs-6 text-dark">No Hidden Fees:</b> <br />We maintain complete transparency. Most payment methods have <b>zero deposit fees.</b> Withdrawal fees, if applicable, are clearly displayed before confirmation.</li>
                        <li className="lh-lg"><b className="fs-6 text-dark">Secure Transactions:</b> <br />All financial operations are protected by <b>256-bit SSL encryption, two-factor authentication (2FA)</b> and comply with international AML/KYC regulations.</li>
                        <li className="lh-lg"><b className="fs-6 text-dark">Multi-Currency Support:</b> <br />Fund your account in <b>USD, EUR, GBP,</b> or local currency (as available), and enjoy automatic conversion at competitive forex rates.</li>
                        <li className="lh-lg"><b className="fs-6 text-dark">24/5 Support:</b> <br />Our support team is available throughout the trading week to assist with any deposit or withdrawal-related queries.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sec-title d-lg-none pb_30">
                  <span className="sub-title mb_14">Features of AUT</span>
                  <h2>Why Deposit & Withdraw with AUT <span className="d-block text-dark"> Investments LTD?</span></h2>
                </div>
                <img src="/assets/images/resource/deposit-feature.jpg" alt="" className="rounded" />
              </div>
            </div>
          </div>
        </section>

        <section className="award-section pt_60 pb_70">
          <div className="auto-container">
            <div className="sec-title pb_60">
              <span className="sub-title mb_14">Deposit</span>
              <h2>Available Deposit Methods</h2>
              <p>Some methods may vary based on your country of residence.</p>
            </div>
            <div className="table-outer">
              <table className="award-table">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Processing Time</th>
                    <th>Fees</th>
                    <th>Currencies Accepted</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bank Transfer</td>
                    <td>1–3 business days</td>
                    <td>May vary</td>
                    <td>USD, EUR, Local</td>
                  </tr>
                  <tr>
                    <td>Credit/Debit Cards</td>
                    <td>Instant–1 hour</td>
                    <td>Free</td>
                    <td>USD, EUR, GBP</td>
                  </tr>
                  <tr>
                    <td>E-Wallets (Skrill, Neteller)</td>
                    <td>Instant</td>
                    <td>Free/Low</td>
                    <td>USD, EUR</td>
                  </tr>
                  <tr>
                    <td>UPI/IMPS (India only)</td>
                    <td>Instant</td>
                    <td>Free</td>
                    <td>INR</td>
                  </tr>
                  <tr>
                    <td>Crypto Payments (BTC, ETH, USDT)</td>
                    <td>Within 1 hour</td>
                    <td>Network Fee</td>
                    <td>USD equivalent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="award-section pt_60 pb_70">
          <div className="auto-container">
            <div className="sec-title pb_60">
              <span className="sub-title mb_14">Withdrawal</span>
              <h2>Available Withdrawal Methods</h2>
              <p>Some methods may vary based on your country of residence.</p>
            </div>
            <div className="table-outer">
              <table className="award-table">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Processing Time</th>
                    <th>Fees</th>
                    <th>Min Withdrawal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bank Transfer</td>
                    <td>1–3 business days</td>
                    <td>May apply</td>
                    <td>$50</td>
                  </tr>
                  <tr>
                    <td>Credit/Debit Cards</td>
                    <td>1–2 business days</td>
                    <td>Free</td>
                    <td>$20</td>
                  </tr>
                  <tr>
                    <td>E-Wallets</td>
                    <td>Within 24 hours</td>
                    <td>Free/Low</td>
                    <td>$10</td>
                  </tr>
                  <tr>
                    <td>Crypto Wallet</td>
                    <td>Within 24 hours</td>
                    <td>Network-based Fee</td>
                    <td>$50 equivalent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="platform-section alternat-2 pt_90 pb_130">
          <div className="auto-container">
            <div className="sec-title mb-sm-5">
              <span className="sub-title mb_14">trading</span>
              <h2>Trading Platforms</h2>
            </div>
            <div className="tabs-box">
              <div className="row clearfix flex-wrap-reverse g-3">
                <div className="col-xl-8 col-lg-12 col-md-12 content-column">
                  <div className="tabs-content">
                    <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                      <div className="content-box">
                        <h2>How to Deposit Funds ?</h2>
                        <ul className="list-style-one clearfix ">
                          <li><b>Log in to Your Account Dashboard</b></li>
                          <li><b>Click on ‘Deposit’</b>from the wallet or dashboard</li>
                          <li><b> Select Your Preferred Method</b>.</li>
                          <li><b>Enter Amount and Currency</b></li>
                          <li><b>Follow the Secure Payment Gateway Instructions</b></li>
                          <li><b>Check Wallet Balance Post Confirmation</b></li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="forex">
                      <div className="content-box">
                        <h2>How to Withdraw Funds</h2>
                        <ul className="list-style-one clearfix">
                          <li><b>Log in to Your Account</b></li>
                          <li><b>Navigate to ‘Withdraw’ Section</b></li>
                          <li><b>Select Withdrawal Method</b></li>
                          <li><b>Enter Amount and Confirm Details</b></li>
                          <li><b>Submit Request for Processing</b></li>
                          <li><b> Track Withdrawal Status in Real-Time</b></li>
                        </ul>
                      </div>
                    </div>
                    <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="cpoy">
                      <div className="content-box">
                        <h2>Important Notes</h2>
                        <p></p>
                        <ul className="list-style-one clearfix">
                          <li>Withdrawals must be made to the same source used for depositing, as per anti-money laundering policies.</li>
                          <li>In some cases, identity verification may be requested before processing withdrawals.</li>
                          <li>Processing times can vary on weekends or public holidays.</li>
                          <li>AUT Investments LTD does not charge fees on most methods, but external payment
                            providers may apply nominal charges.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12 btn-column">
                  <ul className="three tab-btns tab-buttons shop-tab-btn clearfix">
                    <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>How to Deposit Funds</li>
                    <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>How to Withdraw Funds</li>
                    <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>Important Notes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section pt_60 pb_70">
          <div className="auto-container">
            <div className="row align-items-center g-5 flex-wrap-reverse">
              <div className="col-lg-8 col-md-12 col-sm-12">
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
                          <h3>Is there a minimum deposit to start trading?</h3>
                        </div>
                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                          <div className="content">
                            <p>
                              Yes. Minimum deposits start from $100, depending on the account type.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                          <div className="icon-box"><i className="icon-29"></i></div>
                          <h3>Can I withdraw my profits anytime?</h3>
                        </div>
                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                          <div className="content">
                            <p>
                              Yes. You can withdraw available balance anytime, subject to verification.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                          <div className="icon-box"><i className="icon-29"></i></div>
                          <h3>Are my payment details secure?</h3>
                        </div>
                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                          <div className="content">
                            <p>
                              Absolutely. All data is encrypted, and we do not store sensitive payment information.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                          <div className="icon-box"><i className="icon-29"></i></div>
                          <h3>Can I deposit using someone else's card or wallet?</h3>
                        </div>
                        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                          <div className="content">
                            <p>
                              No. All deposits must be made using payment methods registered under your name.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="sec-title pb_30 d-lg-none">
                  <span className="sub-title mb_14">Help</span>
                  <h2>Frequently Asked Questions (FAQ)</h2>
                </div>
                <img src="/assets/images/resource/faq.jpg" alt="" className="rounded" />
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
                    <h2 className="fw-bold">Begin Your Trading Journey Risk-Free</h2>
                    <p className="text-light fs-6 mt_30">Open your free demo account with AUT Investments LTD and discover the tools, speed, and reliability of our trading environment. Practice. Learn. Grow — all without financial pressure.</p>
                    <Link className="theme-btn btn-one bg-dark me-3 mt-3" href="/contact">Contact Support</Link>
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