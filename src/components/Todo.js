import React, { Component } from 'react';


export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            storage: [],
        };
    }

    addNewItem() {
        console.log(this.state);

        let name = prompt("What need to do?");
        if ( name ) {
            this.setState({
               storage: this.state.storage.concat({
                   title: name,
                   is_done: false,
               })
            });
        }
    }

    render() {
        return (
            <div>
                Here will be placed todo

                <button className="full-w"
                        onClick={ this.addNewItem.bind(this) }
                >
                    This is a button
                </button>
            </div>
        )
    }
}
