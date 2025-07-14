import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-three"> */}
            
            <header className={`main-header header-style-three ${scroll ? "fixed-header" : ""}`}>
                <div className="header-top">
                    <div className="outer-container">
                        <div className="top-inner">
                            <div className="option-block">
                                <div className="support-box">
                                    <div className="icon-box"><i className="icon-07"></i></div>
                                    <a href="tel:912345678">91 2345 678</a>
                                </div>
                            </div>
                            <ul className="info-list clearfix">
                                <li><i className="icon-28"></i><span>£20 Discount</span> & Get 24/7 Free Assistance</li>
                                <li><i className="icon-27"></i>Free Trading Guides</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* header lower */}
                <div className="header-lower">
                    <div className="outer-container">
                        <div className="outer-box">
                            <figure className="logo-box">
                                <Link href="/index-3">
                                <img src="assets/images/logo.png" alt="/" />
                                </Link>
                            </figure>
                            <div className="menu-area clearfix">
                                {/* mobile navigation toggler */}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                </div>
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                            </div>
                            <div className="menu-right-content">
                                <div className="search-btn mr_25"><div className="search-toggler" onClick={handlePopup}><i className="icon-10"></i></div></div>
                                <div className="btn-box"><Link href="/index-3" className="theme-btn btn-one">Open Account</Link></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* sticky header */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="outer-container">
                        <div className="outer-box">
                            <figure className="logo-box">
                                <Link href="/index-2">
                                <img src="assets/images/logo.png" alt="/" />
                                </Link>
                            </figure>
                            <div className="menu-area clearfix">
                                {/* mobile navigation toggler */}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                </div>
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                            </div>
                            <div className="menu-right-content">
                                <div className="search-btn mr_25"><div className="search-toggler" onClick={handlePopup}><i className="icon-10"></i></div></div>
                                <div className="btn-box"><Link href="/index-3" className="theme-btn btn-one">Open Account</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />
            

            
        </>
    )
}
