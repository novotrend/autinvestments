import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>

            <section className="page-title centred pt_0 pb_0 funfact-section subscribe-section">
                <div className="inner-container rounded-0 border-0">
                    <div className="shape" style={{ backgroundImage: 'url(/assets/images/shape/shape-5e.png)' }}></div>
                    <div className="content-box">
                        <h1>{breadcrumbTitle}</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link href="/">Home</Link></li>
                            <li>{breadcrumbTitle}</li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}
