import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function ServicesRegulations() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Services Regulations">

                <section className="history-section pt_100 pb_60">
                    <div className="auto-container">
                        <div className="row clearfix g-3 flex-wrap-reverse">
                            <div className="col-xl-8 col-sm-12 position-relative">
                                <div className="inner-box clearfix">
                                    <ol>
                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">1. Overview</b>
                                            <p className="mt-2">
                                                This Services Regulations document defines the rules, operational standards, and responsibilities associated with the use of trading services provided by AUT Investments LTD.
                                                It complements the Client Agreement and other legal documents and is binding on all clients who engage in trading activities with the company.
                                                AUT Investments LTD is incorporated in Mauritius and operates under applicable international financial and anti-money laundering regulations to offer services in forex, CFDs, indices, metals, commodities, stocks, and cryptocurrencies.
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">2. Trading Services Scope</b>
                                            <p className="mt-2">
                                                AUT Investments LTD offers the following core services:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Trading access to Forex, CFDs, Stocks, Commodities, Indices, Metals, Energies, and Cryptocurrencies</li>
                                                        <li className="lh-lg">Platform access via MetaTrader 4 (MT4), MetaTrader 5 (MT5), and Webtrader</li>
                                                        <li className="lh-lg">Copy Trading, Social Trading, and Algo Trading functionalities</li>
                                                        <li className="lh-lg">Client education, analysis tools, and trader dashboard</li>
                                                        <li className="lh-lg">Customer support and account management</li>
                                                        <li className="lh-lg">Deposit, withdrawal, and fund transfer mechanisms</li>
                                                        <li className="lh-lg">Affiliate and partnership programs</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="mt-2">
                                                Each service is subject to specific policies and trading conditions which may change based on regulatory or operational requirements.
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">3. Client Classification</b>
                                            <p className="mt-2">
                                                Clients are classified as:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Retail Clients: Have access to standard trading accounts, full risk disclosures, and standard leverage offerings.</li>
                                                        <li className="lh-lg">Professional Clients (if applicable): May receive higher leverage, but with fewer regulatory protections.</li>
                                                        <li className="lh-lg">Affiliates/Partners: Operate under separate agreements and must comply with IB guidelines.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="mt-2">
                                                AUT Investments LTD reserves the right to reclassify clients based on profile updates, trading behavior, or compliance requirements.
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">4. Account Registration & Verification</b>
                                            <p className="mt-2">
                                                To access services, the client must:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Complete the online application process</li>
                                                        <li className="lh-lg">Submit valid identification and proof of address (KYC)</li>
                                                        <li className="lh-lg">Agree to the Client Agreement, Risk Disclosure, and this Services Regulations document</li>
                                                        <li className="lh-lg">Await verification and confirmation before trading is enabled</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="mt-2">
                                                We reserve the right to reject, suspend, or close accounts that do not meet compliance standards or exhibit suspicious behavior.
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">5. Trading Platform Access</b>
                                            <p className="mt-2">
                                                Platform use is governed by:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Proper log-in credentials and security measures</li>
                                                        <li className="lh-lg">Full responsibility of the client for any activity conducted under their login</li>
                                                        <li className="lh-lg">Maintenance of platform uptime by AUT Investments LTD, with no guarantees during scheduled maintenance or unexpected outages</li>
                                                        <li className="lh-lg">Monitoring of trading activity for fairness, stability, and rule compliance</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="mt-2">
                                                Platform misuse or manipulation attempts may result in account suspension or closure.
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">6. Orders & Execution</b>
                                            <p className="mt-2">
                                                AUT Investments LTD operates on a market execution model.
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Orders are filled at the best available price based on liquidity and market conditions</li>
                                                        <li className="lh-lg">Spreads may widen during volatile market conditions</li>
                                                        <li className="lh-lg">Slippage and requotes are possible and form part of the execution process</li>
                                                        <li className="lh-lg">Stop-outs may occur automatically if margin requirements are not maintained</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="mt-2">
                                                Execution quality is continuously monitored, but price delivery is subject to third-party liquidity providers and infrastructure latency.
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">7. Trading Hours</b>
                                            <p className="mt-2">
                                                Market access is available during global financial market hours:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Forex: 24/5 from Monday 00:00 to Friday 23:59 (server time)</li>
                                                        <li className="lh-lg">Commodities/Metals/Indices/Stocks: Available based on each market’s trading schedule</li>
                                                        <li className="lh-lg">Cryptocurrencies: Typically available 24/7, subject to platform maintenance windows</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="mt-2">
                                                Any changes in trading schedules during holidays or special events will be published in advance.
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">8. Margin Requirements & Leverage</b>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Initial and maintenance margin requirements vary by asset class and account type</li>
                                                        <li className="lh-lg">Leverage settings may be adjusted based on risk exposure, regulation, or trading behavior</li>
                                                        <li className="lh-lg">Clients must monitor account equity and margin levels to avoid automatic liquidation</li>
                                                        <li className="lh-lg">Failure to meet margin requirements may lead to forced position closure without further notice.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">9. Deposits, Withdrawals & Transfers</b>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">All deposit and withdrawal methods listed in the client portal are processed securely</li>
                                                        <li className="lh-lg">AUT Investments LTD may charge fees or pass on third-party charges (disclosed beforehand)</li>
                                                        <li className="lh-lg">Processing times are typically within 24–48 business hours, barring exceptional circumstances</li>
                                                        <li className="lh-lg">Internal transfers between accounts must follow compliance checks and approval steps</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="mt-2">
                                                Clients are advised to maintain transparency in funding sources to comply with AML standards.
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">10. Conflicts of Interest</b>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Internal protocols prevent misuse of client information</li>
                                                        <li className="lh-lg">Employees are restricted from personal trading during certain periods</li>
                                                        <li className="lh-lg">Pricing and execution are standardized across all clients to ensure fairness</li>
                                                        <li className="lh-lg">Any material conflict that cannot be managed will be disclosed to the client.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">11. Communication & Language</b>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Official communication from AUT Investments LTD will be in English unless otherwise supported</li>
                                                        <li className="lh-lg">Clients may contact the company via email, live chat, or call during business hours</li>
                                                        <li className="lh-lg">All trade confirmations, policy updates, and legal documents will be delivered via email or dashboard notifications</li>
                                                        <li className="lh-lg">Clients are responsible for keeping their contact details updated</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">12. Monitoring & Anti-Abuse Policy</b>
                                            <ul className="list-item clearfix ms-3">
                                                <li className="lh-lg">Latency arbitrage or trade manipulation</li>
                                                <li className="lh-lg">Automated trading abuse without permission</li>
                                                <li className="lh-lg">Excessive order rejections or quote requests</li>
                                                <li className="lh-lg">Use of unauthorized third-party plugins or bots</li>
                                            </ul>
                                            <p className="mt-2">
                                                Violation of fair use policies may result in:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Suspension of services</li>
                                                        <li className="lh-lg">Reversal of profits from abusive trades</li>
                                                        <li className="lh-lg">Termination of account access</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">13. Complaints & Disputes</b>
                                            <p className="mt-2">
                                                Clients may submit complaints related to execution, service quality, or account matters via:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Email: support@autinvestments.com</li>
                                                        <li className="lh-lg">Dashboard Ticket System</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="mt-2">
                                                All complaints are acknowledged within 48 business hours and reviewed based on evidence, platform logs, and policy adherence.
                                                Disputes that cannot be resolved internally may be referred to independent mediators or financial authorities in Mauritius.
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">14. Regulatory Compliance</b>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Anti-Money Laundering (AML) standards</li>
                                                        <li className="lh-lg">Know Your Customer (KYC) policies</li>
                                                        <li className="lh-lg">Data protection and privacy laws</li>
                                                        <li className="lh-lg">Transaction reporting and audit regulations</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="mt-2">
                                                Client cooperation in fulfilling compliance requirements is mandatory. Failure to provide accurate or timely information may result in service restrictions.
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">15. Amendments & Notifications</b>
                                            <p className="mt-2">
                                                This Services Regulations document may be updated periodically. All changes will be posted on our website or communicated through the client portal.
                                                Continued use of the platform after changes implies acceptance of the revised terms.
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">16. Termination of Services</b>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">The client is found in violation of policies</li>
                                                        <li className="lh-lg">There is non-compliance with regulatory obligations</li>
                                                        <li className="lh-lg">Fraudulent activity or misuse of platform is detected</li>
                                                        <li className="lh-lg">The client requests account closure</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="mt-2">
                                                Upon termination, AUT Investments LTD will settle all open positions, process pending withdrawals, and close the account in compliance with applicable laws.
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">17. Governing Law</b>
                                            <p className="mt-2">
                                                This Services Regulations document is governed by the laws of the Republic of Mauritius. Any legal proceedings arising from it shall fall under the jurisdiction of the courts in Mauritius.
                                            </p>
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
                                        <p className="text-light fs-6 mt_30">This Services Regulations document is binding from the date above and applies to all clients using the <br></ br> services of AUT Investments LTD.</p>
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
