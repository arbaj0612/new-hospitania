import React from 'react'
import style from '../Style/Footer.module.css'
import img1 from '../Images/footer.png'
function Footer() {
  return (
    <div className={style.mainfooter}>
        <div>
        <img src={img1} alt="" height={30}/>
        <p className={style.para}>Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Dolore accusantium pariatur aliquid facere nobis<br/> harum eveniet veritatis debitis officia necessitatibus.</p>
        </div>
    </div>
  )
}

export default Footer
