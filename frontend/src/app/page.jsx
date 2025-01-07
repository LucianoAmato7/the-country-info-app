import CountriesContent from "@/components/CountriesContent";
import fetchCountries from "@/utils/fetchCountries";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  const countries = await fetchCountries();

  if (!countries) {
    return <div>Countries not found</div>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <CountriesContent countries={countries} />
    </Suspense>
  );
}
