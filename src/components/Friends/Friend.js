import React from 'react';
import PropTypes from 'prop-types';

import s from './Friends.module.scss';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  const statusClassName = isOnline ? s.online : s.offline;
  return (
    <li key={id} className={s.item}>
      <span className={statusClassName}></span>
      <img className={s.avatar} src={avatar} alt={name} width="50" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};

export default FriendListItem;
