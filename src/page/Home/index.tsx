import axios from "axios";
import "./home.scss";
import CardItems from "../../components/Card";
import { useQuery } from "react-query";
import { CartItems } from "../../store/slice/product";
import Category from "../../components/Category";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select/SelectInput";

async function fetchProducts(): Promise<any> {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products`
  );

  return data;
}


const HomePage = () => {
  const [searchCategory, setSearchCategory] = useState('');
  const { data, isLoading, isError } = useQuery("products", () =>
  fetchProducts()
  );
  console.log(data);
  if (!data) {
    return <h3>Loading...</h3>;
  }

  const handleChange = (event: SelectChangeEvent) => {
    setSearchCategory(event.target.value as string);
  };
  console.log(searchCategory);
  
  return (
    <>
    
      <Category searchCategory={searchCategory} handleChange={handleChange}/>
    <div className="root">
        {
          isLoading ? "Loading..." : (
            data.filter((obj: any) => {
              return obj.category.includes(searchCategory)
            }).
            map((obj: any) => 
              <CardItems {...obj} key={obj.id}/>
            )
          )
        }                    

    </div>
    </>
  );
};

export default HomePage;
