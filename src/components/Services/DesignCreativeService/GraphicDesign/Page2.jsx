import frame1 from "../../../../assets/GraphicDesign/images/Frame 120.png";
import frame2 from "../../../../assets/GraphicDesign/images/Frame 121.png";
import frame3 from "../../../../assets/GraphicDesign/images/Frame 122.png";
import frame4 from "../../../../assets/GraphicDesign/images/Frame 123.png";
import frame5 from "../../../../assets/GraphicDesign/images/Frame 125.png";
import frame6 from "../../../../assets/GraphicDesign/images/Frame 124.png";
import "../../Page2.css";

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">
        <div className="benefites-2">BENEFITS</div>

        <div className="sub-title-2">
          Benefits of Graphic Design with 7xcoder.com
        </div>

        <div className="benefites-containr-2">
          {/* Column 1 */}
          <div className="column-2 custom-border-2 right-pad-30">
            <div>
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">
                Strategic Brand & Visual Architecture
              </h3>
              <p className="benefit-text">
                We align visual design with clear brand objectives, audience
                insights, and market positioning to create structured, scalable
                design systems that strengthen brand identity, recognition, and
                long term relevance.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Conversion Focused Design Solutions
              </h3>
              <p className="benefit-text">
                We design with intent, creating visuals that guide perception
                and influence action turning brand interactions into engagement,
                leads, and meaningful business results through strategically
                crafted layouts and messaging.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
                Performance Driven Visual Experience
              </h3>
              <p className="benefit-text">
                Our design approach prioritizes clarity, hierarchy, and visual impact, delivering intuitive designs that enhance user attention, improve brand recall, and support measurable marketing outcomes across platforms.

              </p>
            </div>

            <div>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Data Informed Design Optimization
              </h3>
              <p className="benefit-text">
                Design decisions are refined using audience behavior insights,
                performance feedback, and campaign data ensuring smarter
                creative enhancements, improved effectiveness, and sustained
                visual performance.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="column-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
                Consistent Brand & Experience Control
              </h3>
              <p className="benefit-text">
                From brand identity to marketing creatives, we maintain visual
                and experiential consistency across all touchpoints protecting
                brand integrity while delivering cohesive, professional, and
                trustworthy visual communication.
              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">
                Scalable Brand Growth & Design Reliability
              </h3>
              <p className="benefit-text">
                Our scalable design systems and asset frameworks ensure your
                brand evolves smoothly across platforms, campaigns, and markets
                maintaining consistency, efficiency, and long term brand value
                as you grow.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="second-container-2">
          <p className="second-text">
            Graphic Design with 7xcoder.com is built for organizations that
            demand clarity, consistency, and measurable brand performance. We
            move beyond decorative visuals to create strategic, future ready
            visual systems that strengthen brand presence, unify communication,
            and support long term business growth. Our approach integrates brand
            strategy, audience insight, and precision led creative execution to
            ensure every visual element, layout, and design asset contributes to
            brand recognition, engagement, and commercial impact. Through
            scalable design frameworks, optimized visual experiences, and
            continuous creative refinement, we transform graphic design into a
            powerful brand asset that drives attention, trust, and measurable
            business outcomes.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul>
            <li className="second-text">
              Strategic Brand & Visual Architecture Design scalable, cohesive
              visual systems aligned with brand objectives and long term market
              positioning
            </li>
            <li className="second-text">
              Performance Led Visual Design Clarity, hierarchy, and visual
              impact optimized to drive engagement, recognition, and measurable
              brand ROI
            </li>
            <li className="second-text">
              Consistent Brand & Experience Control Unified visual identity,
              design language, and creative execution across all brand
              touchpoints
            </li>
            <li className="second-text">
              Conversion Focused Visual Communication Transform brand
              interactions into attention, engagement, and meaningful business
              outcomes
            </li>
            <li className="second-text">
              Scalable & Future Ready Design Systems Build design frameworks
              that scale seamlessly while maintaining consistency, quality, and
              brand integrity
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page2;
