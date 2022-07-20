/**
 * @module preload
 */
export {};
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
    isDevMode: () => {
      return ipcRenderer.invoke("getDevmode");
    },
    titlebar: (action: unknown) => {
      ipcRenderer.send("titlebar", action);
    },
    getUrl: () => {
      return ipcRenderer.invoke("startServerV2");
    },
    checkUrl: () => { 
      return ipcRenderer.invoke("doesExistServerURL");
    },
    getServerStats: (server:string, port:number) => {
      return ipcRenderer.invoke("getServerStats", server, port);
    },
    getMods: (client:string) => {
      return ipcRenderer.invoke("getMods",client);
    },
    login: () => {
      return ipcRenderer.invoke("login");
    },
    startClient: (o: JSON) => {
      ipcRenderer.send("startClient", o);
    },
    totalMemory: () => {
      return ipcRenderer.invoke("maxMemory");
    },
    getVersions: () => {
      return ipcRenderer.invoke("getVersions");
    },
    getConsoleLogs: () => {
      return ipcRenderer.invoke("getConsoleLogs");
    },
    reloadPage: () => {
      ipcRenderer.send("reloadPage");
    },
});
