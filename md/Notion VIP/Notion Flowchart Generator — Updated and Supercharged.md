
\<!-- youTube(ixvqwyW6Xbs) --\>

Flowcharts offer a powerful way to visualize workflows and organizational structures. They’re essential to planning and documenting systems of all kinds, especially Notion workspaces.

Much to my surprise, few tools generate flowcharts from structured information, like spreadsheets. Those that do return ugly results and lack customization.

When Notion added the ability to display flowcharts in `Code` blocks, I created a simple template for generating the required code from a database. Despite its limited customization options, the tool remains one of the most popular resources on Notion VIP. 

So I decided to supercharge it with an updated version that offers much more customization. Read about it below or watch the walkthrough above, then access the extraordinarily useful tool [here](https://www.notion.vip/product/notion-flowchart-generator).

## Flowcharts in Code Blocks
Here’s all you need to know about displaying flowcharts in `Code` blocks:
- When you add a `Code` block to a Notion page, you choose a programming language.
- Among the language options is **Mermaid**. [Mermaid](https://mermaid.js.org/) is a syntax for generating charts from text, including flowcharts. No need to spend valuable brain capacity learning it.
- After selecting Mermaid as the language, you can choose among three display options:
	1. **Code** — View only the Mermaid code, for editing.
	2. **Preview** — View only the resulting flowchart. _(This is how you’ll leave the block when you’re not editing the flowchart.)_
	3. **Split** — See both the code and resulting flowchart.

## The Generator
To demonstrate the generator, let’s recreate the classic “lamp does’t work” example from Wikipedia’s article for [Flowchart](https://en.wikipedia.org/wiki/Flowchart):

![](https://assets.notion.vip/assets/insights/flowchart-generator/og-flowchart.svg)

When you access the template, you’ll find this sample included for reference.

### Prepare the Flowcharts database item.

![](https://assets.notion.vip/assets/insights/flowchart-generator/create-flowcharts-database-item.gif)

Within the main page of the generator, you’ll see a **Flowcharts** database. For each flowchart you create, you’ll add an item to this database.

1. **Add an item.** Give the flowchart a title.
2. **Choose the template.**With the item opened as a page, select **Flowchart Template**.
3. **Customize the item’s properties.** Below the title you’ll see two properties, each with a default value that you can optionally change. One is for the orientation of the flowchart (left-to-right or top-to-bottom); the other is for the size of the text.

### Add nodes.
Nodes are the labeled shapes that represent steps of the flowchart.

![](https://assets.notion.vip/assets/insights/flowchart-generator/add-nodes.png)

Within the body of the open database item, you’ll see a Linked Database with two views: **Nodes** and **Styles**.

- The **Nodes** view links to a master **Nodes** database.
- It’s filtered to display only the nodes for the open flowchart. That’s why it’s empty within your new flowchart.
- Each item of this view represents a node in your flowchart. To add a node, you add an item to the view.

#### Node Properties
- **Sort** _(Optional)_ — The view is sorted by this property. It’s for administrative needs only, to assist you visually as you manage the nodes. Generally, you’ll want to order the nodes in the same sequence they’ll appear int he flowchart.
- **Previous Node** _(Required, except starting node)_ — This `Relation` property allows you to choose another node. For each node (except the first one), choose the one that comes before it, connected by an arrow. _(Note: The selection list will show all items of the master **Nodes** database, not just those for the current flowchart.)_
- **Incoming Link Text** _(Optional)_ — If you’d like the connecting arrow to include text, add it here.
-  **Incoming Link Style** _(Optional)_ — By default, the connecting arrow will be solid. With this property, you can make it dotted.
- **Node Text** _(Required)_ — The important label on the node itself.
- **Style** _(Optional)_ — _(Keep reading.)_

### Create styles.
**Styles** allow you to create node designs that can be easily assigned and reused among nodes of the same type. For example, you might have a style for all nodes that ask a question, and another for for nodes that offer solutions.

Similar to the **Nodes** view, the **Styles** view links to a master **Styles** database. 

But unlike **Nodes**, it’s _unfiltered_, meaning you see all styles for all flowcharts. That allows you to reuse them across flowcharts. _(Note: If you change a style within one flowchart, it will update everywhere.)_

#### HEX Color Codes
Let’s quickly overview HEX codes so you can use them in styles. If you’ve done any sort of digital graphic design, you’re likely familiar with HEX color codes. They’re six-digit, alphanumeric codes preceded by `#` for RGB colors. For example, `#4B9CD3` represents Carolina Blue.

On the main page of the flowchart generator, I’ve included two resources for selecting HEX codes easily:
- With [Material Design Colors](https://materialui.co/colors/), you can choose from Google’s Material Design palette.
- To choose any color from the RGB model, use [Color Picker](https://htmlcolorcodes.com/color-picker/). 

#### Style Properties

![](https://assets.notion.vip/assets/insights/flowchart-generator/styles.png)

When you create a style, you’ll specify six properties. All but **Style Name** have a default value, which you can leave unmodified.
- **Style Name** — The name should correspond with the type of node that twill use the style, such as “Questions” or “Solutions.”
	- **Shape** — Choose the node’s shape among the dropdown options.
	- **Background Color (HEX)** — The node’s background color, in HEX format (with the leading `#`).
	- **Text Color (HEX)** — The node’s text color, in HEX format (with the leading `#`).
	- **Border Color (HEX)** — The node’s border color, in HEX format (with the leading `#`).
	- **Border Width** — An integer for the border’s width.

### Assign styles to nodes.

For nodes, the **Style** property is optional. Without an assigned style, nodes will render with a default format.

![](https://assets.notion.vip/assets/insights/flowchart-generator/assign-style.gif)

If you’d like to assign a style to a node, clicking into the property will allow you to choose from the **Styles** database.

### Copy the code.

After creating all nodes, you can copy the code from the **Final Mermaid** property.
- It’s hidden by default below the flowchart’s title. Click `more properties` to reveal it.
- Hover your cursor over the **Final Mermaid** code, then click the `Copy to Clipboard` icon.

### Test.

![](https://assets.notion.vip/assets/insights/flowchart-generator/test-mermaid.gif)

Before pasting the code into its final location, you’ll want to ensure it renders the flowchart you want.

- Below the **Nodes** and **Styles** views, you’ll see a `Code` block for testing. It’s preset to **Mermaid** and the **Split** view. 
- Paste your code into it to see the resulting flowchart instantly.
- Make any needed tweaks to your nodes or styles, then re-copy and re-test.

### Paste in the final location.
Once you’ve perfected your flowchart:
- Create a `Code` blocks here you’d like it displayed. 
- Choose **Mermaid** for the language.
- Paste your code.
- Toggle the view to **Preview**.

### Use the code in other tools.
The generated code works in any app that accepts the Mermaid syntax. Many apps render flowcharts better than Notion, i.e., without cut-off descenders. Some also allow you to expert flowcharts as images in your chosen format.

[Mermaid Live](https://mermaid.live/) is among the best of these tools.