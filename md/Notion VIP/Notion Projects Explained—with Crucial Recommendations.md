
\<!-- youTube(C6I5GK2FRd0) --\> 

With Notion’s May release came [Notion Projects](https://www.youtube.com/watch?v=9x9GhuiM1Bk). Despite Notion’s heavy promotion, many users remain unsure about what it, exactly, it _is_. 

_Is it new functionality? Is it a template? Is it a methodology?_ In fact, it’s somewhat of a combination.

Let’s explore the key components of Notion Projects, along with some essential recommendations for enhancing the system. In the template _Notion Projects—Enhanced by Notion VIP_, you’ll find those enhancements preconfigured and ready to streamline your project management.

## What’s Notion Projects?

![](https://assets.notion.vip/assets/insights/notion-projects-explained/notion-project-templates.png)

- Notion Projects is a set of preconfigured databases. Within **Templates** in your sidebar, you can choose **Projects & tasks** or **Projects, tasks & sprints**.
	- The concept of sprints comes from the [Agile](https://asana.com/resources/agile-methodology) project management methodology. Traditionally, they divide a project’s tasks into phases for focused, iterative and agile planning and implementation. Within Notion Projects, a sprint can include tasks from multiple projects.
- Choosing “Get Template” will add two or three interrelated databases to your workspace, preconfigured with properties and prepopulated with sample content.
- Through `Relation` properties, projects and tasks form a parent-child relationship. When you include sprints, they too function as parents of tasks. 
- For the most part, the configurations utilize features available anywhere in Notion; in theory, you could construct Notion Projects from scratch. But some of those features were introduced at the same time as Notion Projects, including the `Unqiue ID` property type and AI autofill for `Text` properties.
- One notable exception is the new Sprints feature, which is limited to Notion Projects databases but will ultimately make its way to the broader Notion ecosystem after a period of beta testing.
- Conveniently, when you delete one database in the system, Notion asks if you’d like to delete the others. Given their relationships, if you replace any, you’ll likely want to replace them all to preserve the connections.

## Projects Database

### Views
From preset views in the Projects database, you can view projects:

- within a table grouped by status;
- as a timeline with visible dependencies;
- within a full table; or
- as a board containing only the projects you (the viewing user) own.

### Notable Properties

#### Completion
This `Rollup` displays the percentage of the project’s related tasks marked “Done.” _In my enhanced version, I call it “Progress.”._

#### Is Blocking and Blocked By
These are `Relation` properties. **Is Blocking** is used for to display dependencies in the timeline view.

### Project Template
With the Projects database template, when you open a project, its inner page contains:

- its related tasks, displayed as a page section;
- its related tasks, also displayed within linked database views, including a board grouped by status; and
- an “About this project” section.

## Tasks Database

### Views

- The default view groups tasks by project. 
- Another view displays all tasks within a table.

### Notable Properties

#### Task ID
I mentioned the new `Unique ID` property type that debuted with Notion Projects. When you configure the property, you specify a prefix, such as “TAS” for tasks. For each item in the database, the `Unique ID` property is populated with the prefix, followed by a unique integer. The integer increments by one as items are created. If an item is deleted, its integer is never reused.

When working with databases, and especially relational databases, it’s important for each record to have a unique identifier. Before the `Unique ID` property type, we could generate a unique ID with the `id()` function within a `Formula` property. With their shorter length and customizable prefixes, the new IDs are much prettier.

#### Parent-task and Sub-tasks
The are reciprocal `Relation` properties that allow you to divide a task into smaller tasks. Within table and list views, you can enable sub-items. Items containing sub-items then become toggles containing their sub-items. In this case, tasks would display their sub-tasks.

I’m surprised to find this configuration absent from the preset views of Tasks. My enhanced version adds them.

#### Summary
The **Summary** property utilizes the AI autofill feature capability released alongside Notion Projects.
- AI autofill is an option for `Text` properties.
- It references the item’s inner page content to perform an action you specify when configuring the property:
	1. Summarize
	2. Extract specified information, such as people mentioned
	3. Complete a custom prompt
- You can choose whether you’d like the content to regenerate when the inner page changes. That option is disabled in Notion Projects; it’s enabled in my enhanced version.

#### GitHub Pull Requests
This special property type remains limited to Notion Projects but will likely make its way to the broader Notion ecosystem of building blocks. It allows software teams to link tasks to pull requests in GitHub, then automate updates when changes occur.

### Task Templates

- The Tasks database includes templates for the three types of tasks commonly  managed by software teams: tasks, bugs and feature requests.
- They’re differentiated by the headings repopulated within the page. I’m a heavy proponent of toggle headings, so my enhancements to Notion Projects convert these headings to toggles.
- I’m quite surprised not to find a database property to indicate the task type (task, bug, or feature request) for grouping and filtering. My template adds a **Task Type** property, automatically populated by the templates and displayed across board views of Tasks.

## Sprints
Within [Agile](https://asana.com/resources/agile-methodology) project management, sprints group tasks into phases. That allows you to plan iteratively and focus on a subset of tasks as you conduct your project. Within Notion Projects, a sprint can include tasks from multiple projects.

If you choose to include sprints when choosing your Notion Projects template, Notion will add a Sprints database, along with a unique page called “Sprint board.”

### Sprints Database Views
The Sprints database displays all sprints (unfiltered) within an ungrouped table and timeline.

### Notable Properties

#### Tasks
As sprints are classifications, or “groups,” for tasks, they connect through this `Relation` property.

#### Total tasks and Completed tasks
The sprint-task `Relation` enables the `Rollup` properties **Total tasks** and **Completed tasks** to perform their calculations.

### Sprint Template
The page template for sprints displays its tasks as a page section and within linked database views.

The template also includes a “Planning notes” toggle heading with sample bullets to facilitate a planning conversation.

### “Sprint board”
“Sprint board” is a unique page with features unseen elsewhere in Notion. Within the three views below, it displays immediately relevant tasks. I’d find the experience more streamlined if these views were part of the Tasks database rather than a separate page.

#### “Current: [Sprint]” View
This board view displays tasks for the sprint with a status of “Current.” The tasks are grouped (columned) by status and sub-grouped (toggled) by project. 

Quite notably, the view includes a unique “Complete sprint” button at the top-right. Clicking the button allows you to specify the next sprint and its date range. If the current sprint contains any uncompleted tasks, you can move them to the next sprint or the backlog (no assigned sprint).

#### “Sprint planning” View
This table groups tasks by the current sprint, the next sprint, or “Backlog” (no assigned sprint).

#### “Backlog” View
This table displays only those tasks without an assigned sprint.


## Notion VIP’s Enhancements

The template Notion Projects—Enhanced by Notion VIP includes my recommended adjustments to the Notion Projects system.

Here are a few I’ve already mentioned:

- Within the **Projects** database, rename “Completion” to “Progress.”
- For the **Projects** database template, hide the redundant page section for related tasks.
	- Do the same in the **Sprints** database template.
- In the **Tasks** database, enable auto-update for the AI-generated **Summary** property.
- Then add a property called “Task Type”, where you can choose **Task**, **Bug** or **Feature Request**.
	- For all views across the system that display tasks as cards, show **Task Type**.
- Update the task templates to select their corresponding type automatically.
- Within those task templates, convert the headings to toggle headings.
- For all table views within the **Tasks** database and **Sprint board** page, enable sub-items.

Here are three more:

- **Sort all views.** For every database view in your workspace, I strongly recommend defining sorting rules with enough specificity to assign the position of each item. Otherwise, databases will behave in unexpected ways.
- **Show/hide properties within all pages.** For all databases, selectively display or hide properties for items opened as pages.
- **Create “Admin” views.** In every database, I include an “Admin” view with no filtering and all properties visible. It streamlines administration and bulk editing.

### The Bigger Picture

My recommendations above concern the Notion Projects system in isolation, but the most important modification is connecting it to your broader ecosystem of master databases. That gets back to [my #1 principle for using Notion](https://www.notion.vip/insights/the-1-rule-for-every-notion-workspace): **structure all information in related master databases, then access it through contextual views**. If you’ve yet to read that guide, make it your next stop.

And for the Tasks database specifically, my [Notion VIP Tasks](https://www.notion.vip/insights/the-bulletproof-task-management-system) framework adds a handful of useful features. That includes:

- a method for prioritizing tasks automatically;
- **Context** and **Timeslot** properties; and
- an alert system.
