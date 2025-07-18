'use client'
import Layout from "@/components/layout/Layout";
import Link from "next/link"
import { useState } from "react"

export default function PrivacyPolicy() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }


    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Privacy Policy">

                <section className="platform-section alternat-2 pt_90 pb_60">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="sec-title pb_20">
                                    <span className="sub-title mb_14">INFO</span>
                                    <h2 className="mb-2">Privacy Policy</h2>
                                    <p>
                                        Your privacy matters. Here’s how AUT Investments LTD protects your data.
                                    </p>
                                    <h4 className="mb-3 mt-4">Introduction</h4>
                                    <p className="mb-2">
                                        This Privacy Policy outlines how AUT Investments LTD collects, uses, stores, shares, and
                                        safeguards your personal information. We are committed to ensuring that your data is handled
                                        securely and in compliance with all applicable data protection laws and regulations.
                                    </p>
                                    <p>
                                        By accessing our services or using our website, you consent to the practices described in this policy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="funfact-section">
                    <div className="auto-container px-0">
                        <div className="inner-container d-flex flex-column p-5 aligh-items-start justify-content-start">
                            <div className="sec-title pb_30">
                                <h2 className="mb-2">Who We Are</h2>
                                <p>
                                    AUT Investments LTD
                                </p>
                            </div>
                            <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-16.png)" }}></div>
                            <h5 className="mb-3">Registered Address:</h5>
                            <p className="mb-2">
                                6th Floor, Ken Lee Building, 20 Edith Cavell Street,<br></br>
                                Port-Louis, 11302, Mauritius
                            </p>
                            <p>
                                We operate as a global financial services provider offering forex and CFD trading across multiple asset classes.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="process-section">
                    <div className="auto-container">
                        <div className="inner-container pt_100 pb_70">
                            <div className="sec-title pb_20">
                                <span className="sub-title mb_14">COMPLETE</span>
                                <h2>What Information We Collect</h2>
                                <p>We may collect and process the following categories of data:</p>
                            </div>
                            <div className="row clearfix complete">
                                <div className="col-12 content-column">
                                    <div className="content-box row row-deck">
                                        <div className="process-block-one col-md-6">
                                            <div className="inner-box w-100">
                                                <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                                                <span className="count-text">1</span>
                                                <h3> Personal Identification Data</h3>
                                                <ul className="list-style-one clearfix">
                                                    <li>
                                                        Full name
                                                    </li>
                                                    <li>
                                                        Date of birth
                                                    </li>
                                                    <li>
                                                        Nationality
                                                    </li>
                                                    <li>
                                                        Identity documents (e.g., passport, government-issued ID)
                                                    </li>
                                                    <li>
                                                        Utility bills or other address verification documents
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="process-block-one col-md-6">
                                            <div className="inner-box w-100">
                                                <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                                                <span className="count-text">2</span>
                                                <h3>Contact Information</h3>
                                                <ul className="list-style-one clearfix">
                                                    <li>
                                                        Email address
                                                    </li>
                                                    <li>
                                                        Phone number
                                                    </li>
                                                    <li>
                                                        Residential or mailing address
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="process-block-one col-md-6">
                                            <div className="inner-box w-100">
                                                <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                                                <span className="count-text">3</span>
                                                <h3>Financial & Trading Information</h3>
                                                <ul className="list-style-one clearfix">
                                                    <li>
                                                        Bank account details
                                                    </li>
                                                    <li>
                                                        Credit/debit card information (via secure processors)
                                                    </li>
                                                    <li>
                                                        Trading history
                                                    </li>
                                                    <li>
                                                        Account balances and transaction data
                                                    </li>
                                                    <li>
                                                        Employment and income data (for compliance)
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="process-block-one col-md-6">
                                            <div className="inner-box w-100">
                                                <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                                                <span className="count-text">4</span>
                                                <h3>Technical Information</h3>
                                                <ul className="list-style-one clearfix">
                                                    <li>
                                                        IP address
                                                    </li>
                                                    <li>
                                                        Browser type and device
                                                    </li>
                                                    <li>
                                                        Operating system
                                                    </li>
                                                    <li>
                                                        Log-in timestamps and activity records
                                                    </li>
                                                    <li>
                                                        Cookies and usage data (see “Cookies” section)
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

                <section className="history-section pt_60 pb_60">
                    <div className="auto-container">
                        <div className="row clearfix g-3 flex-wrap-reverse">
                            <div className="col-xl-8 col-sm-12">
                                <div className="inner-box clearfix">
                                    <ul>
                                        <li className="my-4"><b className="my-2 text-dark fs-5">How We Use Your Information</b>
                                            <p className="mt-2">Your data is used strictly for legitimate business and regulatory purposes, including:</p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Verifying your identity (KYC)</li>
                                                        <li className="lh-lg">Setting up and managing your trading account</li>
                                                        <li className="lh-lg">Processing deposits, withdrawals, and transactions</li>
                                                        <li className="lh-lg">Sending account-related communications</li>
                                                        <li className="lh-lg">Providing trading tools, platform access, and analytics</li>
                                                        <li className="lh-lg">Enhancing the security and functionality of our website</li>
                                                        <li className="lh-lg">Conducting internal risk assessments and audits</li>
                                                        <li className="lh-lg">Fulfilling regulatory and legal obligations (AML, tax reporting, etc.)</li>
                                                        <li className="lh-lg">Marketing (only with your consent)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">Data Sharing & Disclosure</b>
                                            <p className="mt-2">
                                                We do not sell your personal information. However, we may share your data with the following trusted entities:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg"> <b> Regulatory Authorities </b> when legally required</li>
                                                        <li className="lh-lg"> <b> KYC and AML Compliance Providers </b> </li>
                                                        <li className="lh-lg"> <b> Payment Processors & Banks </b> for transaction fulfillment</li>
                                                        <li className="lh-lg"> <b>Technology Vendors </b> (e.g., trading platforms, CRM systems)</li>
                                                        <li className="lh-lg"> <b> Auditors and Legal Consultants </b></li>
                                                        <li className="lh-lg"> <b> Affiliated Partners or IBs </b> (when you’re referred through a partner)</li>
                                                    </ul>
                                                    <p className="mt-2">Every third-party provider is contractually bound to maintain confidentiality and security.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">Your Rights Under Data Protection Laws</b>
                                            <p className="mt-2">
                                                Depending on your location and applicable law, you may have the right to:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Access your personal data</li>
                                                        <li className="lh-lg">Correct or update incorrect or incomplete data</li>
                                                        <li className="lh-lg">Request deletion or restriction of your data</li>
                                                        <li className="lh-lg">Object to processing for marketing purposes</li>
                                                        <li className="lh-lg">Withdraw consent at any time</li>
                                                        <li className="lh-lg">Request data portability</li>
                                                        <li className="lh-lg">Lodge a complaint with a data protection authority</li>
                                                    </ul>
                                                    <p className="mt-3">
                                                        To exercise any of these rights, you can contact our Data Protection Officer (DPO) at<br />
                                                        <Link href="mailto:privacy@autinvestments.com">privacy@autinvestments.com</Link>.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">Data Security</b>
                                            <p className="mt-2">
                                                We apply a combination of technical, administrative, and physical security measures to safeguard your data, including:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">128-bit SSL encryption</li>
                                                        <li className="lh-lg">Two-factor authentication (2FA)</li>
                                                        <li className="lh-lg">Firewalled and monitored servers</li>
                                                        <li className="lh-lg">Secure storage of sensitive information</li>
                                                        <li className="lh-lg">Restricted access based on role</li>
                                                    </ul>
                                                    <p className="lh-lg mt-3">
                                                        Despite our best efforts, no transmission over the internet is 100% secure. You are responsible for keeping your log-in credentials confidential.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">Data Retention</b>
                                            <p className="mt-2">
                                                We retain personal data for as long as:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">You maintain an active relationship with us</li>
                                                        <li className="lh-lg">It is necessary for regulatory compliance and auditing</li>
                                                        <li className="lh-lg">Required to resolve disputes and enforce agreements</li>
                                                    </ul>
                                                    <p className="lh-lg mt-3">
                                                        Typically, data is stored for a minimum of five (5) years after the account is closed, unless
                                                        otherwise required by law.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">International Transfers</b>
                                            <p className="mt-2">
                                                Your data may be processed and stored outside your country of residence, including in
                                                jurisdictions with different data protection standards. AUT Investments LTD ensures such
                                                transfers are secured and compliant with applicable cross-border data laws.
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">Cookies & Web Tracking</b>
                                            <p className="mt-2">
                                                Our website uses cookies to:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Recognize you across sessions</li>
                                                        <li className="lh-lg">Save your preferences</li>
                                                        <li className="lh-lg">Analyze website traffic and user behavior</li>
                                                        <li className="lh-lg">Support marketing campaigns and remarketing</li>
                                                    </ul>
                                                    <p className="mt-3">
                                                        You can control or disable cookies through your browser settings. For full details, please refer to our Cookie Policy.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">Marketing Communications</b>
                                            <p className="mt-2">
                                                If you opt-in, we may send you newsletters, promotional offers, or market insights via email,
                                                SMS, or push notifications. You can opt out at any time by clicking "unsubscribe" in emails or by
                                                updating your preferences in the client dashboard.
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">Third-Party Links</b>
                                            <p className="mt-2">
                                                Our website may include links to third-party websites. We are not responsible for the privacy
                                                practices of these sites and recommend reviewing their individual privacy policies.
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">Policy Updates</b>
                                            <p className="mt-2">
                                                We may revise this Privacy Policy from time to time. All changes will be posted on this page with
                                                an updated "Last Revised" date. Continued use of our services after changes implies
                                                acceptance.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-12">
                                <div className="funfact-section1 position-sticky z_99" style={{ top: "100px" }}>
                                    <div className="inner-container d-flex flex-column p-sm-5 p-4 align-items-start justify-content-start">
                                        <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-16.png)" }}></div>
                                        <h5 className="mb-3">Contact Us</h5>
                                        <p>
                                            For questions or concerns regarding this Privacy Policy or your personal data:
                                        </p>
                                        <div className="education-details-content">
                                            <div className="text-box">
                                                <ul className="list-item clearfix">
                                                    <li className="lh-lg"><strong>Email:</strong>privacy@autinvestments.com</li>
                                                    <li className="lh-lg"><strong>Phone:</strong>+230-XXXX-XXXX (example)</li>
                                                    <li className="lh-lg">
                                                        Mailing Address:<br />
                                                        AUT Investments LTD,<br />
                                                        6th Floor, Ken Lee Building,<br />
                                                        20 Edith Cavell Street, Port-Louis, 11302, Mauritius
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
                                        <h2 className="fw-bold">Last Revised: July 2025</h2>
                                        <p className="text-light fs-6 mt_30">AUT Investments LTD — Your trust. Our priority.</p>
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