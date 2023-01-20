import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { 
    Error404Component, 
    HomeComponent, 
    LoginComponent, 
    NestedIndexRoute, 
    NestedRouteOne, 
    NestedRouteTwo, 
    PrivateRouteComponent, 
    PublicRouteComponent 
} from '../components/test-components.component';
import  App  from '../App'
import BaseGuard from './guards/base.guard';
import PrivateRouteGuard from './guards/private-route.guard';

// import stiven's components 
import Component1 from '../components/component1';
import ComponentA from '../components/componentA';
import ComponentB from '../components/componentB';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<HomeComponent />}/>
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/public-route" element={<PublicRouteComponent />}/>
                    <Route path="/private-route" element={<BaseGuard ><PrivateRouteComponent /></BaseGuard>}>
                        <Route index element={<NestedIndexRoute />}/>
                        <Route path="nested-route-one" element={<NestedRouteOne />}/>
                        <Route path="nested-route-two" element={<PrivateRouteGuard><NestedRouteTwo /></PrivateRouteGuard>}/>
                    </Route>
                    <Route path="*" element={<Error404Component />} />
                </Route>

                <Route path="/stiven" element={<Component1 />}>
                    <Route path="componentA" element ={<ComponentA/>}></Route>
                    <Route path="componentB" element={<ComponentB/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;