import NavBar from "../components/navBar"
import { AuthContext } from "../context/authContext";
import { useContext, useEffect, useState } from "react";
import AddProductBtn from "../components/addProductBtn.jsx"
import AddProductForm from "../components/addProductForm" 


function MainPage() { 
    const [openUl,setOpenUl]=useState(false);
    const [openAddProcdut,setOpenAddProcdut]=useState(false);
    const {currentUser}= useContext(AuthContext);

    console.log(openAddProcdut);

    return(
    <div onClick={()=> openUl&&setOpenUl(false)}>
        <NavBar arr={currentUser} setOpenUl={setOpenUl} openUl={openUl}/>
        <AddProductBtn setOpenAddProcdut={setOpenAddProcdut}/>
        {openAddProcdut ?<AddProductForm setOpenAddProcdut={setOpenAddProcdut}/>:""}
    </div>
    ) 
}

export default MainPage