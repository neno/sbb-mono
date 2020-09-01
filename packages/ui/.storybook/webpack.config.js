module.exports = async ({ config }) => {
  /* Find the matching JavaScript module rule  */
  const jsRule = config.module.rules.find((rule) => '.js'.match(rule.test));

  if (jsRule) {
    const options = jsRule.use[0].options;
    /* Ensure the rule has presets */
    if (!options.hasOwnProperty('presets')) {
      options.presets = [];
    }

    /* Add Babel’s preset-react to the rule’s presets */
    options.presets.push('@babel/preset-react');
  }

  return config;
};
