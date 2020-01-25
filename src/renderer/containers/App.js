import { connect } from 'react-redux';
import Pres from '../components/App';
import FileSystem from '../system/filesystem';
import { dirUpdated, fileLoaded } from '../actions';
import Dialog from '../dialog';
import Storage from '../system/storage';
import { remote } from 'electron';

const mapStateToProps = (state, ownProps) => {
    let app = state.app;
    let dirname = app.dirname;
    if(dirname === null) {
        dirname = Storage.get('dir');
        if(dirname === null) {
            let dir = Dialog.openDirectory();
            if(!dir) {
                return mapStateToProps(state, ownProps);
            }
            dirname = dir;
        }
    }
    FileSystem.setFolder(dirname);
    Storage.set('dir', dirname);
    return {
        dirname: dirname
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onKeyDown: e => {
            e.preventDefault();
            switch(e.keyCode) {
                case 79: // o
                    let dir = Dialog.openDirectory();
                    if(!dir) {
                        remote.get
                        return;
                    }
                    dispatch(dirUpdated(dir));
                    dispatch(fileLoaded(FileSystem.getRandomFile()));
                    break;
                case 122: // F11
                    let win = remote.getCurrentWindow();
                    win.setFullScreen(!win.isFullScreen());
                    break;
            }
        },
        onLoad: () => {
            dispatch(fileLoaded(FileSystem.getRandomFile()));
        }
    }
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pres);

export default App;