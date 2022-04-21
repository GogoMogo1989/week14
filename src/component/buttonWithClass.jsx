import React, { Component } from 'react';

class ButtonWithClass extends Component {
    constructor() {
        super() //ezzel kötjük össze a kettő class-t, és meghívjuk a két class is egyben
        this.state = { //ezzel mutatunk vissza a leendő objectumra.
            key1:"this is the default state of a class component",
            key2:0,
            title: {
                main:"main title",
                sub: "subtitle"
            },
            countries: []
        }
        console.log("1")
    }

    componentDidMount() {
        console.log("3")
        fetch('https://restcountries.com/v3.1/all')
         .then(res => res.json())
         .then(countriesData => this.setState(
             () => {
                 return {countries: countriesData}
             },
             () => {
                 console.log(this.state)
             }
         ))
    }

    render() {
       console.log("2")
        return (
            <div>
               <button onClick={() => this.setState({key1:"heyehuya"})}>
                    {this.state.key1}
               </button>
               <button onClick={() => this.setState({key2:1})}>
                    {this.state.key2}
               </button>
              
             {/*    <button onClick={() => {
                    this.state.key2= 1
                    console.log(this.state)}}>
                 
                    {this.state.key2}
                </button> */}
           {/*       <button onClick={() => {
                     
                     this.setState({title:{
                     main:"h1", 
                     sub:"heye"}})
                     console.log(this.state)}}>
                    {this.state.title.main}
               </button> */}
               <button onClick={() => {
                     
                     this.setState(
                         () => {
                             return{
                                title:{
                                    main:"h1", 
                                    sub:"heye"}
                             }
                         },
                         () => {
                            console.log(this.state)
                         }
                     )
                     }}>
                    {this.state.title.main}
               </button>
               <div className="countries">
                   {this.state.countries.map((country, index) => <div key={index}>{country.name.common}</div>)}
               </div>
            </div>
        );
    }
}

export default ButtonWithClass;