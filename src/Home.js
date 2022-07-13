import "./Home.css"
import bg from "./assets/bg.jpg"

export default function Home(){
    return(
        <div className="home">
            <img src={bg} hidden={false}/>
        </div>
    )
}