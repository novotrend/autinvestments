

export default function Subscribe() {
    return (
      <>
        <section className="subscribe-section">
              <div className="auto-container">
                  <div className="inner-container">
                      <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}></div>
                      <div className="row align-items-center">
                          <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                              <div className="text-box">
                                  <h2>Subscribe for latest update</h2>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                              <div className="form-inner">
                                  <form method="post" action="/contact">
                                      <div className="form-group">
                                          <input type="email" name="email" placeholder="Email Address" required/>
                                          <button type="submit" className="theme-btn btn-one">Subscribe<i className="icon-26"></i></button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
  