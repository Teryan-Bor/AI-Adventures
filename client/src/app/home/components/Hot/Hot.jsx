import { useEffect, useState } from "react"
import "./hot.scss";
import { generateParticles } from "../../utils/generateParticles";
import { FlakeSpan } from "../Background/components/FlakeSpan";

const Hot = ({ style, className = "" }) => {
  const [hotArr, setHot] = useState([]);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
    setHot(generateParticles());
    /* eslint-enable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
  }, []);

  return (
    <div
      className={`layer_section ${className}`}
      style={{
        ...style,
      }}
    >
      {hotArr.map((item) => (
        <FlakeSpan key={item.id} className={ 'bg-brown'} item={item} />
      ))}
    </div>
  );
};

export default Hot;
