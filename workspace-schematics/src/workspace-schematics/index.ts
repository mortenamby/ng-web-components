import { apply, applyTemplates, chain, mergeWith,  Rule, SchematicContext, strings, Tree, url } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function workspaceSchematics(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const sourceTemplate = url('./files');
    const parameterizedTemplate = apply(sourceTemplate, [
      applyTemplates({
        name: 'eslint.config.js',
        ...strings
      }),
      // move(normalize(tree.root.path + 'sdfsdfsdf/'))
    ]);

    return chain([mergeWith(parameterizedTemplate)]);
    // return tree;
  };
}
