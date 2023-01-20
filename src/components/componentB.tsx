

import {entityASelect} from '../reducers/entityA/entityA.selector';

// to consult the state of the entityB slice 
import { entityBSelect } from '../reducers/entityB/entityB.selector';


import {useAppSelector} from '../hook.store'


const ComponentB = () =>{

    const logged=useAppSelector(entityASelect)
    const name= useAppSelector(entityBSelect)

    return (
        <div>

            <p>{logged==true?'login':'logout'}</p>

            <h1>Hi, I am the component B</h1>
            <h2>name:{name}</h2>


        </div>
        
    )
}

export default ComponentB;