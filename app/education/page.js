'use client'
import Link from "next/link"
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function Education() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Education">

            <section className="pricing-section pt_90 pb_70">
                <div className="auto-container">
                    <div className="sec-title pb_60 centred">
                        <span className="sub-title mb_14">Our Range</span>
                        <h2>Top Pricing List in Market</h2>
                    </div>
                    <div className="tabs-box">
                        <ul className="tab-btns tab-buttons clearfix">
                            <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>Beginner</li>
                            <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Trader</li>
                            <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>Expert</li>
                        </ul>
                        <div className="tabs-content">
                            <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                <div className="row clearfix">
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-5.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Chart Patterns Every Trader Should Know</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-1.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">When is the Best Time to Trade ForTradex</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-2.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Diving into Options, Futures, and Fortradex</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-3.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Leveraging Dividends and Interest in Trading</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-4.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Traders Make and How to Avoid Them</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-6.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Finding Your Edge in the Market</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-7.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Protecting Your Capital and Maximizing</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-8.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Diving into Options, Futures, and Fortradex</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="trader">
                            <div className="row clearfix">
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-1.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">When is the Best Time to Trade ForTradex</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-2.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Diving into Options, Futures, and Fortradex</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-3.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Leveraging Dividends and Interest in Trading</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-4.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Traders Make and How to Avoid Them</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-5.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Chart Patterns Every Trader Should Know</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-6.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Finding Your Edge in the Market</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-7.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Protecting Your Capital and Maximizing</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-8.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Diving into Options, Futures, and Fortradex</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="expert">
                            <div className="row clearfix">
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-3.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Leveraging Dividends and Interest in Trading</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-4.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Traders Make and How to Avoid Them</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-5.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Chart Patterns Every Trader Should Know</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-6.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Finding Your Edge in the Market</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-7.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Protecting Your Capital and Maximizing</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-8.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Diving into Options, Futures, and Fortradex</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-1.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">When is the Best Time to Trade ForTradex</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><Link href="/education-details"><img src="assets/images/resource/book-2.jpg" alt=""/></Link></figure>
                                                <div className="lower-content">
                                                    <h3><Link href="/education-details">Diving into Options, Futures, and Fortradex</Link></h3>
                                                    <div className="link"><Link href="/education-details">Learn Now</Link></div>
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

            <Subscribe/>

            </Layout>
        </div>
    )
}