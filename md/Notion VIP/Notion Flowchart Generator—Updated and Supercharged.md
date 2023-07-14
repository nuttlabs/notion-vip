
Flowcharts offer a powerful way to visualize workflows and organizational structures. They’re essential to planning and documenting systems of all kinds, especially Notion workspaces.

Much to my surprise, few tools generate flowcharts from structured information, like spreadsheets. Those that do return ugly results and lack customization.

When Notion added the ability to display flowcharts in `Code` blocks, I created a simple template for generating the required code from a database. Despite its limited customization options, the tool remains one of the most popular resources on Notion VIP. 

So I decided to supercharge it with an updated version.

## Flowcharts in Code Blocks
Here’s all you need to know about displaying flowcharts in `Code` blocks:
- When you add a `Code` block to a Notion page, you choose a programming language.
- Among the language options is **Mermaid**. [Mermaid](https://mermaid.js.org/) is a syntax for generating charts from text, including flowcharts. No need to spend valuable brain capacity learning it.
- After selecting Mermaid as the language, you can choose among three display options:
	1. **Code** — View only the Mermaid code, for editing.
	2. **Preview** — View only the resulting flowchart. _(This is how you’ll leave the block when you’re not editing the flowchart.)_
	3. **Split** — See both the code and resulting flowchart.

## The Generator
To demonstrate the generator, let’s build the classic example, straight from the Wikipedia article for [Flowchart](https://en.wikipedia.org/wiki/Flowchart).