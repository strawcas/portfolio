# Technology Skills Update Plan

Status: Implemented. The production build, lint for changed JavaScript files,
and browser layout and interaction checks passed. Repository-wide lint and live
chat response verification have the limitations recorded below.

## Objective

Showcase Joseph's recently learned skills in Langfuse, Qdrant, RAG, MCP,
LangGraph, and SQLAlchemy Core. Keep the portfolio's existing identity, skill
groups, and first-person voice, following `docs/DESIGN.md`.

This is a content and presentation update. Adding these skills to the portfolio
does not require installing their SDKs or integrating their services into the
website.

## Repository guidance and baseline

- Follow `AGENTS.md` and its reference from `CLAUDE.md`. Before writing
  application code, read the relevant version-matched Next.js guides in
  `node_modules/next/dist/docs/`.
- Follow `README.md` for the project data format and featured-project behavior.
- Preserve the homepage order: hero, skillset, experience, featured projects,
  about, and contact/footer.
- The skillset is defined in `src/_components/Skillset.jsx`. Chocnut has a
  separate skills list in `src/_data/chatbot-profile.js`; update both together.
- Chocnut currently calls Gemini directly through `src/app/api/chat/route.js`.
  Its profile is supplied as context with each request.
- `docs/CHATBOT.md` was empty before this update; it now documents the current
  architecture, behavior, accuracy rules, and maintenance workflow.
- Preserve existing staged and unstaged changes when implementing this plan.

## 1. Add the six skills to the existing groups

Primary file: `src/_components/Skillset.jsx`.

| Technology | Existing group | Meaning |
| --- | --- | --- |
| Langfuse | AI Tools & Frameworks | LLM tracing, observability, and evaluation |
| LangGraph | AI Tools & Frameworks | Stateful agent workflows and orchestration |
| RAG | AI Tools & Frameworks | Retrieval-Augmented Generation: supplying retrieved knowledge to a model |
| MCP | AI Tools & Frameworks | Model Context Protocol: connecting AI applications to tools and data |
| Qdrant | Databases & Platforms | Vector storage and semantic search |
| SQLAlchemy Core | Frameworks & Libraries | SQL expressions, database connections, and transactions |

Implementation tasks:

- [x] Add each technology once, using the exact labels above.
- [x] Place LangGraph near LangChain and keep related AI technologies together.
- [x] Reuse the existing icon-and-label tiles, muted colors, borders, spacing,
  hover effects, and reduced-motion behavior.
- [x] Use the installed `react-icons` exports `SiLanggraph`, `SiQdrant`,
  `SiModelcontextprotocol`, and `SiSqlalchemy` after confirming their availability
  at implementation time.
- [x] Use suitable generic tracing and retrieval icons for Langfuse and RAG if
  dedicated icons are unavailable. Keep text labels visible and decorative icons
  hidden from assistive technology.
- [x] Keep the RAG and MCP tile labels concise. Acronym expansions remain in
  Chocnut's profile and documentation; the visible explanations beneath the AI
  group heading were removed at Joseph's request.
- [x] Keep tile layout rules intact and remove unused explanation styles.

## 2. Add brief context to the biography

Primary file: `src/_components/About.jsx`.

Add one short sentence about the recent learning. Suggested copy:

> Recently, I've been learning more about agent workflows,
> retrieval-augmented generation, MCP integrations, LLM observability, and SQL
> database access.

- [x] Keep the biography personal, concise, and consistent with the existing
  first-person tone.
- [x] Keep the hero concise; use the skillset for the full technology list.
- [x] Describe the new skills as recent learning without adding unsupported
  proficiency ratings, employment claims, or years of experience.

## 3. Synchronize Chocnut's knowledge

Primary file: `src/_data/chatbot-profile.js`.

- [x] Add SQLAlchemy Core to `skills.frameworksAndLibraries`.
- [x] Add Qdrant to `skills.databasesAndPlatforms`.
- [x] Add Langfuse, LangGraph, RAG, and MCP to `skills.aiToolsAndFrameworks`.
- [x] Add a concise profile statement identifying all six as recently learned
  skills. Preserve the distinction between learning and documented project use.
- [x] Describe specific implementations only when supported by verified project
  details. Do not infer that learning MCP means Joseph has built an MCP server,
  or that learning Langfuse means he has deployed it in production.
- [x] Retain the existing instructions against inventing qualifications,
  proficiency levels, project results, or other personal facts.

The current profile update is sufficient for Chocnut to know about these skills.
A chat backend rewrite is outside this plan's scope.

## 4. Connect skills to verified project evidence

Primary file, when evidence supports changes: `src/_data/projects.json`.

