import Icons from "@/utils/icons";
import Link from "next/link";

export default function CountriesContent({ countries }) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-6">
        <Icons.World className="text-5xl text-black mr-3" />
        <h1 className="text-5xl font-bold">Countries</h1>
      </div>
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
