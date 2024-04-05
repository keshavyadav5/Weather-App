import React, { useState } from 'react';

function Temperature({ setCity, stats }) {
  const [value, setValue] = useState('');


  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      setCity(value);
      setValue('');
    }
  };

  return (
    <div className='temperature'>
      <div className="temperature-inp">
        <input
          type="text"
          placeholder='Enter your city name'
          defaultValue={"Kathmandu"}
          onChange={onChangeHandler}
          onKeyUp={onKeyUp}
        />

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bas" style={{ width: "20px", marginLeft: "5px" }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      </div>
      <div className="temperature-icon bas">
        {
          stats.isDay === 0 ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bas" style={{ width: "40px", marginBottom: "10px" }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bas" style={{ width: "40px", marginBottom: "10px" }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
        }

      </div>
      <div className="data">
        <div className="degree">{stats.temp}</div>
        <div className="unit-deg">&#176;C</div>
      </div>
      <h2>{stats.condition}</h2>
      <p>Today <span> {stats.time}</span></p>
      <div className="location">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bas" style={{ width: "20px", marginRight: "5px" }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <p>{stats.location}</p>
      </div>
    </div>
  );
}

export default Temperature;
