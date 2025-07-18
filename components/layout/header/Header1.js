import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"


export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>

            {/* main header */}
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>

                <div className="header-top">
                    <div className="large-container">
                        <div className="top-inner">
                            <div className="support-box">
                                <div className="icon-box"><i className="icon-07"></i></div>
                                <Link href="tel:+230-XXXX-XXXX">+230-XXXX-XXXX</Link>
                            </div>
                            <div className="option-block">
                                <Link href="/open-account" className="theme-btn btn-one mr_10">Open Account</Link>
                                <Link href="/login" className="theme-btn btn-two">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>


                {/* header lower */}
                <div className="header-lower">
                    <div className="large-container">
                        <div className="outer-box">
                            <figure className="logo-box">
                                <Link href="/">
                                    <img src="/assets/images/logo.svg" alt="" />
                                </Link></figure>
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
                                <div className="search-btn ml_30"><div className="search-toggler" onClick={handlePopup}><i className="icon-10"></i></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* sticky header */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="large-container">
                        <div className="outer-box">
                            <figure className="logo-box"><Link href="/"><img src="/assets/images/logo.svg" alt="" /></Link></figure>
                            <div className="menu-area clearfix">
                                <nav className="main-menu clearfix">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                                <div className="search-btn ml_30"><div className="search-toggler" onClick={handlePopup}><i className="icon-10"></i></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
