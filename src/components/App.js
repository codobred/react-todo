import React from 'react';

import Todo from './Todo';

class App extends React.Component {

    render() {
        let app_style = {
            width: "560px",
            margin: "3% auto 0",
        };

        return (
            <div style={app_style}>
                <h2>This is a simple "ToDo" App</h2>
                <hr/>

                <Todo/>
            </div>
        )
    }
}

export default App;
