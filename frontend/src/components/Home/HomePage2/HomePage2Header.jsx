import "./HomePage2Header.css";

import strategicIcon from "../../../assets/icons/StrategicThinking.png";
import digitalIcon from "../../../assets/icons/Digitalexcellence.png";
import brandIcon from "../../../assets/icons/BandGrowth.png";
import creativeIcon from "../../../assets/icons/CreativeIntelligence.png";
import smartIcon from "../../../assets/icons/SmartExecution.png";
import future from "../../../assets/icons/future.png";
import scalable from "../../../assets/icons/scalableGrowth.png";
import client from "../../../assets/icons/clientFirst.png";
import market from "../../../assets/icons/marketDriven.png";
import result from "../../../assets/icons/resultFocused.png";

const HomePage2Header = () => {

  const items = [
    { icon: strategicIcon, label: "Strategic Thinking" },
    { icon: digitalIcon, label: "Digital Excellence" },
    { icon: brandIcon, label: "Brand Growth" },
    { icon: creativeIcon, label: "Creative Intelligence" },
    { icon: smartIcon, label: "Smart Execution" },
    { icon : result, label : "Result Focused"},
    { icon : scalable, label :"Scalable Growth"},
    { icon : client, label : "Client First"},
    { icon : market, label : "Market Driven"},
    { icon : future, label : "Future Ready"}
  ];

  return (
    
    <header className="header-home2">
      <div className="scroll-wrapper-home2">
        <div className="scroll-track-home2">
          {[...items, ...items].map((item, index) => (
            <div className="header-item-home2" key={index}>
              <img src={item.icon} alt={item.label} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HomePage2Header;
