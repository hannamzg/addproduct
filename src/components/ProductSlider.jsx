import productSlider from "../styles/ProductSlider.module.scss"
import {getAllProducts} from '../context/getAllProducts';
import { useEffect ,useState} from "react";

function ProductSlider() {
    const [data,setData] =useState([]);

    useEffect(()=>{
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
    },[])
   

    
    return(
       <div className={productSlider.items}>
        {data.data && data.data.map((item)=><div className={productSlider.item} key={item.id}>
                <div className={productSlider.itemLeft}>
                    <img className={productSlider.img} src={"http://localhost:5000" + item.photo} alt="" />
                    <h3 className={productSlider.titles}>{item.name}</h3>
                    <h3 className={productSlider.titles}>{item.price}</h3>
                    <h3 className={productSlider.titles}>{item.description}</h3>
                </div>
                <div>
                    +
                </div>
            </div>
        )}  
       </div>
    )
}

export default ProductSlider