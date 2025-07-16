import Link from "next/link"

export default function Experience() {
  return (
    <>
        <section className="experience-style-two">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-33.png)" }}></div>
                    <div className="upper-box p_relative mb_55">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                                <div className="sec-title">
                                    <span className="sub-title mb_14">Experience</span>
                                    <h2>Your trades in the right place</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                                <div className="text-box">
                                    <p>We use cookines to understand how you use our website and to give you the best possible</p>
                                    <Link href="/account-details" className="theme-btn btn-one">Start Trading Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lower-box">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <h2>1 milion+</h2>
                                    <p>XTB Group Clients</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <h2>5 milion+</h2>
                                    <p>App downloads</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <h2>18+</h2>
                                    <p>Years on the market</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <h2>FSC</h2>
                                    <p>Regulated by authorities</p>
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
