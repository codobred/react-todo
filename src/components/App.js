import React from 'react';

import Todo from './Todo';

class App extends React.Component {

    render() {
        return (
            <div className="todo-container">
                <h2>This is a simple "ToDo" App</h2>
                <hr/>

                <Todo/>
            </div>
        )
    }
}

export default App;
