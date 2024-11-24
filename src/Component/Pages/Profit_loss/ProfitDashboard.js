// import React from 'react';
// import { DailyProfitOverview } from './DailyProfitOverview'; // Import your daily profit component
// import { MonthlyProfitOverview } from './MonthlyProfitOverview'; // Import your monthly profit component
// import { UserSpendingOverview } from './UserSpendingOverview'; // Import your user spending component

// export const ProfitDashboard = () => {
//   return (
//     <div style={styles.dashboardContainer}>
//       <h1 style={styles.header}>Profit Dashboard</h1>
//       <div style={styles.gridContainer}>
//         <div style={{ ...styles.card, ...styles.monthlyProfitCard }}>
//           <MonthlyProfitOverview />
//         </div>
//         <div style={{ ...styles.card, ...styles.dailyProfitCard }}>
//           <DailyProfitOverview />
//         </div>
//         <div style={{ ...styles.card, ...styles.userSpendingCard }}>
//           <UserSpendingOverview />
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   dashboardContainer: {
//     padding: '2rem',
//     width: '100%', // Full width on larger screens
//     maxWidth: '1200px', // Max width for the dashboard
//     margin: '0 auto',
//     backgroundColor: '#e7f1f8', // Light blue-gray background for a soothing effect
//     borderRadius: '12px',
//     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//     fontFamily: 'Arial, sans-serif',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   header: {
//     textAlign: 'center',
//     fontSize: '2.5rem',
//     fontWeight: '600',
//     marginBottom: '2rem',
//     color: '#2c3e50', // Darker text for better contrast
//   },
//   gridContainer: {
//     display: 'grid',
//     gap: '1.5rem',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
//   },
//   card: {
//     borderRadius: '8px',
//     padding: '1.5rem',
//     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s, box-shadow 0.3s',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     color: '#333',
//     backgroundColor: '#ffffff', // White card background
//   },
//   monthlyProfitCard: {
//     borderLeft: '4px solid #3498db', // Blue border for the monthly profit card
//     backgroundColor: '#ecf6fc', // Light blue background for the card
//   },
//   dailyProfitCard: {
//     borderLeft: '4px solid #27ae60', // Green border for the daily profit card
//     backgroundColor: '#f0fdf4', // Light green background for the card
//   },
//   userSpendingCard: {
//     borderLeft: '4px solid #f39c12', // Orange border for the user spending card
//     backgroundColor: '#fff9e6', // Light orange background for the card
//   },
// };

// export default ProfitDashboard;

import React from 'react';
import { MonthlyProfitOverview } from './MonthlyProfitOverview'; // Monthly profit component
import  YearlyProfitOverview from './YearlyProfitOverview'; // Yearly profit component
import { UserSpendingOverview } from './UserSpendingOverview'; // User spending component

export const ProfitDashboard = () => {
  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.header}>Profit Dashboard</h1>
      <div style={styles.gridContainer}>
        <div style={{ ...styles.card, ...styles.monthlyProfitCard }}>
          <MonthlyProfitOverview />
        </div>
        <div style={{ ...styles.card, ...styles.yearlyProfitCard }}>
          <YearlyProfitOverview />
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
    margin: '0 auto',
    backgroundColor: '#f5f7fa',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    fontFamily: '"Poppins", sans-serif',
    maxWidth: '1200px',
  },
  header: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '2rem',
    color: '#34495e',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
  },
  gridContainer: {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  },
  card: {
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(145deg, #ffffff, #e6eaf3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    textAlign: 'center',
    cursor: 'pointer',
  },
  monthlyProfitCard: {
    borderTop: '8px solid #3498db',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 20px rgba(52, 152, 219, 0.3)',
    },
  },
  yearlyProfitCard: {
    borderTop: '8px solid #9b59b6',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 20px rgba(155, 89, 182, 0.3)',
    },
  },
  userSpendingCard: {
    borderTop: '8px solid #f39c12',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 20px rgba(243, 156, 18, 0.3)',
    },
  },
};

export default ProfitDashboard;
