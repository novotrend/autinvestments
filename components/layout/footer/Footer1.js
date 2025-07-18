'use client'
import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="main-footer">
                <div className="widget-section p_relative pt_70 pb_80">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-md-12 col-sm-12 big-column">
                                <div className="row clearfix g-md-4 g-1 mb_30 d-md-none">
                                    <figure className="footer-logo"><Link href="/"><img src="/assets/images/logo.svg" alt="" /></Link></figure>
                                </div>
                                <div className="row clearfix g-md-4 g-1 mb_30">
                                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                        <div className="footer-widget links-widget">
                                            <div className="widget-title mb_11">
                                                <h3 className="fw-semibold">Market</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul className="links-list clearfix">
                                                    <li><Link href="/markets/forex-trading">Forex Trading</Link></li>
                                                    <li><Link href="/markets/stock-trading">Stock Trading</Link></li>
                                                    <li><Link href="/markets/metals-trading">Metals Trading</Link></li>
                                                    <li><Link href="/markets/indices-trading">Indices Trading</Link></li>
                                                    <li><Link href="/markets/commodities-trading">Commodities Trading</Link></li>
                                                    <li><Link href="/markets/crypto-trading">Crypto Trading</Link></li>
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
                                                    <li><Link href="/platform/metatrader4">MetaTrader 4 (MT4)</Link></li>
                                                    <li><Link href="/platform/metatrader5">MetaTrader 5 (MT5)</Link></li>
                                                    <li><Link href="/affiliate-program">Affiliate Program</Link></li>
                                                    <li><Link href="/promotions">Promotions</Link></li>
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
                                                    <li><Link href="/document/risk-disclosure">Risk Disclosure</Link></li>
                                                    <li><Link href="/document/privacy-policy">Privacy Policy</Link></li>
                                                    <li><Link href="/document/services-regulations">Services Regulations</Link></li>
                                                    <li><Link href="/document/client-agreement">Client Agreement</Link></li>
                                                    <li><Link href="/document/anti-money">Anti-Money Laundering (AML) Policy</Link></li>
                                                    <li><Link href="/document/support-contact">Support and Contact</Link></li>
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
                                                    <li><Link href="/trading/open-trading-account">Open Trading Account</Link></li>
                                                    <li><Link href="/trading/deposit-withdraw">Deposit & Withdraw</Link></li>
                                                    <li><Link href="/trading/open-demo-account">Open Demo Account</Link></li>
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
                                                    <li><Link href="/products/copy-trading">Copy Trading</Link></li>
                                                    <li><Link href="/products/social-trading">Social Trading</Link></li>
                                                    <li><Link href="/products/algo-trading">Algo Trading</Link></li>
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
                                    <figure className="footer-logo d-none d-md-block"><Link href="/"><img src="/assets/images/logo.svg" alt="" /></Link></figure>
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
                        <div className="bottom-inner d-block text-center">
                            <p>Copyright {new Date().getFullYear()} <Link href="/">AUT Investment Limited</Link> All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
