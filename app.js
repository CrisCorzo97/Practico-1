const countries = require("./countries.json");

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode) {
  //Complete with your code
  const countryByIso3 = countries.find((country) => country.iso3 === isoCode);

  return countryByIso3;
}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language) {
  //Complete with your code
  const countryByIso3 = countries.find((country) => country.iso3 === isoCode);
  const translate = countryByIso3.translations[language];

  return translate;
}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion) {
  //Complete with your code
  const countriesBySubregion = countries.filter(
    (country) => country.subregion === subregion
  );

  return countriesBySubregion;
}

function main() {
  console.log("///// Ejercicio 1 /////\n", getCountryByIso3("ARG"), "\n");
  console.log(
    "///// Ejercicio 2 /////\n",
    getCountryTranslatedName("ARG", "ja"),
    "\n"
  );
  console.log(
    "///// Ejercicio 3 /////\n",
    getCountriesBySubregion("South America"),
    "\n"
  );
}

main();
