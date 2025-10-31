module.exports = () => {
  return {
    postcssPlugin: 'fix-align-items-start',
    Once(root) {
      root.walkDecls(decl => {
        if (decl.prop === 'align-items' && decl.value === 'start') {
          decl.value = 'flex-start';
        }
        if (decl.prop === 'align-items' && decl.value === 'end') {
          decl.value = 'flex-end';
        }
        if (decl.prop === 'justify-items' && decl.value === 'start') {
          decl.value = 'flex-start';
        }
        if (decl.prop === 'justify-items' && decl.value === 'end') {
          decl.value = 'flex-end';
        }
      });
    }
  };
};

module.exports.postcss = true;

