import "./Navbar.css"
export default function Navbar(){
    return(
        <div className="navbar">
            <div className="title">Company</div>
            <div className="nav">
                <button>ABOUT</button>
                <button>OUR WORK</button>
                <button>OUR TEAM</button>
                <button>CONTACT</button>
            </div>
        </div>
    )
}