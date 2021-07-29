import './App.css';
import { Nav } from './components/nav/Nav';
import { Header } from './components/header/Header';
import { Card } from './components/card/Card';
import _todos from './data/data';
import { useState } from 'react';
import { Items } from './components/item/Items';

function App() {
  const [todos, setTodos] = useState(_todos)
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Header />
        <Card header="To Do" >
          {
            todos.map((todo, ind) => todo.status === 'pending' &&
              <Items
                isComplete={false}
                todo={todo}
                key={todo.id}
              />
            )
          }
        </Card>
        <div className="my-5 mx-5">
          <hr />
        </div>
        <Card header="Completed">
          {
            todos.map(todo => todo.status === 'completed' &&
              <Items
                isComplete={true}
                todo={todo}
                key={todo.id}
              />
            )
          }
        </Card>
      </div>
    </div>
  );
}

export default App;
