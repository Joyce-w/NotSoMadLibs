import React, {useState} from "react"
import MadLibForm from "./MadLibForm"

const MadLib = () => {

    const [answers, setAnswers] = useState([]);

    const formData = (data) => {
        setAnswers(answers => [...answers, data])
    }

    console.log(answers)
    return (
        <>
            <h1>MadLib</h1>
            <MadLibForm formData={ formData }/>
        </>
    )
}

export default MadLib;