// Renders /cv-print to public/Nour-Essam-CV.pdf with headless Chrome.
// Run after changing src/data/cv.ts:  npm run cv:pdf
// Set CHROME_PATH if Chrome isn't in the default macOS location.
import { spawn, execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const out = path.join(root, 'public', 'Nour-Essam-CV.pdf');
const chrome = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = 4329;
const url = `http://localhost:${port}/cv-print`;

const run = (args) => execFileSync('npx', args, { cwd: root, stdio: 'inherit' });

run(['astro', 'build']);
const preview = spawn('npx', ['astro', 'preview', '--port', String(port)], { cwd: root, stdio: 'ignore' });

try {
  for (let i = 0; ; i++) {
    try {
      if ((await fetch(url)).ok) break;
    } catch {}
    if (i > 60) throw new Error(`Preview server did not start on port ${port}`);
    await new Promise((r) => setTimeout(r, 500));
  }
  execFileSync(chrome, [
    '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
    `--print-to-pdf=${out}`, url,
  ], { stdio: 'ignore' });
  console.log(`Saved ${path.relative(root, out)}`);
} finally {
  preview.kill();
}

// Rebuild so dist/ includes the fresh PDF.
run(['astro', 'build']);
