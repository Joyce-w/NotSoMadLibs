import React, { useState } from "react"
import "./MadLibForm.css"

const MadLibForm = ({title, blanks, formData}) => {
    let initial = {}

    const [data, setData] = useState(initial)

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
            <form className="MadLibForm-form" onSubmit={handleSubmit}>
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