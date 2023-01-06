import { Helmet ,HelmetProvider} from "react-helmet-async";
import { BrowserRouter,Route,Routes, useNavigate } from 'react-router-dom';
import Compiler from "./Compiler";
import Home from "./Home";
function App() {
  
  return (
    <BrowserRouter>
   
    <Routes>
    {/* <Route path="/home/:name" element={<Home/>}/>
    <Route path="/home/:name/quest" element={<Quest/>}/>
    <Route path="/home/:name/leaderboard" element={<Leaderboard/>}/>
    <Route path="/home/:name/result" element={<Result/>}/>
    <Route path="/compiler" element={<Compiler/>}/> */}
    <Route path='/compile' element={<Compiler/>}/>
    <Route path='/home' element={<Home/>}/>
</Routes>

</BrowserRouter>


    


  );
}

export default App;
