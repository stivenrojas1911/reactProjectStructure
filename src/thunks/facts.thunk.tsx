import { createAsyncThunk } from '@reduxjs/toolkit';
import { Fact } from '../models/fact';
import { getFacts } from '../services/facts.service';

// import model error
import {ServiceErrorModel} from './../models/model.serviceError'

export const getFactsData = createAsyncThunk(
  'facts/getFactsData',
    async (param:{value:string, key:string}, thunkAPI):Promise<Fact[]|null> => {
      try{
        return await getFacts(param?.key, param?.value)
        
      }catch(err:any){

        const error:ServiceErrorModel= err;
        console.log("status: ", error.response.status)
  
        return null;

      }
      
    }
);

