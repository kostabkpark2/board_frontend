import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/save">글 작성</Link>
            <Link to="/list">글 목록</Link>
        </div>
    )
}

export default Header;