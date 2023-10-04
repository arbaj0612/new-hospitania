import React from 'react'
import style from '../Style/Shoppage.module.css'
import products from './data.json'
// import { grey } from '@mui/material/colors'


function Shoppage() {
    const handleSort=()=>{
        products.sort()
    }
  return (
    <div className={style.mainContainer}>
        <div className={style.subConatiner1}>
            <div style={{display:"flex"}}>
                <div style={{color:"blue", fontSize:20}}>BRANDS </div>   
                {/* <div className={style.horizontaLine}></div>             */}
            </div>

            <div className={style.brandsCheckbox}>    <ul style={{listStyle:"none"}}>        
                <li className={style.lineSpace}><input type="checkbox" /> Brand one</li> <div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Brand two </li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Belleaeis</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Birkenstock</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Calvin Klein</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Brandina</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Bilabong</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Columbia</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Converse</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Brand one</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Brand two </li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Brandina</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Belleaeis</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Bilabong</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Birkenstock</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Calvin Klein</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Columbia</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Converse</li><div className={style.horizontaLine}></div>
                
                </ul>   </div> <br /> <br />

                <div style={{display:"flex"}}>
                <div style={{color:"blue", fontSize:20}}>PRICE </div>   
                {/* <div className={style.horizontaLine}></div>             */}
            </div> <br /> <br />


            <div style={{display:"flex"}}>
                <div className={style.checkBoxTitle}>PRODUCT TAGS </div>   
                {/* <div className={style.horizontaLine}></div>             */}
            </div>

            <div className={style.brandsCheckbox}>    <ul style={{listStyle:"none"}}>        
                <li className={style.lineSpace}><input type="checkbox" /> Tag one</li> <div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Tag two </li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Belleaeis</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Birkenstock</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Calvin Klein</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Brandina</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Bilabong</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Columbia</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Converse</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Brand one</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Brand two </li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Brandina</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Belleaeis</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Bilabong</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Birkenstock</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Calvin Klein</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Columbia</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> Converse</li><div className={style.horizontaLine}></div>
                
                </ul>   </div>
             <br /> <br />

                <div style={{display:"flex"}}>
                          <div className={style.checkBoxTitle}>DISCOUNT </div>   
                             {/* <div className={style.horizontaLine}></div>             */}
                </div>
                <div className={style.brandsCheckbox}>    <ul style={{listStyle:"none"}}>        
                <li className={style.lineSpace}><input type="checkbox" /> Less than 10%</li> <div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> above 10% </li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> above 20%</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> above 30%</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> above 40%</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> above 50%</li><div className={style.horizontaLine}></div>
                <li className={style.lineSpace}><input type="checkbox" /> above 60%</li><div className={style.horizontaLine}></div>
                
                </ul>   </div>
                </div>

     {/*              ***SHOP CART***                        */}
                    <p onClick={handleSort}>sort the images</p>
              <div className={style.cardContainer}  >
                    {products.map((product)=>(
                        <div style={{margin:"10px", cursor:"pointer"}}>
                            <div className={style.cardImageConatiner} id={style.imageHover}>
                            <img src={product.images} alt="" height={150} className={style.cardImage} />
                            </div>
                            
                            <div>
                            <span className="fa fa-star" style={{color:"orange"}}></span>
                                <span className="fa fa-star" style={{color:"orange"}}></span>
                                <span className="fa fa-star" style={{color:"orange"}}></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>

                            <div><h6>{product.description}</h6> </div>
                            <div style={{fontSize:14, color:"#A9A9A9"}}>MRP <del>{product.mrp}</del> &nbsp;<span style={{color:"green"}}>{product.discount}</span></div>
                            <div style={{fontSize:20}}>&#8377;{product.price}</div>
                        </div>

                    ))}
             </div> 
        
    </div>
  )
}

export default Shoppage
