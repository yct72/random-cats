import { useState } from "react";
import Image from "./Image";

const GeneratorBtn = () => {
    const [randomNum, setRandomNum] = useState(0);
    const handleGenerator = () => {
        setRandomNum(Math.floor(Math.random() * 19) + 2);
    }
    return(
        <div>
            <Image randomNum={randomNum}/>
            <div className="btn">
                <button className="generator" onClick={handleGenerator}>CLICK ME</button>
            </div>
        </div>
    );
}

export default GeneratorBtn;