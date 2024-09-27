import {Rule} from '@angular-devkit/schematics';
import {addRootImport} from '@schematics/angular/utility';
export function ngAdd(options: any): Rule {
  // Add an import `MyLibModule` from `my-lib` to the root of the user's project.
  return addRootImport(
    options.project,
    ({code, external}) => code`${external('MyLibModule', 'my-lib')}`,
  );
}
