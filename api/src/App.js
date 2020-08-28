import React from 'react';
import Search from './components/Search';
import List from './components/List';
import Description from './components/Description';

const App = () => {
    return(
        <div ClassName = "wrapper">
            <Search />
            <List />
            <Description />
        </div>
    )
}
export default App;