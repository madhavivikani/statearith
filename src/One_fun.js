import { useState } from "react";

function One_fun() {

    let [val, setval] = useState("")
    let [val1, setval1] = useState("")
    let [ans, setans] = useState("")


    const btnsum = () => {
        setans(parseInt(val) + parseInt(val1))
    }
    const btnsub = () => {
        setans(parseInt(val) - parseInt(val))
    }
    const btnmul = () => {
        setans(parseInt(val) * parseInt(val))
    }
    const btndiv = () => {
        setans(parseInt(val) / parseInt(val))
    }

    return (
        <div>
            <input type='text' onChange={(e) => { setval(e.target.value) }}></input><br></br>
            <input type='text' onChange={(e) => { setval1(e.target.value) }}></input><br></br>

            <div>
                <input type='button' value={"SUM"} onClick={btnsum}></input>
                <input type='button' value={"SUB"} onClick={btnsub}></input>
                <input type='button' value={"MUL"} onClick={btnmul}></input>
                <input type='button' value={"DIV"} onClick={btndiv}></input>
            </div>

            <input type='text' value={ans}></input>

        </div>
    );
}
export default One_fun;