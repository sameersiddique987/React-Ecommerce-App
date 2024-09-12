import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SingleCard from "../../conponent/SingleCard"


const SingleStudent = () => {
    const [data , setData] = useState(null)
    const {id} = useParams()
useEffect(() =>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((res) =>{
        console.log(res);
      setData(res)  
    }).catch((err) => {
        console.log(err);
        
    })
})


  
    return(
        <>
        <div className="text-center justify-center flex" >
        
        {
            data ? <SingleCard src={data.image} category={data.category } description={data.description} />: <h1>loading</h1>
        }
        </div>
        </>
    )

}

export default SingleStudent