import { Route, Routes } from 'react-router-dom';
import Accueil from './Accueil';
import Boutique from './Boutique';
import Infos from './Infos';



function AppRoutes() {
  return (
   
    <Routes>
      <Route exact path="/" element={<Accueil />} />
      <Route path="/boutique" element={<Boutique />} />
      <Route path="/infos/*" element={<Infos />} />
        
    </Routes>
  );
}

export default AppRoutes;





