
mapboxgl.accessToken = 'pk.eyJ1IjoiaW5hMSIsImEiOiJjbHRwcmI2amYwczZtMmlwbXV6amJjbjMyIn0.E7ZrE-1WDH0IvOXL9g6J7w';
// To restrict panning 
const bounds = [
    [33.31575211, 35.22254036], // Southwest coordinates
    [33.339805618, 35.25102940] // Northeast coordinates
];

const map = new mapboxgl.Map({
	container: 'map', 
	style: 'mapbox://styles/ina1/clvfmykxj015h01qp8ufsbwmk', 
	zoom: 15, 
    minZoom: 16,
    //Enable later
    bearing: 23.2,
    pitch: 46,
    maxBounds: bounds
    
});


map.on('load', () => {

const nav = new mapboxgl.NavigationControl({
    visualizePitch: false
})
map.addControl(nav, 'bottom-right');
        map.addSource('points', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'properties': {'description':
                        '<strong>Faculty of Engineering</strong><p> <a href="https://tour.panoee.com/6543d2d34eb4d66bb130d466/6543d5b7ab514b9e5ccd02de" target=" _blank" title=" Opens in a new window" >Take a tour</a> </p>',
                    
                },
                        'geometry': {
                            'type': 'Point',
                            'coordinates':[33.31992,35.226911],
                        }
                    },

                    {
                        'type': 'Feature',
                        'properties': {'description':
                        '<strong>Faculty of Vertinary Medicine</strong><p> <a href="http://madmens5finale.eventbrite.com/"  target=" _blank" title=" Opens in a new window" > Take a tour </a> </p>',
                        
                        
                },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [33.318891,35.226999]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {'description':
                        '<strong>Near East University Hospital</strong><p>  <a href="https://tour.panoee.com/654e6487d8c0de839a6735e2/654e64f4d747fd43b41c2fd9" target=" _blank" title=" Opens in a new window"> Neu Hospital</a>    </p>',
                        
                    },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [33.319999,35.22879]
                        }
                    },

                    {
                        'type': 'Feature',
                        'properties': {'description':
                        '<strong>Faculty of Medicine </strong><p>   <a href= "https://tour.panoee.com/6545363b59dd512ab75b9e43/654537b159dd51710b5b9e75" target=" _blank" title=" Opens in a new window" > Take a tour</a> </p>',
                        
                    },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [33.31947064,35.22775]
                        }
                    },

                    {
                        'type': 'Feature',
                        'properties': {'description':
                        '<strong>Near East Lake</strong><p> <a href=  https://tour.panoee.com/65dfb3b494b642d9e115cfe2/65dfb4367a73f274fe4da8ab target=" _blank" title=" Opens in a new window" > lake </a> </p>',
                        
                    },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [33.321200,35.226621]
                        }
                    },

                    {
                        'type': 'Feature',
                        'properties': {'description':
                        '<strong>Faculty of Densitry</strong><p> <a href=  https://tour.panoee.com/656ded4cd747fd62681d1336/656dee23d8c0de4f596811c6 target=" _blank" title=" Opens in a new window"> Take a tour </a>    </p>',
                        
                    },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [33.32179849,35.22859124]
                        }
                    },

                    {
                        'type': 'Feature',
                        'properties': {'description':
                        '<strong>Faculty of Pharmacy </strong><p> <a href=  https://tour.panoee.com/655e70c7d8c0de8dd6679ed2/655e7171d8c0def22d679ee4 target=" _blank" title=" Opens in a new window"> Take a tour</a>    </p>',
                        
                    },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [33.3218539,35.229119]
                        }
                    },

                     {
                        'type': 'Feature',
                        'properties': {'description':
                        '<strong>Faculty of Health and Science</strong><p> <a href=https://tour.panoee.com/65c6474b01a42077b5de295b/65c64a1001a42021b3de2973 target=" _blank" title=" Opens in a new window"> Take a tour</a>    </p>',
                        
                    },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [33.3207444,35.2296959]
                        }
                    },


                    {
                        'type': 'Feature',
                        'properties': {'description':
                        '<strong>Faculty of Open and Distance Education</strong><p> <a href=https://tour.panoee.com/654b3de0d8c0deb015671e08 target=" _blank" title=" Opens in a new window"> Take a tour</a>    </p>',
                        
                    },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [33.32286126,35.229942]
                        }
                    },

                    
                    {
                        'type': 'Feature',
                        'properties': {'description':
                        '<strong>Library </strong><p> <a href=https://tour.panoee.com/655e2dbdd8c0de9b92679d75/655e2e3cd8c0de2a0d679d92 target=" _blank" title=" Opens in a new window"> Take a tour</a>    </p>',
                        
                    },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [33.32734169,35.225288]
                        }
                    },


                    {
                        'type': 'Feature',
                        'properties': {'description':
                        '<strong>Near East Mosque</strong><p> <a href=https://tour.panoee.com/654e5f93d747fd07c31c2f7f/654e5fb5d8c0de0fe56735b4 target=" _blank" title=" Opens in a new window"> Take a tour</a>    </p>',
                        
                    },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [33.3235528,35.221938]
                        }
                    },

                    {
                        'type': 'Feature',
                        'properties': {'description':
                        '<strong>Faculty of Communication</strong><p> <a href=https://tour.panoee.com/656defa5d8c0de211a6811d0/656defd2d747fd6eff1d1363 target=" _blank" title=" Opens in a new window"> Take a tour</a>    </p>',
                        
                    },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [33.3253987,35.2239846]
                        }
                    },

                    {
                        'type': 'Feature',
                        'properties': {'description':
                        '<strong> Near East Car Museum</strong><p> <a href=https://tour.panoee.com/6580afcad747fd390c1d7aa0 target=" _blank" title=" Opens in a new window"> Take a tour</a>    </p>',
                        
                    },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [33.3225121,35.2251647]
                        }
                    },




                    
                ]
            }
        });
        // circle layer
        map.addLayer({
            'id': 'circle',
            'type': 'circle',
            'source': 'points',
            
            'paint': {
                'circle-color': '#4264fb',
                'circle-radius': 6.5,
                'circle-stroke-width': 1,
                'circle-stroke-color': '#ffffff'
                
            }
        });

        // Center the map on the coordinates of any clicked circle from the 'circle' layer.
        map.on('click', 'circle', (e) => {
            
            const coordinates = e.features[0].geometry.coordinates.slice();
            const description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
        });

       
        map.on('mouseenter', 'circle', () => {
            map.getCanvas().style.cursor = 'pointer';
        });

        
        map.on('mouseleave', 'circle', () => {
            map.getCanvas().style.cursor = '';
        });
    });




   
   map.on('load', () => {
    map.addSource('buildings', {
        type: 'geojson',
        data: 'buildings.geojson' 
    });

    map.addLayer({
        id: 'buildings-layer',
        type: 'fill-extrusion',
        source: 'buildings',
        paint: {
            'fill-extrusion-color': 'transparent',
            'fill-extrusion-height': ['get', 'height'],
            'fill-extrusion-base': 0,
            'fill-extrusion-opacity': 0.1
        }
    });

    map.on('click', 'buildings-layer', (e) => {
        const coordinates = e.lngLat;
        const feature = e.features[0];
        const description = feature.properties.description || 'No description available';

        while (Math.abs(e.lngLat.lng - coordinates.lng) > 180) {
            coordinates.lng += e.lngLat.lng > coordinates.lng ? 360 : -360;
        }

        map.flyTo({
            center: coordinates,
            zoom: 18,
            bearing: 5,
            pitch: 20
        });

        const sidebar = document.getElementById('sidebar');
        sidebar.innerHTML = description;
        sidebar.classList.remove('hidden');
        sidebar.classList.add('visible');
    });

    map.on('mouseenter', 'buildings-layer', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'buildings-layer', () => {
        map.getCanvas().style.cursor = '';
    });

    map.on('click', (e) => {
        if (!map.queryRenderedFeatures(e.point, { layers: ['buildings-layer'] }).length) {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.remove('visible');
            sidebar.classList.add('hidden');
        }
    });

   // Just remove something
    map.on('click', 'points-layer', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        const sidebar = document.getElementById('sidebar');
        sidebar.innerHTML = description;
        sidebar.classList.remove('hidden');
        sidebar.classList.add('visible');
    });

    map.on('mouseenter', 'points-layer', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'points-layer', () => {
        map.getCanvas().style.cursor = '';
    });
});

