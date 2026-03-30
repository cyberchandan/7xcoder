import frame1 from '../../../../assets/branding-and-strategy/images/Frame 120.png'
import frame3 from '../../../../assets/branding-and-strategy/images/Frame 121.png'
import frame5 from '../../../../assets/branding-and-strategy/images/Frame 122.png'
import frame2 from '../../../../assets/branding-and-strategy/images/Frame 123.png'
import frame4 from '../../../../assets/branding-and-strategy/images/Frame 124.png'
import frame6 from '../../../../assets/branding-and-strategy/images/Frame 125.png'
import '../../page2.css'


const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">

        <div className="benefites-2">
          BENEFITS
        </div>

        <div className="sub-title-2">
          Benefits of UI-UX Design with 7xcoder.com
        </div>

        <div className="benefites-containr-2">

          <div className="column-2 custom-border-2 right-pad-30">
            <div className='e-commerce-services-benefits-div'>
              <img src={frame1} alt="Icon" className="icon" style={{
    height: "62px",
    width: "62px",
    backgroundColor: "#FFFFFF"
  }} />
              <h3 className="benefit-title">
                Strategic Experience Positioning
              </h3>
              <p className="benefit-text">
            We align UI-UX design with clear business objectives, user intent, and product goals ensuring every interaction strengthens usability, brand perception, and overall experience clarity.
                </p>
            </div>

            <div className='e-commerce-services-benefits-div'>
              <img src={frame2} alt="Icon" style={{
    height: "62px",
    width: "62px",
    backgroundColor: "#FFFFFF"
  }} />
              <h3 className="benefit-title">
              Performance Driven User Engagement
              </h3>
              <p className="benefit-text">
                Our UI-UX strategies focus on meaningful user actions rather than surface level visuals, helping brands guide users smoothly toward engagement, retention, and conversion.
                </p>
            </div>
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div className='e-commerce-services-benefits-div'>
              <img src={frame3} alt="Icon" style={{
    height: "62px",
    width: "62px",
    backgroundColor: "#FFFFFF"
  }} />
              <h3 className="benefit-title">
              Consistent Brand & Interface Control
              </h3>
              <p className="benefit-text">
                From visual language to interaction patterns, we maintain consistency across all digital touchpoints protecting brand identity while delivering a seamless and intuitive user experience.
                </p>
            </div>

            <div className='e-commerce-services-benefits-div'>
              <img src={frame4} alt="Icon" style={{
    height: "62px",
    width: "62px",
    backgroundColor: "#FFFFFF"
  }}/>
              <h3 className="benefit-title">
                Qualified User Actions & Conversion Flow
              </h3>
              <p className="benefit-text">
              We design conversion focused user journeys that turn interactions into outcomes improving task completion, reducing friction, and driving measurable product success.
                </p>
            </div>
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <div className='e-commerce-services-benefits-div'>
              <img src={frame5} alt="Icon" style={{
    height: "62px",
    width: "62px",
    backgroundColor: "#FFFFFF"
  }}/>
              <h3 className="benefit-title">
             Data Backed Design Optimization
              </h3>
              <p className="benefit-text">
               Every design decision is guided by research, usability insights, and performance data enabling continuous improvement, smarter iterations, and scalable experience growth.
               </p>
            </div>

            <div className='e-commerce-services-benefits-div'>
              <img src={frame6} alt="Icon" style={{
    height: "62px",
    width: "62px",
    backgroundColor: "#FFFFFF"
  }}/>
              <h3 className="benefit-title">
              Scalable Design Systems & Efficiency
              </h3>
              <p className="benefit-text">
               Through structured design systems, component libraries, and usability frameworks, we ensure scalable growth while maintaining efficiency, clarity, and long term product stability.
               </p>
            </div>
          </div>

        </div>

        <div className="second-container-2">

            
              <p className="second-text">
                UI-UX Design with 7xcoder.com is built for brands that demand clarity, usability, and measurable experience performance. We move beyond surface level visuals to engineer structured, user centric experience ecosystems that strengthen product positioning, reduce friction, and drive predictable engagement and growth. Our approach integrates deep user research, behavioral insights, and disciplined design thinking to ensure every interface, interaction, and journey contributes to 
long-term product value. Through intent driven user flows, platform specific experience strategies, and continuous usability refinement, we transform digital experiences into intuitive interactions, qualified user actions, and sustainable product success.<br /><br />
                <span className="second-text">Key Highlights</span>
              </p>
            
          <ul style={{marginLeft:'40px',width:'100%'}}>
            <li className="second-text">Strategic User Intent Alignment Design user journeys with precision by aligning interfaces to real user intent, behavior, and expectations.</li>
            <li className="second-text">Performance-Led Experience Growth Data driven design decisions focused on usability, engagement metrics, and continuous experience optimization.</li>
            <li className="second-text">Consistent Brand Experience Maintain visual consistency, interaction patterns, and brand integrity across all digital touchpoints.</li>
            <li className="second-text">Qualified User Actions & Conversions Transform intuitive design into meaningful actions higher engagement, better retention, and measurable outcomes.</li>
            <li className="second-text">Scalable & Future Ready Design Systems Build flexible UI systems and UX frameworks that scale efficiently while supporting long term product growth.</li>
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Page2
