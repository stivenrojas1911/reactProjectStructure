
import { useAppDispatch} from '../hook.store';
import {getAnomin} from '../reducers/entityB/entityB.reducer'


const ComponentA = () =>{

    const dispacth= useAppDispatch();

    return (
        <div>
            <button onClick={()=>{
                dispacth(getAnomin())

            }}>change name</button>
            <h1>HI, I am the component A</h1>
        </div>
    )



}

export default ComponentA