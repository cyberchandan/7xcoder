import "../../page5.css";



import erp from "../../../../assets/ProductInventoryOrders/image3.png";
import crm from "../../../../assets/ProductInventoryOrders/image4.png";
import bpm from "../../../../assets/ProductInventoryOrders/image5.png";
import a from "../../../../assets/ProductInventoryOrders/image6.png";
import dot from "../../../../assets/ProductInventoryOrders/image7.png";
import hr from "../../../../assets/ProductInventoryOrders/image8.png";
import camel from "../../../../assets/ProductInventoryOrders/image9.png";
// import finance from "../../../../assets/ecommerce-solutions/icon/Group 196 (2).png";
// import saas from "../../../../assets/ecommerce-solutions/icon/Group 238.png";
// import ppt from "../../../../assets/ecommerce-solutions/icon/Group 227 (2).png";
// import ecom from "../../../../assets/ecommerce-solutions/icon/Group 199 (2).png";
// import ssas from "../../../../assets/ecommerce-solutions/icon/Group 234.png";
// import nitro from "../../../../assets/ecommerce-solutions/icon/Group 212 (2).png";
// import api from "../../../../assets/ecommerce-solutions/icon/Group 235.png";
import { NavLink } from 'react-router-dom';

const logos = [
  erp, crm, bpm, a, dot, hr, camel,
  // finance, saas, ppt, ecom, ssas, nitro, api
];



const Page5 = () => {
  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Operational Control Systems We Architect
          <div>Strategic Efficiency Alliances</div>
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
          At 7xcoder.com, our Product, Inventory & Order Management solutions are engineered to operate seamlessly across complex commerce environments and multi-channel sales systems. We design management platforms aligned with product structures, stock workflows, and order lifecycles ensuring accuracy, real-time visibility, and scalable performance across operations.
          <br /><br />
          We specialize in building high-performance product catalogs, centralized inventory systems, automated order workflows, stock synchronization engines, and fulfillment tracking frameworks optimized for speed, security, scalability, and operational efficiency.
        </p>

        <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
      </section>
    </main>
  )
}

export default Page5
