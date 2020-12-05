// import logo from './logo.svg';
// import './App.css';
// import userEvent from '@testing-library/user-event';
import React from 'react';

import Profile from './components/Profile/Profile';
import userData from './data/user.json';
import statsData from './data/statistic.json';
import Statictics from './components/Statistics/Statistics';
import Friends from './data/friends.json';
import FriendsList from './components/Friends/Friends';
import transactions from './data/transactions.json';
import TransactionHistory from './components/Transactions/Transactions';
// import userEvent from '@testing-library/user-event';

const App = () => {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statictics title="Upload stats" stats={statsData} />;
      <FriendsList friends={Friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
