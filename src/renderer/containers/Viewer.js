import { connect } from 'react-redux';
import Pres from '../components/Viewer';

const mapStateToProps = (state, ownProps) => {
    let file = state.viewer.file;
    if(file === undefined) {
        return {};
    }
    return {
        file,
        src: file.filepath,
        type: file.type
    }
}

const Viewer = connect(mapStateToProps)(Pres);

export default Viewer;