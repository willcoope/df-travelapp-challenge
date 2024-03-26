import'./App.css';

import Homepage from './components/pages/Homepage/Homepage';
import Location from './components/pages/Location/Location';
import Favourites from './components/pages/Favourites/Favourites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/pages/Login/Login';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Homepage setSearchTerm={setSearchTerm}/>}/>
                <Route exact path='/location/:locationName?' element={<Location searchTerm={searchTerm} />}/>
                <Route exact path='/favourites' element={<Favourites />}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default App;
