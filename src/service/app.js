/*
 * @Author: JerryK
 * @Date: 2021-09-18 21:32:13
 * @LastEditors: a624669980@163.com a624669980@163.com
 * @LastEditTime: 2022-07-11 16:14:55
 * @Description: Application API
 * @FilePath: \CasaOS-UI\src\service\app.js
 */
import { api } from './service.js';

const app = {
    //Get Install Info
    appConfig() {
        // splited    /container/networks    
        return api.get(`/app/install/config`);
    },
    //Store List
    storeList(data) {
        // /apps
        return api.get(`/app/list`, data);
    },
    //Store App Info
    storeAppInfo(id) {
        //app/:id
        return api.get(`/app/appinfo/${id}`);
    },
    //Store Category List
    storeCategoryList() {
        ///app-categories
        return api.get(`/app/category`);
    },
    //Check Port
    checkPort(port, type) {
        let data = {
            type: type
        }
        // /port/state/:port
        return api.get(`/app/check/${port}`, data);
    },
    // Get a free port
    getPort() {
        // /port
        return api.get('/app/getport');
    },
    // Get app Running State
    getState(id, data) {
        // /container/:id/state
        return api.get(`/app/state/${id}`, data);
    },
    //Install App
    install(data) {
        // /container
        return api.post('/app/install', data);
    },
    // Uninstall App
    uninstall(id) {
        // /container/:id
        return api.delete(`/app/uninstall/${id}`);
    },
    //My App List
    myAppList(data) {
        // /container
        return api.get('/app/my/list', data);
    },
    //Container info
    getContainerInfo(id) {
        // removed
        return api.get(`/app/info/${id}`);
    },
    //Container Log
    getContainerLogs(id) {
        // /container/:id/logs
        return api.get(`/app/logs/${id}`)
    },
    //Start Or Stop Or Restart A Container with ID
    startContainer(id, data) {
        // /container/:id/state
        return api.put(`/app/state/${id}`, data)
    },
    getContainerSettingdata(id) {
        // /container/:id
        return api.get(`/app/update/${id}/info`)
    },
    //Update Container Settings
    updateContainerSetting(id, data) {
        // /container/:id
        return api.put(`/app/update/${id}/setting`, data);
    },

    //Get all Usage
    getAppUsage() {
        // apps/usage
        return api.get('/app/usage');
    },

    // Get App list order
    getAppListOrder() {
        // removed
        return api.get('/app/order');
    },

    // Save App list order
    saveAppListOrder(data) {
        // removed
        return api.post('/app/order', data)
    }

}
export default app;
