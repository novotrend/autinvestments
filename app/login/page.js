'use client'
import { useRouter } from 'next/navigation';

export default function login() {
    const router = useRouter();
    const handelrOnSubmit = (e) => {
        e.preventDefault();
        router.push('/');
    }
    return (
        <div className="boxed_wrapper overflow-hidden">
            <section className="banner-style-three pt_100 pb_150 vh-100 d-flex align-items-center">
                <div className="pattern-layer">
                    <div className="pattern-1 rotate-me" style={{ backgroundImage: "url(/assets/images/shape/shape-13.png)" }}></div>
                    <div className="pattern-2 float-bob-x" style={{ backgroundImage: "url(/assets/images/shape/shape-14.png)" }}></div>
                    <div className="pattern-3 float-bob-y" style={{ backgroundImage: "url(/assets/images/shape/shape-15.png)" }}></div>
                </div>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                            <div className="content_block_five">
                                <div className="content-box mr_80">
                                    <div className="shape-2" style={{ backgroundImage: "url(/assets/images/shape/shape-12.png)" }}></div>
                                    <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-11.png)" }}></div>
                                    <h3>Login</h3>
                                    <div className="form-inner">
                                        <form method="post" action="" onSubmit={handelrOnSubmit}>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" name="email" placeholder="contact@jonas.me" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" name="password" required />
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
        </div>
    );
}

