import { useQuery } from "@tanstack/react-query";

export function useCountriesQuery() {
  const { data, isLoading, error } = useQuery(["countries"], async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    return response.json();
  });
  return { data, isLoading, error };
}

