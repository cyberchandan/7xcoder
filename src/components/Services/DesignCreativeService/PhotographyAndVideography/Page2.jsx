import frame1 from "../../../../assets/PhotographyAndVideography/images/Frame 120.png";
import frame2 from "../../../../assets/PhotographyAndVideography/images/Frame 121.png";
import frame3 from "../../../../assets/PhotographyAndVideography/images/Frame 122.png";
import frame4 from "../../../../assets/PhotographyAndVideography/images/Frame 123.png";
import frame5 from "../../../../assets/PhotographyAndVideography/images/Frame 125.png";
import frame6 from "../../../../assets/PhotographyAndVideography/images/Frame 124.png";
import "../../page2.css";

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">
        <div className="benefites-2">BENEFITS</div>

        <div className="sub-title-2">
          Benefits of Photography & Videography with 7xcoder.com
        </div>

        <div className="benefites-containr-2">
          {/* Column 1 */}
          <div className="column-2 custom-border-2 right-pad-30">
            <div>
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">
                Strategic Visual Brand Positioning
              </h3>
              <p className="benefit-text">
                We align photography and videography with clear brand
                objectives, audience intent, and campaign goals ensuring every
                visual asset strengthens brand presence, relevance, and impact.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Qualified Audience Interest & Conversion Support
              </h3>
              <p className="benefit-text">
                We create visuals that guide attention, build trust, and support
                conversions turning views into qualified interest and measurable
                business outcomes.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
                Performance Driven Visual Engagement
              </h3>
              <p className="benefit-text">
                Our visuals are designed to capture attention and drive
                meaningful engagement rather than vanity impressions helping
                brands connect with the right audience through compelling
                imagery and video.
              </p>
            </div>

            <div>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Data-Backed Visual Optimization & Intelligence
              </h3>
              <p className="benefit-text">
                Every shoot and edit is informed by platform insights,
                performance feedback, and usage context enabling smarter visual
                decisions and continuous improvement.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="column-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
                Consistent Brand Look & Visual Experience
              </h3>
              <p className="benefit-text">
                From product shoots to brand films, we maintain strong visual consistency across all assets, protecting brand identity while delivering a seamless and professional visual experience.

              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">
                Scalable Growth with Cost Efficient Visual Systems
              </h3>
              <p className="benefit-text">
                Through structured workflows, reusable assets, and optimized
                production processes, we ensure scalable visual growth while
                maintaining efficiency, quality, and long-term brand value.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="second-container-2">
          <p className="second-text">
            Photography & Videography with 7xcoder.com are built for brands
            that demand precision, consistency, and measurable visual impact. We
            move beyond basic shoots to engineer structured, intent driven
            visual ecosystems that strengthen brand positioning, elevate
            perception, and deliver predictable engagement outcomes. Our
            approach integrates audience insight, visual intelligence, and
            disciplined creative optimization to ensure every image and video
            contributes to long-term brand and commercial value. Through
            purpose-led visual storytelling, platform specific production
            strategies, and continuous refinement, we transform visual presence
            into qualified attention, stronger engagement efficiency, and
            sustainable brand impact
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul>
            <li className="second-text">
              Reach the right audience with purpose driven photography and
              videography that capture attention and shape perception.
            </li>
            <li className="second-text">
              ROI-focused visuals refined through platform insights to drive
              measurable engagement and brand performance.
            </li>
            <li className="second-text">
              Controlled Brand & Visual Messaging Maintain consistent brand
              identity, storytelling, and visual integrity across all
              photography and video touchpoints.
            </li>
            <li className="second-text">
              Qualified Engagement & Conversion Support Convert visual attention
              into high quality engagement, trust, measurable business outcomes
              through crafted visuals.
            </li>
            <li className="second-text">
              Scalable & Cost Efficient Visual Growth Optimize production
              workflows, asset usage, frameworks to achieve sustainable visual
              growth with long term brand value.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page2;
