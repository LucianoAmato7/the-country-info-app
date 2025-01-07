import Link from "next/link";

export default async function Home() {  
  const res = await fetch(`${process.env.API_URL}/countries`, {
    cache: "no-store",
  });
  const countries = await res.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-6">Countries</h1>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {countries.map((country) => (
          <Link
            href={`/country/${country.countryCode}`}
            key={country.countryCode}
          >
            <div className="hover:bg-gray-100 transition-colors border border-gray-200 rounded-md p-4">
              <header>
                <h2>{country.name}</h2>
              </header>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
