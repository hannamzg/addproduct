
import addProductForm  from "../styles/AddProductForm.module.scss";


function AddProductForm(prop) {
    return (
     <div className={addProductForm.main} >
           <div className={addProductForm.DivForm}> 
                <div className={addProductForm.head} >
                    <h2 className={addProductForm.headTitle}>add product</h2>
                    <i className="bi bi-x-circle" id={addProductForm.headIcon} onClick={()=>prop.setOpenAddProcdut(false)}></i>
                </div>
                    <form action="" className={addProductForm.form} >
                        <input type="text" className={addProductForm.inp} placeholder="name"/>
                        <input type="text" className={addProductForm.inp} placeholder="price"/>
                        <input type="text" className={addProductForm.inp} placeholder="description"/>
                        <input type="text" className={addProductForm.inp} placeholder="the categories"/>
                        <input type="file" className={addProductForm.file}/>
                        <div className={addProductForm.divBtn}>
                            <button className={addProductForm.btn}>send</button>
                        </div>   
                    </form>
           </div>
     </div>
    )
}
 
 export default AddProductForm