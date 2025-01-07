export default async function fetchCountry(countryCode) {
    const res = await fetch(`${process.env.API_URL}/country/${countryCode}`, {
        cache: 'no-store',
    });
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    return await res.json();
}