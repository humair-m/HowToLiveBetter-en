// README structure parsing and file list: shared by the EPUB (tools/epub) and PDF (tools/pdf) builds.
// Only the README structure is recognized; no file list is maintained — adding a section or a long
// read is picked up automatically by both builds.
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
export const REPO = 'https://github.com/eternity4719/HowToLiveBetter';
export const SITE = 'https://eternity4719.github.io/HowToLiveBetter/';
export const TITLE = 'How To Live Better';
export const RELEASE = `${REPO}/releases/download/epub-latest`;

// Always hand the line endings to each build as LF: on Windows with core.autocrlf=true the checkout
// is CRLF, and the offline-build script looking for '\n'-based needles in index.html would find
// nothing and fail locally with "could not find the start of the main script" (CI is on Linux and
// never hit this). Body parsing also does not need to handle \r separately.
export const read = p => readFileSync(resolve(ROOT, p), 'utf8').replace(/\r\n/g, '\n');
export const unique = arr => [...new Set(arr)];

export function gitCommit() {
  try {
    return execSync('git rev-parse HEAD', { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return process.env.GITHUB_SHA ?? '';
  }
}

// The body text may be revised several times in a day, so a date alone cannot tell which version
// this is; precision goes down to the minute.
// CI runs on UTC; display in Beijing time uniformly so that downloaders comparing against their
// own local dates do not get confused.
export function buildStamp() {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Shanghai', dateStyle: 'short', timeStyle: 'short' }).format(new Date());
}

export function stripBackLink(md) {
  return md.replace(/^\[← 回总目录\]\([^)]*\)\s*\n/, '');
}

// A segment in the README from one heading to the next
export function readBook() {
  const readme = read('README.md');
  const lines = readme.split('\n');
  const between = (from, to) => {
    const a = lines.findIndex(l => l.startsWith(from));
    const b = lines.findIndex((l, i) => i > a && l.startsWith(to));
    if (a < 0 || b < 0) throw new Error(`Could not find the segment from "${from}" to "${to}" in README`);
    return lines.slice(a, b).join('\n');
  };
  const description = between('# 高性价比人生指南', '[![')
    .split('\n').slice(1).map(l => l.replace(/<[^>]+>/g, '').trim()).filter(Boolean).join('');
  const frontMd = between('## 这本书想回答的问题', '## 目录');
  const contentsMd = between('## 目录', '## 正文')
    .split('\n\n').filter(p => !p.includes('index.html')).join('\n\n');
  const bookFiles = unique([...contentsMd.matchAll(/\]\((book\/[^)#]+\.md)\)/g)].map(m => m[1]));
  const docFiles = unique([...readme.matchAll(/\]\((docs\/[^)#/]+\.md)\)/g)].map(m => m[1]));
  if (bookFiles.length === 0) throw new Error('No book/ files found in the README table of contents');
  return { readme, description, frontMd, contentsMd, bookFiles, docFiles };
}
