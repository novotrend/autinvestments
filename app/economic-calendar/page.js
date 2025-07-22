import Layout from "@/components/layout/Layout"
import EconomicCalendarWidget from "@/components/sections/home1/EconomicCalendarWidget"
export default function EconomicCalendarPage() {


    return (
        <>
            <div className="boxed_wrapper">
                <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Economic Calendar">

                    <section className="economic-calendar-section mb_100 pt_60">
                        <div className="auto-container">
                            <div className="sec-title pb_20 d-none d-lg-block">
                                <span className="sub-title mb_14">INFO</span>
                                <h2 className="mb-2">Economic Calendar</h2>
                            </div>
                            <EconomicCalendarWidget />
                        </div>
                    </section>

                </Layout>
            </div>
        </>
    )
} 