import NavBar from "../components/navBar"
import { AuthContext } from "../context/authContext";
import { useContext, useEffect, useState } from "react";
import AddProductBtn from "../components/addProductBtn.jsx"
 


function MainPage() { 
    const [openUl,setOpenUl]=useState(false);
    const {currentUser}= useContext(AuthContext);
   

    return(
    <div onClick={()=> openUl&&setOpenUl(false)}>
        <NavBar arr={currentUser} setOpenUl={setOpenUl} openUl={openUl}/>
        <AddProductBtn/>
    </div>
    ) 
}

export default MainPage