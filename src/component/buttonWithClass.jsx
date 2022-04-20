import React, { Component } from 'react';

class ButtonWithClass extends Component {
    constructor() {
        super() //ezzel kötjük össze a kettő class-t
        this.state = { //ezzel mutatunk vissza a leendő objectumra.
            key1:"this is the default state of a class component",
            key2:0
        }
        
    }
    render() {
        return (
            <div>
               <button onClick={() => this.setState({key1:"heyehuya"})}>
                    {this.state.key1}
               </button>
               <button onClick={() => this.setState({key2:1})}>
                    {this.state.key2}
               </button>
            </div>
        );
    }
}

export default ButtonWithClass;