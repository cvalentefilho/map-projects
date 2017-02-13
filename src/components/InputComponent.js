import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput';


const google = window.google;

class InputComponent extends Component {
constructor(props) {
  super(props);
  this.state ={
    input: ''
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  
}


static propTypes = {
    placeholder: React.PropTypes.string,
    onPlacesChanged: React.PropTypes.func
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
  }

  render() {

    return(  
      <form className="box-form" onSubmit={this.handleSubmit}>
        <label>
          CEP:
           <MaskedInput mask="11111-111" ref="input" value={this.state.input} type="text" onChange={this.handleChange}  required/>
        </label>
        <input type="submit" className="button-find" value="Buscar" />
        
      </form>
      );
  }
  onPlacesChanged () {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  }
  componentDidMount() {
    var input = this.refs.input;
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }
  componentWillUnmount() {
    this.searchBox.removeListener('places_changed', this.onPlacesChanged);
  }
}

export default InputComponent;