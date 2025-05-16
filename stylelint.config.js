/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-standard-scss",
    "stylelint-config-clean-order",
  ],
  plugins: ["stylelint-order"],
  rules: {
    "no-empty-source": null,
    "declaration-empty-line-before": null,
    "selector-class-pattern": null,
    "keyframes-name-pattern": null,
    "custom-property-pattern": null,
    "number-max-precision": null,
    "no-descending-specificity": null,
    "selector-pseudo-class-no-unknown": null,
    "declaration-block-no-redundant-longhand-properties": null,
  },
};
