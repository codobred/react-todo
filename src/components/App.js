import React from 'react';

import Todo from './Todo';
import NotFound from './NotFound';


import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

    render() {
        return (
            <div className="todo-container">
                <Switch>
                    <Route exact path="/" component={Todo} />

                    <Route component={NotFound}/>
                </Switch>
            </div>
        )
    }
}

export default App;
