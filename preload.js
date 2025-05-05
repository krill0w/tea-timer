const {contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInIsolatedWorld("electronAPI", {
    loadPage: (page) => ipcRenderer.send("load-page", page),
});