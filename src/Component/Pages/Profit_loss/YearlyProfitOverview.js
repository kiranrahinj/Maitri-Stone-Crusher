import React, { useState, useEffect, useMemo } from 'react';
import api from "../../Axios/Api";
import Loader from "../../Loader"
import { useDispatch } from 'react-redux';
import { setDate } from '../../Redux/Slices/DateSlice';

const YearlyProfitOverview = () => {
  const [yearlyProfits, setYearlyProfits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch=useDispatch();
  
  const handleMonthClick = (startOfMonth, endOfMonth) => {
    console.log(startOfMonth,endOfMonth);
    dispatch(setDate({startOfMonth,endOfMonth}));
  };

  // Function to fetch yearly profits for the last 12 completed months
  const fetchMonthlyProfits = async () => {
    const today = new Date();
    const profits = [];
    const completedYear = today.getFullYear(); // Current month is not completed yet

    for (let monthOffset = completedYear; monthOffset >=2024; monthOffset--) {
      const startOfMonth = new Date(monthOffset, 1, 1);
      const endOfMonth = new Date(monthOffset, 12, 31); // Last day of the month

      try {
        const response = await api.get(`/user/profit/many`, {
          params: {
            startOfMonth: startOfMonth.toISOString().split('T')[0],
            endOfMonth: endOfMonth.toISOString().split('T')[0],
          },
        });
        profits.push({
          startOfMonth: startOfMonth.toISOString().split('T')[0],
          endOfMonth: endOfMonth.toISOString().split('T')[0],
          month: startOfMonth.toLocaleString('default', { year: 'numeric' }),
          amount: response.data,
        });
      } catch (error) {
        console.error('Error fetching yearly profits:', error);
        setError('Error fetching data.'); // Set error message
      }
   
    }
    
    setYearlyProfits(profits);
    setLoading(false); // Stop loading after fetching data
  };
  useEffect(() => {
    fetchMonthlyProfits();
  }, []); // Empty dependency array ensures it only runs on mount

  // Memoize the rendered profits to avoid unnecessary re-renders
  const renderedProfits = useMemo(() => {
    return yearlyProfits.map((profit, index) => (
      <div
        key={index}
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          width: '100%',
          marginBottom: '1.5rem',
          textAlign: 'center',
          padding: '1.5rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={() => handleMonthClick(profit.startOfMonth, profit.endOfMonth)}

        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        }}
      >
        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: '#333' }}><b>{profit.month}</b></h3>
        <p style={{ fontSize: '2.5rem', fontWeight: '600', color: profit.amount >= 0 ? '#4CAF50' : '#F44336' }}>
          {profit.amount}
        </p>
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '5px',
            width: '60%',
            borderRadius: '5px',
            backgroundColor: profit.amount >= 0 ? '#4CAF50' : '#F44336',
          }}
        />
      </div>
    ));
  }, [yearlyProfits]); // Recompute when monthlyProfits changes

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem', color: '#333' }}>Yearly Profit Overview</h2>
      {loading ? ( // Show loading indicator while fetching
        <Loader/>
      ) : error ? ( // Show error message if there was an error
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#F44336' }}>{error}</p>
      ) : yearlyProfits.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {renderedProfits}
        </div>
      ) : (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#888' }}>No yearly profit data available.</p>
      )}
    </div>
  );
};
export default YearlyProfitOverview;