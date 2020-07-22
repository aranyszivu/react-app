import React from 'react';
import Posts from '../data/posts.json';
import GalleryItem from './GalleryItem';

function GalleryPage(props) {
    const page = props.page;
    const numItemsOnPage = props.maxItems;

     const getPageResults = (page) => {
        //get to current page
        let index = (page * numItemsOnPage) - numItemsOnPage;
        let posts = [];
        for(let i = index; (index + numItemsOnPage) > i; i++ ) {
            posts.push(Posts[i]);
        }
        return posts;
     };
    return (
        <div>
            {getPageResults(page).map(
                (item) => ( (item !== undefined) ?
                    <GalleryItem  key={item.postid} item={item} />
                    : ""
                )
            )}
        </div>
    );
}

export default GalleryPage;