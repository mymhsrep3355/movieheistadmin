import Single from "../../components/single/Single"
import { singleProduct } from "../../data"
import "./movie.scss"

const Movie = () => {

  //Fetch data and send to Single Component
  return (
    <div className="movie">
       <Single {...singleProduct}/>
    </div>
  )
}

export default  Movie;