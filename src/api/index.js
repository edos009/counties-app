export const loadCountries = () => {
  return fetch("https://restcountries.com/v2/all").then((res) => res.json());
};
