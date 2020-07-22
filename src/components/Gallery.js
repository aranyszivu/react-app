import React from 'react';
import Header from './Header';
import GalleryBlock from './GalleryBlock';
import WorkBlock from './WorkView/WorkBlock';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import LangProvider from '../LangContext';



function Gallery() {
  return (
    <Router>
      <LangProvider>
        <div style={{width: "100%", overflow: "hidden"}}>
          <Header></Header>
          <Route path={["/gallery", "/", "/react-app"]} exact component={GalleryBlock} />
          <Route path="/work/:workid" exact component={WorkBlock} />
        </div>
      </LangProvider>
    </Router>
  );
}

export default Gallery;
