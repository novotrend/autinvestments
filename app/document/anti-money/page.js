import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function AMLPolicy() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Anti-Money Laundering (AML) Policy">

                <section className="history-section pt_100 pb_60">
                    <div className="auto-container">
                        <div className="row clearfix g-3 flex-wrap-reverse">
                            <div className="col-xl-8 col-sm-12">
                                <div className="inner-box clearfix">
                                    <ol className="p-0">
                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">1. Purpose of This Policy</b>
                                            <p className="mt-2">Ensuring secure, transparent, and compliant trading for all clients.</p>
                                            <p className="mt-2">
                                                The Anti-Money Laundering (AML) Policy of AUT Investments LTD outlines the company’s commitment to prevent money laundering, terrorist financing, and other financial crimes.
                                                This policy ensures that our operations are in line with international AML standards and regulations applicable in Mauritius and other relevant jurisdictions.
                                            </p>
                                        </li>
                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">2. What Is Money Laundering?</b>
                                            <p className="mt-2">
                                                Money laundering is the process of concealing the origins of illegally obtained money, typically by transferring it through a complex sequence of banking or commercial transactions to make it appear legitimate.
                                            </p>
                                            <p>Stages of money laundering include:</p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Placement: Introducing illegal funds into the financial system</li>
                                                        <li className="lh-lg">Layering: Obscuring the origin of funds through complex transactions</li>
                                                        <li className="lh-lg">Integration: Making the funds appear as legitimate assets</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>
                                                AUT Investments LTD actively works to identify and block such activities at every stage.
                                            </p>
                                        </li>
                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">3. Regulatory Commitment</b>
                                            <p className="mt-2">
                                                We comply with all applicable AML laws, including but not limited to:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Mauritius Financial Intelligence and Anti-Money Laundering Act (FIAMLA)</li>
                                                        <li className="lh-lg">Financial Action Task Force (FATF) Recommendations</li>
                                                        <li className="lh-lg">Know Your Customer (KYC) and Customer Due Diligence (CDD) procedures</li>
                                                        <li className="lh-lg">Suspicious Transaction Reporting (STR) obligations</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>
                                                We maintain internal controls, monitoring systems, and training programs to meet these obligations.
                                            </p>
                                        </li>
                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">4. Know Your Customer (KYC) Policy</b>
                                            <p className="mt-2">
                                                Before onboarding any client, AUT Investments LTD follows a strict KYC verification process:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Proof of Identity: Valid government-issued ID (passport, national ID, driver’s license)</li>
                                                        <li className="lh-lg">Proof of Address: Utility bill, bank statement, or government document issued within the last 3 months</li>
                                                        <li className="lh-lg">Source of Funds: May be requested to verify the legitimacy of incoming capital</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>
                                                We reserve the right to request additional information or documentation during the verification process or any time thereafter.
                                            </p>
                                        </li>
                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">5. Ongoing Monitoring & Risk-Based Approach</b>
                                            <p className="mt-2">
                                                We adopt a risk-based approach by assigning risk profiles to all clients and transactions:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Clients are continuously monitored based on their activity patterns</li>
                                                        <li className="lh-lg">Transactions are analyzed to detect unusual volume, frequency, or counterparties</li>
                                                        <li className="lh-lg">High-risk clients may undergo enhanced due diligence (EDD), including source of wealth verification and closer transaction scrutiny</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>
                                                All client data is regularly updated, and trading behavior is reviewed to detect red flags or suspicious behavior.
                                            </p>
                                        </li>
                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">6. Prohibited Activities & Jurisdictions</b>
                                            <p className="mt-2">
                                                To protect the integrity of our services:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">We do not accept clients from sanctioned countries or jurisdictions identified as high risk by FATF or similar authorities</li>
                                                        <li className="lh-lg">We prohibit the use of AUT Investments LTD services for:
                                                            <ul className="list-style-one clearfix ms-2">
                                                                <li className="lh-lg">Laundering criminal proceeds</li>
                                                                <li className="lh-lg">Financing terrorism</li>
                                                                <li className="lh-lg">Trading on behalf of third parties without approval</li>
                                                                <li className="lh-lg">Using false or stolen identities or documents</li>
                                                                <li className="lh-lg">Depositing/withdrawing via anonymous payment channels (e.g., crypto mixing services)</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">7. Payment Policies</b>
                                            <p className="mt-2">
                                                All deposits and withdrawals must comply with AML procedures:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Funds must originate from bank accounts or payment methods registered in the client’s name</li>
                                                        <li className="lh-lg">We do not accept or process third-party transactions</li>
                                                        <li className="lh-lg">All payment activities are logged, reviewed, and stored for auditing and legal compliance</li>
                                                        <li className="lh-lg">If a transaction raises suspicion, it may be delayed or rejected pending further investigation</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">8. Reporting Suspicious Activity</b>
                                            <p className="mt-2">
                                                AUT Investments LTD is obligated to report any suspicious activity or transactions to the appropriate financial intelligence authority in Mauritius, even without prior notice to the client.
                                            </p>
                                            <p>Examples of suspicious activity include:</p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Inconsistent or unusually large deposits/withdrawals</li>
                                                        <li className="lh-lg">Reluctance to provide KYC documents</li>
                                                        <li className="lh-lg">Use of multiple accounts under the same or related identities</li>
                                                        <li className="lh-lg">Rapid movement of funds without logical trading behavior</li>
                                                        <li className="lh-lg">Attempts to circumvent verification processes</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>
                                                Our team is trained to escalate and report such findings internally and externally, as required.
                                            </p>
                                        </li>
                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">9. Employee Training & Internal Controls</b>
                                            <p className="mt-2">
                                                All staff undergo regular AML training, including:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">How to identify and handle suspicious activity</li>
                                                        <li className="lh-lg">KYC verification procedures and red flags</li>
                                                        <li className="lh-lg">Proper documentation and escalation protocols</li>
                                                        <li className="lh-lg">Legal obligations under Mauritius and international AML law</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>
                                                Internal audits and compliance reviews ensure our AML controls are effective and up to date.
                                            </p>
                                        </li>
                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">10. Client Responsibilities</b>
                                            <p className="mt-2">
                                                As part of our AML Policy, clients are required to:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Provide accurate and complete information during onboarding</li>
                                                        <li className="lh-lg">Keep account details and documentation up to date</li>
                                                        <li className="lh-lg">Use only verified payment channels in their own name</li>
                                                        <li className="lh-lg">Refrain from engaging in or facilitating suspicious activity</li>
                                                        <li className="lh-lg">Cooperate fully with requests for additional verification or investigation</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>
                                                Failure to comply may result in account restrictions, trading limitations, or termination of service.
                                            </p>
                                        </li>
                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">11. Data Protection & Record Retention</b>
                                            <p className="mt-2">
                                                All KYC and transaction data is stored securely in line with data protection laws. We retain these records for a minimum of five (5) years or longer if legally required.
                                            </p>
                                            <p>
                                                Access to sensitive data is restricted and monitored to protect client privacy while supporting compliance.
                                            </p>
                                        </li>
                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">12. Enforcement & Policy Review</b>
                                            <p className="mt-2">
                                                This policy is enforced by our Compliance Department. It is reviewed annually or more frequently if required by regulatory updates or operational changes.
                                                We reserve the right to revise this policy and will publish the latest version on our website.
                                            </p>
                                        </li>
                                    </ol>
                                </div>
                            </div>

                            <div className="col-xl-4 col-sm-12">
                                <div className="funfact-section1 position-sticky z_99" style={{ top: "100px" }}>
                                    <div className="inner-container d-flex flex-column p-5 align-items-start justify-content-start">
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
                                        <p className="text-light fs-6 mt_30">AUT Investments LTD is committed to creating a secure, transparent, and compliant trading environment for all users.</p>
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
