import React from "react";
import Image from "next/image";
import ChildComponents from "./ChildComponent";


/* Make an array of objects (Min 4 objects)
carImage, carName, carPrice, carReviews*/

const CarArrayData =[
    {
    id: 1,
    Name: "Toyota Corolla",
    Price: "PKR 75,50,000 lac",
    Image: "image/toyotacorolla.jpg",
    Review: "620 Reviews",
    Rating: "4.5"
    },
    {
        id: 2,    
        Name: "Suzuki Swift",
        Price: "PKR 85,50,00 lac",
        Image: "image/suzukiswift.jpg",
        Review: "191 Reviews",
        Rating: "3.0"
        },
    {
    id: 3,    
    Name: "Hundai Elantra",
    Price: "PKR 85,50,00 lac",
    Image: "image/hundai.jpg",
    Review: "357 Reviews",
    Rating: "3.5"
    },
    
    {
    id: 4,
    Name: "Honda City",
    Price: "PKR 85,50,00 lac",
    Image: "image/hondacity.jpg",
    Review: "456 Reviews",
    Rating: "4.0"
    },
]
const CarCards =()=>{
    return(
        <section id="card">
        <div className="items-center justify-center px-6 py-4 md:py-8 " >
            <ul className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-6 md:gap-8">{CarArrayData.map((card,index)=>(
                <div key={index}>
                <ChildComponents 
                Key={card.id}
                Name={card.Name}
                Price={card.Price}
                ImgUrl={card.Image}
                Review={card.Review}
                Rating={card.Rating}
                />
                </div>
            ))
                }
            </ul>
        </div>
        </section>
    )
}
export default CarCards;