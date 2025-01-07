import { Suspense } from "react";
import Loading from "@/app/loading";
import CountryContent from "@/components/CountryContent";
import fetchCountry from "@/utils/fetchCountry";

export default async function CountryInfoPage({ params }) {
  const { countryCode } = await params;

  const country = await fetchCountry(countryCode);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <CountryContent country={country} />
    </Suspense>
  );
}
