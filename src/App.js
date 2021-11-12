import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <header className="todo-app-title">
        <h1>To do - App</h1>
        <p className="title-desc">Add - Update - Remove - Complete</p>
      </header>
      <main className="todo-app">
        <TodoList />
      </main>
      <footer>
        <text>Created by <a href="https://www.linkedin.com/in/israel-batista/" target="_blank">Israel Batista</a></text>
      </footer>
    </div>
  );
}

export default App;
