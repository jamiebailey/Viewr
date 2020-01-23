import { remote } from 'electron';

export default class Dialog {
    static openDirectory = async () => {
        let res = await remote.dialog.showOpenDialog({
            properties: ['openDirectory']
        });
        if(res.canceled) {
            return false;
        }
        return res.filePaths[0];
    }
}