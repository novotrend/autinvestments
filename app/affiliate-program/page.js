'use client'
import Layout from "@/components/layout/Layout";
import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link";

export default function AffiliateProgram() {
  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Affiliate Program">
        <section className="platform-section alternat-2 pt_90 pb_60">
          <div className="auto-container">
            <div className="row align-items-center g-3">
              <div className="col-lg-4">
                <div className="sec-title pb_20 d-lg-none">
                  <span className="sub-title mb_14">INFO</span>
                  <h2 className="mb-2">What is Affiliate Program</h2>
                  <p>Partner with AUT Investments LTD and earn by referring traders — simple, scalable, and performance-driven.</p>
                </div>
                <img src="/assets/images/resource/affiliateprogram-1.jpg" alt="" className="rounded" />
              </div>
              <div className="col-lg-8">
                <div className="sec-title pb_20 d-none d-lg-block">
                  <span className="sub-title mb_14">INFO</span>
                  <h2 className="mb-2">What is Affiliate Program</h2>
                  <p>Partner with AUT Investments LTD and earn by referring traders — simple, scalable, and performance-driven.</p>
                </div>
                <section className="funfact-section">
                  <div className="auto-container px-0">
                    <div className="inner-container d-flex flex-column p-sm-5 p-4 aligh-items-start justify-content-start">
                      <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-16.png)" }}></div>
                      <h4 className="text-dark fw-semibold mb-3">Grow with One of the Fastest-Rising Trading Brands</h4>
                      <p>The AUT Investments LTD Affiliate Program is designed for individuals, influencers, financial educators, website owners, content creators, IBs (Introducing Brokers), and digital marketers who want to monetize their traffic or network by promoting a trusted forex and CFD trading brand.</p>
                      <p className="mt-3">Our affiliate model combines transparent commissions, real-time tracking, and dedicated partner support — enabling you to build a stable income stream by introducing new clients to our world-class trading platform.</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        <section className="markets-section pt_60 pb_70">
          <div className="auto-container">
            <div className="row align-items-center g-3 flex-wrap-reverse">
              <div className="col-lg-8">
                <div className="sec-title pb_30 d-none d-lg-block">
                  <span className="sub-title mb_14">Features of AUT</span>
                  <h2>Why Join the AUT Investments LTD Affiliate Program?</h2>
                </div>
                <div className="row clearfix education-details-content shadow-sm py-5 px-sm-4 px-2 rounded-4" >
                  <div className="col-12 content-column ">
                    <div className="text-box">
                      <ul className="list-item clearfix">
                        <li className="lh-lg"><b className="fs-6 text-dark"> Attractive CPA & Revenue Share Models:</b> <br />Choose between high one-time payouts per qualified client (CPA) or earn ongoing commissions based on client activity (Revenue Share).</li>
                        <li className="lh-lg"><b className="fs-6 text-dark">No Setup or Joining Fee:</b> <br />It’s completely free to join and start earning — no hidden fees, no long-term lock-ins.</li>
                        <li className="lh-lg"><b className="fs-6 text-dark">Real-Time Dashboard & Analytics:</b> <br />Track referrals, commissions, and conversions live with a dedicated partner dashboard.</li>
                        <li className="lh-lg"><b className="fs-6 text-dark">High Conversion Funnel:</b> <br />Promote a platform backed by strong brand trust, multilingual support, and high client retention.</li>
                        <li className="lh-lg"><b className="fs-6 text-dark">Global Reach:</b> <br />Our platform supports traders from multiple regions with multilingual capabilities and local payment methods.</li>
                        <li className="lh-lg"><b className="fs-6 text-dark">Marketing Support Provided:</b> <br />Get access to banners, landing pages, promo videos, content templates, and branded creatives.</li>
                        <li className="lh-lg"><b className="fs-6 text-dark">Dedicated Affiliate Manager:</b> <br />Get personalized support to help you scale your performance and increase your earnings.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sec-title pb_30 d-lg-none">
                  <span className="sub-title mb_14">Features of AUT</span>
                  <h2>Why Join the AUT Investments LTD Affiliate Program?</h2>
                </div>
                <img src="/assets/images/resource/affiliate-feature.jpg" alt="" className="rounded" />
              </div>
            </div>
          </div>
        </section>

        <section className="news-section pt_100 pb_70">
          <div className="auto-container">
            <div className="sec-title pb_60">
              <span className="sub-title mb_14">Overview</span>
              <h2>Join Our Affiliate Network</h2>
            </div>
            <div className="row clearfix row-deck">
              <div className="col-lg-6 col-md-12 news-block d-flex flex-column">
                <div className="news-block-one w-100 d-flex flex-column h-100 wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <h2>Who Can Join?</h2>
                    <p>Whether you’re an individual or a large affiliate network, our partnership structure can be customized to match your goals.</p>
                    <ul className="list-style-one mt_40 clearfix">
                      <li>Forex and crypto bloggers</li>
                      <li>Financial influencers and YouTubers</li>
                      <li>Digital marketers running ad campaigns</li>
                      <li>Website/app owners with finance traffic</li>
                      <li>IBs and community leaders</li>
                      <li>Affiliate marketers with forex or fintech experience</li>
                      <li>Educators and trading mentors</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 news-block d-flex flex-column">
                <div className="news-block-one w-100 d-flex flex-column h-100 wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <h2>Affiliate Dashboard Features</h2>
                    <ul className="list-style-one mt_40 clearfix">
                      <li>Real-time referral and earnings tracking</li>
                      <li>Custom promo links and banners</li>
                      <li>Conversion rate metrics</li>
                      <li>Geo-based traffic insights</li>
                      <li>Automated commission calculation</li>
                      <li>Secure payout options</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 news-block d-flex flex-column">
                <div className="news-block-one w-100 d-flex flex-column h-100 wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <h2>Payout Methods & Frequency</h2>
                    <ul className="list-style-one mt_40 clearfix">
                      <li>Bank Transfer</li>
                      <li>E-wallets (Skrill, Neteller, etc.)</li>
                      <li>Crypto (USDT/BTC)</li>
                      <li>Monthly or biweekly payouts (based on plan)</li>
                      <li>Transparent withdrawal process with no hidden charges</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 news-block d-flex flex-column">
                <div className="news-block-one w-100 d-flex flex-column h-100 wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <h2>Support & Resources</h2>
                    <ul className="list-style-one mt_40 clearfix">
                      <li>Personalized strategy sessions</li>
                      <li>Performance optimization tips</li>
                      <li>Educational webinars and tutorials</li>
                      <li>Regular updates on platform promotions and events</li>
                      <li>Custom creatives on request</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="working-section apps-section alternat-2 pt_120 pb_120 pt_100 pb_100">
          <div className="auto-container">
            <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-4.png)" }}></div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                <div className="video_block_one">
                  <div className="video-box z_1 p_relative pt_50 pb_30 centred">
                    <div className="video-inner">
                      <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/resource/video-2.jpg)" }}></div>
                      <div className="video-content">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_nine">
                  <div className="content-box ml_70">
                    <div className="sec-title light pb_35">
                      <span className="sub-title mb_10">Easy Steps</span>
                      <h2>How to Join Our Affiliate Program</h2>
                    </div>
                    <div className="inner-box">
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">1</span>
                        <h3>Register as an Affiliate</h3>
                        <p>Fill out the simple application form and get approved within 24 hours.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">2</span>
                        <h3>Get Your Unique Tracking Links</h3>
                        <p>Access the affiliate dashboard and generate custom links and creatives. valid identification and proof of residence to comply with regulatory standards.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">3</span>
                        <h3>Start Promoting AUT Investments LTD</h3>
                        <p>Share your links across your blog, social media, website, email list, or ad campaigns.</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">4</span>
                        <h3>Track Referrals and Earnings</h3>
                        <p>Use your dashboard to monitor conversions, trading activity, and payouts in real time</p>
                      </div>
                      <div className="single-item">
                        <span className="count-text bg-light text-dark">5</span>
                        <h3> Receive Timely Payouts</h3>
                        <p>Get paid via your preferred method once you meet the payout threshold — quickly and securely.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="working-section pt_100 pb_100">
          <div className="auto-container">
            <div className="sec-title pb_60">
              <span className="sub-title mb_14">Models</span>
              <h2>Affiliate Program Models</h2>
            </div>
            <div className="row align-items-center clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <div className="process-block-one">
                    <div className="inner-box">
                      <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                      <span className="count-text">1</span>
                      <h3>CPA (Cost Per Acquisition)</h3>
                      <p className="mb-0">Earn a fixed payout for every referred client who completes account verification and makes a qualifying deposit. Ideal for affiliates focused on volume.</p>
                    </div>
                  </div>
                  <div className="process-block-one">
                    <div className="inner-box">
                      <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                      <span className="count-text">2</span>
                      <h3>Revenue Share</h3>
                      <p className="mb-0">Earn a percentage of the spread or commission generated by your referred clients. The more they trade, the more you earn recurring passive income.</p>
                    </div>
                  </div>
                  <div className="process-block-one">
                    <div className="inner-box">
                      <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                      <span className="count-text">3</span>
                      <h3>Hybrid Plan</h3>
                      <p className="mb-0">Combine CPA and revenue share for a balanced approach. Contact our team to tailor your plan.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <img className="image image-hov-two rounded" src="/assets/images/resource/process-1.jpg" alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="award-section pt_60 pb_70">
          <div className="auto-container">
            <div className="sec-title pb_60">
              <span className="sub-title mb_14">Support </span>
              <h2>Affiliate Program Benefits at a Glance</h2>
            </div>
            <div className="table-outer">
              <table className="award-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Commission Type</td>
                    <td>CPA / Rev Share / Hybrid</td>
                  </tr>
                  <tr>
                    <td>Real-Time Tracking</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Minimum Payout Threshold</td>
                    <td>$100 (varies by method)</td>
                  </tr>
                  <tr>
                    <td>Access to Creatives</td>
                    <td>Banners, landing pages, videos</td>
                  </tr>
                  <tr>
                    <td>Referral Cookie Duration</td>
                    <td>60 days</td>
                  </tr>
                  <tr>
                    <td>Dedicated Support</td>
                    <td>1-on-1 Affiliate Manager</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="subscribe-section">
          <div className="bg-color"></div>
          <div className="auto-container">
            <div className="inner-container">
              <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-5.png)" }}></div>
              <div className="row">
                <div className="col-md-12 col-sm-12 text-column">
                  <div className="text-box">
                    <h3 className="text-dark fw-semibold mb-3">Start Earning Today</h3>
                    <p className="text-light">Join the AUT Investments LTD Affiliate Program and turn your audience, content, or network into a revenue source. Whether you’re scaling or just starting out, we’ll provide the tools, support, and structure to help you grow.</p>
                    <Link href='/contact' className="theme-btn btn-one bg-dark me-3 mt-3">Contact Support</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </div>
  )
} 