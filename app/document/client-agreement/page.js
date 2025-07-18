import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function ClientAgreement() {
  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Client Agreement">
        <section className="history-section pt_100 pb_60">
          <div className="auto-container">
            <div className="row clearfix g-3 flex-wrap-reverse">
              <div className="col-xl-8 col-sm-12">
                <div className="inner-box clearfix">
                  <ol className="p-0">
                    <li className="my-4"><b className="my-2 text-dark fs-5">1. Introduction</b>
                      <p className="mt-2">This agreement outlines the terms and conditions between you and AUT Investments LTD for the use of our trading services.</p>
                      <p className="mt-2">This Client Agreement (“Agreement”) is a legally binding contract between <b>AUT Investments
                        LTD</b>, a financial services company registered in Mauritius, and the client (“you” or “the client”).
                        By opening a trading account, accessing our platform, or using any of our services, you
                        acknowledge that you have read, understood, and agreed to the terms of this Agreement.
                      </p>
                      <p className="mt-3 ms-3"><b className="text-dark">Registered Address:</b><br />
                        6th Floor, Ken Lee Building,<br />
                        20 Edith Cavell Street,<br />
                        Port-Louis, 11302, Mauritius</p>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">2. Scope of Services</b>
                      <p className="mt-2">AUT Investments LTD provides access to trading in a wide range of financial instruments including but not limited to:</p>
                      <div className="education-details-content ms-3">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">Forex</li>
                            <li className="lh-lg">Contracts for Difference (CFDs) on Stocks, Indices, Commodities, Metals, Energies, and Cryptocurrencies</li>
                            <li className="lh-lg">Copy Trading & Social Trading</li>
                            <li className="lh-lg">Trading via MetaTrader 4 (MT4) and MetaTrader 5 (MT5) platforms</li>
                            <li className="lh-lg">Account management tools and support services</li>
                          </ul>
                        </div>
                      </div>
                      <p className="mt-2">AUT Investments LTD acts as a counterparty in all trading transactions and may provide execution-only services, without offering portfolio or investment advice.</p>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">3. Client Eligibility</b>
                      <p className="mt-2">To open an account, you must:</p>
                      <div className="education-details-content ms-3">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">Be at least 18 years old or of legal age in your jurisdiction</li>
                            <li className="lh-lg">Provide accurate and verifiable identification and proof of address</li>
                            <li className="lh-lg">Have full legal capacity to enter into this Agreement</li>
                            <li className="lh-lg">Not be located in a restricted country or jurisdiction where our services are not offered</li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">4. Account Opening & Verification</b>
                      <p className="mt-2">To access our trading services, you must complete the onboarding process, including:</p>
                      <div className="education-details-content ms-3">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">Submitting identity documents (KYC)</li>
                            <li className="lh-lg">Completing any questionnaires required for regulatory compliance</li>
                            <li className="lh-lg">Agreeing to this Agreement and related policies</li>
                          </ul>
                        </div>
                      </div>
                      <p className="mt-2">We reserve the right to reject or terminate your application without providing a reason.</p>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">5. Risk Acknowledgment</b>
                      <p className="mt-2">You acknowledge and accept that:</p>
                      <div className="education-details-content ms-3">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">Trading leveraged instruments involves significant risk</li>
                            <li className="lh-lg">You may sustain losses greater than your initial investment</li>
                            <li className="lh-lg">Market conditions may affect order execution and slippage</li>
                            <li className="lh-lg">AUT Investments LTD does not guarantee profits or returns</li>
                            <li className="lh-lg">You are solely responsible for understanding trading risks and maintaining your account</li>
                          </ul>
                        </div>
                      </div>
                      <p className="mt-2">Refer to our Risk Disclosure Statement for detailed information on market and trading risks.</p>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">6. Deposits & Withdrawals</b>
                      <div className="education-details-content ms-3">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">All deposits and withdrawals must be made using methods listed in your client portal</li>
                            <li className="lh-lg">Funds must be sent from/to accounts in your name</li>
                            <li className="lh-lg">AUT Investments LTD reserves the right to request verification for any transaction</li>
                            <li className="lh-lg">Withdrawal requests are typically processed within 24–48 business hours, subject to banking procedures and verification</li>
                          </ul>
                        </div>
                      </div>
                      <p className="mt-2">Refer to our Deposit & Withdraw Policy for full terms.</p>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">7. Order Execution Policy</b>
                      <div className="education-details-content ms-3">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">Orders are executed at the best available price under market conditions</li>
                            <li className="lh-lg">We may use internal or external liquidity providers</li>
                            <li className="lh-lg">Slippage, delays, and requotes may occur during high volatility or illiquid markets</li>
                            <li className="lh-lg">We do not guarantee execution at the exact price requested</li>
                          </ul>
                        </div>
                      </div>
                      <p className="mt-2">For more, refer to our Order Execution Policy document.</p>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">8. Trading Conditions & Leverage</b>
                      <div className="education-details-content ms-3">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">Available leverage may vary by instrument, account type, client profile, and regulation</li>
                            <li className="lh-lg">We reserve the right to adjust leverage at any time based on market risk</li>
                            <li className="lh-lg">Margin requirements must be met to avoid stop-out or liquidation</li>
                            <li className="lh-lg">Clients are responsible for monitoring their open positions and margin levels</li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">9. Use of Platforms</b>
                      <div className="education-details-content ms-3">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">Use the software in compliance with all applicable laws and regulations</li>
                            <li className="lh-lg">Keep your credentials secure and confidential</li>
                            <li className="lh-lg">Accept that AUT Investments LTD is not liable for technical issues, outages, or data loss caused by third parties, devices, or internet providers</li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">10. Communication & Records</b>
                      <div className="education-details-content ms-3">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">All communications (email, chat, phone, platform messaging) may be recorded or monitored</li>
                            <li className="lh-lg">It is your responsibility to keep contact details updated</li>
                            <li className="lh-lg">AUT Investments LTD is not liable for any delays or miscommunications resulting from incorrect information</li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">11. Fees, Charges & Swaps</b>
                      <div className="education-details-content ms-3">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">Trading fees include spreads, swaps, commissions (if applicable), and any other disclosed charges</li>
                            <li className="lh-lg">All fees are transparently displayed on our platform or client dashboard</li>
                            <li className="lh-lg">Fees may change without prior notice, but changes will be posted in advance where possible</li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">12. Conflicts of Interest</b>
                      <p className="mt-2">AUT Investments LTD may act as principal or agent in transactions.</p>
                      <p className="mt-2">We aim to manage all potential conflicts of interest fairly and disclose any material impact to the client in accordance with our Conflicts of Interest Policy.</p>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">13. Termination</b>
                      <div className="education-details-content ms-3">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">By the client, with written notice and withdrawal of funds (subject to obligations)</li>
                            <li className="lh-lg">By AUT Investments LTD, with or without notice, in cases of violation, fraud, abuse, or legal/regulatory reasons</li>
                          </ul>
                        </div>
                      </div>
                      <p className="mt-2">Upon termination, we may close all open positions and return remaining funds after fulfilling all financial obligations.</p>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">14. Inactivity</b>
                      <div className="education-details-content ms-3">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">Accounts with no trading activity for 6 consecutive months may be marked inactive</li>
                            <li className="lh-lg">An inactivity fee may be charged as specified in your account terms</li>
                            <li className="lh-lg">Inactive accounts may be archived or suspended</li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">15. Data Protection</b>
                      <p className="mt-2">AUT Investments LTD collects and processes your personal data in accordance with our Privacy Policy. We implement reasonable security measures to protect your data, but clients are responsible for safeguarding access credentials.</p>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">16. Amendments</b>
                      <p className="mt-2">We may update or amend this Agreement from time to time. Changes will be effective immediately upon posting to our website. Continued use of our services implies acceptance of the updated terms.</p>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">17. Governing Law & Jurisdiction</b>
                      <p className="mt-2">This Agreement shall be governed by the laws of the Republic of Mauritius. Any disputes shall be resolved under the jurisdiction of the competent courts in Mauritius, unless otherwise agreed.</p>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">18. Legal Capacity & Language</b>
                      <div className="education-details-content ms-3">
                        <div className="text-box">
                          <ul className="list-item clearfix">
                            <li className="lh-lg">This Agreement is binding upon both parties</li>
                            <li className="lh-lg">The English version shall prevail in case of conflicts between translated versions</li>
                            <li className="lh-lg">By agreeing to this document, you confirm that you understand and accept its contents without coercion</li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    <li className="my-4"><b className="my-2 text-dark fs-5">19. Entire Agreement</b>
                      <p className="mt-2">This Client Agreement, along with associated policies and disclosures, constitutes the full legal agreement between the client and AUT Investments LTD. No oral or written statements outside of this document shall be considered binding.</p>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="col-xl-4 col-sm-12">
                <div className="funfact-section1 position-sticky z_99" style={{ top: "100px" }}>
                  <div className="inner-container d-flex flex-column p-sm-5 p-4 align-items-start justify-content-start">
                    <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-16.png)" }}></div>
                    <h5 className="mb-3">Contact Information</h5>
                    <div className="education-details-content">
                      <div className="text-box">
                        <ul className="list-item clearfix">
                          <li className="lh-lg"><strong>Client Support:</strong></li>
                          <li className="lh-lg"><strong>Compliance:</strong></li>
                          <li className="lh-lg">
                            <strong>Mailing Address:</strong><br />
                            6th Floor, Ken Lee Building,<br />
                            20 Edith Cavell Street,<br />
                            Port-Louis, 11302, Mauritius
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="subscribe-section">
          <div className="bg-color"></div>
          <div className="auto-container">
            <div className="inner-container">
              <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-5.png)" }}></div>
              <div className="row align-items-center">
                <div className="col-12 text-column">
                  <div className="text-box">
                    <h2 className="fw-bold">Last Updated: July 2025</h2>
                    <p className="text-light fs-6 mt_30">This Client Agreement is effective as of the above date and remains in force until replaced or amended.</p>
                    <Link className="theme-btn btn-one bg-dark me-3 mt-3" href="/contact">Contact Support</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
