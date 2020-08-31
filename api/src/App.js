import React from 'react';
import Search from './components/Search';
import List from './components/List';
import Description from './components/Description';

class App extends React.Component {

    handleAccept = () => {

    }

    render() {
        return (
            <div className="wrapper">
                <Search onFormAccept={this.handleAccept()}/>
                <List/>
                <Description/>
            </div>
        )
    }
}
export default App;