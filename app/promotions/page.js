'use client'
import Link from "next/link"
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import VideoPopup from "@/components/elements/VideoPopup"

export default function Promotions() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Promotions">
                <section className="platform-section alternat-2 pt_90 pb_60">
                    <div className="auto-container">
                        <div className="sec-title pb_20">
                            <p>Partner with AUT Investments LTD and earn by referring traders — simple, scalable, and performance-driven.</p>
                        </div>
                        <section className="funfact-section">
                            <div className="auto-container px-0">
                                <div className="inner-container d-flex flex-column p-sm-5 p-4 aligh-items-start justify-content-start">
                                    <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-16.png)" }}></div>
                                    <h4 className="text-dark fw-semibold mb-3">Maximize Every Trade with Special Offers</h4>
                                    <p>At AUT Investments LTD, we believe in rewarding our traders at every stage of their journey. Whether you're just starting out or already an active trader, our promotions are designed to give you more value, more flexibility, and more opportunities to grow your account. From generous welcome bonuses to trading contests and loyalty rewards, our promotional campaigns are tailored to enhance your trading experience — without hidden conditions.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                <section className="platform-section alternat-2 pt_90 pb_60">
                    <div className="auto-container">
                        <div className="sec-title pb_20">
                            <span className="sub-title mb_14">Promotions</span>
                            <h2>Current Promotions</h2>
                            <p>Partner with AUT Investments LTD and earn by referring traders — simple, scalable, and performance-driven.</p>
                        </div>
                        <div className="funfact-section">
                            <div className="auto-container px-0">
                                <div className="row align-items-center clearfix g-md-5 g-3">
                                    <div className="col-md-12 col-sm-12 content-column">
                                        <div className="card border-0 shadow-sm rounded-3 p-4">
                                            <div className="row align-items-center flex-wrap-reverse g-3">
                                                <div className="col-lg-7">
                                                    <div className="inner-box p-4">
                                                        <h3 className="mb-3">Welcome Bonus – Get Up to $500</h3>
                                                        <p className="mb-2">
                                                            Start strong with our 100% Welcome Bonus on your first deposit.
                                                        </p>
                                                        <div className="education-details-content">
                                                            <div className="text-box">
                                                                <ul className="list-item clearfix">
                                                                    <li className="lh-lg">Deposit $100 or more and receive an equal amount as bonus trading credit.</li>
                                                                    <li className="lh-lg">Boost your margin and increase your exposure to more trading opportunities.</li>
                                                                    <li className="lh-lg">Bonus is available for use on all instruments including forex, indices, stocks, and metals.</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <h5 className="fw-semibold mb-3 mt-4">Key Points</h5>
                                                        <ul className="list-style-one mb-0">
                                                            <li>Minimum deposit: $100</li>
                                                            <li>Maximum bonus: $500</li>
                                                            <li>Bonus cannot be withdrawn but profits earned can be</li>
                                                            <li>Available to new clients only</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="promotion-img">
                                                        <img className="rounded ms-auto" src="/assets/images/resource/welcome-bonus.jpg" alt="Welcome Bonus Promotion" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12 col-sm-12 content-column">
                                        <div className="card border-0 shadow-sm rounded-3 p-4">
                                            <div className="row align-items-center g-3">
                                                <div className="col-md-5">
                                                    <img className="img-fluid rounded image image-hov-two ms-auto" src="/assets/images/resource/refer-earn.jpg" alt="Refer & Earn Promotion" />
                                                </div>
                                                <div className="col-lg-7">
                                                    <div className="inner-box">
                                                        <h3 className="mb-3">Refer & Earn – Invite Friends, Get Paid</h3>
                                                        <p className="mb-2">
                                                            Know someone who trades? Invite them and earn up to $100 for each successful referral.
                                                        </p>

                                                        <div className="education-details-content">
                                                            <div className="text-box">
                                                                <ul className="list-item clearfix">
                                                                    <li className="lh-lg">Your friend must open a live account and meet the minimum deposit requirement</li>
                                                                    <li className="lh-lg">No limit on the number of referrals you can make</li>
                                                                    <li className="lh-lg">Rewards are credited directly to your account</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <h5 className="fw-semibold mb-3 mt-4">Key Points</h5>
                                                        <ul className="list-style-one mb-0">
                                                            <li>Referred user must complete KYC and deposit</li>
                                                            <li>Both referrer and referee receive rewards</li>
                                                            <li>Track referrals in real time via your dashboard</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12 col-sm-12 content-column">
                                        <div className="card border-0 shadow-sm rounded-4">
                                            <div className="row align-items-center flex-wrap-reverse g-3">
                                                <div className="col-lg-7">
                                                    <div className="inner-box p-4">
                                                        <h3 className="mb-3">Zero Commission Trading (Limited Time)</h3>
                                                        <p className="mb-2">
                                                            Enjoy zero commissions on all forex and metals trading for your first 30 days.
                                                        </p>

                                                        <div className="education-details-content">
                                                            <div className="text-box">
                                                                <ul className="list-item clearfix">
                                                                    <li className="lh-lg">Perfect for scalpers and active traders</li>
                                                                    <li className="lh-lg">Available on standard accounts</li>
                                                                    <li className="lh-lg">Spreads remain competitive with no hidden markups</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="education-details-content">
                                                            <div className="text-box">
                                                                <ul className="list-item clearfix">
                                                                    <li className="lh-lg">Perfect for scalpers and active traders</li>
                                                                    <li className="lh-lg">Available on standard accounts</li>
                                                                    <li className="lh-lg">Spreads remain competitive with no hidden markups</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <h5 className="fw-semibold mb-3 mt-4">Key Points</h5>
                                                        <ul className="list-style-one mb-0">
                                                            <li>Applies to new accounts only</li>
                                                            <li>Commission-free period starts from the date of first deposit</li>
                                                            <li>Automatically activated on qualifying accounts</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="promotion-img">
                                                        <img className="rounded ms-auto" src="assets/images/resource/zero-commission.jpg" alt="Zero Commission Trading Promotion" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12 col-sm-12 content-column">
                                        <div className="card border-0 shadow-sm rounded-4">
                                            <div className="row align-items-center g-3">
                                                <div className="col-lg-7 order-md-2">
                                                    <div className="inner-box p-4">
                                                        <h3 className="mb-3">Seasonal & Festival Bonuses</h3>
                                                        <p className="mb-2">
                                                            Celebrate key global events and holidays with limited-time bonus offers and cashbacks.
                                                        </p>

                                                        <div className="education-details-content">
                                                            <div className="text-box">
                                                                <ul className="list-item clearfix">
                                                                    <li className="lh-lg">Extra deposit bonuses during major holidays (New Year, Diwali, Christmas, Eid, etc.)</li>
                                                                    <li className="lh-lg">Loyalty cashback for volume-based trading</li>
                                                                    <li className="lh-lg">Weekly trading challenges with prize pools</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <h5 className="fw-semibold mb-3 mt-4">Stay Updated</h5>
                                                        <ul className="list-style-one mb-0">
                                                            <li>Watch your platform dashboard for new bonus alerts</li>
                                                            <li>Keep an eye on your email inbox for announcements</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-5 order-md-1">
                                                    <div className="promotion-img">
                                                        <img className="rounded me-auto" src="assets/images/resource/seasonal-bonus.jpg" alt="Seasonal & Festival Bonuses" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12 col-sm-12 content-column">
                                        <div className="card border-0 shadow-sm rounded-4">
                                            <div className="row align-items-center flex-wrap-reverse g-3">
                                                <div className="col-lg-7">
                                                    <div className="inner-box p-4">
                                                        <h3 className="mb-3">Loyalty Program (Coming Soon)</h3>
                                                        <p className="mb-2">
                                                            Earn points every time you trade and redeem them for:
                                                        </p>
                                                        <div className="education-details-content">
                                                            <div className="text-box">
                                                                <ul className="list-item clearfix">
                                                                    <li className="lh-lg">Cashback</li>
                                                                    <li className="lh-lg">Trading credits</li>
                                                                    <li className="lh-lg">VIP support and education access</li>
                                                                    <li className="lh-lg">Exclusive merchandise</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <h5 className="fw-semibold mb-3 mt-4">Tiers</h5>
                                                        <ul className="list-style-one mb-0">
                                                            <li>Bronze</li>
                                                            <li>Silver</li>
                                                            <li>Gold</li>
                                                            <li>Platinum</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="promotion-img">
                                                        <img className="rounded ms-auto" src="assets/images/resource/loyalty-program.jpg" alt="Loyalty Program Preview" />
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

                <section className="working-section apps-section alternat-2 mt_70 pt_100 pb_100">
                    <div className="auto-container">
                        <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-4.png)" }}></div>
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-sm-12 video-column">
                                <div className="video_block_one">
                                    <div className="video-box z_1 p_relative pt_50 pb_30 centred">
                                        <div className="video-inner">
                                            <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/video-2.jpg)" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-12 content-column">
                                <div className="content_block_nine">
                                    <div className="content-box ml_70">
                                        <div className="sec-title light pb_35">
                                            <span className="sub-title mb_10">Easy Steps</span>
                                            <h2>How to Claim Promotions</h2>
                                        </div>
                                        <div className="inner-box p-4">
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">1</span>
                                                <p>Log in to your client dashboard</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">2</span>
                                                <p> Navigate to the Promotions section</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">3</span>
                                                <p>Select the offer you want to activate</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">4</span>
                                                <p>Read and accept the terms</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="count-text bg-light text-dark">5</span>
                                                <p>Claim instantly or deposit (if required) to qualify</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="history-section pt_100 pb_60">
                    <div className="auto-container">
                        <div className="row clearfix row-deck g-3">
                            <div className="col-lg-6 col-md-12 col-sm-12 history-block">
                                <div className="history-block-one">
                                    <div className="inner-box clearfix h-100">
                                        <div>
                                            <h3>Terms & Conditions (Overview)</h3>
                                            <ul className="list-style-one mb-0">
                                                <li>Promotions are available only on live trading accounts</li>
                                                <li>Bonus credits are not withdrawable, but profits earned from them are</li>
                                                <li>Abuse of bonuses or trading manipulation will result in disqualification</li>
                                                <li>AUT Investments LTD reserves the right to modify or cancel promotions at any time</li>
                                                <li>Each promotion has its own detailed set of conditions — always review before participating</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 history-block">
                                <div className="history-block-one">
                                    <div className="inner-box clearfix h-100">
                                        <div>
                                            <h3>Why Traders Choose AUT Promotions</h3>
                                            <ul className="list-style-one clearfix ">
                                                <li>Transparent conditions with no hidden traps</li>
                                                <li>Genuine financial incentives for real trading activity</li>
                                                <li>Enhanced trading power for both new and existing clients</li>
                                                <li>Regularly updated offers based on trader needs and seasons</li>
                                                <li>Integrated tracking through your dashboard for easy reward management</li>
                                            </ul>
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
                            <div className="row">
                                <div className="col-md-12 col-sm-12 text-column">
                                    <div className="text-box">
                                        <h3 className="text-dark fw-semibold mb-3">Trade More. Earn More. Get Rewarded.</h3>
                                        <p className="text-light">Explore our active promotions and take advantage of added benefits on your trades. Whether you're growing your capital or sharing your experience with others, AUT Investments LTD is here to support and reward your every step in the markets.</p>
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