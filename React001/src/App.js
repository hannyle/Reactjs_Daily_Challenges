import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Input extends Component{
  render(){
    return (
    <div className="Input">
      <input 
					id={this.props.id}
					autoComplete="false"
					required
					type={this.props.type}
					placeholder={this.props.placeholder}
				/>
        <label htmlFor={this.props.id}></label>	
    </div>
    );
  }
}

class Modal extends Component{
  render(){
    return(
      <div className="Modal">
        <form className="ModalForm" onSubmit = {this.props.childrenonSubmit} >
          <Input id="name" type="text" placeholder="John Smith"/>
          <Input id="username" type="email" placeholder="johnsmith@gmail.com"/>
          <Input id="password" type="password" placeholder="password"/>
          <button> Log-in <i className="fas fa-chevron-right"></i></button>
        </form>
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={mounted: true};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({mounted: false});    
  }
  
  render() {
    let child;
    if(this.state.mounted){
      child=(
        <Modal onSubmit={this.handleSubmit}/>
      );
    }
    return (
      <div className="App">
        <ReactCSSTransitionGroup
          transitionName = "example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
           {child}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
