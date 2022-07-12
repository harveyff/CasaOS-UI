/*
 * @Author: JerryK
 * @Date: 2021-09-18 21:32:13
 * @LastEditors: a624669980@163.com a624669980@163.com
 * @LastEditTime: 2022-07-11 16:02:00
 * @Description: System HardWare Info API
 * @FilePath: \CasaOS-UI\src\service\info.js
 */
import { api } from "./service.js";

const info = {
    //All Info
    utilization() {
        //no change
        return api.get('/sys/utilization');
    },
    // Hardware Info
    hardwareInfo() {
        // sys/hardware
        return api.get('sys/hardware/info')
    },
    //Get CasaOS Config
    systemConfig() {
        //removed
        return api.get('/sys/config')
    },
    //Save CasaOs Config
    saveSystemConfig(data) {
        //removed
        return api.post('/sys/config', data)
    },
    // Check Verison
    checkVersion() {
        // sys/version
        return api.get('/sys/version/check');
    },
    // Get websocket port
    getSocketPort() {
        // sys/socket-port
        return api.get('/sys/socket/port');
    },
    //Update System
    updateSystem() {
        // sys/update
        return api.post('/sys/update');
    },
    //ip
    getIp() {
        return api.get('https://ipapi.co/json/');
    },
    //Get CasaOS Config
    widgetsConfig() {
        //removed
        return api.get('/sys/widget/config')
    },
    //Save CasaOs Config
    saveWidgetsConfig(data) {
        //removed
        return api.post('/sys/widget/config', data)
    },

    
    // Get System logs
    systemLogs() {
        // sys/logs
        return api.get('/sys/error/logs');
    },

    // Get System Port
    getSystemPort() {
        // no change
        return api.get('/sys/port');
    },
    // Save System Port
    saveSystemPort(data) {
        // no change
        return api.put('/sys/port', data);
    },
    //Stop CasaOS
    stopCasaOS() {
        // no change
        return api.post('/sys/stop');
    },
    // Get Usb mount State
    getUsbMountState() {
        // /sys/usb-auto-mount
        return api.get("/sys/usb/status")
    },
    // Set usb mount off
    setUsbMountOff() {
        // sys/usb-auto-mount
        return api.put('/sys/usb/off')
    },
    // Set usb mount on
    setUsbMountOn() {
        // sys/usb-auto-mount
        return api.put('/sys/usb/on')
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
    // Get System state
    guideCheck() {
        // sys/state
        return api.get('/guide/check');
    },


}
export default info;
