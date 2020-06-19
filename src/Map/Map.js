import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import config from '../config';
import CourseContext from '../CourseContext'
import './Map.css';


function DisplayMap(props) {

    let coursesContext= React.useContext(CourseContext);

    let [selectedCourse, setSelectedCourse] = useState(null);

    //setting center and zoom as global variables so it may be updated
    let center = ({lat: 41.256538, lng: -95.934502});
    let zoom = 4;

    //using courseContext to change the location of where the map zooms, based on
    //the user's input and the results
    if (coursesContext.courses && coursesContext.courses.length) {
        center = ({lat: parseFloat(coursesContext.courses[0].latitude), lng:  parseFloat(coursesContext.courses[0].longitude) })
        zoom = 8
    };

    return (
        <div>
            <GoogleMap 
                zoom={zoom} 
                center={center}
            >
  
              {coursesContext.courses.map(course => (
                  //mapping over results from courseContext
                    <Marker 
                        key={course.course_id} 
                        position={{ 
                            lat: parseFloat(course.latitude),
                            lng: parseFloat(course.longitude)
                        }}
                        onClick={() => {
                            setSelectedCourse(course);
                        }}
                        icon={{
                            url: '/images/map_icon.jpg',
                            scaledSize: new window.google.maps.Size(30, 30)
                        }}
                    />
              ))}
              {selectedCourse &&  (
                  //selected course brings up an infowindow and displays the course name
                  <InfoWindow
                    position={{ 
                        lat: parseFloat(selectedCourse.latitude),
                        lng: parseFloat(selectedCourse.longitude)
                    }}
                    onCloseClick={() => {
                        setSelectedCourse(null);
                    }}
                  >
                      
                      <div>
                        <h3>{selectedCourse.course_name}</h3>
                      </div>
                  </InfoWindow>
              )}

            </GoogleMap>    
        </div>
    );
};
    const WrappedMap = withScriptjs(withGoogleMap(DisplayMap))

export default function Map() {
    return (
        <div className="map">
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.API_KEY}`}
                loadingElement={<div className="loadingElement" />}
                containerElement={<div className="containerElement" />}
                mapElement={<div className="mapElement" />}
            />
        </div>
    );
};