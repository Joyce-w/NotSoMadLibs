import React, { useEffect, useState } from "react"
import axios from "axios"
import { v4 as uuid } from "uuid"
import "./MadLibForm.css"

const MadLibForm = () => {
    
    const [madLib, setMadLib] = useState()

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
    
    
    return (
        <div className="MadLibForm">
            <form>
            <h1>MadLibForm</h1>
                {madLib ? madLib.blanks.map(word => {
                    return <input
                        key={ uuid() }
                        name={word}
                        type="text"
                        placeholder={word}
                    />
                })
                    : 'Loading'}
            <button>Make something Mad!</button>
            </form>            
        </div>
    )
}

export default MadLibForm;