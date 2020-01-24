import { connect } from 'react-redux';
import Pres from '../components/Viewer';
import { LIKE_FILE } from '../actions/';

const mapStateToProps = (state, ownProps) => {
    let viewer = state.viewer;
    let file = viewer.file;
    if(file === null) {
        return {};
    }

    if(viewer.action === LIKE_FILE) {
        file.like();
    }
    return {
        file,
        src: file.filepath,
        type: file.type
    }
}

const Viewer = connect(mapStateToProps)(Pres);

export default Viewer;