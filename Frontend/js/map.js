// Map functionality for selecting restaurant location
(function() {
    'use strict';
    
    let map;
    let marker;
    let selectedLocation = null;
    let selectedAddress = '';
    
    // Initialize map modal
    function initMapModal() {
        const mapModal = document.getElementById('mapModal');
        const closeBtn = document.getElementById('closeMapModal');
        const cancelBtn = document.getElementById('cancelLocationBtn');
        const saveBtn = document.getElementById('saveLocationBtn');
        const sidebarBtn = document.getElementById('sidebarLocationBtn');
        const heroBtn = document.getElementById('heroLocationBtn');
        
        // Open modal handlers
        if (sidebarBtn) {
            sidebarBtn.addEventListener('click', openMapModal);
        }
        if (heroBtn) {
            heroBtn.addEventListener('click', openMapModal);
        }
        
        // Close modal handlers
        if (closeBtn) {
            closeBtn.addEventListener('click', closeMapModal);
        }
        if (cancelBtn) {
            cancelBtn.addEventListener('click', closeMapModal);
        }
        if (saveBtn) {
            saveBtn.addEventListener('click', saveLocation);
        }
        
        // Close on outside click
        if (mapModal) {
            mapModal.addEventListener('click', function(e) {
                if (e.target === mapModal) {
                    closeMapModal();
                }
            });
        }
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mapModal.classList.contains('active')) {
                closeMapModal();
            }
        });
    }
    
    // Open map modal
    function openMapModal() {
        const mapModal = document.getElementById('mapModal');
        if (mapModal) {
            mapModal.classList.add('active');
            // Initialize map if not already initialized
            if (!map) {
                initMap();
            } else {
                // Reset map view
                map.setView([50.4501, 30.5234], 13);
            }
        }
    }
    
    // Close map modal
    function closeMapModal() {
        const mapModal = document.getElementById('mapModal');
        if (mapModal) {
            mapModal.classList.remove('active');
        }
    }
    
    // Initialize Leaflet map
    function initMap() {
        // Default location (Kyiv, Ukraine)
        const defaultLat = 50.4501;
        const defaultLng = 30.5234;
        
        // Create map
        map = L.map('map').setView([defaultLat, defaultLng], 13);
        
        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(map);
        
        // Add click handler to map
        map.on('click', function(e) {
            const lat = e.latlng.lat;
            const lng = e.latlng.lng;
            
            // Remove existing marker
            if (marker) {
                map.removeLayer(marker);
            }
            
            // Add new marker
            marker = L.marker([lat, lng]).addTo(map);
            
            selectedLocation = { lat: lat, lng: lng };
            
            // Update coordinates
            document.getElementById('selectedCoords').textContent = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
            
            // Get address using reverse geocoding (using Nominatim API)
            getAddressFromCoordinates(lat, lng);
        });
        
        // Try to get user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    map.setView([lat, lng], 13);
                    
                    // Add marker at current location
                    if (marker) {
                        map.removeLayer(marker);
                    }
                    marker = L.marker([lat, lng]).addTo(map);
                    
                    selectedLocation = { lat: lat, lng: lng };
                    document.getElementById('selectedCoords').textContent = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
                    getAddressFromCoordinates(lat, lng);
                },
                function(error) {
                    console.log('Geolocation error:', error);
                }
            );
        }
    }
    
    // Get address from coordinates using Nominatim (OpenStreetMap)
    function getAddressFromCoordinates(lat, lng) {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data && data.display_name) {
                    selectedAddress = data.display_name;
                    document.getElementById('selectedAddress').textContent = selectedAddress;
                } else {
                    selectedAddress = `Координати: ${lat.toFixed(6)}, ${lng.toFixed(6)}`;
                    document.getElementById('selectedAddress').textContent = selectedAddress;
                }
            })
            .catch(error => {
                console.log('Geocoding error:', error);
                selectedAddress = `Координати: ${lat.toFixed(6)}, ${lng.toFixed(6)}`;
                document.getElementById('selectedAddress').textContent = selectedAddress;
            });
    }
    
    // Save selected location
    function saveLocation() {
        if (!selectedLocation) {
            alert('Будь ласка, оберіть локацію на карті!');
            return;
        }
        
        // Save to localStorage
        const locationData = {
            lat: selectedLocation.lat,
            lng: selectedLocation.lng,
            address: selectedAddress,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('bellissimo-selected-location', JSON.stringify(locationData));
        
        // Show success message
        alert(`Локація збережена!\nАдреса: ${selectedAddress}`);
        
        // Close modal
        closeMapModal();
        
        // Optionally refresh page or update UI
        // window.location.reload();
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMapModal);
    } else {
        initMapModal();
    }
    
    // Load saved location on page load
    window.addEventListener('DOMContentLoaded', function() {
        const savedLocation = localStorage.getItem('bellissimo-selected-location');
        if (savedLocation) {
            try {
                const location = JSON.parse(savedLocation);
                console.log('Saved location:', location);
                // You can display this in the UI if needed
            } catch (e) {
                console.error('Error parsing saved location:', e);
            }
        }
    });
})();

