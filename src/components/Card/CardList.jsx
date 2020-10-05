import React from 'react';
import './CardList.scss';
import {connect} from 'react-redux';
const CardList = (props) => {
  console.log(props);
  const articleCard = props.cardlist.map((card) => {
    return console.log(card);
  });
  return <article>{articleCard}</article>;
};

const mapStateToProps = (state) => ({
  cardlist: state.cards,
});

const connected = connect(mapStateToProps)(CardList);
export default connected;
