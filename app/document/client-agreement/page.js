import Layout from "@/components/layout/Layout";

export default function ClientAgreement() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Client Agreement">
                <section className="history-section pt_100 pb_60">
                    <div className="auto-container">
                        <div className="sec-title pb_40">
                            <p>This agreement outlines the terms and conditions between you and AUT Investments LTD for the use of our trading services.</p>
                        </div>
                        <div className="row clearfix g-3">
                            <div className="col-md-12 col-sm-12">
                                <div className="inner-box clearfix">
                                    <ol>
                                        <li><strong>Introduction</strong>
                                            <p>This Client Agreement (“Agreement”) is a legally binding contract between AUT Investments LTD, a financial services company registered in Mauritius, and the client (“you” or “the client”). By opening a trading account, accessing our platform, or using any of our services, you acknowledge that you have read, understood, and agreed to the terms of this Agreement.</p>
                                            <p><strong>Registered Address:</strong><br></br>
                                                6th Floor, Ken Lee Building,<br></br>
                                                20 Edith Cavell Street,<br></br>
                                                Port-Louis, 11302, Mauritius
                                            </p>
                                        </li>
                                           
                                        
                                    </ol>
                                </div>
                            </div>     
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    );
} 