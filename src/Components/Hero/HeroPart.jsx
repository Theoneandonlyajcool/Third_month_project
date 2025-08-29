import React from 'react'
import "./Hero.css"
const HeroPart = ({item}) => {
  return (
    <div className='HeroWrapper'>
            <div className='firstHeroPart' style={{ backgroundImage:`url(${item.img})`}}>
            <div style={{width: "80%", height: "95%"}}>
                <div style={{width: "55%", height:"15%",  display: "flex" ,backgroundColor: "green"}}>
                <span>100% Natural</span>
                </div>
                <div style={{width:"80%", height: "22%",  display: "flex", justifyContent: "center", alignItems: "center"}} >
                     <h1>{item.texth}</h1>
                </div>
                <div style={{ width:"80%", height: "20%",  display: "flex", justifyContent: "center", alignItems: "center"}}> 
                    <p>{item.textp}</p>
                </div>
                <div style={{width: "50%", height: "20%"}}>
                    <button>{item.textb}</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default HeroPart
