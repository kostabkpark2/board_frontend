import { useState, useEffect } from "react";
import axios from "axios";

function List() {
    const [list, setList] = useState([]);
    useEffect(()=>{
        function getData() {
            axios.get("http://localhost:8000/boards")
            .then((res)=>{
                console.log(res.data);
                setList(res.data);
            })
        }
        getData();
    }, []);
    return (
        <h2>List.jsx</h2>
    )
}

export default List;
