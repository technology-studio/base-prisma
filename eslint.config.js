module.exports = (async function config() {
  const { configList } = await import('eslint-config-txo-package-typescript')
  return configList
})()
