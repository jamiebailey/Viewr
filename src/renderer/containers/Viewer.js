import { connect } from 'react-redux';
import Pres from '../components/Viewer';
import { LIKE_FILE, DISLIKE_FILE } from '../actions/';

const mapStateToProps = (state, ownProps) => {
    let viewer = state.viewer;
    let file = viewer.file;
    if(file === null) {
        return {};
    }

    switch(viewer.action) {
        case LIKE_FILE:
            file.like();
            break;
        case DISLIKE_FILE:
            file.dislike();
            break;
    }

    return {
        file,
        src: file.filepath,
        type: file.type,
        likes: file.likes
    }
}

const Viewer = connect(mapStateToProps)(Pres);

export default Viewer;