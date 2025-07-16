import Link from "next/link"

export default function Apps() {
    return (
        <>
            <section className="apps-style-two pt_80 pb_80">
                <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-10.png)" }}></div>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="/assets/images/resource/apps-1.png" alt="" /></figure>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_four">
                                <div className="content-box ml_80">
                                    <div className="sec-title light pb_40">
                                        <span className="sub-title mb_14">Final Call to Action</span>
                                        <h2>Ready to start your trading journey?</h2>
                                        <p>Create your account in minutes and access global markets with a trusted and regulated broker.</p>
                                    </div>
                                    <Link href="/trading/open-trading-account" className="theme-btn btn-one bg-dark me-3">
                                        Open Trading Account
                                    </Link>
                                    <Link href="/trading/open-demo-account" className="theme-btn btn-one bg-dark">
                                        Try Demo Account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
