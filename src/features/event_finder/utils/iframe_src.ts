export default function createIframeSrc(address: string) {
    const baseUrl = "https://www.google.com/maps/embed?pb=";

    // Encode the address for URL usage
    const encodedAddress = encodeURIComponent(address);

    // Construct the iframe src using the encoded address
    const iframeSrc = `${baseUrl}!1m18!1m12!1m3!1d0!2d-81.40723828466944!3d30.2936605817601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodedAddress}!5e0!3m2!1sen!2sus!4v1633504451234!5m2!1sen!2sus`;

    return iframeSrc;
}

// Example usage
const address = "967 Atlantic Blvd, Atlantic Beach, FL 32233, USA";
const iframeSrc = createIframeSrc(address);
console.log(iframeSrc);
