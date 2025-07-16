import Link from "next/link"

export default function News() {
  return (
    <>
      <section className="news-section pt_100 pb_70">
            <div className="auto-container">
                <div className="sec-title light centred pb_60">
                    <span className="sub-title mb_14">Media Center</span>
                    <h2>Latest News Update</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <span className="post-date">20TH April, 2024</span>
                                <h3><Link href="/blog-details">USD/JPY Stages the more upsides can Bulls Aim for 160x Bonus?</Link></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Curaitur in euismod odio gravida gravida. Discovery of the text's origin is attributed</p>
                                <div className="link"><Link href="/blog-details">Read More</Link></div>
                            </div>
                            <div className="author-box">
                                <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                <span>Daniel Marcon</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <span className="post-date">19TH April, 2024</span>
                                <h3><Link href="/blog-details">Nemo's Eurovision win fires up Swiss advocates for non-binary rights</Link></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Curaitur in euismod odio gravida gravida. Discovery of the text's origin is attributed</p>
                                <div className="link"><Link href="/blog-details">Read More</Link></div>
                            </div>
                            <div className="author-box">
                                <figure className="author-thumb"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                <span>Robert Henry</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <span className="post-date">18TH April, 2024</span>
                                <h3><Link href="/blog-details">Wall St Week Ahead-Earnings bolster US stocks but crucial inflation report looms</Link></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Curaitur in euismod odio gravida gravida. Discovery of the text's origin is attributed</p>
                                <div className="link"><Link href="/blog-details">Read More</Link></div>
                            </div>
                            <div className="author-box">
                                <figure className="author-thumb"><img src="assets/images/resource/testimonial-3.png" alt=""/></figure>
                                <span>Victor classNameic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
