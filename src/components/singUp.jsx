import singUp from  '../styles/SingUp.module.scss'
import React, { useState } from 'react';


function SingUp() {

  const [Color,setColor]=useState('light');

    return (
      <div className={Color ==="light"?singUp.light:singUp.dark}>
        <div className={singUp.singInDiv}>
          <div>
            <div onClick={()=> { Color === "light"? setColor("dark"):setColor("light") }} className={singUp.ChangeColor}>{Color ==="light"?<i className="bi bi-moon-fill" style={{color:"white",fontSize:"40px",cursor:"pointer"}}></i>:<i className="bi bi-brightness-high" style={{color:"black",fontSize:"40px",cursor:"pointer"}}> </i>}</div>
          </div>
            <form className={singUp.from}>
              <h2 className={singUp.header}>sing Up</h2>
                  <input type="text" className={singUp.inp}  placeholder="email"/>
                  <input type="text" className={singUp.inp} placeholder="password"/>
                  <button className={singUp.submit}>submit</button>
            </form>
        </div>
      </div>
     
    );
  }
  
  export default SingUp;