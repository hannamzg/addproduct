import singUp from  '../styles/SingUp.module.scss'
import React, { useState } from 'react';


function SingUp() {

  const [Color,setColor]=useState('light');



  const [file, setFile] = useState(null);
  const [imagePath, setImagePath] = useState("");

  const handleOnChange = (event) => {
    setFile(event.target.files[0]); 
  };

  const handleOnClick = () => {
    const formData = new FormData();
    formData.append("image", file);

    fetch("http://localhost:5000/api/auth/singUp", {
      method: "POST",
      body: formData,
    }).then((response) => {
        response.json().then((data) => {
          setImagePath(data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return (
      <div className={Color ==="light"?singUp.light:singUp.dark}>
        <div className={singUp.singInDiv}>
          <div>
            <div onClick={()=> { Color === "light"? setColor("dark"):setColor("light") }} className={singUp.ChangeColor}>{Color ==="light"?<i className="bi bi-moon-fill" style={{color:"white",fontSize:"40px",cursor:"pointer"}}></i>:<i className="bi bi-brightness-high" style={{color:"black",fontSize:"40px",cursor:"pointer"}}> </i>}</div>
          </div>
            <form className={singUp.from}>
              <h2 className={singUp.header}>sing Up</h2>
                  <input type="text" className={singUp.inp}  placeholder="name"/>
                  <input type="text" className={singUp.inp}  placeholder="email"/>
                  <input type="text" className={singUp.inp} placeholder="password"/>
                  <input type="file" onChange={handleOnChange} />
                  <button className={singUp.submit} onClick={handleOnClick}>submit</button>
            </form>
        </div>
      </div>
     
    );
  }
  
  export default SingUp;