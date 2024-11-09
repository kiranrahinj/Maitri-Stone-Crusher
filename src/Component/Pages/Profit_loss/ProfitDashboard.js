import React from 'react';
import { DailyProfitOverview } from './DailyProfitOverview'; // Import your daily profit component
import { MonthlyProfitOverview } from './MonthlyProfitOverview'; // Import your monthly profit component
import { UserSpendingOverview } from './UserSpendingOverview'; // Import your user spending component

export const ProfitDashboard = () => {
  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.header}>Profit Dashboard</h1>
      <div style={styles.gridContainer}>
        <div style={{ ...styles.card, ...styles.monthlyProfitCard }}>
          <MonthlyProfitOverview />
        </div>
        <div style={{ ...styles.card, ...styles.dailyProfitCard }}>
          <DailyProfitOverview />
        </div>
        <div style={{ ...styles.card, ...styles.userSpendingCard }}>
          <UserSpendingOverview />
        </div>
      </div>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    padding: '2rem',
    width: '100%', // Full width on larger screens
    maxWidth: '1200px', // Max width for the dashboard
    margin: '0 auto',
    backgroundColor: '#e7f1f8', // Light blue-gray background for a soothing effect
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '2rem',
    color: '#2c3e50', // Darker text for better contrast
  },
  gridContainer: {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  },
  card: {
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: '#333',
    backgroundColor: '#ffffff', // White card background
  },
  monthlyProfitCard: {
    borderLeft: '4px solid #3498db', // Blue border for the monthly profit card
    backgroundColor: '#ecf6fc', // Light blue background for the card
  },
  dailyProfitCard: {
    borderLeft: '4px solid #27ae60', // Green border for the daily profit card
    backgroundColor: '#f0fdf4', // Light green background for the card
  },
  userSpendingCard: {
    borderLeft: '4px solid #f39c12', // Orange border for the user spending card
    backgroundColor: '#fff9e6', // Light orange background for the card
  },
};

export default ProfitDashboard;
