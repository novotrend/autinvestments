import Link from "next/link"

export default function Apps() {
    return (
        <>
            <section className="apps-style-two pt_150 pb_150">
                <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-18.png)" }}></div>
                <figure className="image-layer"><img src="/assets/images/resource/mockup-1.png" alt="" /></figure>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                            <div className="content_block_four">
                                <div className="content-box ml_80">
                                    <div className="sec-title light pb_40">
                                        <span className="sub-title mb_14">Download App</span>
                                        <h2>Download Trading App</h2>
                                        <p>We use cookies to understand how you use our website and to give you the best possible experience.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="/index-2" className="apple-store">
                                            <img src="/assets/images/icons/icon-7.png" alt="" />
                                            <span>Download on</span>
                                            App Store
                                        </Link>
                                        <Link href="/index-2" className="play-store">
                                            <img src="/assets/images/icons/icon-8.png" alt="" />
                                            <span>Get it on</span>
                                            Google Play
                                        </Link>
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
