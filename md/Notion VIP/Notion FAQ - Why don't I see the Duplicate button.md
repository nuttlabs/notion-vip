
\<!-- youTube(/1aeeiu8_Tg8) --\>

When you purchase a template from a Notion creator, you typically add it to your workspace by duplicating a page, which often contains sub-pages. That’s as simple as clicking `Duplicate` at the top-right of the page — but the button is often missing when users need it.

Let’s see what determines whether that duplicate button is visible.

### App Links vs. Web Links

Notion pages are accessible through two different domains — `notion.so` and `notion.site`: 

1. `notion.so/[Workspace Domain]/...` — When signed-in users visit a page from its `notion.so` URL, they’re accessing it through the Notion app. They can use all capabilities of Notion within their permission level for the page.
2. `[Workspace Domain].notion.site` — When a page is published, it gets a **web link**, which has a `notion.site` URL. That URL is accessible in a read-only format by anyone on the web, just like a web page.

### Only web links show the Duplicate button.

When you publish a page, you have the option to `Allow duplicate as template`. That’s what enables the button. In order to see it, you must visit the `notion.site` version of the page.

### Replacing `notion.so` with `notion.site`

If you find yourself on the `notion.so` version of a template or other page that you know to be duplicable, you can easily switch to the web link:

1. Replace `.so` with `.site`
2. Find the workspace domain after the first `/`. Replace `www` with it.

Here’s an example:

**App Link:** `https://www.notion.so/nuttlabs/g64a0beg49ag4ba690bbg46d5490be48`

**Web Link:** `https://nuttlabs.notion.site/g64a0beg49ag4ba690bbg46d5490be48`


