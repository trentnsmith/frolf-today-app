import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import config from '../config';
import CourseContext from '../CourseContext'
import './Map.css';


function DisplayMap(props) {

    let coursesContext= React.useContext(CourseContext)

    let [selectedCourse, setSelectedCourse] = useState(null);

    let center = ({lat: 41.256538, lng: -95.934502})
    let zoom = 4

    if (coursesContext.courses && coursesContext.courses.length) {
        center = ({lat: parseFloat(coursesContext.courses[0].latitude), lng:  parseFloat(coursesContext.courses[0].longitude) })
        zoom = 8
    }
    console.log('this is center', center)

    return (
        <div>
            <GoogleMap 
                zoom={zoom} 
                center={center}
            >

              {coursesContext.courses.map(course => (
                  
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
}
    const WrappedMap = withScriptjs(withGoogleMap(DisplayMap))

export default function Map() {
    return (
        <div style={{ width: '50vw', height: '50vh' }} className="map">
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.API_KEY}`}
                loadingElement={<div style={{ height: "25%" }} />}
                containerElement={<div style={{ height: "400px" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    )
}


