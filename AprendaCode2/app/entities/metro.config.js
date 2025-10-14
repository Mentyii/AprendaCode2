const { getDefaultConfig } = require("@expo/metro-config");

const config = getDefaultConfig(__dirname);

// Garanta que .cjs esteja presente nas extensões resolvidas
config.resolver.sourceExts = [...config.resolver.sourceExts, 'cjs'];

module.exports = config;
