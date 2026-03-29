import frame1 from "../../../../assets/Youtube_Thumbnail&Video/images/image1.png";
import frame3 from "../../../../assets/Youtube_Thumbnail&Video/images/image2.png";
import frame5 from "../../../../assets/Youtube_Thumbnail&Video/images/image3.png";
import frame2 from "../../../../assets/Youtube_Thumbnail&Video/images/image4.png";
import frame4 from "../../../../assets/Youtube_Thumbnail&Video/images/image5.png";
import frame6 from "../../../../assets/Youtube_Thumbnail&Video/images/image6.png";
import "../../page2.css";

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">
        <div className="benefites-2">BENEFITS</div>

        <div className="sub-title-2">
          Benefits of YouTube Thumbnails & Video with 7xcoder.com
        </div>

        <div className="benefites-containr-2">
          <div className="column-2 custom-border-2 right-pad-30">
            <div className="e-commerce-services-benefits-div">
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">Strategic Channel Positioning</h3>
              <p className="benefit-text">
                We align thumbnails and video strategy with clear channel goals,
                viewer intent, and competitive insights ensuring every visual
                strengthens discoverability, click-through rates, and long-term
                channel performance.
              </p>
            </div>

            <div className="e-commerce-services-benefits-div">
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Qualified Viewership & Conversion Impact
              </h3>
              <p className="benefit-text">
                We design visuals and video structures that convert impressions
                into qualified viewers, subscribers, and measurable engagement
                supporting predictable channel growth.
              </p>
            </div>
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div className="e-commerce-services-benefits-div">
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
                Performance Driven Views & Engagement
              </h3>
              <p className="benefit-text">
                Our approach prioritizes high-intent clicks and sustained watch
                time over vanity metrics, helping your channel consistently
                attract engaged viewers with stronger retention and growth
                potential.
              </p>
            </div>

            <div className="e-commerce-services-benefits-div">
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">
                Data Backed Video Optimization & Intelligence
              </h3>
              <p className="benefit-text">
                Every thumbnail and video decision is guided by performance
                data, CTR insights, retention metrics, and audience behavior
                enabling smarter optimization and sustained results.
              </p>
            </div>
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <div className="e-commerce-services-benefits-div">
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Consistent Visual Identity & Content Authority
              </h3>
              <p className="benefit-text">
                From thumbnails to long-form video, we maintain clarity,
                consistency, and brand credibility across all YouTube
                touchpoints building a recognizable, trusted channel presence.
              </p>
            </div>

            <div className="e-commerce-services-benefits-div">
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
                Scalable Growth with Long Term Channel ROI
              </h3>
              <p className="benefit-text">
                Through disciplined visual strategy, content refinement, and
                structural optimization, we ensure scalable channel growth while
                maintaining efficiency, relevance, and long-term performance.
              </p>
            </div>
          </div>
        </div>

        <div className="second-container-2">
          <p className="second-text">
            YouTube Thumbnails & Video with 7xcoder.com are built for
            brands that demand clarity, consistency, and measurable channel
            performance. We move beyond basic visuals and editing to engineer
            structured, intent-led visual systems that strengthen click through
            rates, improve viewer quality, and deliver predictable audience
            growth. Our approach integrates viewer-intent analysis, thumbnail
            psychology, retention focused video structuring, and disciplined
            performance optimization to ensure every thumbnail, frame, and video
            asset contributes to long term channel value. Through click driven
            visual strategy, platform aligned video execution, and continuous
            performance refinement, we transform visibility into qualified
            viewership, meaningful engagement, and sustainable channel impact.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{ marginLeft: "40px", width: "100%" }}>
            <li className="second-text">
              Target high intent viewers with precision through intent-led
              thumbnail strategy and content aligned with audience curiosity and
              behavior.
            </li>
            <li className="second-text">
              Data-driven execution using CTR and watch time insights to drive
              measurable YouTube growth.
            </li>
            <li className="second-text">
              Controlled Visual Identity & Channel Authority Maintain visual
              consistency, message clarity, & brand integrity across thumbnails,
              videos, all channel touchpoints.
            </li>
            <li className="second-text">
              Qualified Viewership & Engagement Impact Convert impressions into
              high quality viewers, stronger retention, subscribers, &
              measurable engagement outcomes.
            </li>
            <li className="second-text">
              Scalable & Sustainable Channel Growth Optimize visual systems,
              content formats, and performance frameworks to drive long term,
              cost efficient YouTube growth.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page2;
