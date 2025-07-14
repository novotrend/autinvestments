import Link from "next/link"

export default function Account() {
  return (
    <>
        <section className="account-style-three pt_100 pb_70">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                        <div className="inner-content">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 account-block">
                                    <div className="account-block-one pb_1 wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-01"></i></div>
                                            <h3><Link href="/account-details">Professional Account</Link></h3>
                                            <p>Traders with professional accounts gain access to a wide range of benefits, including enhanced trading platforms</p>
                                        </div>
                                    </div>
                                    <div className="account-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-03"></i></div>
                                            <h3><Link href="/account-details">Demo Account</Link></h3>
                                            <p>Trading demo accounts are particularly valuable for novice traders who are new to the world of investing.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 account-block pt_75">
                                    <div className="account-block-one pb_1 wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-02"></i></div>
                                            <h3><Link href="/account-details">Overview Account</Link></h3>
                                            <p>The primary feature of a trading overview account is its ability to aggregate information from multiple accounts and</p>
                                        </div>
                                    </div>
                                    <div className="account-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-04"></i></div>
                                            <h3><Link href="/account-details">Islamic Account</Link></h3>
                                            <p>Islamic accounts also adhere to ethical guidelines that prohibit trading certain financial instruments deemed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_eight">
                            <div className="content-box ml_60">
                                <div className="sec-title pb_20">
                                    <span className="sub-title mb_14">Accounts</span>
                                    <h2>Level up your trading with <span>Account</span></h2>
                                </div>
                                <div className="text-box">
                                    <p>Not sure which is the right FOREX com platform for you? Check out our handy platform comparison table which will show you all the differences.</p>
                                    <ul className="list-style-one mb_40 clearfix">
                                        <li>Trade with one tap, anywhere, anytime</li>
                                        <li>Seamlessly manage your account and portfolio</li>
                                        <li>Stay ahead with real-time charts and indicators</li>
                                    </ul>
                                    <Link href="/index-3" className="theme-btn btn-one">Create Account</Link>
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
