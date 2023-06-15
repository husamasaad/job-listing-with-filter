import './App.css';
import  HeaderPattern  from './Components/HeaderPattern'
import  FilterSearch  from './Components/FilterSearch'
import JobLists from './Components/JobLists';

function App() {
  return (
    <>
      <header className="bg-mainClr overflow-hidden">
        <HeaderPattern />
      </header>
      <main className="bg-mainBg px-5">
        <div className="container md:px-15 lg:px-28">
          <FilterSearch />
          <JobLists />
        </div>
      </main>
    </>
  );
}

export default App;
