'use client'
import Layout from "@/components/layout/Layout";
import Link from "next/link"

export default function SupportContact() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Support and Contact">

                <section className="history-section pt_60 pb_60">
                    <div className="auto-container">
                        <div className="row clearfix g-3">
                            <div className="col-md-10 col-sm-12">
                                <div className="inner-box clearfix">
                                    <ol className="p-0">
                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">1. General Support Overview</b>
                                            <p>We’re here to help you trade with confidence. </p>
                                            <p className="mt-2">
                                                At AUT Investments Limited, client service is a priority. We understand that fast, reliable, and
                                                knowledgeable support is essential when trading global markets. That’s why our multilingual
                                                support team is available to assist you across various communication channels, providing help
                                                at every stage of your trading journey.
                                            </p>
                                            <p className="mt-2">
                                                Whether you’re setting up your account, resolving a platform issue, or just need help
                                                understanding your dashboard, our team is here for you.
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">2. Contact Channels</b>
                                            <p className="mt-2">
                                                You can reach our dedicated support team through the following options:
                                            </p>

                                            <h5 className="mt-3 ms-2">Live Chat</h5>
                                            <p className="mt-2 ms-3">
                                                Instant help through our live chat feature on the website.
                                            </p>
                                            <p className="ms-3"> <b> Availability: </b> Monday to Friday, 24 hours a day</p>

                                            <h5 className="mt-3 ms-2">Email Support</h5>
                                            <p className="mt-2 ms-3">
                                                For account-specific queries, technical issues, compliance assistance, or documentation:
                                            </p>
                                            <ul className="ms-3">
                                                <li><b>General Inquiries:</b></li>
                                                <li><b>Compliance & KYC:</b></li>
                                                <li><b>Partnership Queries:</b></li>
                                                <li><b>Platform & Technical Help:</b></li>
                                            </ul>
                                            <p className="ms-3"> <b> Average response time: </b> within 12–24 business hours</p>
                                            <h5 className="mt-3 ms-2">Phone Support</h5>
                                            <p className="mt-2 ms-3">
                                                Speak directly with a member of our support team
                                            </p>
                                            <p className="mt-2 ms-3">
                                                Available in select regions.
                                            </p>
                                            <ul className="ms-3">
                                                <li><b>Support Line:</b></li>
                                                <li><b>Working Hours:</b> Monday to Friday,</li>
                                            </ul>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">3. Client Dashboard Support Center</b>
                                            <p className="mt-2">
                                                Log in to your secure client area to:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Submit support tickets</li>
                                                        <li className="lh-lg">Track ticket status and history</li>
                                                        <li className="lh-lg">Access help articles and platform guides</li>
                                                        <li className="lh-lg">Receive real-time announcements and updates</li>
                                                    </ul>
                                                    <p className="mt-3">
                                                        The client portal offers a streamlined support system with categorized issue tracking and faster resolutions.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">4. Onboarding & Account Assistance</b>
                                            <p className="mt-2">
                                                If you're new to AUT Investments Limited, our onboarding specialists will guide you through:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Account registration</li>
                                                        <li className="lh-lg">KYC documentation upload</li>
                                                        <li className="lh-lg">Initial deposit setup</li>
                                                        <li className="lh-lg">Platform installation and usage</li>
                                                        <li className="lh-lg">Understanding account types and leverage</li>
                                                    </ul>
                                                    <p className="mt-3">
                                                        You’ll also receive a welcome email and access to starter tutorials after registration.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">5. Technical & Platform Support</b>
                                            <p className="mt-2">Facing an issue with MT4, MT5, or WebTrader? We help with:</p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Log-in problems</li>
                                                        <li className="lh-lg">Connection errors</li>
                                                        <li className="lh-lg">Chart loading and settings</li>
                                                        <li className="lh-lg">EA and indicator installation</li>
                                                        <li className="lh-lg">Server selection and ping tests</li>
                                                    </ul>
                                                    <p className="mt-3">
                                                        Our technical team is equipped to resolve platform issues quickly and securely.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">6. Compliance and Verification Help</b>
                                            <p className="mt-2">Need help verifying your identity or updating documents?</p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Guidance on uploading proof of ID and address</li>
                                                        <li className="lh-lg">Assistance with resubmitting rejected files</li>
                                                        <li className="lh-lg">Support during compliance reviews</li>
                                                        <li className="lh-lg">Secure and encrypted document handling</li>
                                                    </ul>
                                                    <p className="mt-3">
                                                        We are committed to fast and compliant onboarding without unnecessary delays.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">7. Feedback and Complaints</b>
                                            <p className="mt-2">
                                                Your experience matters. If you have a complaint or feedback:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Email:</li>
                                                        <li className="lh-lg">Clearly mention your full name, account number, and issue</li>
                                                        <li className="lh-lg">
                                                            All complaints are acknowledged within 48 business hours and resolved as quickly as possible
                                                        </li>
                                                    </ul>
                                                    <p className="mt-3">
                                                        Every submission is reviewed by our compliance team and tracked for transparency
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">8. Educational and Product Support</b>
                                            <p className="mt-2">
                                                Need help understanding how to use our tools or trading products? Our team can help with:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Navigating market sections like Forex, Metals, Indices, and Stocks</li>
                                                        <li className="lh-lg">Using Smart Tools: Copy Trading, Algo Trading, Economic Calendar</li>
                                                        <li className="lh-lg">Understanding promotions, bonuses, and account benefits</li>
                                                        <li className="lh-lg">Finding the right account type or switching between accounts</li>
                                                    </ul>
                                                    <p className="mt-3">We also provide access to educational webinars and video tutorials through the platform.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">9. Help Documents & Guides</b>
                                            <p className="mt-2">
                                                You can also refer to our online documentation, including:
                                            </p>
                                            <div className="education-details-content ms-3">
                                                <div className="text-box">
                                                    <ul className="list-item clearfix">
                                                        <li className="lh-lg">Getting Started Guides</li>
                                                        <li className="lh-lg">Platform Tutorials (MT4/MT5/Web)</li>
                                                        <li className="lh-lg">Deposit & Withdrawal Instructions</li>
                                                        <li className="lh-lg">Legal Policies (Client Agreement, AML, Risk Disclosure)</li>
                                                        <li className="lh-lg">Market FAQs and Troubleshooting Guides</li>
                                                    </ul>
                                                    <p className="mt-3">
                                                        These resources are available in your client area and are updated regularly.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">10. Office Information</b>
                                            <h6 className="ms-2 mt-2"> <b> Head Office: </b></h6>
                                            <p className="mt-2 ms-3">
                                                AUT Investments Limited<br />
                                                6th Floor, Ken Lee Building,<br />
                                                20 Edith Cavell Street,<br />
                                                Port-Louis, 11302, Mauritius
                                            </p>
                                            <h6 className="ms-2 mt-2"> <b>Operating Hours:</b> </h6>
                                            <p className="mt-2 ms-3">
                                                Monday to Friday
                                            </p>
                                            <p className="mt-2 ms-2">
                                                <b>Company Registration Number:</b> 9988776655<br />
                                                <b>Regulatory Body:</b> abc1234
                                            </p>
                                        </li>

                                        <li className="my-4">
                                            <b className="my-2 text-dark fs-5">11. Support Ethics and Confidentiality</b>
                                            <p className="mt-2">
                                                All client interactions are confidential, recorded for training and quality purposes, and protected
                                                under our privacy and data protection policies. Our team is trained to uphold professionalism,
                                                patience, and accuracy in every interaction.
                                            </p>
                                        </li>
                                    </ol>
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
                                        <h2 className="fw-bold">Need Help Right Now?</h2>
                                        <p className="text-light fs-6 mt_30">Click Live Chat or log in to your Client Area for instant assistance</p>
                                        <Link className="theme-btn btn-one bg-dark me-3 mt-3" href="/contact">Contact Support</Link>
                                        <Link className="theme-btn btn-one bg-dark me-3 mt-3" href="/login">Log In</Link>
                                        <Link className="theme-btn btn-one bg-dark me-3 mt-3" href="/open-account">Submit a Ticket</Link>
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