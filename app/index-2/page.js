import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Clients from "@/components/sections/home1/Clients"
import About from "@/components/sections/home2/About"
import Trading from "@/components/sections/home2/Trading"
import Trading_two from "@/components/sections/home2/Trading_two"
import Funfact from "@/components/sections/home2/Funfact"
import Account from "@/components/sections/home2/Account"
import History from "@/components/sections/home2/History"
import Award from "@/components/sections/home1/Award"
import Apps from "@/components/sections/home2/Apps"
import News from "@/components/sections/home2/News"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function Home_2() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={2} footerStyle={1}>
                <Banner />
                <Clients />
                <About />
                <Trading />
                <Trading_two />
                <Funfact />
                <Account />
                <History />
                <Award />
                <Apps />
                <News />
                <Subscribe />
            </Layout>
        </div>
    )
}