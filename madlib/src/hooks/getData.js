
import React, { useState } from "react";

const getData = () => {

    const [data, setData] = useState()

    const addToData = () => {
        
        setData(data => [...data])
    }

    return [data, addToData];
}

export default getData;

