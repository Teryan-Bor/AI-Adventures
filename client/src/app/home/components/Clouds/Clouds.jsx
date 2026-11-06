import "./clouds.scss";
import { Cloud } from "./components/Cloud";

const Clouds = () => {
  return (
    <div className="layer_section clouds">
      <div className="clouds-wrap">
        <Cloud idName={"cloud1"} />
        <Cloud idName={"cloud2"} />
        <Cloud idName={"cloud3"} />
      </div>
    </div>
  )
}

export default Clouds