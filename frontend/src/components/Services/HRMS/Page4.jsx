import "../page4.css";
import { motion } from "framer-motion";
import img1 from "../../../assets/HRMS/icon/a.png";
import img2 from "../../../assets/HRMS/icon/b.png";
import img3 from "../../../assets/HRMS/icon/c.png";
import img4 from "../../../assets/HRMS/icon/d.png";
import img5 from "../../../assets/HRMS/icon/e.png";
import img6 from "../../../assets/HRMS/icon/f.png";
import img7 from "../../../assets/HRMS/icon/g.png";
import img8 from "../../../assets/HRMS/icon/h.png";
import arrow from "../../../assets/HRMS/icon/arrow1.png";

const expertiseList = [
  {
    title: "Employee Lifecycle Management",
    description:
      "Manage the complete employee journey from recruitment and onboarding to performance tracking and exit processes. Ensure a smooth, structured, and consistent experience at every stage.",
    img: img1,
  },
  {
    title: "Payroll & Compensation Systems",
    description:
      "Automate payroll processing with accuracy and compliance. Handle salaries, deductions, bonuses, and payslips seamlessly while reducing manual errors.",
    img: img2,
  },
  {
    title: "Communication & Engagement Tools",
    description:
      "Improve internal communication and employee engagement through centralized platforms that keep teams connected, informed, and motivated.",
    img: img3,
  },
  {
    title: "Workforce Analytics & Insights",
    description:
      "Leverage data driven insights to track attendance, productivity, and performance. Make smarter HR decisions with real time reports and analytics.",
    img: img4,
  },
  {
    title: "HR System Integration & Automation",
    description:
      "Streamline HR operations by integrating multiple systems into one unified platform. Automate repetitive tasks to improve efficiency and save time.",
    img: img5,
  },
  {
    title: " Scalable HR Architecture",
    description:
      "Build flexible HR systems that grow with your business. Adapt easily to team expansion, new roles, and evolving organizational needs.",
    img: img6,
  },
  {
    title: "HR Policies & Compliance Management",
    description:
      "Maintain structured HR policies, ensure legal compliance, and standardize processes across the organization for consistency and control.",
    img: img7,
  },
  {
    title: "Ongoing HR Support & Optimization",
    description:
      "Continuously monitor and refine HR processes to improve efficiency, enhance employee experience, and support long term business growth.",
    img: img8,
  },
];

const Page4 = () => {
  return (
    <section className="business-software-solution4">

      <motion.p
        className="blue-bss4"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        OUR SPECIALIZATION
      </motion.p>

      <motion.div
        className="divider-bss4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      ></motion.div>

      <motion.h2
        className="h2-bss4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        What We Have
        <span> to Offer</span>
      </motion.h2>

      <div className="cards-bss4">
        {expertiseList.map((item, index) => (
          <motion.div
            className={`feature-card-bss4-${index} feature-card-bss4`}
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: false, amount: 0.2 }}
          >

            <motion.div
              className="icon-box-bss4"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img src={item.img} alt={item.title} />
            </motion.div>

            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <div className="read-more-wrapper-bss4">
              <button className="read-more-btn-bss4">
                Read More
                <img src={arrow} alt="arrow" className="read-more-icon-bss4" />
              </button>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Page4;
