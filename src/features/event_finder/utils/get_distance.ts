async function getDistance(origin: string, destination: string) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "OK") {
            const distance = data.rows[0].elements[0].distance.text; // Gets the distance text
            const duration = data.rows[0].elements[0].duration.text; // Gets the duration text
            console.log(`Distance: ${distance}, Duration: ${duration}`);
        } else {
            console.error('Error fetching distance:', data.error_message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example usage
getDistance('New York, NY', 'Los Angeles, CA');



