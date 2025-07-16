import Link from "next/link"

export default function Account() {
  return (
    <>
        <section className="account-style-two centred pt_140 pb_110">
            <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}></div>
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-6.png)" }}></div>
            </div>
            <div className="auto-container">
                <div className="sec-title light pb_50">
                    <span className="sub-title mb_14">Accounts</span>
                    <h2>Trading Account</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                        <div className="account-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-16"></i></div>
                                <h3><Link href="/account-details">Professional Account</Link></h3>
                                <p>Traders with professional accounts gain access to a wide</p>
                                <div className="btn-box"><Link href="/account-details" className="theme-btn btn-one">Create Account</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                        <div className="account-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-17"></i></div>
                                <h3><Link href="account-details">Overview Account</Link></h3>
                                <p>The primary feature of a trading overview account is its ability to</p>
                                <div className="btn-box"><Link href="/account-details" className="theme-btn btn-one">Create Account</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                        <div className="account-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-18"></i></div>
                                <h3><Link href="/account-details">Demo Account</Link></h3>
                                <p>Trading demo accounts are particularly valuable for novice</p>
                                <div className="btn-box"><Link href="/account-details" className="theme-btn btn-one">Create Account</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                        <div className="account-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-19"></i></div>
                                <h3><Link href="/account-details">Islamic Account</Link></h3>
                                <p>Islamic accounts also adhere to ethical guidelines that prohibit</p>
                                <div className="btn-box"><Link href="/account-details" className="theme-btn btn-one">Create Account</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
