import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="main-footer">
                <div className="widget-section p_relative pt_70 pb_80">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-md-12 col-sm-12 big-column">
                                <div className="row clearfix g-4 mb_30">
                                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                        <div className="footer-widget links-widget">
                                            <div className="widget-title mb_11">
                                                <h3 className="fw-semibold">Market</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul className="links-list clearfix">
                                                    <li><a href="/markets/forex-trading">Forex Trading</a></li>
                                                    <li><a href="/markets/stock-trading">Stock Trading</a></li>
                                                    <li><a href="/markets/metals-trading">Metals Trading</a></li>
                                                    <li><a href="/markets/indices-trading">Indices Trading</a></li>
                                                    <li><a href="/markets/commodities-trading">Commodities Trading</a></li>
                                                    <li><a href="/markets/crypto-trading">Crypto Trading</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                        <div className="footer-widget links-widget">
                                            <div className="widget-title mb_11">
                                                <h3 className="fw-semibold">Platforms</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul className="links-list clearfix">
                                                    <li><a href="/platform/metatrader4">MetaTrader 4 (MT4)</a></li>
                                                    <li><a href="/platform/metatrader5">MetaTrader 5 (MT5)</a></li>
                                                    <li><a href="/affiliate-program">Affiliate Program</a></li>
                                                    <li><a href="/promotions">Promotions</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                        <div className="footer-widget links-widget">
                                            <div className="widget-title mb_11">
                                                <h3 className="fw-semibold">Document</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul className="links-list clearfix">
                                                    <li><a href="/document/risk-disclosure">Risk Disclosure</a></li>
                                                    <li><a href="/document/privacy-policy">Privacy Policy</a></li>
                                                    <li><a href="/document/services-regulations">Services Regulations</a></li>
                                                    <li><a href="/document/client-agreement">Client Agreement</a></li>
                                                    <li><a href="/document/anti-money">Anti-Money Laundering (AML) Policy</a></li>
                                                    <li><a href="/document/support-contact">Support and Contact</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                        <div className="footer-widget links-widget">
                                            <div className="widget-title mb_11">
                                                <h3 className="fw-semibold">Trading</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul className="links-list clearfix">
                                                    <li><a href="/trading/open-trading-account">Open Trading Account</a></li>
                                                    <li><a href="/trading/deposit-withdraw">Deposit &amp; Withdraw</a></li>
                                                    <li><a href="/trading/Open-Demo-Account">Open Demo Account</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                        <div className="footer-widget links-widget">
                                            <div className="widget-title mb_11">
                                                <h3 className="fw-semibold">Products</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul className="links-list clearfix">
                                                    <li><a href="/trading/open-trading-account">Open Trading Account</a></li>
                                                    <li><a href="/trading/deposit-withdraw">Deposit &amp; Withdraw</a></li>
                                                    <li><a href="/trading/Open-Demo-Account">Open Demo Account</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                        <div className="widget-title mb_11">
                                            <h3 className="fw-semibold">Follow Us On</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="links-list clearfix">
                                                <ul className="social-links">
                                                    <li><Link href="/"><i className="icon-12"></i></Link></li>
                                                    <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                                    <li><Link href="/"><i className="icon-15"></i></Link></li>
                                                </ul>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-lower">
                                    <figure className="footer-logo"><Link href="/"><img src="/assets/images/logo.png" alt="" /></Link></figure>
                                    <ul className="footer-card clearfix">
                                        <li><h4>We Accept:</h4></li>
                                        <li><Link href="/"><img src="/assets/images/icons/card-1.png" alt="" /></Link></li>
                                        <li><Link href="/"><img src="/assets/images/icons/card-2.png" alt="" /></Link></li>
                                        <li><Link href="/"><img src="/assets/images/icons/card-3.png" alt="" /></Link></li>
                                        <li><Link href="/"><img src="/assets/images/icons/card-4.png" alt="" /></Link></li>
                                        <li><Link href="/"><img src="/assets/images/icons/card-5.png" alt="" /></Link></li>
                                        <li><Link href="/"><img src="/assets/images/icons/card-6.png" alt="" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="bottom-inner">
                            <p>Copyright {new Date().getFullYear()} <Link href="/">ForTradex</Link> All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
