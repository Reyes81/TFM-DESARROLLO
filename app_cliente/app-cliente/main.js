const { app, BrowserWindow, shell, ipcMain, webContents } = require("electron");
const path = require('path')

function createWindow () {

    appWin = new BrowserWindow({
        width: 1000,
        height: 800,
        title: "Gestor de Licencias LSyM",
        icon: path.join(`file://${__dirname}/assets/images/icon.ico`),
        resizable: false,
        maximizable:false,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
        } ,

    });

    appWin.loadURL(`file://${__dirname}/dist/index.html`);

    appWin.setMenu(null);

    appWin.on("closed", () => {
        appWin = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});
