import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import GameShop from './components/GameShop';
import { store, mygames } from './components/Games';
import MyFavourites from './components/MyFavourites';

/*har brukt https://github.com/joafjell/uin23ak4_moviesearch_fjell/blob/main/src/App.js som inspirasjon*/


function App() {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path=':slug' element={<GameShop store={store}/>}/>
          <Route path=':slug' element={<MyFavourites mygames={mygames}/>}/>
        </Route>
      </Routes>
    );
}

export default App;
