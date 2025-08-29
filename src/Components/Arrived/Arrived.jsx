import React from 'react'
import "./Arrived.css"
const Arrived = ({brands}) => {
  return (
    <div>
      <div className='arrived_Wrapper'>
        <div className='img_wrappper'>
            <img src={brands.img} alt="" />
        </div>
        <div className='text_section'>
            <div className='text_part'>
                <p>{brands.textp}</p>
            </div>
            <div className='text_sectionn'>
                <h3>
                    {brands.texth}
                </h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Arrived
