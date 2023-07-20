import axios from "axios";
export const getProduct = async() =>{
    try{
        const response = await axios.get('https://dummyjson.com/products')
        console.log("the response is",response)
            return response.data.products;

    }
    catch(err){
        console.log("hello err")
        return err;
    }

}