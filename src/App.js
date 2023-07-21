
import './App.css';
import Nav from './components/Nav'
import AuthButton from './components/AuthButton'
import Header from './components/Header'
import Trending from './components/Trending'

function App() {
  return (
    <div className="grid grid-cols-5">
      <Nav />
      <main class="col-span-4 px-12 py-6 bg-red-50">
        <AuthButton/>
        <Header/>
        <Trending/>
      </main>
    </div>
  );
}

export default App;
