export const loadCountries = () => {
  return fetch("https://restcountries.com/v2/all").then((res) => res.json());
};

export const loadCountry = (id) => {
  return fetch(`https://restcountries.com/v2/name/${id}`).then((res) =>
    res.json()
  );
};

