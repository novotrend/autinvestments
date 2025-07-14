import Layout from "@/components/layout/Layout"
import Trading from "@/components/sections/home5/Trading"
import Banner from "@/components/sections/home5/Banner"
import Process from "@/components/sections/home5/Process"
import Trading_two from "@/components/sections/home5/Trading_two"
import About from "@/components/sections/home5/About"
import Account from "@/components/sections/home5/Account"
import Apps from "@/components/sections/home2/Apps"
import Award from "@/components/sections/home1/Award"
import Experience from "@/components/sections/home5/Experience"
import Testimonial from "@/components/sections/home5/Testimonial"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function Home_5() {

    return (
        <div className="boxed_wrapper home_5">
            <Layout headerStyle={5} footerStyle={1}>
                <Trading />
                <Banner />
                <Process />
                <Trading_two />
                <About />
                <Account />
                <Apps />
                <Award />
                <Experience />
                <Testimonial />
                <Subscribe />
            </Layout>
        </div>
    )
}