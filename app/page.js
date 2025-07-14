import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import Account from "@/components/sections/home1/Account"
import About from "@/components/sections/home1/About"
import Trading from "@/components/sections/home1/Trading"
import Trading_two from "@/components/sections/home1/Trading_two"
import Process from "@/components/sections/home1/Process"
import Award from "@/components/sections/home1/Award"
import Apps from "@/components/sections/home2/Apps"
import News from "@/components/sections/home1/News"
import Subscribe from "@/components/sections/home1/Subscribe"
import Experience from "@/components/sections/home3/Experience"

export default function Home() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Account />
                <Trading_two />
                {/* <About /> */}
                <Trading />
                <Experience />
                <Award />
                {/* <Process /> */}
                <Apps />
                <News />
                {/* <Subscribe /> */}
            </Layout>
        </div>
    )
}