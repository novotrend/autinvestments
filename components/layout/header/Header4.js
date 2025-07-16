import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header4({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-four"> */}
            
            <header className={`main-header header-style-four ${scroll ? "fixed-header" : ""}`}>

                {/* header lower */}
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="outer-box">
                            <figure className="logo-box">
                                <Link href="/index-4">
                                <img src="assets/images/logo-4.png" alt="/" />
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
                                <div className="btn-box"><Link href="/index-4" className="theme-btn btn-one">Open Account</Link></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* sticky header */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="outer-box">
                            <figure className="logo-box">
                                <Link href="/index-4">
                                <img src="assets/images/logo-4.png" alt="/" />
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
                                <div className="btn-box"><Link href="/index-4" className="theme-btn btn-one">Open Account</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />
            

            
        </>
    )
}
