import React from "react"
import product1 from '../assets/image/product1.webp';
import product2 from '../assets/image/product2.webp';
import { useNavigate } from "react-router-dom";
import '../styles/Product.css'
export const productList =[
    {
id:1,
image:product1,
cardTitle:'All in one Bottle',
rating:3,
dollar:'$22.00-$55.00',
description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
ranking: ["Arsenic", "Chamoisee", "Silver", "White"],
    },
    {
    id:2,
        image:product2,
        cardTitle:'All in one Bottle',
        rating:3,
        dollar:'$22.00-$55.00',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        ranking: ["Arsenic", "Chamoisee", "Silver", "White"],
            }
]
const Homepage = () =>{
    const navigation =useNavigate();

    const handleNavigate = (id) => {
        navigation (`/singlecard/${id}`)
    }
    return(
        <>
        {productList.map((item) => (
<div key={item.id}>
<div><img src={item.image} /></div>
<div>{item.cardTitle}</div>
<button
    onClick={()=>handleNavigate(item.id)}>
    view
    </button>
</div>

        ))}
    
        </>
    )
}
export default Homepage;