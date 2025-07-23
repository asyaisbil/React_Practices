//Aşağıdaki useAxios hook'unda gerekli 3 state'i tanımla ve bir obje içinde return et. - import'u unutma.

import { useEffect, useState } from "react";

export const useAxios = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(axios
        .get(url)
        .then(resp => {
            setData(resp.data); 
            setError(null)
        })
        .catch(error=>{
            setError(error);
            setData(null);
        })
        .finally(() => setLoading(false)), 
    [url])

    return { data, error, loading }

};
