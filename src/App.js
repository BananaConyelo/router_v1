import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-indigo-100 via-white to-blue-100">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-25 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      
      <NavBar/>
      <main className="flex-grow">
      </main>
      <Footer/>
    </div>
  );
}
export default App;

