import React from 'react';

const FindDoctorsHeader = ({ onFilterClick, onViewMapClick }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '1rem 2rem',
      backgroundColor: '#f8f9fa'
    }}>
      {/* Left side - Title and subtitle */}
      <div>
        <h1 style={{
          margin: 0,
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#333'
        }}>
          Find Doctors
        </h1>
        <p style={{
          margin: '0.25rem 0 0 0',
          fontSize: '0.875rem',
          color: '#666',
          maxWidth: '400px'
        }}>
          Search and book appointments with qualified healthcare professionals
        </p>
      </div>

      {/* Right side - Action buttons */}
      <div style={{
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'center'
      }}>
        <button
          onClick={onFilterClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            border: '1px solid #ddd',
            borderRadius: '0.375rem',
            backgroundColor: '#fff',
            color: '#333',
            fontSize: '0.875rem',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#f5f5f5';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#fff';
          }}
        >
          🔽 Filters
        </button>
        
        <button
          onClick={onViewMapClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            border: '1px solid #ddd',
            borderRadius: '0.375rem',
            backgroundColor: '#fff',
            color: '#333',
            fontSize: '0.875rem',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#f5f5f5';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#fff';
          }}
        >
          📍 View on Map
        </button>
      </div>
    </div>
  );
};

export default FindDoctorsHeader;
