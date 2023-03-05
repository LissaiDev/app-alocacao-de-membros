import { Link } from "react-router-dom"
const Nav = ()=>{
    return (
        <div className="bg-warning">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/team">
                        Team
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav