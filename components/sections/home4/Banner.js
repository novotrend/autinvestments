import Link from "next/link"

export default function Banner() {
    return (
        <>
            <section className="banner-style-four pt_160 pb_100">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-20.png)" }}></div>
                <div className="shape">
                    <div className="shape-1 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}></div>
                    <div className="shape-2 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-22.png)" }}></div>
                </div>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_six">
                                <div className="content-box mr_30">
                                    <span className="sub-title mb_20">Trade Now</span>
                                    <h2>The Ultimate Forex <span>Trading Adventure</span></h2>
                                    <p>We’re well-capitalized and with enough liquidity to navigate through bad times.</p>
                                    <div className="btn-box">
                                        <Link href="/index-4" className="theme-btn btn-one mr_15">Create Account</Link>
                                        <Link href="/index-4" className="theme-btn btn-two">View Market</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image float-bob-y"><img src="assets/images/banner/banner-img-7.png" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
