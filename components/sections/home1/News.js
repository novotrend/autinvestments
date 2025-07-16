import Link from "next/link"

export default function News() {
    return (
        <>
            <section className="news-section pt_100 pb_70">
                <div className="auto-container">
                    <div className="sec-title pb_60">
                        <span className="sub-title mb_14">Advantages</span>
                        <h2>Your Advantages with Us</h2>
                    </div>
                    <div className="row clearfix row-deck">
                        <div className="col-lg-6 col-md-12 news-block d-flex flex-column">
                            <div className="news-block-one w-100 d-flex flex-column h-100 wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <h2>Fund Security and Regulation</h2>
                                    <ul className="list-style-one mt_40 clearfix">
                                        <li>Client funds held in segregated bank accounts</li>
                                        <li>Negative balance protection provided on all accounts</li>
                                        <li>Regulated under the Mauritius Financial Services Framework</li>
                                        <li>Full AML and KYC compliance</li>
                                        <li>All transactions secured with 256-bit SSL encryption</li>
                                    </ul>
                                </div>
                                <div className="author-box mt-auto">
                                    <Link href='/privacy-policy' className="theme-btn btn-one">Learn About Our Compliance</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 news-block d-flex flex-column">
                            <div className="news-block-one w-100 d-flex flex-column h-100 wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <h2>Promotions and Bonuses</h2>
                                    <p>Enhance your trading with exclusive offers and rewards</p>
                                    <ul className="list-style-one mt_40 clearfix">
                                        <li>Deposit Bonus Programs</li>
                                        <li>Loyalty Cashback</li>
                                        <li>Referral Rewards</li>
                                        <li>Seasonal Trading Contests</li>
                                    </ul>
                                </div>
                                <div className="author-box mt-auto">
                                    <Link href='/promotions' className="theme-btn btn-one">View Promotions</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 news-block d-flex flex-column">
                            <div className="news-block-one w-100 d-flex flex-column h-100 wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <h2>View Promotions</h2>
                                    <p>Join our growing network of affiliates and introducers. Earn
                                        competitive commissions while promoting a trusted trading brand.</p>
                                    <ul className="list-style-one mt_40 clearfix">
                                        <li>Real-time tracking and reporting</li>
                                        <li>Custom promotional materials and links</li>
                                        <li>Fast and reliable payouts</li>
                                        <li>Tier-based commission structures</li>
                                    </ul>
                                </div>
                                <div className="author-box mt-auto">
                                    <Link href='/affiliate-program' className="theme-btn btn-one">Join Affiliate Program</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 news-block d-flex flex-column">
                            <div className="news-block-one w-100 d-flex flex-column h-100 wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <h2>Support That Never Sleeps</h2>
                                    <p>Our multilingual support team is available 24/5 to assist with</p>
                                    <ul className="list-style-one mt_40 clearfix">
                                        <li>Live Chat and Ticket System</li>
                                        <li>Email and Call Support</li>
                                        <li>Personal Account Managers</li>
                                        <li>Educational Onboarding and Webinars</li>
                                    </ul>
                                </div>
                                <div className="author-box mt-auto">
                                    <Link href='/contact' className="theme-btn btn-one">Contact Support</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
