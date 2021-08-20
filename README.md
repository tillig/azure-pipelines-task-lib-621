# Repro: microsoft/azure-pipelines-task-lib#621

**The issue is resolved with `azure-pipelines-task-lib` version 3.1.8.** The demo here is updated to verify that. If you want to see the failure (and why would you?), go back to 3.1.7.

---

This repo has a very simple task that shows how the `getPlatform` answer for the task library can't actually be mocked because the mocking system returns `null` if the mock answer is actually `0`. This happens because the mock answer library uses a simple `!` not check to see if the answer is present and returns `null` if it's not; but the `!` not check sees `0` and then incorrectly returns `null`.

Build and demo:

```sh
npm install
npm run demo
```

You should see the code build and then run tests. You'll see that the ability to mock `Windows` as a platform _fails_ because the mock library returns `null` incorrectly. Mocking the other platforms will succeed because the answers aren't `0`.
