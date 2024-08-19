import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { Products, Refrigerators, WashingMachine, microwave, AirConditioner } from "../assets/productData"

export function Home(){

    const [currentCategory, setCurrentCategory] = useState(0)
    const [products, setProducts] = useState([])
    const initialRender = useRef(false)

    const categoryIds = [{
      categoryId: "",
      categoryName: "Air Conditioner's",
      imageUrl: ""

    }]

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://real-time-amazon-data.p.rapidapi.com/products-by-category',
            params: {
              category_id: categoryIds[currentCategory],
              page: '1',
              country: 'IN',
              sort_by: 'RELEVANCE',
              product_condition: 'ALL',
              is_prime: 'false'
            },
            headers: {
              'x-rapidapi-key': 'd06cae8eeamsh7eae0bd0ba082b3p1f76eajsn0ce82c5a1956',
              'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
            }
          };

          async function fetchData(){

            try {
                const response = await axios.request(options);
                const data = response.data.data.products
                console.log(data);

            }
            catch (error) {
                console.error(error);
            }

          }

          if(initialRender.current){
            fetchData()
            return
          }

        //   initialRender.current = true
          console.log(Products)
    },[currentCategory])

    const showProducts = (category) => {
      switch(category){
        case "Refrigerators": console.log(Refrigerators)
        break
        case "WashingMachine": console.log(Refrigerators)
        break
        case "microwave" : console.log(Refrigerators)
        break
        case "AirConditioner" : console.log(Refrigerators)
        break
        default: return console.log("No such category")
      }
    }

    return (
        <>
            {/* {
              Products.map(product => <div>
                <img src={product.product_photo} alt="" />
              </div>)
            } */}
            <div className="categoryList">
              <div className="categoryName">
                <h1>Appliances for your home</h1>
                <button onClick={() => setCurrentCategory(2)}>Show more</button>
              </div>
                <div className="categoryContainer">
                <div onClick={() => showProducts("AirConditioner")} className="categoryProductCard">
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="" />
                  <p>Air Conditioner</p>
                </div>

                <div className="categoryProductCard">
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="" />
                  <p>Refrigerators</p>
                </div>

                <div className="categoryProductCard">
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="" />
                  <p>Microwaves</p>
                </div>

                <div className="categoryProductCard">
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="" />
                  <p>Washing Machine</p>
                </div>
                </div>

            </div>
        </>
    )
}
