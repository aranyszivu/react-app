import React, {Component} from 'react';

export const LangContext = React.createContext();

class LangProvider extends Component {
  state = {
    lang:"en"
  }
  render () {
    return (
      <LangContext.Provider value={{
        state: this.state, 
        toggleLang: () => { this.setState({
          lang: (this.state.lang === "en") ?  "fr" :  "en"
        })  }
        }}>
        {this.props.children}
      </LangContext.Provider>
    )
  }
}

export default LangProvider;