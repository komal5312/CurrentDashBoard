import "./App.css";

import MainDash from "./components/MainDash/MainDash";

import Charts from "./components/Charts/Charts";


// import Card from "./components/Cards/Card"




//Importing Sidebar elements
import Overview from "./components/Overview/Overview";
import Plotmaps from "./components/Plotmaps/Plotmaps";
import Farmers from "./components/Farmers/Farmers";
import CurrentWorth from "./components/CurrentWorth/CurrentWorth";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        {/* <Sidebar /> */}
        <MainDash

         title='Agrix'
        imageUrl='https://www.google.com/search?q=cat.png&tbm=isch&source=iu&ictx=1&vet=1&fir=ht4pdRSfeGPCVM%252CdLTkZcfcdGgiZM%252C_%253BKDg6jO5AfgOD9M%252CdLTkZcfcdGgiZM%252C_%253Bts_DoOTz4rFyLM%252CjMi5CpOeRC3jcM%252C_%253Brr5x4ipxRSaxCM%252Couej32cEdKMTnM%252C_%253BfmPvvrDVIqECqM%252C-5g-mDNf75EYzM%252C_%253B54JHsHfO0JUGaM%252CjMi5CpOeRC3jcM%252C_%253BW5N_POaExUwGZM%252CdLTkZcfcdGgiZM%252C_%253BIez--c44HjcOGM%252C49FR9_mNyNOCeM%252C_%253BhY0T5TyQV538ZM%252Ceqfkc5KOrwGiWM%252C_%253B2ozaE0kSX1AX3M%252CnOwUOB_BpO8y-M%252C_%253BoYxJXnVfj8gTRM%252C-GKfuBwoHxBl4M%252C_%253BFqunlF52bQmDQM%252Cgl50_4Qvs7DAPM%252C_%253B_A0nrpV3LzVg4M%252Couej32cEdKMTnM%252C_%253BQVcBTXsD4AbaHM%252CZJDn0LjPw5j5FM%252C_%253BGRbwu6WyaVwkQM%252CdLTkZcfcdGgiZM%252C_%253B35Vl9CrmaEb5wM%252CxvAYCOAyL1gQkM%252C_%253BJ9yi1ro6kw2tPM%252CIk2n2s-TES9aKM%252C_&usg=AI4_-kQP2ZBJVD8eWhqXqqbe7Y3bQDgP6A&sa=X&ved=2ahUKEwikrLGRxv74AhWrR2wGHdjhBlUQ9QF6BAgSEAE#imgrc=ts_DoOTz4rFyLM'
        body='Body of Card'
         />
        
       
        {/* <Recharts /> */}
        {/* <Card
        title='Agrix'
        imageUrl='https://www.google.com/search?q=cat.png&tbm=isch&source=iu&ictx=1&vet=1&fir=ht4pdRSfeGPCVM%252CdLTkZcfcdGgiZM%252C_%253BKDg6jO5AfgOD9M%252CdLTkZcfcdGgiZM%252C_%253Bts_DoOTz4rFyLM%252CjMi5CpOeRC3jcM%252C_%253Brr5x4ipxRSaxCM%252Couej32cEdKMTnM%252C_%253BfmPvvrDVIqECqM%252C-5g-mDNf75EYzM%252C_%253B54JHsHfO0JUGaM%252CjMi5CpOeRC3jcM%252C_%253BW5N_POaExUwGZM%252CdLTkZcfcdGgiZM%252C_%253BIez--c44HjcOGM%252C49FR9_mNyNOCeM%252C_%253BhY0T5TyQV538ZM%252Ceqfkc5KOrwGiWM%252C_%253B2ozaE0kSX1AX3M%252CnOwUOB_BpO8y-M%252C_%253BoYxJXnVfj8gTRM%252C-GKfuBwoHxBl4M%252C_%253BFqunlF52bQmDQM%252Cgl50_4Qvs7DAPM%252C_%253B_A0nrpV3LzVg4M%252Couej32cEdKMTnM%252C_%253BQVcBTXsD4AbaHM%252CZJDn0LjPw5j5FM%252C_%253BGRbwu6WyaVwkQM%252CdLTkZcfcdGgiZM%252C_%253B35Vl9CrmaEb5wM%252CxvAYCOAyL1gQkM%252C_%253BJ9yi1ro6kw2tPM%252CIk2n2s-TES9aKM%252C_&usg=AI4_-kQP2ZBJVD8eWhqXqqbe7Y3bQDgP6A&sa=X&ved=2ahUKEwikrLGRxv74AhWrR2wGHdjhBlUQ9QF6BAgSEAE#imgrc=ts_DoOTz4rFyLM'
        body='Body of Card'
        
        
        />
         */}
        

        <Router>
          <Routes>
          <Route exact path="/" element={<Overview/>} />
            <Route exact path="/overview" element={<Overview />} />
            <Route exact path="/plotmaps" element={<Plotmaps />} />
            <Route exact path="/charts" element={<Charts/>} />
            <Route exact path="/farmers" element={<Farmers />} />
            <Route exact path="/currentworth" element={<CurrentWorth/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
