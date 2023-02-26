import NavBar from "../components/navBar"
import { AuthContext } from "../context/authContext";
import { useContext, useEffect, useState } from "react";
import AddProductBtn from "../components/addProductBtn.jsx"
import AddProductForm from "../components/addProductForm" 
import ProductSlider from '../components/ProductSlider';
import {Navigate} from "react-router-dom";
import EditProduct from "../components/editProduct";



function MainPage() { 
    const [openUl,setOpenUl]=useState(false);
    const [openAddProcdut,setOpenAddProcdut]=useState(false);
    const [openEditProduct,setOpenEditProduct]=useState(false);
    const [productHasBeenAdd,setProductHasBeenAdd]=useState(false);
    const [productHasBeendeleted,setproductHasBeendeleted]=useState(false);
    const [editValues,setEditValues]=useState({})
    const {currentUser}= useContext(AuthContext);

    if(!currentUser||currentUser==null){
        return <Navigate to="/"/>
    }
   
   
    return(
    <div onClick={()=> openUl&&setOpenUl(false)} >
        <NavBar arr={currentUser} setOpenUl={setOpenUl} openUl={openUl}/>
        <AddProductBtn setOpenAddProcdut={setOpenAddProcdut}/>
        {openAddProcdut ?<AddProductForm setOpenAddProcdut={setOpenAddProcdut} setProductHasBeenAdd={setProductHasBeenAdd}/>:""}
        <ProductSlider 
        setProductHasBeenAdd={setProductHasBeenAdd}
        productHasBeenAdd={productHasBeenAdd} 
        setOpenEditProduct={setOpenEditProduct} 
        setEditValues={setEditValues} 
        openEditProduct={openEditProduct}
        setproductHasBeendeleted={setproductHasBeendeleted}
        productHasBeendeleted={productHasBeendeleted}
         />
       {openEditProduct && <EditProduct setOpenEditProduct={setOpenEditProduct} editValues={editValues}/>}
    </div>
    ) 
}

export default MainPage