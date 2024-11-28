import React, { useEffect, useState } from 'react'; 
import { FaUser } from 'react-icons/fa'; // Importing icons from react-icons
import api from "../../Axios/Api";
import Loader from "../../Loader";
import { useSelector } from 'react-redux';

const users = ['Pinu', 'Yogi', 'Satyam']; // Define the user names you want to fetch data for

export const UserSpendingOverview = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { startOfMonth, endOfMonth } = useSelector((state) => state);
  // console.log(startOfMonth,endOfMonth);
  

  // const formatDate = (date) => {
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
  //   const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
  //   return `${year}-${month}-${day}`;
  // };

  useEffect(() => {
    const fetchSpendings = async () => {
      setLoading(true);
      
      try {
        const fetchPromises = users.map((userName) =>
          api.get('/user/profit/spendings', {
            params: {
              name: userName,
              startOfMonth:startOfMonth, 
              endOfMonth:endOfMonth,
            },
          })
        );

        const responses = await Promise.all(fetchPromises);
        const spendingsData = responses.map((response) => response.data);

        setUserData(spendingsData);
      } catch (err) {
        setError(err.response?.data || err.message || 'An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchSpendings();
  }, [startOfMonth, endOfMonth]); // Dependencies ensure this runs when dates change

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div style={{ padding: '1rem', color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem' }}>
        User Spending Overview
      </h2>
      {userData.map((user, index) => (
        <UserCard key={index} user={{ name: users[index], ...user }} />
      ))}
    </div>
  );
};

const UserCard = React.memo(({ user }) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  // Handle missing or undefined values
  const spent = user.spent ?? 0;
  const received = user.received ?? 0;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1rem',
        boxShadow: isHovered
          ? '0 4px 12px rgba(0, 0, 0, 0.2)'
          : '0 1px 4px rgba(0, 0, 0, 0.1)',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'box-shadow 0.3s, transform 0.3s',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FaUser
        style={{
          fontSize: '2rem',
          color: '#3498db', // Blue for user icon
          marginRight: '1rem',
        }}
      />
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: '500',
          }}
        >
          {user.name}
        </h3>
        <p>
          Spent:{' '}
          <span
            style={{
              color: '#e74c3c', // Red for spent
              fontWeight: '600',
            }}
          >
            {spent.toFixed(2)}
          </span>
        </p>
        <p>
          Received:{' '}
          <span
            style={{
              color: '#27ae60', // Green for received
              fontWeight: '600',
            }}
          >
            {received.toFixed(2)}
          </span>
        </p>
        <p>
          Outstanding:{' '}
          <span
            style={{
              color: received - spent < 0 ? '#e74c3c' : '#27ae60', // Red for negative, green for positive
              fontWeight: '600',
            }}
          >
            {(received - spent).toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
});

export default UserSpendingOverview;
