'use client'
import Link from "next/link"
import { useState } from "react"


export default function Trading_two() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <>
            <section className="about-style-two pt_60 pb_100">
                <div className="auto-container">
                    <div className="sec-title pt_60 pb_60">
                        <span className="sub-title mb_14">Explore</span>
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                            <div>
                                <h2>Explore Our Markets</h2>
                                <p>Trade a wide range of global instruments with one account</p>
                            </div>
                            <Link href="/" className="theme-btn btn-one">Explore All Markets</Link>
                        </div>
                    </div>
                    <div className="tabs-box">
                        <div className="row clearfix">
                            <div className="col-lg-5 col-md-12 col-sm-12 btn-column">
                                <ul className="tab-btns tab-buttons clearfix">
                                    <li onClick={() => handleOnClick(1)} className={`my-1 ${activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}`}>Forex <i className="icon-26"></i></li>
                                    <li onClick={() => handleOnClick(2)} className={`my-1 ${activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}`}>Indices <i className="icon-26"></i></li>
                                    <li onClick={() => handleOnClick(3)} className={`my-1 ${activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}`}>Stocks <i className="icon-26"></i></li>
                                    <li onClick={() => handleOnClick(4)} className={`my-1 ${activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}`}>Commodities <i className="icon-26"></i></li>
                                    <li onClick={() => handleOnClick(5)} className={`my-1 ${activeIndex === 5 ? "tab-btn active-btn" : "tab-btn"}`}>Metals <i className="icon-26"></i></li>
                                    <li onClick={() => handleOnClick(6)} className={`my-1 ${activeIndex === 6 ? "tab-btn active-btn" : "tab-btn"}`}>Crypto <i className="icon-26"></i></li>
                                </ul>
                            </div>
                            <div className="col-lg-7 col-md-12 col-sm-12 content-column ">
                                <div className="tabs-content">
                                    <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                        <div className="content-box">
                                            <h2>Forex</h2>
                                            <p>60+ major, minor, and exotic currency pairs
                                                <br />
                                                High liquidity, 24/5 access
                                            </p>
                                            <figure className="image-box"><Link href="assets/images/resource/explore-1.png" className="lightbox-image" data-fancybox='gallery'><img className="rounded-3" src="assets/images/resource/explore-1.png" alt="" /></Link></figure>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="trader">
                                        <div className="content-box">
                                            <h2>Indices</h2>
                                            <p>
                                                Global stock indices (US30, GER40, etc.)
                                                <br />
                                                Track economies, trade trends
                                            </p>
                                            <figure className="image-box"><Link href="assets/images/resource/explore-2.png" className="lightbox-image" data-fancybox='gallery'><img className="rounded-3" src="assets/images/resource/explore-2.png" alt="" /></Link></figure>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="personal">
                                        <div className="content-box">
                                            <h2>Stocks</h2>
                                            <p>
                                                Top US, UK, and EU company shares
                                                <br />
                                                React to earnings and business news
                                            </p>
                                            <figure className="image-box"><Link href="assets/images/resource/explore-3.png" className="lightbox-image" data-fancybox='gallery'><img className="rounded-3" src="assets/images/resource/explore-3.png" alt="" /></Link></figure>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="meta">
                                        <div className="content-box">
                                            <h2>Commodities</h2>
                                            <p>
                                                Oil, natural gas, and agricultural goods
                                                <br />
                                                Hedge inflation, trade volatility
                                            </p>
                                            <figure className="image-box"><Link href="assets/images/resource/explore-4.png" className="lightbox-image" data-fancybox='gallery'><img className="rounded-3" src="assets/images/resource/explore-4.png" alt="" /></Link></figure>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 5 ? "tab active-tab" : "tab"} id="meta">
                                        <div className="content-box">
                                            <h2>Metals</h2>
                                            <p>
                                                Gold, silver, platinum
                                                <br />
                                                Safe-haven trading opportunities
                                            </p>
                                            <figure className="image-box"><Link href="assets/images/resource/explore-5.png" className="lightbox-image" data-fancybox='gallery'><img className="rounded-3" src="assets/images/resource/explore-5.png" alt="" /></Link></figure>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 6 ? "tab active-tab" : "tab"} id="meta">
                                        <div className="content-box">
                                            <h2>Crypto</h2>
                                            <p>
                                                Bitcoin, Ethereum, and more
                                                <br />
                                                24/7 market access with full control
                                            </p>
                                            <figure className="image-box"><Link href="assets/images/resource/explore-6.png" className="lightbox-image" data-fancybox='gallery'><img className="rounded-3" src="assets/images/resource/explore-6.png" alt="" /></Link></figure>
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
