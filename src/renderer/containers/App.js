import { connect } from 'react-redux';
import Pres from '../components/App';
import FileSystem from '../system/filesystem';
import { setDir, loadFile, likeFile, dislikeFile } from '../actions';
import Dialog from '../dialog';
import Storage from '../system/storage';

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
                case 82: // r
                    dispatch(loadFile(FileSystem.getRandomFile()));
                    break;
                case 79: // o
                    let dir = Dialog.openDirectory();
                    if(!dir) {
                        return;
                    }
                    dispatch(setDir(dir));
                    dispatch(loadFile(FileSystem.getRandomFile()));
                    break;
                case 76: // l
                    dispatch(likeFile());
                    break;
                case 75: // k
                    dispatch(dislikeFile());
                    break;
            }
        },
        onLoad: () => {
            dispatch(loadFile(FileSystem.getRandomFile()));
        }
    }
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pres);

export default App;