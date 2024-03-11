import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Explore from "./components/explore/Explore";
import Service from "./components/service/Service";
import Customer from "./components/customer/Customer";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="bg-[#F8F8F8] w-full">
      <Navbar />
      <Main />
      <Explore />
      <Service />
      <Customer />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
