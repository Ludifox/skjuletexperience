//ICON
        const boatIcon = L.icon({
            iconUrl: 'img/icons/water-transportation-100.png',
            iconSize: [100,100],
            iconAnchor: [50,50],
            popupAnchor: [0, -20]
        })
        const cubaIcon = L.icon({
            iconUrl: 'img/icons/explosion-100.png',
            iconSize: [100,100],
            iconAnchor: [90,50],
            popupAnchor: [0, -20]
        })
        const haldenIcon = L.icon({
            iconUrl: 'img/icons/home-address-100.png',
            iconSize: [100,100],
            iconAnchor: [90,50],
            popupAnchor: [0, -20]
        })
        //INITIAL POSITIONS
        const haldenLat = 59.0688
        const haldenLong = 11.4320
        const cubaLat = 22.9119
        const cubaLong = -80.0723
        //CALCULATE CENTER
        let srcLatRad = haldenLat  * (Math.PI / 180);
        let dstLatRad = cubaLat  * (Math.PI / 180);
        let middleLatRad = Math.atan(Math.sinh(Math.log(Math.sqrt(
        (Math.tan(dstLatRad)+1/Math.cos(dstLatRad))*(Math.tan(srcLatRad)+1/Math.cos(srcLatRad))))));
        let middleLat = middleLatRad * (180 / Math.PI)
        let middleLong = (haldenLong + cubaLong) / 2;
        //INITIATE MAP
        let map = L.map('mapContainer', {
            center: [middleLat, middleLong],
            zoom: 3,
            scrollWheelZoom: false
        })
        //SET MAP CONSTRUCTOR
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 30,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        //ADD MARKERS AND PATH
        const centerMarker = L.marker([middleLat, middleLong], {icon: boatIcon}).addTo(map)
        
        const cubaMarker = L.marker([cubaLat, cubaLong], {icon: cubaIcon}).addTo(map).bindPopup("Krise på Cuba - Sagua La Grande, Cuba")
        const haldenCubaPath = L.polyline([[haldenLat,haldenLong],[cubaLat,cubaLong]], {color: '#1A6383', weight: '2',  dashArray: '5, 5', dashOffset: '5'}).addTo(map)