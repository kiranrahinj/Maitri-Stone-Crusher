import React, { useState, useEffect, useMemo } from 'react';
import api from "../../Axios/Api";

export const DailyProfitOverview = () => {
  const [dailyProfits, setDailyProfits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch daily profits for the last 10 days
  const fetchDailyProfits = async () => {
    const today = new Date();
    const profits = [];

    // Calculate the last 10 days
    for (let dayOffset = 0; dayOffset < 5; dayOffset++) {
      const date = new Date();
      date.setDate(today.getDate() - dayOffset); // Set date to today - dayOffset

      try {
        const response = await api.get(`/user/profit/day`, {
          params: {
            date: date.toISOString().split('T')[0],
          },
        });
        profits.push({
          date: date.toLocaleDateString(),
          amount: response.data,
        });
      } catch (error) {
        console.error('Error fetching daily profits:', error);
        setError('Error fetching data.'); // Set error message
      }
    }

    setDailyProfits(profits);
    setLoading(false); // Stop loading after fetching data
  };

  useEffect(() => {
    fetchDailyProfits();
  }, []); // Empty dependency array ensures it only runs on mount

  // Memoize the rendered profits to avoid unnecessary re-renders
  const renderedProfits = useMemo(() => {
    return dailyProfits.map((profit, index) => (
      <div
        key={index}
        style={styles.card}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        }}
      >
        <p style={styles.date}>{profit.date}</p>
        <p style={{ ...styles.amount, color: profit.amount >= 0 ? '#4CAF50' : '#F44336' }}>
          ${profit.amount.toFixed(2)}
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
  }, [dailyProfits]); // Recompute when dailyProfits changes

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Daily Profit Overview - Last 5 Days</h2>
      {loading ? ( // Show loading indicator while fetching
        <p style={styles.loading}>Loading...</p>
      ) : error ? ( // Show error message if there was an error
        <p style={styles.error}>{error}</p>
      ) : dailyProfits.length > 0 ? (
        <div style={styles.profitContainer}>
          {renderedProfits}
        </div>
      ) : (
        <p style={styles.noData}>No daily profit data available.</p>
      )}
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9', // Match with MonthlyProfitOverview
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    fontSize: '2.5rem', // Match with MonthlyProfitOverview
    fontWeight: '700',
    marginBottom: '2rem',
    color: '#333',
  },
  loading: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#888',
  },
  error: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#F44336',
  },
  noData: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#888',
  },
  profitContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    width: '100%',
    marginBottom: '1.5rem',
    textAlign: 'center',
    padding: '1.5rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)', // Match with MonthlyProfitOverview
    transition: 'transform 0.3s, box-shadow 0.3s',
    position: 'relative',
    overflow: 'hidden',
  },
  date: {
    fontSize: '1rem',
    color: '#777',
    marginBottom: '0.5rem',
  },
  amount: {
    fontSize: '2.5rem', // Match with MonthlyProfitOverview
    fontWeight: '600',
  },
};
