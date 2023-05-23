process.once("loaded", () => {
    contextBridge.exposeInMainWorld('electronAPI', {
        openLinkPlease: () => ipcRenderer.invoke('openURL'),
    })
  });