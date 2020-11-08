import React from 'react';
import {connect} from 'react-redux';
import './ToDoList.scss';
import {deleteTodoAction} from '../../services/redux/Actions';

function filterTodos(cards = [], filter) {
  if (filter === 'ALL') {
    return cards;
  }

  return cards;
}


function TodoList(props) {

  return (
    <article className='container'>
      {filterTodos(props.cards, props.filter).map((card) => (
        <div className='container__list' key={card.id}>
          <div className='container__list__text'>
            <input className='container__list__input' placeholder={card.text} />
            <button className='container__list__button' onClick={() => props.delete(card.id)}>
              <i className='fas fa-trash'></i>
            </button>
          </div>
          <div>
            <textarea key={card.id} rows='4' cols='25' className='container__list__task' placeholder='Put here your task'></textarea>
          </div>
          <button type='button' className='' title='Añadir una nueva lista'  id={card.id}>
            <span className='fas fa-plus'></span>
            <span> Add new task </span>
          </button>
        </div>
      ))}
    </article>
  );
}

const mapStateToProps = (state) => ({
  cards: state.cards,
  filter: state.visibility,
});

const mapDispatchToProps = (dispatch) => ({
  delete: (id) => deleteTodoAction(dispatch, id),
});

const connected = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default connected;
