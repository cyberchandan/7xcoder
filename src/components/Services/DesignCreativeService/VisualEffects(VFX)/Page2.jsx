import frame1 from "../../../../assets/VisualEffects(VFX)/images/Frame 120.png";
import frame2 from "../../../../assets/VisualEffects(VFX)/images/Frame 121.png";
import frame3 from "../../../../assets/VisualEffects(VFX)/images/Frame 122.png";
import frame4 from "../../../../assets/VisualEffects(VFX)/images/Frame 123.png";
import frame5 from "../../../../assets/VisualEffects(VFX)/images/Frame 125.png";
import frame6 from "../../../../assets/VisualEffects(VFX)/images/Frame 124.png";
import "../../page2.css";

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">
        <div className="benefites-2">BENEFITS</div>

        <div className="sub-title-2">
          Benefits of Visual Effects (VFX) with 7xcoder.com
        </div>

        <div className="benefites-containr-2">
          {/* Column 1 */}
          <div className="column-2 custom-border-2 right-pad-30">
            <div>
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">
                Strategic Visual Impact Planning
              </h3>
              <p className="benefit-text">
                We align VFX execution with clear creative objectives, narrative
                intent, and brand vision ensuring every visual effect enhances
                storytelling, realism, and overall cinematic impact.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Credibility Through Visual Realism & Detail
              </h3>
              <p className="benefit-text">
                We design precision-led visual effects that enhance realism and
                believability, strengthening audience trust and elevating
                production quality to professional, cinematic standards.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
                High-Impact Visual Influence & Immersion
              </h3>
              <p className="benefit-text">
                Our VFX strategies focus on elevating audience immersion and emotional connection rather than surface-level effects, helping content leave a lasting impression across films, ads, and digital platforms.
              </p>
            </div>

            <div>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Data-Informed Quality & Performance Refinement
              </h3>
              <p className="benefit-text">
                Every VFX project is guided by technical reviews, performance
                benchmarks, and quality checks enabling accurate execution,
                faster refinement, and reliable visual output.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="column-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
                Consistent Visual Narrative & Brand Control
              </h3>
              <p className="benefit-text">
                From compositing and color to motion and realism, we maintain
                visual consistency across scenes and assets protecting narrative
                continuity and reinforcing a cohesive visual identity.
              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">
                Scalable VFX Execution & Long Term Visual Value
              </h3>
              <p className="benefit-text">
                Through disciplined workflows, modular asset pipelines, and
                optimized production processes, we ensure scalable VFX delivery
                while maintaining efficiency, quality, and long-term visual
                value.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="second-container-2">
          <p className="second-text">
            Visual Effects (VFX) with 7xcoder.com are built for brands and
            creators that demand visual credibility, narrative control, and
            measurable cinematic impact. We move beyond basic post-production to
            engineer structured, high impact VFX ecosystems that elevate visual
            quality, enhance realism, and strengthen storytelling across films,
            ads, and digital content Our approach integrates strategic visual
            planning, technical precision, and disciplined quality optimization
            to ensure every frame, effect, and visual layer contributes to
            lasting visual value. Through proactive quality control, platform
            specific VFX execution, and continuous refinement, we transform
            visuals into immersive experiences that drive attention, emotional
            connection, and sustainable brand impact.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul>
            <li className="second-text">
              Strategic Visual Impact Control Proactively shape visual
              storytelling by executing high-impact VFX with precision,
              relevance, and creative intent.
            </li>
            <li className="second-text">
              Cinematic Quality Led Visual Growth Data informed VFX strategies
              focused on long-term visual credibility, realism, and production
              value.
            </li>
            <li className="second-text">
              Controlled Visual Narrative & Continuity Maintain visual
              consistency, narrative integrity, and stylistic control across
              scenes, shots, and platforms.
            </li>
            <li className="second-text">
              Transform visual details, effects, and enhancements into
              believable, high-quality visuals that strengthen audience trust
              and cinematic authority.
            </li>
            <li className="second-text">
              Scalable & Sustainable VFX Execution Optimize workflows, asset
              pipelines, quality control to ensure efficient, scalable VFX
              production with long term visual value.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page2;
