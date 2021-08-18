import tl = require('azure-pipelines-task-lib/task');

async function run() {
  const platform = tl.getPlatform();
  tl.debug('Answer from getPlatform is: ' + platform);
  let platformName = 'unknown';
  switch (platform) {
    case null:
      platformName = 'MOCK FAILED - RETURNED NULL';
      break;
    case tl.Platform.Windows:
      platformName = 'Windows';
      break;
    case tl.Platform.Linux:
      platformName = 'Linux';
      break;
    case tl.Platform.MacOS:
      platformName = 'MacOS';
      break;
    default:
      break;
  }

  // Always fail because that always writes to the log. Easier for demo.
  tl.setResult(tl.TaskResult.Failed, 'Platform is ' + platformName);
}

run();
