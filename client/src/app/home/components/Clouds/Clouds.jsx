import "./clouds.scss";
import { Cloud } from "./components/Cloud";

const Clouds = ({ style, className = "" }) => {
  return (
    <div className={`layer_section ${className}`} style={{ ...style }}>
      <div className="clouds-wrap">
        <Cloud idName={"cloud1"} />
        <Cloud idName={"cloud2"} />
        <Cloud idName={"cloud3"} />
      </div>
    </div>
  );
};

export default Clouds;
