# Donobu Papal Election Smoke Test Demo

A minimal demo using the Donobu NPM library to run an autonomous smoke test that checks for white smoke from the Sistine Chapel chimney during a papal election.

---

## Prerequisites

* Node.js v20 or later
* Playwright browsers installed (`npx playwright install --with-deps`)
* `GOOGLE_GENERATIVE_AI_API_KEY` and `GOOGLE_GENERATIVE_AI_MODEL_NAME` for generative assertions

---

## Installation

```bash
# Clone and enter repo
git clone https://github.com/donobu-inc/donobu-papal-election-tests.git
cd donobu-papal-election-tests

# Install deps and browsers
npm ci
npx playwright install --with-deps
```

---

## Running Tests

Add your smoke test script in `tests/papal_election_smoke_test.ts`. Then run:

```bash
npm test    # runs `npx playwright test`
```

---

## CI with GitHub Actions

A scheduled workflow runs the smoke test up to 60 times, stopping early on white smoke detection. See `.github/workflows/tests.yaml` for schedule and steps.

---

## Video Demo

```md
![Autonomous Run Demo](demo/test_authoring_demo.gif)

[View full video](demo/test_authoring_demo.mp4)
```

---

## Logs Screenshot of Passing Test

![Smoke Test Logs](demo/logs.png)

---

Feel free to adjust schedules, timeouts, or assertion details to suit your own conclave watch.

---

## License

MIT License

Copyright (c) 2025 Donobu Inc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
