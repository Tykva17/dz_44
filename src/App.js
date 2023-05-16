import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './v2/UserList';
import AlbumList from './v2/AlbumList';
import PhotosList from './v2/PhotosList';
import React from "react";
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/albums/:userId" element={<AlbumList />} />
                <Route path="/photos/:albumId" element={<PhotosList />} />
            </Routes>
        </Router>
    );
};

export default App;
