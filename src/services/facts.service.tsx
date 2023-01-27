import {FactModel} from '../models/fact.model'
import axios from 'axios';



export const getFacts =  async (key:string, value:string): Promise<FactModel[]> =>{
    
    
    const resp=await axios.get('https://catfact.ninja/facts') //https://catfact.ninja/facts 
    
    console.log("resp:", resp.status);
    return  resp?.data?.data

}
    

