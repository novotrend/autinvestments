'use client'
import Layout from "@/components/layout/Layout";

export default function openaccount() {
    return (
        <div className="boxed_wrapper overflow-hidden">
            <Layout headerStyle={1} footerStyle={1}>
                <section className="banner-style-three">
                    <div className="pattern-layer">
                        <div className="pattern-1 rotate-me" style={{ backgroundImage: "url(/assets/images/shape/shape-13.png)" }}></div>
                        <div className="pattern-2 float-bob-x" style={{ backgroundImage: "url(/assets/images/shape/shape-14.png)" }}></div>
                        <div className="pattern-3 float-bob-y" style={{ backgroundImage: "url(/assets/images/shape/shape-15.png)" }}></div>
                    </div>
                    <div className="auto-container py-5">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                                <div className="content_block_five">
                                    <div className="content-box mr_80">
                                        <div className="shape-2" style={{ backgroundImage: "url(/assets/images/shape/shape-12.png)" }}></div>
                                        <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-11.png)" }}></div>
                                        <h3>Create Account</h3>
                                        <div className="form-inner">
                                            <form method="post" action="">
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input type="text" name="name" placeholder="Jonas Blue" required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="email" name="email" placeholder="contact@jonas.me" required />
                                                </div>
                                                <div className="form-group">
                                                    <label>Phone</label>
                                                    <input type="text" name="phone" placeholder="+91 200 3445" required />
                                                </div>
                                                <div className="select_wrap">
                                                    <ul className="default_option">
                                                        <li>
                                                            <div className="option">
                                                                <div className="icon"><img src="/assets/images/icons/flag-english.png" alt="" /></div>
                                                                <p>United Kingdom</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <ul className="select_ul">
                                                        <li>
                                                            <div className="option">
                                                                <div className="icon"><img src="/assets/images/icons/flag-english.png" alt="" /></div>
                                                                <p>United Kingdom</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="option">
                                                                <div className="icon"><img src="/assets/images/icons/flag-deutsch.png" alt="" /></div>
                                                                <p>Deutsch</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="option">
                                                                <div className="icon"><img src="/assets/images/icons/flag-francais.png" alt="" /></div>
                                                                <p>Francais</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="option">
                                                                <div className="icon"><img src="/assets/images/icons/flag-italiano.png" alt="" /></div>
                                                                <p>Italiano</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="message-btn mb-5">
                                                    <button type="submit" className="theme-btn btn-one">Sign Up</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_six">
                                    <div className="content-box">
                                        <h2>Total Immersion in <span>Forex Trading</span></h2>
                                        <p>Our trading platforms offer you a world-className trading experience with numerous features and tools</p>
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

