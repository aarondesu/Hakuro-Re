const { app, BrowserWindow } = require("electron");
const windowStateKeeper = require("electron-window-state");
const log = require("electron-log");
const path = require("path");
const url = require("url");

// Get NODE_ENV
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = true;
const { NODE_ENV } = process.env;

// Creates the main window
const createWindow = () => {
  const windowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600
  });

  var mainWindow = new BrowserWindow({
    title: "Hakuro",
    x: windowState.x,
    y: windowState.y,
    width: windowState.width,
    height: windowState.height,
    minWidth: 800,
    minHeight: 600,
    show: false,
    webPreferences: {
      devTools: true,
      webSecurity: false
    }
  });

  // Window handlers
  mainWindow.on("closed", () => (mainWindow = null));
  mainWindow.webContents.on("did-finish-load", () => mainWindow.show());

  // Disable menu
  mainWindow.setMenu(null);

  // Load the content
  mainWindow.loadURL(
    NODE_ENV === "development"
      ? "http://localhost:8080/"
      : url.format({
          pathname: path.join(__dirname, "../build/index.html"),
          protocol: "file:",
          slashes: true
        })
  );

  // Initialize devtools
  if (NODE_ENV === "development") {
    log.info("Starting application in development mode...");
    log.info("Initializing devtools...");

    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS,
      REDUX_DEVTOOLS
    } = require("electron-devtools-installer");
    const forceDownload = !!process.env.UPRADE_EXTENSIONS;

    const installExt = (tool, force) => {
      installExtension(tool, force)
        .then(name => log.info(`${name} has been installed!`))
        .catch(error =>
          log.error(`Failed to install extension. Reason: ${error}`)
        );
    };

    installExt(REACT_DEVELOPER_TOOLS, forceDownload);
    installExt(REDUX_DEVTOOLS, forceDownload);

    mainWindow.webContents.openDevTools();
    log.info("Devtools installed!");
  }

  windowState.manage(mainWindow);
};

// Main function
const main = () => {
  log.info("Starting application...");
  createWindow();
  log.info("Application started!");
};

// Application handlers
app.on("ready", main);
app.on("activate", () => {
  if (process.platform !== "darwin") main();
});
app.on("window-all-closed", () => app.quit());
