/*
 * @Author: JerryK
 * @Date: 2021-09-18 21:32:13
 * @LastEditors: a624669980@163.com a624669980@163.com
 * @LastEditTime: 2022-07-12 09:52:43
 * @Description: System HardWare Info API
 * @FilePath: \CasaOS-UI\src\service\sys.js
 */
import { api } from "./service.js";

const PREFIX = "/sys"

const sys = {
    // Check if need init
    guideCheck() {
        // user/status
        return api.get(`${PREFIX}/init/check`);
    },

    //All Info
    utilization() {
        return api.get(`${PREFIX}/utilization`);
    },

    // Hardware Info
    hardwareInfo() {
        // sys/hardware
        return api.get(`${PREFIX}/hardware/info`)
    },

    //Get CasaOS Config
    systemConfig() {
        // removed
        return api.get(`${PREFIX}/config`)
    },

    //Save CasaOs Config
    saveSystemConfig(data) {
        // removed
        return api.post(`${PREFIX}/config`, data)
    },

    // Check Verison
    checkVersion() {
        // sys/version
        return api.get(`${PREFIX}/version/check`);
    },

    // Get websocket port
    getSocketPort() {
        // sys/socket-port
        return api.get(`${PREFIX}/socket/port`);
    },

    //Update System
    updateSystem() {

        return api.post(`${PREFIX}/update`);
    },

    //Get CasaOS Widget Config
    widgetsConfig() {
        // removed
        return api.get(`${PREFIX}/widget/config`)
    },

    //Save CasaOs Widget Config
    saveWidgetsConfig(data) {
        // removed
        return api.post(`${PREFIX}/widget/config`, data)
    },


    // Get System logs
    systemLogs() {
        // sys/logs
        return api.get(`${PREFIX}/error/logs`);
    },

    // Get System Port
    getSystemPort() {
        // No change
        return api.get(`${PREFIX}/port`);
    },

    // Save System Port
    saveSystemPort(data) {
        //No change
        return api.put(`${PREFIX}/port`, data);
    },

    //Stop CasaOS
    stopCasaOS() {
        //No change
        return api.post(`${PREFIX}/stop`);
    },

    // Get Usb mount State
    getUsbMountState() {
        // sys/usb-auto-mount
        return api.get(`${PREFIX}/usb/status`)
    },

    // Set usb mount off
    setUsbMountOff() {
        // sys/usb-auto-mount
        return api.put(`${PREFIX}/usb/off`)
    },

    // Set usb mount on
    setUsbMountOn() {
        //usb-auto-mount
        return api.put(`${PREFIX}/usb/on`)
    },

    //Check web ui Port
    checkUiPort(url) {
        return api.get(url);
    },

    //Get Debug Info
    getDebugInfo() {
        // sys/debug
        return api.get('debug');
    },

    //ip
    getIp() {
        return api.get('https://ipapi.co/json/');
    },

}
export default sys;
