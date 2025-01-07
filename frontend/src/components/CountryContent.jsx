import Image from "next/image";
import Link from "next/link";
import PopulationChart from "./PopulationChart";

export default function CountryContent({ country }) {
    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center mb-6">
                <Image src={country.flagUrl} alt={`${country.countryName} flag`} width={64} height={40} className="mr-4" />
                <h1 className="text-4xl font-bold">{country.countryName}</h1>
            </div>

            <div className="mb-6 p-4 rounded-lg border border-gray-200">
                <header className='mb-4'>
                    <h2 className="font-bold text-2xl">Border Countries</h2>
                </header>
                <div>
                    <div className="flex flex-wrap gap-2">
                        {country.borderCountries.length > 0 ? (

                            country.borderCountries.map((border) => (
                                <Link 
                                    href={`/country/${border.countryCode}`} 
                                    key={border.countryCode}
                                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors"
                                >
                                    {border.commonName}
                                </Link>
                            ))
                            
                        ) : (
                            <span>No border countries</span>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-4 rounded-lg border border-gray-200">
                <PopulationChart data={country.populationData} />
            </div>

        </div>
    );
}