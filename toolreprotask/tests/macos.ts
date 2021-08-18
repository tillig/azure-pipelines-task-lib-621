import ma = require('azure-pipelines-task-lib/mock-answer');
import tl = require('azure-pipelines-task-lib/task');
import tmrm = require('azure-pipelines-task-lib/mock-run');
import path = require('path');

const taskPath = path.join(__dirname, '..', 'index.js');
const runner: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);
const answers: ma.TaskLibAnswers = {
  'getPlatform': {
    'getPlatform': tl.Platform.MacOS,
  },
};
runner.setAnswers(answers);
runner.run();
