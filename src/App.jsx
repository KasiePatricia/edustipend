import "./App.css";
import Header from "./components/Header";
import Songs from "./components/Songs";

function App() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="max-w-4xl w-[80%] m-auto border-2 border-gray-300 bg-[#f1f5e6] px-4">
        <Header />
        <div className="flex justify-end">
          <Songs />
        </div>
      </div>
    </div>
  );
}

export default App;
