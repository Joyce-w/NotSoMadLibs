import React, { useEffect, useState } from "react"
import axios from "axios"
import { v4 as uuid } from "uuid"
import "./MadLibForm.css"

const MadLibForm = ({formData}) => {
    let initial = {}


    const [title, setTitle] = useState();
    const [blanks, setBlanks] = useState();
    const [data, setData] = useState(initial)

    //get api data
    useEffect(() => {

        async function getMadLib () {
        const res = await axios.get('http://madlibz.herokuapp.com/api/random?maxlength=11')
        console.log(res.data)

            setTitle(res.data.title)
            setBlanks(res.data.blanks)
            
        }
        getMadLib();
    },[])
        //handle data change
    const handleChange = (e) => {
        const { name, value } = e.target
        initial[name] = value
        setData({ ...data, [name]: value })        
    }

    //handle form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        formData(data)
    }
    
    return (
        <div className="MadLibForm">
            <form onSubmit={handleSubmit}>
                <h1>{ title }</h1>
                {blanks ? blanks.map((word, idx) => {
                    
                    return <input
                        id={idx}
                        key={ word + idx  }
                        name={idx}
                        type="text"
                        placeholder={word}
                        value={data[idx]}
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