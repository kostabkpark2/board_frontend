import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function List() {
    const [list, setList] = useState([]);
    useEffect(()=>{
        function getData() {
            axios.get("http://localhost:8000/boards")
            .then((res)=>{
                setList(res.data);
            })
        }
        getData();
    }, []);
    console.log(list);
    return (
        <> 
            <h2>List.jsx</h2>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일자</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((board)=>(
                        <tr key={board.id}>
                            <td>{board.id}</td>
                            <td>
                                <Link to={{
                                    pathname : `/boards/${board.id}`,
                                }} >{board.title}
                                </Link>
                            </td>
                            <td>{board.writer}</td>
                            <td>{board.createdAt}</td>
                            <td>{board.hits}</td>                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default List;
