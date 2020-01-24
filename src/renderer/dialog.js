import { remote } from 'electron';

export default class Dialog {
    static openDirectory = () => {
        let res = remote.dialog.showOpenDialogSync({
            properties: ['openDirectory']
        });
        if(res === undefined) {
            return false;
        }
        return res[0];
    }
}