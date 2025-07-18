'use client'
import Link from "next/link"

export default function Trading() {
    return (
        <>
            <section className="trading-section pb_100">
                <div className="auto-container">
                    <div className="sec-title pt_60 pb_60">
                        <span className="sub-title mb_14">Feature & Tools</span>
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                            <div>
                                <h2>Smart Features and Tools</h2>
                            </div>
                            <Link href="/products/copy-trading" className="theme-btn btn-one">Start Trading Now</Link>
                        </div>
                    </div>
                    <div className="inner-container clearfix">
                        <div className="trading-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/assets/images/resource/trading-1.png" alt="" /></figure>
                                <h3><Link href="/products/copy-trading">Copy Trading</Link></h3>
                                <p>Mirror top-performing traders in real time</p>
                                <div className="btn-box"><Link href="/products/copy-trading" className="theme-btn btn-one">Start Trading Now</Link></div>
                            </div>
                        </div>
                        <div className="trading-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/assets/images/resource/trading-2.png" alt="" /></figure>
                                <h3><Link href="/products/social-trading">Social Trading</Link></h3>
                                <p> Learn, share, and follow strategies globally</p>
                                <div className="btn-box"><Link href="/products/social-trading" className="theme-btn btn-one">Start Trading Now</Link></div>
                            </div>
                        </div>
                        <div className="trading-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/assets/images/resource/trading-3.png" alt="" /></figure>
                                <h3><Link href="/products/algo-trading">Algo Trading</Link></h3>
                                <p>Automate trades with custom or prebuilt expert advisors</p>
                                <div className="btn-box"><Link href="/products/algo-trading" className="theme-btn btn-one">Start Trading Now</Link></div>
                            </div>
                        </div>
                        <div className="trading-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/assets/images/resource/trading-4.png" alt="" /></figure>
                                <h3>Economic Calendar</h3>
                                <p>Stay updated on key global events</p>
                            </div>
                        </div>
                        <div className="trading-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/assets/images/resource/trading-5.png" alt="" /></figure>
                                <h3>Daily Market Analysis</h3>
                                <p>Get expert insights and technical commentary</p>
                            </div>
                        </div>
                        <div className="trading-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/assets/images/resource/trading-6.png" alt="" /></figure>
                                <h3>VPS Hosting</h3>
                                <p>Run your trading strategies uninterrupted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
