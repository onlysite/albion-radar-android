const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);

const modulesRoot = path.join(projectRoot, 'modules');
config.watchFolders = [modulesRoot];

// 👇 重点：把 css 加入可识别的源码后缀
config.resolver.sourceExts = ['jsx', 'js', 'ts', 'tsx', 'json', 'css'];

// 官方推荐：css不要放在assetExts里，要放在sourceExts
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'css');

module.exports = config;
