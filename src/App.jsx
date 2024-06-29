import Gstlist from "./components/gstlist";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Import_contact from "./pages/impcnt";

const App= () => {
  return (
    <>
     {/* <Gstlist /> */}
     <Router>
      <Routes>
        {/* <Route path="/" element={<Gstlist />} /> This is for when u want to route it from the home page. if u want to do thiss then u remove the Gstlist at the top*/}
        <Route path="/" element={<Gstlist />} />
        <Route path="/import-contact" element={<Import_contact/>} />
      </Routes>
    </Router>

    </>
  )
};


export default App

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Gstlist from "./components/Gstlist";
// import ImportContact from "./components/ImportContact";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Gstlist />} />
//         <Route path="/import-contact" element={<ImportContact />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
