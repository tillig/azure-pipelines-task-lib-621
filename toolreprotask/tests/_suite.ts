import * as path from 'path';
import * as assert from 'assert';
import * as ttm from 'azure-pipelines-task-lib/mock-test';

describe('Demonstrate mocking issue', function() {
  it('should allow Windows', /* @this: Mocha.Context */ function(done: Mocha.Done) {
    this.timeout(1000);

    const tp = path.join(__dirname, 'windows.js');
    const tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

    tr.run();
    console.log(tr.succeeded);
    console.log(tr.stdout);

    // This test will FAIL because the mock returns null.
    // It returns null because the enum value is zero.
    assert.equal(tr.stdout.indexOf('Windows') >= 0, true, 'should detect Windows');
    done();
  });

  it('should allow Linux', /* @this: Mocha.Context */ function(done: Mocha.Done) {
    this.timeout(1000);

    const tp = path.join(__dirname, 'linux.js');
    const tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

    tr.run();
    console.log(tr.succeeded);
    console.log(tr.stdout);

    // This works because the Linux enum value is not zero.
    assert.equal(tr.stdout.indexOf('Linux') >= 0, true, 'should detect Linux');
    done();
  });

  it('should allow MacOS', /* @this: Mocha.Context */ function(done: Mocha.Done) {
    this.timeout(1000);

    const tp = path.join(__dirname, 'macos.js');
    const tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

    tr.run();
    console.log(tr.succeeded);
    console.log(tr.stdout);

    // This works because the MacOS enum value is not zero.
    assert.equal(tr.stdout.indexOf('MacOS') >= 0, true, 'should detect MacOS');
    done();
  });
});
