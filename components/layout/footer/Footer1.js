"use client";
import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="main-footer">
        <div className="widget-section p_relative pt_70">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-md-12 col-sm-12 big-column">
                <div className="row clearfix g-md-4 g-1 justify-content-between">
                  <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget links-widget">
                      <div className="widget-title mb_11">
                        <h3 className="fw-semibold">Market</h3>
                      </div>
                      <div className="widget-content">
                        <ul className="links-list clearfix">
                          <li>
                            <Link href="/markets/forex-trading">
                              Forex Trading
                            </Link>
                          </li>
                          <li>
                            <Link href="/markets/stock-trading">
                              Stock Trading
                            </Link>
                          </li>
                          <li>
                            <Link href="/markets/metals-trading">
                              Metals Trading
                            </Link>
                          </li>
                          <li>
                            <Link href="/markets/indices-trading">
                              Indices Trading
                            </Link>
                          </li>
                          <li>
                            <Link href="/markets/commodities-trading">
                              Commodities Trading
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget links-widget">
                      <div className="widget-title mb_11">
                        <h3 className="fw-semibold">Platforms</h3>
                      </div>
                      <div className="widget-content">
                        <ul className="links-list clearfix">
                          <li>
                            <Link href="/platform/metatrader5">
                              MetaTrader 5 (MT5)
                            </Link>
                          </li>
                          <li>
                            <Link href="/affiliate-program">
                              Affiliate Program
                            </Link>
                          </li>
                          <li>
                            <Link href="/promotions">Promotions</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget links-widget">
                      <div className="widget-title mb_11">
                        <h3 className="fw-semibold">Document</h3>
                      </div>
                      <div className="widget-content">
                        <ul className="links-list clearfix">
                          <li>
                            <Link href="/document/risk-disclosure">
                              Risk Disclosure
                            </Link>
                          </li>
                          <li>
                            <Link href="/document/privacy-policy">
                              Privacy Policy
                            </Link>
                          </li>
                          <li>
                            <Link href="/document/services-regulations">
                              Services Regulations
                            </Link>
                          </li>
                          <li>
                            <Link href="/document/client-agreement">
                              Client Agreement
                            </Link>
                          </li>
                          <li>
                            <Link href="/document/anti-money">
                              Anti-Money Laundering (AML) Policy
                            </Link>
                          </li>
                          <li>
                            <Link href="/document/support-contact">
                              Support and Contact
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget links-widget">
                      <div className="widget-title mb_11">
                        <h3 className="fw-semibold">Trading</h3>
                      </div>
                      <div className="widget-content">
                        <ul className="links-list clearfix">
                          <li>
                            <Link href="/trading/open-trading-account">
                              Open Trading Account
                            </Link>
                          </li>
                          <li>
                            <Link href="/trading/deposit-withdraw">
                              Deposit & Withdraw
                            </Link>
                          </li>
                          <li>
                            <Link href="/trading/open-demo-account">
                              Open Demo Account
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget links-widget">
                      <div className="widget-title mb_11">
                        <h3 className="fw-semibold">Products</h3>
                      </div>
                      <div className="widget-content">
                        <ul className="links-list clearfix">
                          <li>
                            <Link href="/products/copy-trading">
                              Copy Trading
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/social-trading">
                              Social Trading
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/algo-trading">
                              Algo Trading
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 footer-column text-lg-center my-5">
                    <div className="widget-content text-center d-flex justify-content-lg-center gap-2 align-items-center">
                      <span className="h6 text-dark mb-0 fw-semibold">
                        Follow Us On
                      </span>
                      <ul className="social-links justify-content-lg-center">
                        <li>
                          <Link href="/">
                            <i className="icon-12"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="icon-15"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="max-w-6xl mx-auto px-4 text-justify leading-relaxed">
              <p className="mb-4">
                AUT Investments Limited is regulated by the Financial Services
                Commission of Mauritius (FSC) with license Number: GB24203171
              </p>
              <span>
                Risk Warning: CFDs are complex instruments and come with a high
                risk of losing money rapidly due to leverage. The majority of
                retail investor accounts lose money when trading 
                CFDs. You
                should consider whether you understand how CFDs work and whether
                you can afford to take the high risk of losing your money. There
                is a possibility to lose all your initial capital.
              </span>
              <br/>
              <span>Restricted Countries: AUT INVESTMENTS LIMITED does not provide services for
                citizens/residents of the United States, Cuba, Iraq, Myanmar,
                North Korea, Sudan. The services of AUT INVESTMENTS LIMITED are
                not intended for distribution to, or use by, any person in any
                country or jurisdiction where such distribution or use would be
                contrary to local law or regulation.</span>
            </div>

            <div className="footer-lower">
              <figure className="footer-logo">
                <Link href="/">
                  <img src="/assets/images/logo-footer.svg" alt="" />
                </Link>
              </figure>
              <div>
                <div className="d-flex align-items-sm-center gap-sm-3 flex-sm-row flex-column my-3">
                  <h6>We Accept:</h6>
                  <ul className="footer-card clearfix">
                    <li>
                      <Link href="/">
                        <img src="/assets/images/icons/card-1.png" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <img src="/assets/images/icons/card-2.png" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <img src="/assets/images/icons/card-3.png" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <img src="/assets/images/icons/card-4.png" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <img src="/assets/images/icons/card-5.png" alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="bottom-inner text-start mt_20">
                  <p>
                    Copyright {new Date().getFullYear()}{" "}
                    <Link href="/" className="text-dark fw-normal">
                      AUT Investment Limited
                    </Link>{" "}
                    All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="bottom-inner d-block text-center">
                                <p>Copyright {new Date().getFullYear()} <Link href="/" className="text-dark fw-normal">AUT Investment Limited</Link> All Rights Reserved.</p>
                            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}
