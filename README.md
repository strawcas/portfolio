This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Adding projects

Edit `src/_data/projects.json`. Every object in this array renders a card on
`/projects`, in the same order as the file. Set `"featured": true` to include a
project in the homepage's Projects section, which shows only the first three
featured entries in file order. No new project content is required in JSX.

Copy this template into the array and replace its values (use a unique `id`):

```json
{
    "id": "my-project",
    "name": "My project",
    "category": "Web application",
    "description": "A short description of what the project does.",
    "stack": ["Next.js", "React"],
    "details": ["A feature or implementation detail."],
    "featured": false,
    "image": "",
    "imageAlt": "",
    "demoUrl": "",
    "githubUrl": ""
}
```

- `id`, `name`, and `description` are required. Use a unique, lowercase,
  hyphenated `id` such as `my-project`.
- `category`, `stack`, and `details` are optional. Empty or omitted lists are hidden.
- For a screenshot, put the file in `public/projects/` and set `image` to a path
  such as `/projects/my-project.png`. Set `imageAlt` to describe the screenshot.
  Leave `image` empty for the default cover; no image or icon imports are needed.
- Set `demoUrl` and/or `githubUrl` to full HTTPS URLs to show those links. Leave
  them empty or omit them to hide the buttons.
- The optional `icon` accepts `nextjs`, `react`, or `flutter`, with a generic code
  icon as the default. The existing projects also use optional `artwork` values
  `alpine`, `subtrack`, and `gym` to retain their illustrations. Omit `artwork` on
  new entries to use the default cover. An `image` takes priority over `artwork`.
- Card numbers and the project count are automatic. An empty array (`[]`) shows
  an empty state. Keep the file valid JSON: double quotes and no trailing commas.

Saving the JSON updates the pages during `npm run dev`. For a deployed site,
rebuild and redeploy after changing the file.

## Local development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
