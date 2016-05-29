import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';

import { PROJECT_TASKS_DIR, SEED_TASKS_DIR } from './tools/config';
import { loadTasks } from './tools/utils';

loadTasks(SEED_TASKS_DIR);
loadTasks(PROJECT_TASKS_DIR);

gulp.task('build', (done: any) =>
  runSequence('clean.prod',
              'tslint',
              'build.assets.prod',
              'build.html_css',
              'copy.js.prod',
              'build.js.prod',
              'build.bundles',
              'build.bundles.app',
              'build.index.prod',
              done));

