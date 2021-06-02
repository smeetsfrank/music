import React from 'react';
import Navigation from '../Navigation';
import Search from '../Search';

const Dashboard: React.FC = () => {
  console.log('Dashboard');
  return (
    <>
      <h2>Dashboard</h2>
      <Search />
      <Navigation />
    </>
  );
};

export default Dashboard;
