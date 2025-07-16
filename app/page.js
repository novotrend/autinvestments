import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import Account from "@/components/sections/home1/Account"
import Trading from "@/components/sections/home1/Trading"
import Trading_two from "@/components/sections/home1/Trading_two"
import Award from "@/components/sections/home1/Award"
import Apps from "@/components/sections/home1/Apps"
import News from "@/components/sections/home1/News"
import Experience from "@/components/sections/home1/Experience"

export default function Home() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Account />
                <Trading_two />
                <Trading />
                <Experience />
                <Award />
                <Apps />
                <News />
            </Layout>
        </div>
    )
}