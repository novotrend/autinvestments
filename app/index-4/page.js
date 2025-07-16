import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home4/Banner"
import Clients from "@/components/sections/home4/Clients"
import Process from "@/components/sections/home4/Process"
import Trading from "@/components/sections/home4/Trading"
import Trading_two from "@/components/sections/home4/Trading_two"
import Platform from "@/components/sections/home4/Platform"
import Trading_three from "@/components/sections/home4/Trading_three"
import Funfact from "@/components/sections/home4/Funfact"
import Apps from "@/components/sections/home4/Apps"
import Working from "@/components/sections/home4/Working"
import Experience from "@/components/sections/home3/Experience"
import News from "@/components/sections/home4/News"
import Subscribe from "@/components/sections/home4/Subscribe"
export default function Home_4() {

    return (
        <div className="boxed_wrapper dark_home">
            <Layout headerStyle={4} footerStyle={2}>
                <Banner />
                <Clients />
                <Process />
                <Trading />
                <Trading_two />
                <Platform />
                <Trading_three />
                <Funfact />
                <Apps />
                <Working />
                <Experience />
                <News />
                <Subscribe />
            </Layout>
        </div>
    )
}