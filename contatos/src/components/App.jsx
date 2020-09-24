import React from 'react';
import contacts from './contacts';
import Avatar from './Avatar';
import Card from './Card';

function createCard(contato) {

  console.log(contato.name);

  return (
    <Card
      key={contato.id}
      name={contato.name}
      img={contato.imgURL}
      tel={contato.phone}
      email={contato.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://miro.medium.com/max/636/1*tWnJ-gFK_HiEpJt2qIwKGw.jpeg" />

      { contacts.map(createCard)}

    </div>
  );
}

export default App;
