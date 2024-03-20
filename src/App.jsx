import { useRef, useState } from "react";
import Menu from "./Menu";
import About from "./About";
import Service from "./Service";
import Home from "./Home";
import Page404 from "./Page404";
import User from "./User";
import Company from "./Company";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Protected from "./Protected";

function App() {
  const [btntext, setbtntext] = useState("enable dark");
  const [mystle, setmystle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const handlclick = () => {
    if (mystle.color == "black") {
      setmystle({
        color: "white",
        backgroundColor: "black",
      });
      setbtntext("enable light");
    } else {
      setmystle({
        color: "black",
        backgroundColor: "white",
      });
      setbtntext("enable dark");
    }
  };

  const [count, setCount] = useState(0);
  const userf = useRef(null);

  const counted = () => {
    setCount(count + 1);
  };

  const handleclick = () => {
    userf.current.value = "200";
  };
  return (
    <div style={mystle}>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Protected Component={Home} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />}>
          <Route exact path="comapny" element={<Company />} />
        </Route>

        <Route exact path="/user" element={<User />} />
        <Route exact path="/*" element={<Page404 />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>

      <button onClick={handlclick}>{btntext}</button>
    </div>
  );
}

// step code 64 video start
export default App;
