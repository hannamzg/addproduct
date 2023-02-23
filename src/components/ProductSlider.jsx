import productSlider from "../styles/ProductSlider.module.scss"
import {getAllProducts} from '../context/getAllProducts';
import { useEffect ,useState} from "react";
import {deleteProductServes} from '../context/deleteProductServes'
import { toast } from "react-toastify";

function ProductSlider(prop) {
    const [data,setData] =useState([]);
    const [someChange,setSomeChange]=useState(false)

    useEffect(()=>{
        setSomeChange(false);
        prop.setProductHasBeenAdd(false)
        setSomeChange(prop.productHasBeenAdd)
        try{
            getAllProducts().then((data)=>{
                setData(data)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        catch(err){
           // console.log(err);
        } 
    },[someChange]);


    function deleteProduct(id) {
        try{
            deleteProductServes(id).then(()=>{
                toast("post has been deletet", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                
            })
            .catch((err)=>{
                toast(err, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
        }
        catch(err){
            toast("Error", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } 
        setSomeChange(true);
    }
    
   

    
    return(
       <div className={productSlider.items}>
       
        {data.data ? data.data.map((item)=><div className={productSlider.item} key={item.id}>
                <div className={productSlider.itemLeft}>
                    <img className={productSlider.img}  src={"http://localhost:5000" + item.photo} alt="" />
                    <div>
                        <h6 style={{textAlign:"center"}}>name</h6>
                        <h3 className={productSlider.titles}>{item.name}</h3>
                    </div>
                    <div>
                        <h6  style={{textAlign:"center"}}>price</h6>
                        <h3 className={productSlider.titles}>{item.price}</h3>
                    </div>
                    <div>
                        <h6  style={{textAlign:"center"}}>description</h6>
                       <p style={{maxWidth:"250px",overflow:"auto",fontSize:"12px",margin:" 0 10px"}}>{item.description}</p>
                    </div>
                </div>
                <div> 
                    <i className="bi bi-pencil-fill" id={productSlider.pencilIcon}></i>
                    <i className="bi bi-trash3" id={productSlider.trash3Icon} onClick={()=>{
                        let idToStraing = item.id.toString();
                        deleteProduct(idToStraing)
                        
                    }}></i>

                </div>
            </div>
        ) :<div className={productSlider.custom}></div>}  
       </div>
    )
}

export default ProductSlider