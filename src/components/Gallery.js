import React from 'react';
import Header from './Header';
import GalleryBlock from './GalleryBlock';
import WorkBlock from './WorkView/WorkBlock';
import {BrowserRouter as Router, Route } from 'react-router-dom';

function Gallery() {
  return (
    <Router>
      <div style={{width: "100%", overflow: "hidden"}}>
        <Header></Header>
        <Route path={["/gallery", "/", "/react-site"]} exact component={GalleryBlock} />
        <Route path="/work/:workid" exact component={WorkBlock} />
      </div>
    </Router>
  );
}

export default Gallery;
