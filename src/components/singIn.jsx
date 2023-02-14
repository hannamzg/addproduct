import singIng from  '../styles/singIn.module.scss'
import React, { useState } from 'react';


function SingIn() {

  const [Color,setColor]=useState('light');

    return (
      <div className={Color ==="light"?singIng.light:singIng.dark}>
        <div className={singIng.singInDiv}>
          <div>
            <div onClick={()=> { Color === "light"? setColor("dark"):setColor("light") }} className={singIng.ChangeColor}>{Color ==="light"?<i class="bi bi-moon-fill" style={{color:"white",fontSize:"40px",cursor:"pointer"}}></i>:<i className="bi bi-brightness-high" style={{color:"black",fontSize:"40px",cursor:"pointer"}}> </i>}</div>
          </div>
            <form className={singIng.from}>
              <h2 className={singIng.header}>sing in</h2>
                  <input type="text" className={singIng.inp}  placeholder="email"/>
                  <input type="text" className={singIng.inp} placeholder="password"/>
            </form>
        </div>
      </div>
     
    );
  }
  
  export default SingIn;