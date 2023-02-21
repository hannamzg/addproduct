
import addProductForm  from "../styles/AddProductForm.module.scss";
import { useState } from "react";
import { useFormik } from "formik";
import {addProductServes} from "../context/addProductServes";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";




function AddProductForm(prop) {
    const [file, setFile] = useState(null);
    const {currentUser}= useContext(AuthContext);


    function onSubmit (){
        addProductServes(file,values.name,values.price,values.description,currentUser.id);
    }

    const handleOnChange = (event) => {
        setFile(event.target.files[0]); 
    };
      

    
    const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
        initialValues:{
          name:"",
          price:"",
          description:""
        },
        //validationSchema:basicSchema,
        onSubmit
    })

    return (
     <div className={addProductForm.main} >
           <div className={addProductForm.DivForm}> 
                <div className={addProductForm.head} >
                    <h2 className={addProductForm.headTitle}>add product</h2>
                    <i className="bi bi-x-circle" id={addProductForm.headIcon} onClick={()=>prop.setOpenAddProcdut(false)}></i>
                </div>
                    <form className={addProductForm.form} >
                        <input type="text" className={addProductForm.inp} name="name" value={values.name} onChange={handleChange}  placeholder="name"/>
                        <input type="text" className={addProductForm.inp} name="price" value={values.email} onChange={handleChange}  placeholder="price"/>
                        <input type="text" className={addProductForm.inp} name="description" value={values.description} onChange={handleChange}  placeholder="description"/>
                        <input type="file" className={addProductForm.file} onChange={handleOnChange}/>
                        <div className={addProductForm.divBtn}>
                            <button className={addProductForm.btn} onClick={handleSubmit}><i className="bi bi-plus-circle-fill"></i></button>
                        </div>   
                    </form>
           </div>
     </div>
    )
}
 
 export default AddProductForm