import {NavLink, Outlet} from 'react-router-dom';
import { useAppDispatch} from '../../hook.store';

import {getFactsData} from '../../thunks/facts.thunk'
import {factsSelector} from '../../reducers/facts/facts.selector'

import {useAppSelector} from '../../hook.store'

import {FactModel} from '../../models/fact.model';
import SimpleBackdropComponent from '../../components/backdrop/backdrop.component'
import { AsyncStatusEnum } from '../../enums/asyncStatusEnum';


// import enum


const Page1 = ()=>{
  
   

    /**
     * Here, only put the only the logic related with the event handler
     *  hooks, eventHandlers
     */

    const dispatch = useAppDispatch();//ok
    
    const facts = useAppSelector((state)=>state.facts)//ok

    const handleSearchButtonClick = () =>{

        // here we can not put any business logic ** important
        // only we can have a SetState  of useState
        // the bussiness have to be in the helpers
        // Inside of any hook we can not put business logic

        dispatch(getFactsData({value:'',key:''})) 

    }//ok


    
    return (

        <div>
            <h1>Hi, I am the component Number 1 😎</h1>
            
            {facts.status=== AsyncStatusEnum.loading && <SimpleBackdropComponent/>}
            
            <button onClick={handleSearchButtonClick}>Search</button>

            { facts.content &&  facts.content.map((fact:FactModel, index) => <ul key={index.toString()}>{fact.fact}</ul>)}

            {!facts.content && <p>here an a error</p>}

            <nav>
                <button>
                    <NavLink to="componentB">Go to component B</NavLink>
                </button>

                <button>
                    <NavLink to="componentA">Go to component A</NavLink>
                </button>

                
                <button>
                    <NavLink to="/">Go to home </NavLink>
                </button>
                              
            </nav>
            <Outlet />
        </div>

    )


} 

export default Page1


