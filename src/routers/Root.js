import React from 'react';

import {BrowserRouter, Switch, Route} from "react-router-dom";

import {SideData} from './SideData';

export const Root = (
    <BrowserRouter>
        <Switch>
            {
                SideData.map(item => {
                    return (
                        <Route path={item.path} component={item.component}/>
                    )
                })
            }
        </Switch>
    </BrowserRouter>
)