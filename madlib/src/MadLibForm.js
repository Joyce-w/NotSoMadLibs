import React, { useEffect, useState } from "react"
import axios from "axios"
import { v4 as uuid } from "uuid"
import "./MadLibForm.css"

const MadLibForm = () => {

    const [madLib, setMadLib] = useState()
    const [data, setData] = useState([])

    //handle changed data
    const handleChange = (e) => {
        setData(data => ({
            ...data,
          [e.target.name]: e.target.value  
        }))
        
    }
    
    //get api data
    useEffect(() => {

        async function getMadLib () {
        const res = await axios.get('http://madlibz.herokuapp.com/api/random?maxlength=11')
        console.log(res.data)
            setMadLib({
                'blanks': res.data.blanks,
                'title': res.data.title,
                'value': res.data.value
            })
        }
        getMadLib();
    }, [])
    
    //handle form submit
    const onSubmit = () => {
        
    }
    
    return (
        <div className="MadLibForm">
            <form>
            <h1>MadLibForm</h1>
                {madLib ? madLib.blanks.map((word,idx) => {
                    return <input
                        key={ uuid() }
                        name={idx}
                        type="text"
                        placeholder={word}
                        onChange={handleChange}
                    />
                })
                    : 'Loading'}
            <button>Make some mad libs</button>
            </form>            
        </div>
    )
}

export default MadLibForm;