import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      data:[]
    };
  }

  componentWillMount() {
   $.get(' http://192.168.1.3:3000/posts', (data, status) => {
    this.setState({data});
   });
   
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Hello world from React</h1>
          <h2>Mesajele tale sunt:</h2>
          {
            this.state.data.map((item, index)=>{
              return <p className="message" key={index}>{item.message}</p>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
