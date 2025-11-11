import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Save() {
    const navigate = useNavigate();
    const [board, setBoard] = useState({
        title : "",
        writer : "",
        pass : "",
        contents : ""
    });
    const onSubmit = async (e)=> {
        e.preventDefault();
        console.log(board);
        const res = await axios.post("http://localhost:8000/boards", {board})     
        console.log(res.status);
        if(res.status == 201) navigate("/list");
    };
    const onChange = (e) => {
        const {name, value} = e.target;
        setBoard({
            ...board,
            [name] : value,
        });
    };

    return (
        <>
            <h2>Save.jsx</h2>
            <hr />
            <form onSubmit={onSubmit}>
                제목 : 
                <input type="text" name="title" value={board.title} onChange={onChange} />
                작성자 : 
                <input type="text" name="writer" value={board.writer} onChange={onChange} />
                비밀번호 : 
                <input type="password" name="pass" value={board.pass} onChange={onChange} />
                내용 :
                <input type="text" name="contents" value={board.contents} onChange={onChange} />
                <input type="submit" value="작성" />
            </form>
        </>
    )
}

export default Save;