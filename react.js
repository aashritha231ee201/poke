
import React, { useEffect } from "react";
import "/.style.css";
const url="https://pokeapi.co/api/v2/pokemon"
function App(){
    const[data,setData]=useState([])

    useEffect(()=>{
        const fetchData=()=>{
            fetch(url)
            .then(res=>res.json())
            .then(json=>{
               const alphabet=json.sort((a,b)=>a.name.localeCompare(b.name))
               const number=json.sort((a,b)=>a-id-b.id)
               setData(json)
            })
            .catch(e=>{
                console.log("error",e)
            })
        }
        fetchData()
    },[])
export default function Pokedex() {
return (
    <main>
      <h1>filter</h1>
      <div>
        <button onClick={number}>Number</button>
        <button onClick={alphabet}>alphabet</button>
      </div>
    </main>
  )
}





  

