import Link from "next/link"

export default function Footer2() {
    return (
        <>           
            
        <footer className="main-footer">
            <div className="widget-section p_relative pt_70 pb_80">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 big-column">
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                    <div className="footer-widget links-widget">
                                        <div className="widget-title mb_11">
                                            <h3>About Us</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="links-list clearfix">
                                                <li><Link href="/">Who we are</Link></li>
                                                <li><Link href="/">Awards</Link></li>
                                                <li><Link href="/">Principals</Link></li>
                                                <li><Link href="/">Partnership</Link></li>
                                                <li><Link href="contact.html">Contact us</Link></li>
                                                <li><Link href="/">Careers</Link></li>
                                                <li><Link href="/">Management</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                    <div className="footer-widget links-widget">
                                        <div className="widget-title mb_11">
                                            <h3>Platforms</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="links-list clearfix">
                                                <li><Link href="/">Forex</Link></li>
                                                <li><Link href="/">Crypto CFDs</Link></li>
                                                <li><Link href="/">Share CFDs</Link></li>
                                                <li><Link href="/">Commodities</Link></li>
                                                <li><Link href="/">Spot Metals</Link></li>
                                                <li><Link href="/">Energies</Link></li>
                                                <li><Link href="/">MetaTrader 5</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                    <div className="footer-widget links-widget">
                                        <div className="widget-title mb_11">
                                            <h3>Trading Tools</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="links-list clearfix">
                                                <li><Link href="/">FXT Navigator</Link></li>
                                                <li><Link href="/">Trading Central</Link></li>
                                                <li><Link href="/">Economic Calendar</Link></li>
                                                <li><Link href="/">Market Sentiment</Link></li>
                                                <li><Link href="/">API Trading</Link></li>
                                                <li><Link href="/">VPS</Link></li>
                                                <li><Link href="/">CDF Rollover</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                    <div className="footer-widget links-widget">
                                        <div className="widget-title mb_25">
                                            <h3>Support</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="links-list clearfix">
                                                <li><Link href="/">Legal Information</Link></li>
                                                <li><Link href="/">Privacy Policy</Link></li>
                                                <li><Link href="/">Regulations</Link></li>
                                                <li><Link href="/">Risk Disclaimer</Link></li>
                                                <li><Link href="/">Complaints Procedure</Link></li>
                                                <li><Link href="/">Company News</Link></li>
                                                <li><Link href="/">Trading Videos</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-lower">
                                <figure className="footer-logo"><Link href="/"><img src="assets/images/logo-4.png" alt=""/></Link></figure>
                                <ul className="footer-card clearfix">
                                    <li><h4>We Accept:</h4></li>
                                    <li><Link href="/"><img src="assets/images/icons/card-1.png" alt=""/></Link></li>
                                    <li><Link href="/"><img src="assets/images/icons/card-2.png" alt=""/></Link></li>
                                    <li><Link href="/"><img src="assets/images/icons/card-3.png" alt=""/></Link></li>
                                    <li><Link href="/"><img src="assets/images/icons/card-4.png" alt=""/></Link></li>
                                    <li><Link href="/"><img src="assets/images/icons/card-5.png" alt=""/></Link></li>
                                    <li><Link href="/"><img src="assets/images/icons/card-6.png" alt=""/></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget centred ml_80">
                                <div className="widget-content">
                                    <figure className="footer-logo mb_15"><Link href="/"><img src="assets/images/logo-5.png" alt=""/></Link></figure>
                                    <p>Trade multipliers on our app.</p>
                                    <div className="scanner-box mb_30"><img src="assets/images/icons/icon-15.png" alt=""/></div>
                                    <ul className="download-list clearfix">
                                        <li><Link href="/"><i className="fab fa-apple"></i></Link></li>
                                        <li><Link href="/"><img src="assets/images/icons/icon-2.png" alt=""/></Link></li>
                                        <li><Link href="/"><i className="fab fa-android"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="bottom-inner">
                        <p>Copyright {new Date().getFullYear()} <Link href="/">ForTradex</Link> All Rights Reserved.</p>
                        <ul className="social-links">
                            <li><h5>Follow Us On:</h5></li>
                            <li><Link href="/"><i className="icon-12"></i></Link></li>
                            <li><Link href="/"><i className="icon-13"></i></Link></li>
                            <li><Link href="/"><i className="icon-14"></i></Link></li>
                            <li><Link href="/"><i className="icon-15"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>


        </>
    )
}
