import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import config from '../config';
//import COURSES from '../courses';
import CourseContext from '../CourseContext'
//import courses from '../courses';

function DisplayMap() {

    let coursesContext= React.useContext(CourseContext)

    let [selectedCourse, setSelectedCourse] = useState(null);

    return (
        <div>
            <GoogleMap 
                defaultZoom={8} 
                defaultCenter={{lat: 41.256538, lng: -95.934502}} 
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
        <div style={{ width: '100vw', height: '100vh' }}>
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.API_KEY}`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "300px" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    )
}


