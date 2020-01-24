import { connect } from 'react-redux';
import Pres from '../components/App';
import FileSystem from '../system/filesystem';
import store from '../../store';
import { loadFile } from '../../actions';

const mapStateToProps = state => {
    let app = state.app;
    return {
        dirname: app.dirname
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onKeyPress: e => {
            e.preventDefault();
            switch(e.charCode) {
                case 114:
                    store.dispatch(loadFile(FileSystem.getRandomFile()));
                    break;
            }
        }
    }
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pres);

export default App;