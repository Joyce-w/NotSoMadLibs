import React, { useEffect, useState } from "react"
import axios from "axios"
import MadLibForm from "./MadLibForm"
import useAxios from "./hooks/getData"

const MadLib = () => {

    const [data, updateData] = useAxios();

    const [title, setTitle] = useState();
    const [blanks, setBlanks] = useState([]);
    const [answers, setAnswers] = useState();
    const [values, setValues] = useState();

    //get api data when component loads
    useEffect(() => {
        async function getMadLib() {
            const res = await axios.get('http://madlibz.herokuapp.com/api/random?maxlength=11')
            console.log(res.data)

            updateData(res.data)
            setTitle(res.data.title)
            setBlanks(res.data.blanks)
            setValues(res.data.value)
        }
        getMadLib()
    },[])

    //handle form return data
    const formData = (res) => {
        setAnswers(Object.values(res))
    }

    //rerender new madlib
    const renderNewMadLib = () => {

    }

    return (
        <div className="MadLib">
            <h1>MadLib</h1>
            {answers ? null : 
            <MadLibForm title={title} blanks={blanks} formData={formData} />
            }

            <div className="MadLib-values">
                {answers ? answers.map((val, idx) => {
                    return values[idx] + val;
                })
                : null}
            </div>
            {answers ? <button onClick={renderNewMadLib }> Write another madlib!</button>: null}
        </div>
    )
}

export default MadLib;