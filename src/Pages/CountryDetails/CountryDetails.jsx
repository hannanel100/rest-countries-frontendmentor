import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCountriesQuery } from "../../Hooks/useCountriesQuery";
import { ThemeContext } from "../../Context/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { BorderingCountry } from "../../Components/BorderingCountry/BorderingCountry";
export const CountryDetails = () => {
  const { darkToggle } = useContext(ThemeContext);
  const { countryName } = useParams();
  const navigate = useNavigate();
  const { data } = useCountriesQuery();
  const country = data?.find((country) => {
    return country.name.common === countryName;
  });
  console.log(
    "🚀 ~ file: CountryDetails.jsx:7 ~ CountryDetails ~ country",
    country
  );
  return (
    <main
      className={`flex flex-col justify-center mx-auto w-5/6 h-4/5 mt-4 overflow-hidden ${
        darkToggle ? "dark" : "light"
      }`}
    >
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        {/* font awesome back arrow */}
        <FontAwesomeIcon icon={faArrowLeft} /> <span>Back</span>
      </div>
      <div className="flex flex-col lg:flex-row gap-11 lg:gap-36 justify-center items-center mx-auto h-full grow">
        <img alt="flag" src={country.flags.png} />

        {/* a div, containing the countries name as a title, and all its information following, in 2 columns. on the bottom, the border countries */}
        <div className="flex flex-col">
          <h1 className="text-[22px] md:text-[32px] font-bold">
            {country.name.common}
          </h1>
          <div>
            <div>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className={`font-bold`}>
                    Native Name:
                    <span className={`font-normal`}>
                      {Object.values(country.name.nativeName).map(
                        (name) => name.common
                      )}
                    </span>
                  </p>
                  <p className={`font-bold`}>
                    Population:
                    <span className={`font-normal`}>
                      {new Intl.NumberFormat().format(country.population)}
                    </span>
                  </p>
                  <p className={`font-bold`}>
                    Region:{" "}
                    <span className={`font-normal`}> {country.region}</span>
                  </p>
                  <p className={`font-bold`}>
                    Sub Region:{" "}
                    <span className={`font-normal`}> {country.subregion}</span>
                  </p>
                  <p className={`font-bold`}>
                    Capital:{" "}
                    <span className={`font-normal`}> {country.capital}</span>
                  </p>
                </div>
                <div>
                  <p className={`font-bold`}>
                    Top Level Domain:{" "}
                    <span className={`font-normal`}> {country.tld}</span>
                  </p>

                  <p className={`font-bold`}>
                    Currencies:
                    {Object.values(country.currencies).map(
                      (currency, index) => {
                        return (
                          <span key={currency} className={`font-normal`}>
                            {" "}
                            {currency.name}
                            {index ===
                            Object.values(country.currencies).length - 1
                              ? ""
                              : ","}
                          </span>
                        );
                      }
                    )}
                  </p>

                  <p className={`font-bold`}>
                    Languages:
                    {Object.values(country.languages).map((language, index) => {
                      return (
                        <span key={language} className={`font-normal`}>
                          {language}{" "}
                          {index === Object.values(country.languages).length - 1
                            ? ""
                            : ","}
                        </span>
                      );
                    })}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="font-bold">Border Countries:</span>
                <div className="flex flex-wrap align-center justify-start md:justify-center gap-2.5">
                  {country?.borders?.map((border) => {
                    return <BorderingCountry name={border} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
