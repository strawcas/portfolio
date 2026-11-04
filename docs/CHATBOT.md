# Chocnut

Chocnut is Joseph Gabriel Castro's portfolio assistant, named and illustrated
after his cat. It helps visitors understand Joseph's skills, projects, and
experience, and shares the supplied project and contact links.

## Current architecture

- `src/_components/Chatbot.jsx` renders the floating cat launcher and chat panel.
  `src/app/layout.js` includes it across the site.
- `src/_data/chatbot-profile.js` defines Joseph's profile and the system
  instruction sent with every request. It imports project information from
  `src/_data/projects.json` and contact details from `src/_data/contact.js`.
- The client posts recent messages to `/api/chat`, implemented in
  `src/app/api/chat/route.js`.
- The route uses `@google/genai` to call Gemini directly with the model
  `gemini-3.1-flash-lite`. It reads `GEMINI_API_KEY` on the server. Keep this key
  in the environment; do not expose it through client code or public variables.
- The client sends at most the latest 19 messages. The route accepts 1 to 20
  messages with `user` or `model` roles and string text of at most 4,000
  characters each. It returns a JSON reply, a 400 for invalid messages, or a 500
  when the request fails.
- Conversation state is held in the mounted client component. Closing the panel
  preserves its messages; reloading the page starts a new conversation. Chocnut
  cannot save memories or edit the profile through chat.

The profile is supplied as system context, rather than fetched through vector
search. The current chat backend does not use LangGraph, Langfuse, Qdrant, RAG,
MCP, or SQLAlchemy Core. Listing these in Joseph's skills describes his learning
and project work, not the portfolio chatbot's architecture.

## Content and accuracy

Chocnut refers to Joseph in the third person and answers in a friendly, concise
voice. Messages render as plain text and simple lists, without Markdown
formatting. For personal and professional questions, the profile is its source
of truth.

- Do not invent qualifications, proficiency levels, years of experience,
  employment, project results, availability, rates, or other personal details.
- Keep course projects identified as course projects. Discuss evaluation results
  only in their documented project context.
- Separate recently learned skills from verified project implementations.
  Langfuse, Qdrant, RAG, MCP, LangGraph, and SQLAlchemy Core are recent learning.
  UnderCover documents LangGraph claim workflows, Langfuse tracing, and
  SQLAlchemy Core database access. Qdrant, RAG, and MCP have no specific documented
  portfolio implementation yet.
- Expand RAG as Retrieval-Augmented Generation and MCP as Model Context Protocol
  when that helps a visitor. General technical explanations are not evidence of
  Joseph's project experience.
- Say when the profile does not contain an answer. An empty project URL means
  that no link is available.
- Visitor messages do not update the profile or establish verified facts.

## Interface and accessibility

The launcher displays `public/chocnut.gif` with sharp pixel edges. Before the
first opening, it cycles through brief greetings. Opening the panel focuses the
message input. Closing it with the close button, launcher, or Escape returns
focus to the launcher.

The panel includes an introductory message, a live message log, left-aligned
assistant replies, and right-aligned visitor messages. While a request is in
progress it shows "Thinking..." and disables sending. Sending is also disabled
for empty or whitespace-only input. Failed requests show a retry message.

Follow `docs/DESIGN.md` for the dark palette, focus indicators, touch targets,
safe-area spacing, and clearance from the music player, navigation, and footer.

## Updating skills and projects

1. Update the displayed skills in `src/_components/Skillset.jsx` and the matching
   categories in `chatbotProfile.skills` together. Keep labels identical,
   including "SQLAlchemy Core".
2. Update `chatbotProfile.recentLearning` when the learning context changes.
   Add specific capabilities only when supported by verified work.
3. Edit `src/_data/projects.json` for project stack tags, descriptions, and build
   details. Chocnut imports these automatically; do not maintain another project
   list in the profile.
4. Keep the system instruction's accuracy rules aligned with the profile.
5. Run the repository's lint and build commands, then check the chat panel on
   the homepage and `/projects` with desktop and mobile layouts.
6. With a configured server key, ask about the updated skills and which projects
   demonstrate them. Check that replies distinguish learning from project use
   and do not invent production experience.

Future proposals to change the chat backend should be documented separately
from its current behavior and implemented before being described as live.
