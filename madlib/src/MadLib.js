import React, { useEffect, useState } from "react"
import axios from "axios"
import MadLibForm from "./MadLibForm"
import useAxios from "./hooks/getData"
import "./MadLib.css"

const MadLib = () => {

    const [data, updateData, clearData] = useAxios();

    const [title, setTitle] = useState();
    const [blanks, setBlanks] = useState([]);
    const [answers, setAnswers] = useState();
    const [values, setValues] = useState();

    const [url, setUrl] = useState('http://madlibz.herokuapp.com/api/random?maxlength=11')


    useEffect(() => {
        async function getMadLib() {
            const res = await axios.get(url)
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
                : ""}
            </div>
        </div>
    )
}

export default MadLib;