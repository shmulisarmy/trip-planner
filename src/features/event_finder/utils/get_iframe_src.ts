function createIframeSrc(address: string) {
    const baseUrl = "https://www.google.com/maps/embed?pb=";

    // Use a Geocoding API to get the latitude and longitude from the address.
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=YOUR_API_KEY`; // Replace YOUR_API_KEY with your actual Google Maps API key

    return fetch(geocodeUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === "OK" && data.results.length > 0) {
                const location = data.results[0].geometry.location;
                const lat = location.lat;
                const lng = location.lng;

                // Construct the iframe src URL using latitude and longitude
                return `${baseUrl}!1m18!1m12!1m3!1d0!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(address)}!5e0!3m2!1sen!2sus!4v1633504451234!5m2!1sen!2sus`;
            } else {
                throw new Error('Geocoding API did not return a valid result.');
            }
        })
        .catch(error => {
            console.error('Error fetching the address:', error);
        });
}

// Example usage
const address = "967 Atlantic Blvd, Atlantic Beach, FL 32233, USA";
createIframeSrc(address).then(iframeSrc => {
    console.log(iframeSrc);
});
