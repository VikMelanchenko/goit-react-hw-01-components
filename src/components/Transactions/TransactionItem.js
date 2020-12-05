import React from 'react';

import s from './Transaction.module.scss';

const TransactionItem = ({ currency, amount, type }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionItem;
