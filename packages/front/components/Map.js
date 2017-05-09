import { GOOGLE_API_MAP_KEY } from '../config';
import GoogleMapReact from 'google-map-react';
import { Component } from 'react';

const Marker = ({ address, displayMarker }) => (
  <a target="_blank" href={`https://www.google.com/maps/place/${address}`}>
    {displayMarker ? <img src="/static/avocado-pin.png" width="24" style={{top: -12, position: 'relative'}} /> : null}
  </a>
);

export default class Map extends Component {
  static defaultProps = {
    center: [48.8566, 2.3522], // Ici c'est Paris
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{
          key: GOOGLE_API_MAP_KEY,
          language: 'en',
        }}
      >
        <Marker
          {...this.props.location}
          address={this.props.address}
          displayMarker={!!this.props.location}
        />
      </GoogleMapReact>
    );
  }
}
