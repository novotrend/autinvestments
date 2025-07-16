'use client'
import Link from "next/link"
import { useState } from "react"

export default function Trading_three() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

  return (
    <>
      <section className="trading-style-four pt_0 pb_100">
            <div className="auto-container">
                <div className="sec-title light centred pb_60">
                    <span className="sub-title mb_14">Learn More</span>
                    <h2>What is Trading</h2>
                </div>
                <div className="tabs-box">
                    <ul className="tab-btns tab-buttons clearfix">
                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>
                            <div className="icon-box"><i className="icon-20"></i></div>
                            <h4>Financial Markets</h4>
                        </li>
                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>
                            <div className="icon-box"><i className="icon-21"></i></div>
                            <h4>What is Forex</h4>
                        </li>
                        <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>
                            <div className="icon-box"><i className="icon-22"></i></div>
                            <h4>Tools Overview</h4>
                        </li>
                        <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}>
                            <div className="icon-box"><i className="icon-23"></i></div>
                            <h4>Platform Comparison</h4>
                        </li>
                    </ul>
                    <div className="tabs-content">
                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content_block_three">
                                        <div className="content-box mr_30">
                                            <h2>Financial Markets</h2>
                                            <p>Not sure which is the right FOREX com platform for you? Check out our handy platform comparison table which will show you all the differences.</p>
                                            <p>Check out our handy platform comparison table which will show you all the differences.</p>
                                            <div className="btn-box">
                                                <Link href="/account-details" className="theme-btn btn-one mr_20">Start Trading</Link>
                                                <Link href="/index-2" className="theme-btn btn-two">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box ml_70">
                                        <figure className="image"><img src="assets/images/resource/dashboard-2.png" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="forex">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content_block_three">
                                        <div className="content-box mr_30">
                                            <h2>What is Forex</h2>
                                            <p>Not sure which is the right FOREX com platform for you? Check out our handy platform comparison table which will show you all the differences.</p>
                                            <p>Check out our handy platform comparison table which will show you all the differences.</p>
                                            <div className="btn-box">
                                                <Link href="/account-details" className="theme-btn btn-one mr_20">Start Trading</Link>
                                                <Link href="/index-2" className="theme-btn btn-two">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box ml_70">
                                        <figure className="image"><img src="assets/images/resource/dashboard-2.png" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="overview">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content_block_three">
                                        <div className="content-box mr_30">
                                            <h2>Tools Overview</h2>
                                            <p>Not sure which is the right FOREX com platform for you? Check out our handy platform comparison table which will show you all the differences.</p>
                                            <p>Check out our handy platform comparison table which will show you all the differences.</p>
                                            <div className="btn-box">
                                                <Link href="/account-details" className="theme-btn btn-one mr_20">Start Trading</Link>
                                                <Link href="/index-2" className="theme-btn btn-two">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box ml_70">
                                        <figure className="image"><img src="assets/images/resource/dashboard-2.png" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="comparison">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content_block_three">
                                        <div className="content-box mr_30">
                                            <h2>Platform Comparison</h2>
                                            <p>Not sure which is the right FOREX com platform for you? Check out our handy platform comparison table which will show you all the differences.</p>
                                            <p>Check out our handy platform comparison table which will show you all the differences.</p>
                                            <div className="btn-box">
                                                <Link href="/account-details" className="theme-btn btn-one mr_20">Start Trading</Link>
                                                <Link href="/index-2" className="theme-btn btn-two">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box ml_70">
                                        <figure className="image"><img src="assets/images/resource/dashboard-2.png" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
