import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function Account_details() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Account Deatils">

                <section className="account-details account-style-two account-page clear-bg pt_100 pb_100">
                    <div className="auto-container">
                        <div className="upper-box centred mb_65">
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                                    <div className="account-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-16"></i></div>
                                            <h3><Link href="/account-details">Professional Account</Link></h3>
                                            <p>Traders with professional accounts gain access to a wide</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                                    <div className="account-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-17"></i></div>
                                            <h3><Link href="/account-details">Overview Account</Link></h3>
                                            <p>The primary feature of a trading overview account is its ability to</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                                    <div className="account-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-18"></i></div>
                                            <h3><Link href="/account-details">Demo Account</Link></h3>
                                            <p>Trading demo accounts are particularly valuable for novice</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 account-block">
                                    <div className="account-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-19"></i></div>
                                            <h3><Link href="/account-details">Islamic Account</Link></h3>
                                            <p>Islamic accounts also adhere to ethical guidelines that prohibit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-box align-1 pt_65">
                                <p>Trading accounts can vary widely based on the investor's needs and preferences. Common types include cash accounts, margin accounts, retirement accounts and specialty accounts for options or futures trading. Each trading account is assigned a unique identification number by the brokerage firm or financial institution. This number serves as a reference for all transactions and communications related to the account.</p>
                            </div>
                        </div>
                        <figure className="image-box mb_60"><img src="/assets/images/resource/account-1.jpg" alt="" /></figure>
                        <div className="account-info">
                            <h2>Professional Account Info</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a lobortis tortor, sit amet congue purus. Maecenas pharetra lacus quis nisi porta facilisis. Morbi fermentum bibendum arcu, a porttitor eros volutpat et. Praesent nec magna tincidunt, placerat justo non, egestas quam.</p>
                            <div className="info-inner">
                                <ul className="info-list clearfix">
                                    <li><span>Initial Deposit</span><span>$1000</span></li>
                                    <li><span>Leverage</span><span>Upto 1:3000</span></li>
                                    <li><span>Spread</span><span>Fixed from 5 pis</span></li>
                                    <li><span>Multi Language CC</span><span>Yes</span></li>
                                </ul>
                                <ul className="info-list clearfix">
                                    <li><span>Order Volume</span><span>0.01 – 500 lots</span></li>
                                    <li><span>24/7 Support</span><span>Yes</span></li>
                                    <li><span>Friendly & Expert</span><span>Yes</span></li>
                                    <li><span>Award Winner</span><span>Big Bonus</span></li>
                                </ul>
                            </div>
                            <h3>Benefits</h3>
                            <ul className="list-item clearfix">
                                <li>Portfolio Diversification</li>
                                <li>Access to Global Markets</li>
                                <li>Flexibility and Control</li>
                                <li>Potential for Profit</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <Subscribe />

            </Layout>
        </div>
    )
}