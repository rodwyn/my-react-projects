import { useState, useEffect } from 'react';
import { Alert } from './Alert';
import { List } from './List';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');

  return list ? JSON.parse(localStorage.getItem('list')) : [];
};

export const App = () => {
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const [list, setList] = useState(getLocalStorage());
  const [name, setName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      showAlert(true, 'danger', 'please enter value');
      return;
    }

    if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
      return;
    }

    showAlert(true, 'success', 'item added to the list');
    const newItem = { id: new Date().getTime().toString(), title: name };

    setList([...list, newItem]);
    setName('');
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>

      {
        list.length > 0 && (
          <div className='grocery-container'>
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className='clear-btn' onClick={clearList}>
              clear items
            </button>
          </div>
        )
      }
    </section>
  )
}
