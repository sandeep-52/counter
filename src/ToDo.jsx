import React from "react";
import { useState } from "react/cjs/react.development";


const ToDo = () => {

    const [num, setNum] = useState(5);
    const incNum = () =>{
        setNum(num+1)
    };
    const decNum = () => {
        if(num > 0){
        setNum(num-1)
        }else{
            alert('sorry, Zero limit Reached')
            setNum(0);
        }
    }
return(
    <>
        <div className="main_div">
            <div className="center_div">
                <h1> {num}</h1>
                <div className="btn_div">
                    <button onClick={incNum} className="btn_green">incNum
                     </button>
                    <button onClick={decNum} className="btn_red"> decNum </button>
                </div>
            </div>
        </div>
    </>
);

};
export default ToDo;