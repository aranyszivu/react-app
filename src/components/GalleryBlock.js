import React, {Component} from 'react';
import GalleryPage from './GalleryPage';
import Posts from '../data/posts.json';
import { LangContext } from '../LangContext';

class GalleryBlock extends Component {
    constructor(props) {
            super(props);
            this.state = {
                page: 1,
                maxItems: 6
            };
    }
    
    render() {
        const glryWrapperStyle = {
            display:"block",
            width: "100%",
            backgroundColor: "#444444",
            padding: "0px 300px 50px 250px"
        };
        const glryBlockStyle = {
            width: "70%",
            height: "auto",
            backgroundColor: "#eeeeee",
            padding: "0px 0px 0px 60px"
        };
        const nextPage = () => {
            this.setState({
                page: this.state.page + 1
            });
        }
        const nextEnabled = this.state.page !== (Math.floor(Posts.length / this.state.maxItems) + 1);

        const prevPage = () => {
            this.setState({
                page: this.state.page - 1
            });
        }
        const prevEnabled = this.state.page !== 1;

        return (
            <div id="glryWrapper" style={glryWrapperStyle}>
                <div id="glryBlock" style={glryBlockStyle}>
                    <GalleryPage page={this.state.page} maxItems={this.state.maxItems} /> <br/>
                    <div id="buttonPanel" style={{textAlign: "center", padding:"10px"}}>
                    <LangContext.Consumer>
                            {(context) => (
                                <React.Fragment>
                                    <button onClick={prevPage} disabled={!prevEnabled}>{(context.state.lang === "en") ? "Previous" : "Antérieur"}</button>
                                    <button onClick={nextPage} disabled={!nextEnabled}>{(context.state.lang === "en") ? "Next" : "Prochain"}</button>
                                </React.Fragment>
                            )}
                        </LangContext.Consumer>
                    </div>
                </div>
            </div>
        );
    }
}
export default GalleryBlock;