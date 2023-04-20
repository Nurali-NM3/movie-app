import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Header from "./Component/Header/Header";
import Page from "./Page/Page";
import LatestPage from "./Page/LatesPage";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path={'/'} element={<Homepage/>}/>
            <Route path={'/page'}element={<Page/>}/>
            <Route path={'/latest-page'} element={<LatestPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
