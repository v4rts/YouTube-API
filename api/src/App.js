import React from 'react';
import Search from './components/Search';
import List from './components/List';
import Description from './components/Description';
import youtube from './API/YouTubeAPI';
class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
    }

    handleAccept = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet', /*equals ...?part=snippet*/
                maxResults: 5,
                key: 'AIzaSyDzObvH5MDGAbsFQIuZW0vneMhHwdqtlF4',
                q: searchTerm,
            }
        });

        console.log(response);

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    render() {
        return (
            <div className="wrapper">
                <Search onFormAccept = {this.handleAccept}/>
                <Description video = {this.state.selectedVideo}/>
                <List/>
            </div>
        )
    }
}
export default App;