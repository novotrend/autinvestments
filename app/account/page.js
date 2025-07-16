import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Apps from "@/components/sections/home2/Apps"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function Account() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Account">

            <section className="account-style-two account-page clear-bg centred pt_80 pb_70">
                <div className="auto-container">
                    <div className="sec-title pb_50">
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                            <div className="account-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-17"></i></div>
                                    <h3><Link href="/account-details">Overview Account</Link></h3>
                                    <p>The primary feature of a trading overview account is its ability to</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                            <div className="account-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-18"></i></div>
                                    <h3><Link href="/account-details">Demo Account</Link></h3>
                                    <p>Trading demo accounts are particularly valuable for novice</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                            <div className="account-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-19"></i></div>
                                    <h3><Link href="/account-details">Islamic Account</Link></h3>
                                    <p>Islamic accounts also adhere to ethical guidelines that prohibit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature-account pt_0 pb_100">
                <div className="auto-container">
                    <div className="sec-title centred pb_60">
                        <h2>Account Features</h2>
                        <p className="fs_18 lh_30 mt_12">Our Professional Accounts offer the ultimate trading experience</p>
                    </div>
                    <div className="inner-container clearfix">
                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-35.png)" }}></div>
                        <div className="single-item">
                            <div className="icon-box"><i className="icon-32"></i></div>
                            <h4><Link href="/account-details">Cashback Programme</Link></h4>
                            <ul className="feature-list list-style-one clearfix">
                                <li>Cashback Percentage</li>
                                <li>Qualifying Criteria</li>
                                <li>Regular Payouts</li>
                                <li>Flexible Use</li>
                                <li>Promotional Periods</li>
                            </ul>
                        </div>
                        <div className="single-item">
                            <div className="icon-box"><i className="icon-31"></i></div>
                            <h4><Link href="/account-details">Refer a Friend</Link></h4>
                            <ul className="feature-list list-style-one clearfix">
                                <li>Referral Bonuses</li>
                                <li>Cash Rewards</li>
                                <li>Free Trades</li>
                                <li>Exclusive Offers</li>
                                <li>Sharing Tools</li>
                            </ul>
                        </div>
                        <div className="single-item">
                            <div className="icon-box"><i className="icon-35"></i></div>
                            <h4><Link href="/account-details">High Leverage</Link></h4>
                            <ul className="feature-list list-style-one clearfix">
                                <li>Tradable Assets</li>
                                <li>Management Tools</li>
                                <li>Market Exposure</li>
                                <li>Educational Resources</li>
                            </ul>
                        </div>
                        <div className="single-item">
                            <div className="icon-box"><i className="icon-34"></i></div>
                            <h4><Link href="account-details">Protection of Funds</Link></h4>
                            <ul className="feature-list list-style-one clearfix">
                                <li>Segregation of Funds</li>
                                <li>Regulatory Oversight</li>
                                <li>Insurance Coverage</li>
                                <li>Secure Payment</li>
                                <li>Account Verification</li>
                            </ul>
                        </div>
                        <div className="single-item">
                            <div className="icon-box"><i className="icon-33"></i></div>
                            <h4><Link href="/account-details">Negative Protection</Link></h4>
                            <ul className="feature-list list-style-one clearfix">
                                <li>Customer Support</li>
                                <li>Broker Selection</li>
                                <li>Protection Mechanism</li>
                                <li>Negative Balance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Apps />

            <section className="account-style-three pt_100 pb_70">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_eight">
                                <div className="content-box mr_60">
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
                    </div>
                </div>
            </section>

            <section className="testimonial-style-two pt_0 pb_70">
                <div className="auto-container">
                    <div className="sec-title centred pb_60">
                        <span className="sub-title mb_14">Testimonials</span>
                        <h2>Love from Users</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <figure className="clients-logo"><a href="index-5.html"><img src="assets/images/clients/clients-14.png" alt=""/></a></figure>
                                    <ul className="rating">
                                        <li><i className="icon-37"></i></li>
                                        <li><i className="icon-37"></i></li>
                                        <li><i className="icon-37"></i></li>
                                        <li><i className="icon-37"></i></li>
                                        <li><i className="icon-37"></i></li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Curaitur in euismod odio gravida gravida. Discovery of the text's origin is attributed</p>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="assets/images/resource/testimonial-4.png" alt=""/></figure>
                                        <h4>Brooklyn Simmons</h4>
                                        <span className="designation">Nursing Assistant</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <figure className="clients-logo"><a href="index-5.html"><img src="assets/images/clients/clients-15.png" alt=""/></a></figure>
                                    <ul className="rating">
                                        <li><i className="icon-37"></i></li>
                                        <li><i className="icon-37"></i></li>
                                        <li><i className="icon-37"></i></li>
                                        <li><i className="icon-37"></i></li>
                                        <li><i className="icon-37"></i></li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Curaitur in euismod odio gravida gravida. Discovery of the text's origin is attributed</p>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="assets/images/resource/testimonial-5.png" alt=""/></figure>
                                        <h4>Guy Hawkins</h4>
                                        <span className="designation">Web Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <figure className="clients-logo"><a href="index-5.html"><img src="assets/images/clients/clients-16.png" alt=""/></a></figure>
                                    <ul className="rating">
                                        <li><i className="icon-37"></i></li>
                                        <li><i className="icon-37"></i></li>
                                        <li><i className="icon-37"></i></li>
                                        <li><i className="icon-37"></i></li>
                                        <li><i className="icon-37"></i></li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Curaitur in euismod odio gravida gravida. Discovery of the text's origin is attributed</p>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="assets/images/resource/testimonial-6.png" alt=""/></figure>
                                        <h4>Esther Howard</h4>
                                        <span className="designation">President of Sales</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Subscribe />

            </Layout>
        </div>
    )
}