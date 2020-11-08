import React from 'react';
import {connect} from 'react-redux';
import './AddCard.scss';

const AddCard = (props) => {
  const onKeyUpHandle = (ev) => {
    if (ev.keyCode === 13 && ev.target.value.trim()) {
      props.addCard(ev.target.value.trim());
      ev.target.value = '';
    }
  };
  return (
    <section className='task__section'>
      <input className='task__section__input' type='text' placeholder='Add new card here' onKeyUp={(ev) => onKeyUpHandle(ev)} />
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCard: (text) => {
    dispatch({
      type: 'ADD_CARD',
      payload: text,
      id: Date.now(),
    });
  },
});

const connected = connect(null, mapDispatchToProps)(AddCard);

export default connected;
