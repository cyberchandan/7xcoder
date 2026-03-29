import { motion } from "framer-motion";
import "../../page5.css";
// import erp from "../../../assets/bussines-software-solutions/icon/Group 196.png";

import android from "../../../../assets/MobileAppDevelopment(iOS & Android)/android.png";
import xcode from "../../../../assets/MobileAppDevelopment(iOS & Android)/xcode.png";
import flutter from "../../../../assets/MobileAppDevelopment(iOS & Android)/flutter.png";
import react_native from "../../../../assets/MobileAppDevelopment(iOS & Android)/react_native.png";
import swift from "../../../../assets/MobileAppDevelopment(iOS & Android)/swift.png";
import kotlin from "../../../../assets/MobileAppDevelopment(iOS & Android)/kotlin.png";
import unity from "../../../../assets/MobileAppDevelopment(iOS & Android)/unity.png";
import { NavLink } from 'react-router-dom';


const Page5 = () => {
  const logos = [android, xcode, flutter, react_native, swift, kotlin, unity];
  

  return (
     <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Web & App Platforms We Develop
          <div>Strategic Technology Partnerships</div>
        </h1>
      </section>
     <section className="slider-bss5">
  <div className="slider-track-bss5">
    {[...logos, ...logos].map((img, index) => (
      <img src={img} alt="creative-icon" key={index} />
    ))}
  </div>
</section>

      <section className="para-bss5">
        <p>
          At 7xcoder.com, our Mobile App Development services are
            engineered to perform seamlessly across Android and iOS devices. We
            build platform-specific, purpose-driven mobile applications aligned
            with technical requirements, user behavior, and business objectives
            ensuring consistency, performance, and scalability wherever your app
            is accessed. We specialize in developing high-quality mobile
            applications for Android and iOS, enterprise mobility solutions,
            customer-facing apps, admin and operational apps, SaaS-based mobile
            products, and integrated mobile systems. Every solution is optimized
            for performance, security, responsiveness, and user experience
            helping businesses maintain a strong, reliable, and professional
            mobile presence across devices and user environments.
        </p>
                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
      </section>
    </main>
  )
}

export default Page5
