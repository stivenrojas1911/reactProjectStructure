import {Fact} from '../models/fact'
import axios from 'axios';



export const getFacts =  async (key:string, value:string): Promise<Fact[]> =>{
    
    
    const resp=await axios.get('http://localhost:3000/user') //https://catfact.ninja/facts
    
    console.log("resp:", resp.status);
    return  resp?.data?.data

}
    

