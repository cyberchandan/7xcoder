import MGA_Service1 from "./MGA_Service1"
import MGA_Service2 from "./MGA_Service2"
import MGA_Service3 from "./MGA_Service3"
import Page4 from "../Page4"
import MGA_Service5 from "./MGA_Service5"

const MotionGraphicsAnimation = () => {
  return (
    <div>
        {/* page-1 */}
        <MGA_Service1/>
        {/* page-2 */}
        <MGA_Service2/>
        {/* page-3 */}
        <MGA_Service3/>
        {/* page-4 */}
        <Page4/>
        {/* page-5 */}
        <MGA_Service5/>
    </div>
  )
}

export default MotionGraphicsAnimation
