import Link from 'next/link'
import Image from 'next/image'
import { apiUrl } from '../../../../config/env.config';

export default function CountryInfoPage({ country }) {

  if (!country) {
    return <div>Country not found</div>
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <Image src={country.flagUrl} alt={`${country.countryName} flag`} width={64} height={40} className="mr-4" />
        <h1 className="text-3xl font-bold">{country.countryName}</h1>
      </div>

      <div className="mb-6">
        <header>
          <h1>Border Countries</h1>
        </header>
        <div>
          <div className="flex flex-wrap gap-2">
            {country.borderCountries.map((border) => (
              <Link 
                href={`/country/${border.countryCode}`} 
                key={border.countryCode}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors"
              >
                {border.commonName}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* <Card>
        <CardHeader>
          <CardTitle>Population Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <PopulationChart data={country.populationData} />
        </CardContent>
      </Card> */}
    </div>
  )
}

export async function getServerSideProps({ params }) {
  
  const res = await fetch(`${apiUrl}/country/${params.countryCode}`);
  const country = await res.json();

  return {
      props: {
          country,
      },
  };
}