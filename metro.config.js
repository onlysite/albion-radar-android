const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);

const modulesRoot = path.join(projectRoot, 'modules');
config.watchFolders = [modulesRoot];

config.resolver.sourceExts = ['jsx', 'js', 'ts', 'tsx', 'json', 'css'];
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'css');

// ✅关键：开启实验性解析器，支持 package.json "exports"（解决 trpc 问题）
config.resolver.unstable_enablePackageExports = true;
config.resolver.unstable_conditionNames = ['react-native', 'browser', 'require', 'import'];

module.exports = config;
