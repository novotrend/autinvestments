
'use client'

import { HiOutlineGlobeAlt } from 'react-icons/hi'
import { BiExpandAlt } from 'react-icons/bi'
import { HiOutlineChartBar } from 'react-icons/hi'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { GoLaw } from 'react-icons/go'
import { BiSupport } from 'react-icons/bi'

export default function Account() {
    return (
        <>
            <section className="account-section pt_100 pb_70">
                <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-1.png)" }}></div>
                <div className="auto-container">
                    <div className="sec-title pb_60">
                        <span className="sub-title mb_14">Why Us ?</span>
                        <h2>Why Trade with AUT Investments Limited</h2>
                        <p>We use cookines to understand how you use our website and to give you the best possible experience.</p>
                        <p>Start trading in minutes with low deposits and fast KYC.</p>
                    </div>
                    <div className="row clearfix row-deck">
                        <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                            <div className="account-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><HiOutlineGlobeAlt size={30} /></div>
                                    <h3>Global Market Access</h3>
                                    <p> Over 1000 instruments including forex,
                                        stocks, and more</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                            <div className="account-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><BiExpandAlt size={30} /></div>
                                    <h3>Tight Spreads & Fast Execution</h3>
                                    <p>Institutional-grade trading conditions</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                            <div className="account-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><HiOutlineChartBar size={30} /></div>
                                    <h3>Powerful Platforms</h3>
                                    <p>MetaTrader 5 supported on web, desktop, and mobile</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                            <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><HiOutlineCurrencyDollar size={30} /></div>
                                    <h3>Low Spreads</h3>
                                    <p>Our super low spreads start from 0.1 pips with no commissions and no hidden fees.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                            <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><GoLaw size={30} /></div>
                                    <h3>Regulated in Mauritius</h3>
                                    <p>Transparent operations from a trusted
                                        jurisdiction</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 account-block">
                            <div className="account-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><BiSupport size={30} /></div>
                                    <h3>Dedicated Support</h3>
                                    <p>Real people. Real help. Available 24/5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
