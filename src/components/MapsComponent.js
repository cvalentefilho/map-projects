import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import MyMarker from './MarkerComponent';
import './style/myMarker.css'
import GoogleMap from 'google-map-react';

function createMapOptions(maps) {
	return {
	  panControl: false,
	  mapTypeControl: false,
	  scrollwheel: false,
	  styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
	}
}


export default class SimpleMapPage extends Component {

  static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 15,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121},
  }


  shouldComponentUpdate = shouldPureComponentUpdate;


  render() {
    return (
    	<div id="box" className="box-map">
    		<p className="street-name">Rua</p>
    		<p>Bairro</p>
    		<p>Cidade</p>
    		<p>CEP</p>
          <div className="maps">
  	       <GoogleMap 
  	        options={createMapOptions}
  	        bootstrapURLKeys={{
  	    		key: 'AIzaSyD5160CZeLGDlmJ4haAOXBwzoTPZagkOz0',
  	  		}}
  	        defaultCenter={this.props.center}
  	        defaultZoom={this.props.zoom}>
  	        <MyMarker 
  		      lat={59.938043} 
  		      lng={30.337157} 
  		    />
  	      </GoogleMap>
        </div>
      </div>
    );
  }
}