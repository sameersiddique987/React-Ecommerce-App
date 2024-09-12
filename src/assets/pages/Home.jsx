import React, { useEffect, useState } from "react"
import Card from "../../conponent/Card"
import { useNavigate } from "react-router-dom"


const Home = () =>{
    const [Api , setApi] = useState(null)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res=> {console.log(res)
        setApi(res)
    }).catch((err) => {
        console.log(err);
        
    })
            
    },[])

    const navigate = useNavigate()

    const SingleUser = (item) =>{
        navigate(`SingleStudent/${item.id}`)
      }
    return(
    <>
    <h1>HOME</h1>
    <div className="flex flex-wrap justify-center gap-4">
     {
        Api ? Api.map((item) => {
            return <div  key={item.id}>
                

               <div> <Card src={item.image} title={item.title} price={item.price} onClick={()=> SingleUser(item)} /> </div>





            </div>
        }) : <h1><i className="text-7xl fa-solid fa-spinner"></i></h1>
        
    } 
    </div>
    </>
      
    )
}

export default Home