import React from 'react'
import { useState } from 'react'
import '../css/Profile.css'
import { BsGearWide } from "react-icons/bs";



 function Profile() {

  const [count1, setCount1] = useState(3)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
    
  const countup = (e) => {
    setCount1(count1 + 1)
  }
  const countup2 = (e) => {
    setCount2(count2 + 1)
  }
  const countup3 = (e) => {
    setCount3(count3 + 1)
  }

  return (
    <div className='mother'>
        <div className='son'>
        <img className='unknown' 
        src='unknown.jpg' 
        style={{
          width : "150px", 
          height : "150px",
          // paddingRight : "30px"
          marginTop : "25px",
          marginRight : "30px",
          marginLeft : "35px",
          marginBottom : "40px"
          }} 
          alt='언노운'/>
        </div>
        <section >
        <div className='col'>
          <div className='content-box'>
            <h2 className='h2'>carlkim9012</h2> 
            <a className='probox'>프로필 편집</a> 
            <button className='button'><BsGearWide size="28"/></button>
          </div>
            <ul className='post'>
                <li className='cell'>게시물 <button className='button' onClick={countup}>{count1}</button></li>
                <li className='cell'>팔로워 <button className='button' onClick={countup2}>{count2}</button></li>
                <li className='cell'>팔로우 <button className='button' onClick={countup3}>{count3}</button></li>
            </ul>
            <div className='name' style={{fontWeight : "bold"}}>김영환</div>
          </div>
        </section>
    </div>
  )
}

export default Profile;
