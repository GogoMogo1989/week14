import React, { useEffect, useState} from 'react'

const ButtonWithHook = () => {

  const [key1, setKey1] = useState("this is the default state of a class component");
  const [key2, setKey2] = useState(0);
  const [countries, setCountries] = useState([]);

         useEffect(
           () => {
             console.log("render")
              fetch('https://restcountries.com/v3.1/all')
                .then(res => res.json())
                .then(countriesData => setCountries(countriesData))
           },
           []
         )

  return (
    <div>
        <button onClick={() => setKey1("heyehuya")}>
            {key1}
        </button>
        <button onClick={() => setKey2(1)}>
            {key2}
        </button>
        <div className="countries">
          {countries.map((country, index) => <div key={index}>{country.name.common}</div>)}
        </div>
    </div>
  )
}

export default ButtonWithHook