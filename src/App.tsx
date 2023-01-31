import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";
import Loginform from "./components/reuseable/Loginform";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element= {<Loginform />}/>
        <Route path='/' element={<MainLayout/>} />
          {routes}
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
