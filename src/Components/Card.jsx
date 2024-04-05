import React from 'react'
import { Line } from 'rc-progress';

function Card({ stats }) {
  return (
    <div className='cards'>
      <h3>{stats.title}</h3>
      <div className="card-temp" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="sped">{stats.value}</div>
        <div className="unit">{stats.unit}</div>
      </div>
      {
        stats.title == "Wind Status" ? (
          <div className="direction" style={{ display: "flex" }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{ width: '20px', marginRight: "5px" }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>

            <p style={{ fontSize: "10px" }}>{stats.direction}</p>
          </div>
        ) : null
      }
      {
        stats.title == "Humidity" ?
          (
            <Line percent={stats.value} strokeWidth={4} strokeColor="#D3D3D3" />
          ) : null
      }
    </div>
  )
}

export default Card