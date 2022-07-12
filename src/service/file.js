/*
 * @Author: JerryK
 * @Date: 2021-09-18 21:32:13
 * @LastEditors: a624669980@163.com a624669980@163.com
 * @LastEditTime: 2022-07-11 16:18:15
 * @Description: File API
 * @FilePath: \CasaOS-UI\src\service\file.js
 */
import { api } from "./service.js";

const file = {
    /**
     * @description: get Path list
     * @param {String} path
     * @return {*}
     */
    dirPath(path) {
        let data = {
            path: path
        }
        // /folder
        return api.get('/file/dirpath', data);
    },
    // Rename file path
    renamePath(oldpath, path) {
        let data = {
            oldpath: oldpath,
            newpath: path
        }
        // file/name
        return api.put('/file/rename', data);
    },
    // Make a new Dir
    mkdir(path) {
        let data = {
            path: path
        }
        //folder/mkdir
        return api.post('/file/mkdir', data)
    },
    // Create a new File
    create(path) {
        let data = {
            path: path
        }
        // /file
        return api.post('/file/create', data)
    },
    // Download File
    download(path) {
        let data = {
            files: path
        }
        // /file
        return api.get('/file/download', data);
    },
    // Thumbnail Data
    getThumb(path) {
        let data = {
            path: path,
            type: "thumbnail",
            responseType: 'arraybuffer'
        }
        // /image
        return api.get('/file/image', data);
    },
    // Update File
    update(path, content) {
        let data = {
            path: path,
            content: content
        }
        // no change
        return api.put('/file/update', data);
    },
    // Copy or Move File
    operate(data) {
         // /batch/task
        return api.post('/file/operate', data);
    },
    // cancel operate
    cancel(id) {
        // /batch/:id
        return api.delete(`/file/operate/${id}`);
    },
    // Delete file or folder
    delete(pathArray) {
        // /batch
        return api.delete('/file/delete', pathArray);
    },
    // Upload File
    upload() {

    },
    getFileShare() {
        // Not found
        return api.get('/file/share')
    },
    setFileShare(data) {
        //Not found
        return api.post('/file/share', data)
    }
}

export default file;