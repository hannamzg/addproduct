import addProductBtn from  "../styles/AddProductBtn.module.scss"


function AddProductBtn() {
   return (
    <div className={addProductBtn.main}>
        <div>
            <button className={addProductBtn.btn}>Add product +</button>
        </div>
        <div className={addProductBtn.divForm}>
            <from >
                <h3>form</h3>
            </from>
        </div>
        
    </div>
   )
}

export default AddProductBtn