import { connect } from 'react-redux';
import Pres from '../components/App';
import FileSystem from '../system/filesystem';
import store from '../../store';
import { setDir, loadFile } from '../../actions';
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

const mapDispatchToProps = dispatch => {
    return {
        onKeyPress: e => {
            e.preventDefault();
            switch(e.charCode) {
                case 114: // r
                    dispatch(loadFile(FileSystem.getRandomFile()));
                    break;
                case 111: // o
                    let dir = Dialog.openDirectory();
                    if(!dir) {
                        return;
                    }
                    dispatch(setDir(dir));
                    dispatch(loadFile(FileSystem.getRandomFile()));
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