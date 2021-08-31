import React from 'react'


function List(props) {
  const {data} = props;
  
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const resetList = () => {
    setPeople(data);
  }
  const clearList = () => {
    setPeople([]);
  }
  return (
    <div>
      <ul className="list">
        {people.map((person) => {
          const {id, name, age, image} = person;
          return (
            <li className="user" key={id}>
              <div className="pfp">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <p>{name}</p>
                <p>{age}</p>
              </div>
              <button onClick={() => removeItem(id)} className="btn">Remove</button>
            </li>
          );
        })}
      </ul>
      <div className="btnContainer">
        <button className="btn" onClick={resetList}>Reset List</button>
        <button className="btn" onClick={clearList}>Clear List</button>
      </div>
    </div>
  )
}

export default List;
