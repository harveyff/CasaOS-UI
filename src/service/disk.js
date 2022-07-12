/*
 * @Author: JerryK
 * @Date: 2021-09-18 21:32:13
 * @LastEditors: a624669980@163.com a624669980@163.com
 * @LastEditTime: 2022-07-11 15:57:10
 * @Description: Disk API
 * @FilePath: /CasaOS-UI/src/service/disk.js
 */
import { api } from "./service.js";

const disk = {
    // get Path list
    diskInfo() {
        // /disk
        return api.get('/disk/info');
    },
    diskList() {
        // /disks
        return api.get('/disk/list');
    },
    
    addStorage(data){
        // /storage
        return api.post('/disk/storage',data);
    },
    removeStorage(data){
        // /disk
        return api.post('/disk/umount',data);
    },
    formatStorage(data){
        // /disk
        return api.post('/disk/format',data);
    },
    // System path
    renamePath(oldpath, path) {
        let data = {
            oldpath: oldpath,
            newpath: path
        }
        //not found
        return api.get('/zima/rename', data);
    },
    // Make a new Dir
    mkdir(path) {
        let data = {
            path: path
        }
        //not found
        return api.get('/zima/mkdir', data)
    }
}
export default disk;
