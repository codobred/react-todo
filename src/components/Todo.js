import React, { Component } from 'react';


export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterQuery: '',
            storage: [
                {
                    id: Number(new Date()),
                    name: 'Buy a meal',
                    is_done: true,
                },
                {
                    id: Number(new Date()),
                    name: 'Drink a cup of coffee',
                    is_done: false,
                },
            ],
        };
    }

    createItem(name, is_done = false) {
        if ( !name ) {
            throw new Error('Todo Item "name" property not a string or empty');
        }

        return {
            id: Number(new Date()),
            name,
            is_done: Boolean(is_done),
        };
    }

    addNewItem() {
        let name = prompt("What you need to do?", "fuck you mom, bitch");
        if ( name ) {
            this.setState({
               storage: this.state.storage.concat(
                   this.createItem(name)
               )
            });
        }
    }

    toggleTodoDone(id) {
        this.setState({
            storage: this.state.storage.map((item) => {
                let done = (id === item.id) ? !item.is_done : item.is_done;
                return {...item, is_done: done};
            })
        });
    }

    makeSearch(e) {
        this.setState({
            filterQuery: e.target.value
        });
    }

    highlightCounted(name) {
        let value = this.state.filterQuery;

        if (!value.length) return name;

        return (
            <span>
                {
                    name.split(value)
                        .reduce((prev, current, i) => {
                            if (!i) {
                                return [current];
                            }
                            return prev.concat(
                                <b className="highlight-counted" key={value + current}>{ value }</b>,
                                current
                            );
                        }, [])
                }
            </span>
        )
    }

    render() {
        let outTodos;

        if (this.state.storage.length) {
            outTodos = this.state.storage.filter((val) => {
                return val.name.includes(this.state.filterQuery);
            }).map((val, index) => {
                return (
                    <li key={index}
                        className={ val.is_done ? 'todo-done' : '' }
                        onDoubleClick={() => {
                            this.toggleTodoDone(val.id);
                        }}
                    >
                        { this.highlightCounted(val.name) }
                    </li>
                );
            });
            outTodos = <ol>{outTodos}</ol>;
        } else {
            outTodos = (
                <p className="text-center">No todo found :(</p>
            );
        }

        return (
            <div>
                <div>
                    <h2>This is a simple "ToDo" App</h2>
                    <hr/>
                </div>
                <div>
                    <p>
                        Search by items
                    </p>
                    <input type="search" placeholder="Type to search" onChange={this.makeSearch.bind(this)}/>
                </div>
                <div>
                    {outTodos}
                </div>

                <div>
                    <p>
                        <small>Double click on item to mark as <b>done</b></small>
                    </p>
                </div>

                <button className="full-w"
                        onClick={ this.addNewItem.bind(this) }
                >
                    Add new
                </button>
            </div>
        )
    }
}
