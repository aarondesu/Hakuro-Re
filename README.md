# Hakuro

A desltop application for reading/viewing/downloading Manga. Intended for learning purposes.

## Getting Started

### Prerequisites

```
NodeJs 11.8.0
```

```
appId: "com.electron.hakuro"
productName: "Hakuro",
copyright: "Copyright 2019 @ Shinudesu"
asar: true
win:
  target: "NSIS"
files:
  "src"
  "build"
  "*.js"
nsis:
  oneClick: false
  perMachine: true
  allowElevation: true
  allowToChangeInstallationDirectory: true
  runAfterFinish: true
  license: "LICENSE"
  deleteAppDataOnUninstall: true
directories:
  output: "release"
publish:
  provider: github
  owner: "Shinudesu"
  repo: "Hakuro-Re"
  token: <your GH_TOKEN>
```

`GH_TOKEN` can be generated from developer settings. [Full Guide](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)

### Installing

```
npm install

or

yarn install
```

## Deployment

```
yarn release
```

## Built With

- [Electron](https://electronjs.org/) - Frmework used for creating the native application
- [React](https://reactjs.org/) - Used for UI rendering
- [Node.js](https://nodejs.org/en/) - Javascript Runtime

## Authors

- **Shinudesu** - _Initial work_ - [Shinudesu](https://github.com/Shinudesu)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
