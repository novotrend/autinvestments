import Link from "next/link"
import Layout from "@/components/layout/Layout"
import VideoPopup from "@/components/elements/VideoPopup"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function Blog_details() {

    return (
        <div className="boxed_wrapper">
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Blog Details">

        <section className="sidebar-page-container pt_90 pb_100">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="blog-details-content">
                            <div className="news-block-two pb_20">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/news/news-11.jpg" alt=""/></figure>
                                    </div>
                                    <div className="lower-content">
                                        <div className="author-box mb_15">
                                            <span className="category">JPY</span>
                                            <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                            <span>Robert Henry &nbsp; &nbsp;10 May 2024</span>
                                        </div>
                                        <h2>Traders capitalize on market movements triggered by specific events</h2>
                                        <div className="text-box">
                                            <p>We closed out what was a strong week for equity indices large number of trades within a short timeframe, aiming to profit from small price movements Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Letraset sheets containing.</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
                                            <p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                            <blockquote>
                                                <div className="icon-box"><i className="icon-43"></i></div>
                                                <p>That's why we adhere to strict quality standards and regulations to ensure that all our products meet the highest levels of safety and efficacy.</p>
                                                <h4>Brooklyn Simmons</h4>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="video_block_one">
                                <div className="video-box z_1 p_relative centred">
                                    <div className="video-inner">
                                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/video-3.jpg)" }}></div>
                                        <div className="video-content">
                                            <VideoPopup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-one mt_30 mb_60">
                                <h2>Emerging Trends and Technologies Shaping the Industry</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
                                <h3>Your Gateway to Trading Success</h3>
                                <ul className="list-item clearfix">
                                    <li>Risk management features such as stop-loss orders</li>
                                    <li>Trading platforms provide account management features for depositing</li>
                                    <li> Mobile trading apps offer the flexibility to trade on-the-go using smartphones and tablets</li>
                                    <li>Some platforms offer tools for backtesting trading strategies using historical data</li>
                                </ul>
                            </div>
                            <div className="post-share-option mb_60">
                                <ul className="tags-list">
                                    <li><h4>Tags:</h4></li>
                                    <li><Link href="/blog-details">Careers</Link></li>
                                    <li><Link href="/blog-details">Demo</Link></li>
                                </ul>
                                <ul className="social-links">
                                    <li><h4>Share This :</h4></li>
                                    <li><Link href="/blog-details"><i className="icon-12"></i></Link></li>
                                    <li><Link href="/blog-details"><i className="icon-13"></i></Link></li>
                                    <li><Link href="/blog-details"><i className="icon-15"></i></Link></li>
                                    <li><Link href="/blog-details"><i className="icon-14"></i></Link></li>
                                </ul>
                            </div>
                            <div className="comment-box">
                                <div className="group-title mb_25"><h3>Write Comment</h3></div>
                                <div className="form-inner">
                                    <form method="post" action="/blog-details">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="form-group">
                                                    <label>Name <span>*</span></label>
                                                    <input type="text" name="name"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="form-group">
                                                    <label>Email <span>*</span></label>
                                                    <input type="email" name="email"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                                <div className="form-group">
                                                    <label>Message <span>*</span></label>
                                                    <textarea name="message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                                <div className="check-box mb_35">
                                                    <input className="check" type="checkbox" id="checkbox9"/>
                                                    <label for="checkbox9">Save my name, email, and website in this browser for the next time I comment.</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                                <div className="message-btn">
                                                    <button type="submit" className="theme-btn btn-one">Submit Review</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="blog-sidebar ml_40">
                            <div className="search-widget mb_60">
                                <div className="search-form">
                                    <form method="post" action="/blog-details">
                                        <div className="form-group">
                                            <input type="search" name="search-field" placeholder="Search" required=""/>
                                            <button type="submit"><i className="icon-10"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="sidebar-widget category-widget mb_50">
                                <div className="widget-title mb_11">
                                    <h3>Categories</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="category-list clearfix">
                                        <li><Link href="/blog-details">Day Trading<span>(09)</span></Link></li>
                                        <li><Link href="/blog-details">Swing Trading<span>(20)</span></Link></li>
                                        <li><Link href="/blog-details">Position Trading<span>(25)</span></Link></li>
                                        <li><Link href="/blog-details">Driven Trading<span>(06)</span></Link></li>
                                        <li><Link href="/blog-details">Economic<span>(18)</span></Link></li>
                                        <li><Link href="/blog-details">Options Trading<span>(11)</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-widget post-widget mb_60">
                                <div className="widget-title mb_20">
                                    <h3>Latest Posts</h3>
                                </div>
                                <div className="post-inner">
                                    <div className="post">
                                        <figure className="post-thumb"><Link href="/blog-details"><img src="assets/images/news/post-1.jpg" alt=""/></Link></figure>
                                        <h6><Link href="/blog-details">Traders open and close positions</Link></h6>
                                        <span className="post-date">1 May 2024</span>
                                    </div>
                                    <div className="post">
                                        <figure className="post-thumb"><Link href="/blog-details"><img src="assets/images/news/post-2.jpg" alt=""/></Link></figure>
                                        <h6><Link href="/blog-details">Traders execute a large number of</Link></h6>
                                        <span className="post-date">1 May 2024</span>
                                    </div>
                                    <div className="post">
                                        <figure className="post-thumb"><Link href="/blog-details"><img src="assets/images/news/post-3.jpg" alt=""/></Link></figure>
                                        <h6><Link href="/blog-details">Futures trading can involve various</Link></h6>
                                        <span className="post-date">1 May 2024</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-widget tags-widget mb_45">
                                <div className="widget-title mb_20">
                                    <h3>Popular tag</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="tags-list clearfix">
                                        <li><Link href="/blog-details">Account</Link></li>
                                        <li><Link href="/blog-details">Careers</Link></li>
                                        <li><Link href="/blog-details">Demo</Link></li>
                                        <li><Link href="/blog-details">Education</Link></li>
                                        <li><Link href="/blog-details">Markets</Link></li>
                                        <li><Link href="/blog-details">MT4</Link></li>
                                        <li><Link href="/blog-details">Trading</Link></li>
                                        <li><Link href="/blog-details">MT5</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-widget archives-widget">
                                <div className="widget-title mb_11">
                                    <h3>Archives</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="archives-list clearfix">
                                        <li><Link href="/blog-details"><i className="far fa-angle-right"></i>December 20, 2022<span>(09)</span></Link></li>
                                        <li><Link href="/blog-details"><i className="far fa-angle-right"></i>December 22, 2022<span>(20)</span></Link></li>
                                        <li><Link href="/blog-details"><i className="far fa-angle-right"></i>December 23, 2022<span>(25)</span></Link></li>
                                        <li><Link href="/blog-details"><i className="far fa-angle-right"></i>December 28, 2022<span>(06)</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Subscribe/>

        </Layout>
    </div>
    )
}