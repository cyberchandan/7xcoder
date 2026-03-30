import React from 'react'


import "../../page1.css";
import digimart from '../../../../assets/Analytics&ROI/images/hero.png';





const Page1 = () => {
  return (
    <div className='service_1_root'>


            <main className='hero-box-service1'>
                <div className="title-box-service1" style={{width:"100%"}}>
                    <h1 className="title2-service1" style={{width:"100%"}}>Analytics & ROI Tracking</h1>
                    <p className="sub-title-service1" style={{width:"100%"}}>Advanced Analytics & ROI Tracking. Engineered for Performance.</p>
                    <p className="service-para1-service1" style={{width:"100%"}}>At 7xcoder.com, Analytics & ROI Tracking goes beyond reporting to support smarter decision making. We build data driven analytics frameworks that deliver clear performance visibility, improve marketing efficiency, and generate measurable business insights across digital channels.
Our performance led approach ensures every metric and dashboard helps track impact, guide decisions, and support sustainable growth and ROI.</p>
                </div>
                <div className="logo-box2-service1">
                    <img src={digimart} alt="Image" />
                    <div>
                        <div className="social-media-service1">
                            <p>HOW ANALYTICS & ROI TRACKING WORKS<br /> <span>HOW DATA-DRIVEN ANALYTICS & ROI TRACKING WORKS</span></p>
                        </div>
                        <div className="content-box-service1">
                            <div className="content-service1">
                                <h2><span>01.</span>  Strategic Measurement Framework</h2>
                                <p>We define clear business and performance objectives, identify key KPIs, and design a structured analytics framework aligned with growth, efficiency, and ROI goals.</p>
                            </div>
                            <div className="content-service1">
                                <h2><span>02.</span> Data Integration & Performance Visibility</h2>
                                <p>We integrate data across platforms and channels to build accurate dashboards and reporting systems delivering clear, real time visibility into marketing performance and outcomes.</p>
                            </div>
                            <div className="content-service1">
                                <h2><span>03.</span>   Continuous Optimization & ROI Control</h2>
                                <p>We continuously monitor data, analyze trends, and refine metrics and insights to improve efficiency, scalability, and sustained return on investment.</p>
                            </div>
                        </div>
                        <p>With 7xcoder.com, Analytics & ROI Tracking delivers more than reports it drives clarity, accountability, and measurable business impact. Through structured measurement frameworks, precise performance analysis, & data driven optimization, we help brands understand what’s working, improve efficiency, and convert insights into sustained business value.</p>
                    </div>
                </div>

            </main>
        </div>
  )
}

export default Page1
