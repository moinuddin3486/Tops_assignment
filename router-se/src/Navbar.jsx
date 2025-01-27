
import { Link } from "react-router-dom"
export default function Navbar(props) {
   
    const ChangeBg=(name)=>{
       
        document.body.style.backgroundColor=name
        

    }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="mb-2 navbar-nav me-auto mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/enabledarkmode">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/UppercaseConverter">Uppercase Converter</Link></li>
                                    <li><Link className="dropdown-item" to="/enabledarkmode">Bg Changer</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/crud">Crud </Link></li>
                                    <li><Link className="dropdown-item" to="/counter">Counter System </Link></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                        {/* <div class="btn-group" role="group" aria-label="Basic mixed styles example" >
                            <button type="button" onClick={()=>ChangeBg("red")} value={"red"} class="btn btn-danger">Red</button>
                            <button type="button" value={"Yellow"} onClick={()=>ChangeBg("yellow")} class="btn btn-warning">Yellow</button>
                            <button type="button" value={"green"} onClick={()=>ChangeBg("green")} class="btn btn-success">Green</button>
                        </div > */}
                        <div  className={`form-check form-switch text-${props.mode === 'light' ? "dark" : "light"}`}>
                            <input className="form-check-input" onClick={props.changemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? "Enable Dark Mode" : "Disable Dark Mode"}</label>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
