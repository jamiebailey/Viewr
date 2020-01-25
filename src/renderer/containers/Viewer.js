import { connect } from 'react-redux';
import Pres from '../components/Viewer';
import { loadFile, updateLikes } from '../actions/';

const mapStateToProps = state => {
    let viewer = state.viewer;
    let file = viewer.file;
    if(file === null) {
        return {};
    }

    return {
        file,
        src: file.filepath,
        type: file.type,
        likes: viewer.likes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadFile: file => {
            return dispatch(loadFile(file));
        },
        updateLikes: likes => {
            return dispatch(updateLikes(likes));
        }
    };
}

const Viewer = connect(mapStateToProps, mapDispatchToProps)(Pres);

export default Viewer;