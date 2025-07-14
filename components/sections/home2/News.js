import Link from "next/link"

export default function News() {
  return (
    <>
        <section className="news-style-two pt_100 pb_70">
            <div className="auto-container">
                <div className="sec-title centred pb_60">
                    <span className="sub-title mb_14">Media Center</span>
                    <h2>Latest News Update</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-1.jpg" alt=""/></Link></figure>
                                    <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-1.jpg" alt=""/></Link></figure>
                                </div>
                                <div className="lower-content">
                                    <span className="category">JPY</span>
                                    <h3><Link href="/blog-details">A Traders’ Weekly Playbook: The JPY at work</Link></h3>
                                    <p>We closed out what was a strong week for equity indices, and for the first time in three week’s we went into the weekend not overly concerned</p>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                        <span>Robert Henry</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-2.jpg" alt=""/></Link></figure>
                                    <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-2.jpg" alt=""/></Link></figure>
                                </div>
                                <div className="lower-content">
                                    <span className="category">PDC</span>
                                    <h3><Link href="/blog-details">China's Geo-Jade wins bid to develop Iraq's Jabal oil</Link></h3>
                                    <p>We closed out what was a strong week for equity indices, and for the first time in three week’s we went into the weekend not overly concerned</p>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                        <span>Haris Gulf</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-3.jpg" alt=""/></Link></figure>
                                    <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-3.jpg" alt=""/></Link></figure>
                                </div>
                                <div className="lower-content">
                                    <span className="category">UJD</span>
                                    <h3><Link href="/blog-details">Niger PM says oil export blockade violates accords</Link></h3>
                                    <p>We closed out what was a strong week for equity indices, and for the first time in three week’s we went into the weekend not overly concerned</p>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="assets/images/resource/testimonial-3.png" alt=""/></figure>
                                        <span>Jhon Rock</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
