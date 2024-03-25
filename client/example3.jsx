const React = require('react');
const ReactDOM = require('react-dom');

class SongContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            songs: props.songs,
        }

        this.loadSongsFromServer();
    };

    loadSongsFromServer = async () => {
        const response = await fetch('/getSongs');
        const songs = await response.json();
        this.setState({songs})
    };

    render() {
        if(this.state.songs.length === 0) {
            return (
                <div>No Songs Found.</div>
            );
        }

        const songList = this.state.songs.map(song => {
            return (
                <div key={song.title}>
                    <h2>{song.artist} - <i>{song.title}</i></h2>
                </div>
            );
        });

        return (
            <div>
                <h1>Favorite Songs:</h1>
                {songList}
            </div>
        );
    };
};

const init = () => {
    ReactDOM.render( <SongContainer songs={[]}/>, document.getElementById('app') );
}

window.onload = init;