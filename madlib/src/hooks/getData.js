
import React, { useState } from "react";
import {v4 as uuid} from "uuid"

const useAxios = () => {

    //state to hold data
    const [data, setData] = useState([])

    //callbackfunction to update state
    const updateData = async (res) => {
        setData(() =>
            [...data,
                { res, id: uuid() }
            ])
    }

    return [data, updateData];
}

export default useAxios;