The adjacent UnderCover checkout contains completed durable-state work. Reviewed
`docs/STATUS.md`, `docs/TECH_STACK.md`, `agent/harness.py`, and
`backend/database.py`: these establish LangGraph claim workflows with Postgres
checkpoints and human sign-off, per-claim Langfuse tracing, and SQLAlchemy Core
queries shared by SQLite and Supabase PostgreSQL. The project entry and Chocnut's
capabilities now describe that work.

- [x] Identify which completed projects or exercises demonstrate each skill.
  UnderCover supports LangGraph, Langfuse, and SQLAlchemy Core. Qdrant, RAG, and
  MCP remain recent learning without a specific documented implementation.
- [x] Add verified technologies to the relevant project's `stack` and explain
  their actual role in `details` for the existing "Inside the build" disclosure.
- [x] Review whether a new project entry is needed. The verified work extends
  UnderCover, so no additional project was added.
- [x] Identify course work as course work. Include only available screenshots,
  repository links, and demos; do not invent results or metrics.
- [x] Review screenshot requirements. No new screenshots were added to project
  data; the existing project images were retained.
- [x] Review featured-project ordering. The homepage displays only the first
  three entries with `featured: true`, in file order, and gives the first card
  the wider layout.

Project edits are conditional on evidence. The skills and biography updates can
proceed using Joseph's statement that he has learned these technologies.

## 5. Document Chocnut's behavior and maintenance

Primary file: `docs/CHATBOT.md`.

- [x] Document `src/_data/chatbot-profile.js` as the source for Joseph's skills
  and profile, with projects and contact details imported from existing data.
- [x] Explain that the current chat route calls Gemini directly and supplies
  the profile with each request.
- [x] Document how to keep the displayed skillset and chatbot knowledge aligned.
- [x] Explain the distinction between recently learned skills and verified
  project experience.
- [x] Record the existing introductory, loading, error, and disabled-send
  states, input focus on opening, and launcher focus restoration on closing.
- [x] Keep any future backend integration proposals clearly separate from the
  currently implemented behavior.

## 6. Validate the implementation

Run after the application changes are complete:

```sh
npm run lint
npm run build
```

Manual acceptance checks:

- [x] All six technologies appear once in the intended skill groups.
- [x] Skill labels match Chocnut's profile, including "SQLAlchemy Core".
- [x] Desktop, tablet, and mobile layouts retain readable spacing and have no
  horizontal overflow. Check long labels and the expanded AI group carefully.
- [x] Keyboard focus, accessible labels, and reduced-motion behavior remain
  usable.
- [x] On the homepage and `/projects`, the music player, navigation, footer,
  cat launcher, and open chat panel remain clear of one another.
- [x] If project data changes, inspect both featured cards and the project
  archive, including disclosures, links, images, and ordering.
- [ ] Confirm generated replies about the six skills. Live requests were
  attempted twice, but Gemini returned HTTP 503 `UNAVAILABLE` due to high demand.
  The interface's loading, disabled-send, and error states were verified.
- [x] Review the final diff and report any checks that could not be completed.

### Verification results

- `npm run build`: passed. The sandboxed attempt stalled; a rerun outside the
  sandbox completed successfully with Next.js 16.3.5.
- `npx eslint src/_components/Skillset.jsx src/_components/About.jsx
  src/_data/chatbot-profile.js`: passed.
- `npm run lint`: failed on existing `react-hooks/refs` errors in
  `src/_components/ShootingStar.jsx`, with an existing dependency warning in
  `src/_hooks/useShootingStar.js`. Neither file was changed by this update.
- Browser checks passed at 1440, 768, 390, and 320 pixels wide: the six skill
  tiles have no overflow, and chat stays inside the viewport without overlapping
  the music player on both `/` and `/projects`.
- Keyboard opening and closing of UnderCover's build disclosures passed on
  both pages. Chat opening focuses the input, Escape closes it and restores
  launcher focus, and reduced-motion emulation disables launcher animation.
- Desktop and mobile skill screenshots were visually reviewed. The preview
  uses the existing local server at `http://localhost:3000`.
- Live response content remains unverified because of Gemini's upstream 503
  responses. No chat backend or model changes were made.

## Suggested commit messages

For this planning document:

```text
docs: add technology skills update plan
```

For the completed website update:

```text
feat: showcase newly learned AI and data technologies
```

## Technology references

- [Langfuse documentation](https://langfuse.com/docs)
- [LangGraph overview](https://docs.langchain.com/oss/python/langgraph/overview)
- [Retrieval and RAG](https://docs.langchain.com/oss/python/deepagents/retrieval)
- [Model Context Protocol introduction](https://modelcontextprotocol.io/docs/getting-started/intro)
- [Qdrant overview](https://qdrant.tech/documentation/overview/)
- [SQLAlchemy Core documentation](https://docs.sqlalchemy.org/en/20/core/)
