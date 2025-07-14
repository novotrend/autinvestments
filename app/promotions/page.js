import Layout from "@/components/layout/Layout";

export default function Promotions() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Promotions">
                <section className="platform-section alternat-2 pt_90 pb_60">
                    <div className="auto-container">
                        <div className="sec-title pb_20">
                        {/* <span className="sub-title mb_14">INFO</span>
                        <h2>Open Trading Account</h2> */}
                        <p>Partner with AUT Investments LTD and earn by referring traders — simple, scalable, and performance-driven.</p>
                        </div>
                        <section className="funfact-section">
                        <div className="auto-container px-0">
                            <div className="inner-container d-flex flex-column p-5 aligh-items-start justify-content-start">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
                                <h4 className="text-dark fw-semibold mb-3">Maximize Every Trade with Special Offers</h4>
                                <p>At AUT Investments LTD, we believe in rewarding our traders at every stage of their journey. Whether you're just starting out or already an active trader, our promotions are designed to give you more value, more flexibility, and more opportunities to grow your account. From generous welcome bonuses to trading contests and loyalty rewards, our promotional campaigns are tailored to enhance your trading experience — without hidden conditions.</p>
                            </div>
                        </div>
                        </section>
                    </div>
                </section>

                <section className="platform-section alternat-2 pt_90 pb_60">
                    <div className="auto-container">
                        <div className="sec-title pb_20">
                            <span className="sub-title mb_14">Promotions</span>
                            <h2>Current Promotions</h2>
                            <p>Partner with AUT Investments LTD and earn by referring traders — simple, scalable, and performance-driven.</p>
                        </div>
                        <section className="funfact-section">
                            <div className="auto-container px-0">
                                <div className="row align-items-center clearfix">
                                    <div className="col-md-12 col-sm-12 content-column">
                                        <div className="card">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="content-box">
                                                            <div className="inner-box">
                                                                <h3>CPA (Cost Per Acquisition)</h3>
                                                                <p className="mb-0">Earn a fixed payout for every referred client who completes account verification and makes a qualifying deposit. Ideal for affiliates focused on volume.</p>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <img class="image image-hov-two rounded" src="assets/images/resource/process-1.jpg" alt=""></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                <section className="subscribe-section">
                    <div className="bg-color"></div>
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}></div>
                            <div className="row">
                                <div className="col-md-12 col-sm-12 text-column">
                                    <div className="text-box">
                                        <h3 className="text-dark fw-semibold mb-3">Trade More. Earn More. Get Rewarded.</h3>
                                        <p className="text-light">Explore our active promotions and take advantage of added benefits on your trades. Whether you're growing your capital or sharing your experience with others, AUT Investments LTD is here to support and reward your every step in the markets.</p>
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