import Link from "next/link"

export default function Experience() {
    return (
        <>
            <section className="experience-section pt_60 pb_100">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-19.png)" }}></div>
                        <div className="row clearfix">
                            <div className="col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <div className="sec-title light pb_14">
                                        <span className="sub-title mb_14">Experience</span>
                                        <h2>Powerful tools for every trading strategy.</h2>
                                    </div>
                                    <div className="text-box">
                                        <p>Trade on the world’s most trusted platforms with seamless integration:</p>
                                        <Link href="https://www.metatrader5.com/en/download" target="_blank" className="theme-btn btn-one me-3 mb-2">Download Platform</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 inner-column mt-4">
                                <div className="inner-box">
                                    <div className="row clearfix g-5">
                                        <div className="col-xxl-4 col-lg-6 col-md-12 col-sm-12 single-column">
                                            <div className="single-item">
                                                <h3>MetaTrader 5 (MT5)</h3>
                                                <p>For multi-asset and advanced trading</p>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-lg-6 col-md-12 col-sm-12 single-column">
                                            <div className="single-item">
                                                <h3>WebTrader</h3>
                                                <p>Instant access from any browser</p>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-lg-6 col-md-12 col-sm-12 single-column">
                                            <div className="single-item">
                                                <h3>Mobile Apps</h3>
                                                <p>Trade anytime from your smartphone</p>
                                            </div>
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
