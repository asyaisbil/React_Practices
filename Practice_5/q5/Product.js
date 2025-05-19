
import { useParams } from  "react-router-dom";

export default function Product(){
    let { id } = useParams();
    return <div className="content">Ürün id: {id} </div>
  }