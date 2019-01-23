const fs = require('fs');
const path = require('path');

const initSettingsFilePath = './src/i18n/init.json';
const i18nIndexFilePath = './src/i18n/index.json';
const srcPath = './src';
const defaultNamespace = 'src';

let readableI18nFilePattern = /i18n\/(\w)+\.json$/;
let nonReadableFilePatterns = [
  /src\/i18n\/index\.json$/,
  /src\/i18n\/init\.json$/
];

let getJsonFromFile = (filePath = '') => {
  // We assume the .json file exists, as we'll get it from the
  // results of a fs.readdir call.
  for (let i = 0; i < nonReadableFilePatterns.length; i++) {
    if (nonReadableFilePatterns[i].test(filePath)) {
      return;
    }
  }
  let data = JSON.parse(JSON.stringify(require(filePath)));
  data = { filePath: filePath, data: data };
  return data;
};
let getJsonFromDir = (dirPath = '.') => {
  if (!fs.existsSync(dirPath)) { throw new Error(`Directory ${dirPath} does not exist.`) }
  let jsonObjectList = [];
  dirPath = fs.realpathSync(dirPath);
  let files = fs.readdirSync(dirPath);
  files.forEach((file, index, array) => {
    let filePath = path.join(dirPath, file);
    let isDir = fs.statSync(filePath).isDirectory();
    if (isDir) {
      let tempList = [];
      tempList = getJsonFromDir(filePath);
      jsonObjectList = [...jsonObjectList, ...tempList];
    }
    else if (readableI18nFilePattern.test(filePath)) {
      let data = getJsonFromFile(filePath);
      jsonObjectList.push(data);
    }
  });
  return jsonObjectList;
};
let writeJsonToFile = (filePath = '', data) => {
  fs.writeFile(filePath, JSON.stringify(data), (error) => {
    if (error) { throw error; }
  });
}
let getInitSettings = () => {
  let data = JSON.parse(JSON.stringify(require(initSettingsFilePath)));
  return data;
};
let buildI18nJson = () => {
  // Get init settings.
  let settings = getInitSettings();
  let partSettings = getJsonFromDir(srcPath);
  let namespace, lang;
  for (let i = 0; i < partSettings.length; i++) {
    if (!partSettings[i]) { continue; }
    lang = path.basename(partSettings[i].filePath);
    lang = lang.substring(0, lang.length - 5);

    namespace = path.relative(srcPath, partSettings[i].filePath);
    namespace = path.join(defaultNamespace, namespace.replace(readableI18nFilePattern, ''));
    if (namespace.endsWith('/')) { namespace = namespace.substring(0, namespace.length - 1); }

    if (typeof (settings.resources[lang]) !== typeof ({})) { settings.resources[lang] = {}; }
    settings.resources[lang][namespace] = partSettings[i].data;
    if (!settings.ns.includes(namespace)) { settings.ns.push(namespace); }
    settings.defaultNS = defaultNamespace;
  }
  writeJsonToFile(i18nIndexFilePath, settings);
};

buildI18nJson();