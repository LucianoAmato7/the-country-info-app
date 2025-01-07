export default async function fetchCountries() {
  const res = await fetch(`${process.env.API_URL}/countries`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.API_KEY,
    },
    cache: "no-store",
  });
  return res.json();
}
