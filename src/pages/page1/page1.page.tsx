import {NavLink, Outlet} from 'react-router-dom';
import { useAppDispatch} from '../../hook.store';

import {getFactsData} from '../../thunks/facts.thunk'
import {factsSelector} from '../../reducers/facts/facts.selector'

import {useAppSelector} from '../../hook.store'

import {Fact} from '../../models/fact.model';
import {SimpleBackdrop} from '../../components/backdrop/backdrop.component'


const Page1 = ()=>{
  
   

    

    const dispatch = useAppDispatch();
    
    const facts:Fact[]|null|undefined = useAppSelector(factsSelector)

    const factsList= facts === null ||facts === undefined ? facts : facts
                                                .map((fact:Fact, index) =>{
                                                    return <ul key={index.toString()}>{fact.fact}</ul>
                                                })

    
    return (

        <div>
            <h1>Hi, I am the component Number 1 😎</h1>
            
            {facts===undefined?<p>undefined</p>:<p>not undefined</p>}
            {<SimpleBackdrop loading={facts===undefined?true:false}/>}
            

            <button onClick={
                ()=>{
                        try{

                        dispatch(getFactsData({value:'',key:''}))

                     


                        
                        }catch(e){
                            console.log("the error was catched")
                            console.log("e: ", e);
                        }
                    }
            }>get facts</button>

  

            {factsList===null?<p>error-op</p>:factsList}

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


