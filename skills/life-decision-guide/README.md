# Life-Decision Skill (life-decision-guide)

Let an AI assistant answer concrete questions using *How To Live Better* (高性价比人生指南): whether to do something, whether it's worth it, how to choose, what to do first when something happens, what money can be claimed, and whether doing so is illegal.

It does only one thing: **first look up the relevant entries in the main text, then answer in the book's accounting style, sorted by cost-effectiveness**, citing which section and which entry each answer comes from. If it can't be found, it says so — it doesn't fabricate numbers from memory.

All rules live in [SKILL.md](SKILL.md); both tools share the same file, no duplicate maintained.

## Install in Claude Code

Open Claude Code in this repo — no install needed, `.claude/skills/life-decision-guide/` already points to these rules.

To use in any directory, copy to your personal skill directory:

```bash
mkdir -p ~/.claude/skills/life-decision-guide && curl -fsSL -o ~/.claude/skills/life-decision-guide/SKILL.md "https://raw.githubusercontent.com/eternity4719/HowToLiveBetter/main/skills/life-decision-guide/SKILL.md"
```

After that, just ask "is a two-hour daily commute worth it" or "my friend asked me to be a guarantor, should I sign?" — it will trigger automatically; or explicitly say "answer with life-decision-guide."

## Install in Codex

Open Codex in this repo — no install needed, the root `AGENTS.md` already points to it.

To use in any directory, drop it into Codex's custom prompts directory, then invoke with `/life-decision-guide`:

```bash
mkdir -p ~/.codex/prompts && curl -fsSL -o ~/.codex/prompts/life-decision-guide.md "https://raw.githubusercontent.com/eternity4719/HowToLiveBetter/main/skills/life-decision-guide/SKILL.md"
```

For it to be active in every session without typing the slash command each time, add this line to `~/.codex/AGENTS.md`:

```markdown
When answering life-decision questions (whether to do something, whether it's worth it, how to choose, what can be claimed, whether it's illegal), follow ~/.codex/prompts/life-decision-guide.md.
```

## Where the main text comes from

If you have this repo locally, read the local `book/`; otherwise fetch on the fly:

```bash
git clone --depth 1 https://github.com/eternity4719/HowToLiveBetter.git "${TMPDIR:-/tmp}/hltb"
```

The whole book is 1.3 MB; a shallow clone takes a few seconds. If you can't reach the network, say so honestly — don't substitute the main text from memory.

## Change notes

SKILL.md keeps no list or number that would drift with the main text: the section list is read from README's "Questions This Book Tries to Answer" table, and the cost-effectiveness tier algorithm is read from the `COST_W` and `e.ratio` lines in `index.html`. So adding/removing sections or changing tier rules doesn't require touching this directory.
