import React from 'react';
import { Line } from 'rc-progress';

function Hilights({ stats }) {
  return (
    <div style={{
      backgroundColor: "#1d213a", display: "flex", width: "150px", flexDirection: "column", padding: "10px", justifyContent: "center", alignItems: "center", borderRadius: "3px"
    }}>
      <h2 style={{ fontSize: "14px" }}>{stats.title}</h2>
      <div style={{ marginTop: "2px" }}>
        <span style={{ fontSize: "20px" }}>{stats.value}</span>
        <span style={{ fontSize: "15px", marginLeft: "3px" }}>{stats.unit}</span>
      </div>
      {
        stats.direction ? (
          <div style={{ marginTop: "4px", display: "flex" }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{ width: "20px" }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            <div style={{ marginLeft: "2px" }}>E</div>
          </div>
        ) : null
      }
      {
        stats.title === "Humidity" ? (
          <Line percent={stats.value} strokeWidth={4} strokeColor="#D3D3D3" style={{ width: "40px" }} />
        ) : null
      }
    </div>
  );
}

export default Hilights;
