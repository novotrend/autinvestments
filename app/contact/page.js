'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function Contact() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">

                <section className="contact-section pt_90 pb_100">
                    <div className="auto-container">
                        <div className="info-inner pb_25">
                            <div className="row g-3">
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column p-2">
                                    <div className="single-info mb-0">
                                        <div className="icon-box"><i className="icon-45"></i></div>
                                        <h4>Corporate Office</h4>
                                        <p>6th Floor, Ken Lee Building,
                                            20 Edith Cavell Street,
                                            Port-Louis, 11302, Mauritius</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column p-2">
                                    <div className="single-info mb-0">
                                        <div className="icon-box"><i className="icon-46"></i></div>
                                        <h4>Email Address</h4>
                                        <p><Link href="mailto:privacy@autinvestments.com">privacy@autinvestments.com</Link> <br /> <Link href="mailto:support@autinvestments.com">support@autinvestments.com</Link></p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column p-2">
                                    <div className="single-info mb-0">
                                        <div className="icon-box"><i className="icon-47"></i></div>
                                        <h4>Phone Number</h4>
                                        <p><Link href="tel:++230-XXXX-XXXX">+230-XXXX-XXXX</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-inner pb_70">
                            <form method="post" action="sendemail.php" id="contact-form">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <label>Your Name <span>*</span></label>
                                        <input type="text" name="username" placeholder="" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <label>Phone <span>*</span></label>
                                        <input type="text" name="phone" placeholder="" required />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <label>Email Address <span>*</span></label>
                                        <input type="email" name="email" placeholder="" required />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <label>Subject <span>*</span></label>
                                        <input type="text" name="subject" placeholder="" required />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <label>Write Message <span>*</span></label>
                                        <textarea name="message" placeholder=""></textarea>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn pt_18">
                                        <button type="submit" className="theme-btn btn-one" name="submit-form">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="map-inner">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.256270715028!2d57.49871807602274!3d-20.16505254567252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5053940a9b1f%3A0x321465e8be8002d1!2sKen%20Lee%20Building%2C%20Brown%20Sequard%2C%20Port%20Louis%2C%20Mauritius!5e0!3m2!1sen!2sin!4v1752818631733!5m2!1sen!2sin" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}