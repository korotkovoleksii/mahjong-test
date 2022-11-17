import CardList from '../CardList';
import './App.css';

const App = (): JSX.Element => {
  return (
    <div className="app">
      <h1 className="app__title">Mahjong</h1>
      <CardList />
    </div>
  );
};

export default App;
