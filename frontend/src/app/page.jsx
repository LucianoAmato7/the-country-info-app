import Link from "next/link";

export default async function Home() {
  const res = await fetch(`${process.env.API_URL}/countries`, {
    cache: "no-store",
  });
  const countries = await res.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-6">Countries</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <Link
            href={`/country/${country.countryCode}`}
            key={country.countryCode}
          >
            <div className="hover:bg-gray-100 transition-colors">
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

// export async function getStaticProps() {
//   const res = await fetch(`${apiUrl}/countries`);
//   const countries = await res.json();

//   return {
//       props: {
//           countries,
//       },
//   };
// }
