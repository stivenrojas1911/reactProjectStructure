import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {PublicRouteComponent} from '../pages/publicRoute/publicRoute.page';
import {LoginPage} from '../pages/login/login.page';
import {HomePage} from '../pages/home/home.page';
import {Error404Page} from '../pages/error404/error404.page';
import {PrivateRoutePage} from '../pages/privateRoute/privateRoute.page'
import {NestedIndexRouteComponent} from '../components/nestedIndexRoute/nestedIndexRoute.component'
import {NestedRouteOneComponent} from '../components/nestedRouteOne/nestedRouteOne.component'
import {NestedRouteTwoComponent} from '../components/nestedRouteTwo/nestedRouteTwo.component'

import  App  from '../App'
import BaseGuard from './guards/base.guard';


// import stiven's components 
import Component1 from '../pages/page1/page1.page';
import ComponentA from '../components/componentA/componentA.component';
import ComponentB from '../components/componentB/componentB.component';


// pages imports
import {DashboardPage} from './../pages/dashboard/dashboard.page'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/public-route" element={<PublicRouteComponent />}/>
                    <Route path="/private-route" element={<BaseGuard ><PrivateRoutePage /></BaseGuard>}>
                        <Route index element={<NestedIndexRouteComponent />}/>
                        <Route path="nested-route-one" element={<NestedRouteOneComponent />}/>
                        <Route path="nested-route-two" element={<NestedRouteTwoComponent />}/>
                    </Route>
                    
                    <Route path="*" element={<Error404Page />} />
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