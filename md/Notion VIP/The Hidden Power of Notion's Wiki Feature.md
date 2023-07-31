
Notion’s Wiki feature combines the flexibility of pages with the structure of databases. 
- One view acts as a standard page, where you can display any block, wherever you want.
- Other views display only the “child” pages that occur within the page, just as you’d see pages as items in a database.
- Like any database, you can choose layouts and assign filtering, sorting and grouping rules, among other database settings.
- You can also create linked views of of Wikis, just as you can create linked views of standard databases.

If you’ve seen any of my other resources, you know that my #1 rule is to utilize the structure of databases for all information in your workspace rather than freely entering content. So you can imagine how much I love the ability to do both with Notion Wikis.

But there’s actually a hidden capability of Wikis that makes them extra useful. It’s the reason I recommend using a Wiki for the top-level page and the Resources database within any Notion workspace, just as I’ve done in the Bulletproof Workspace template that’s so widely implemented by Notion users. 

I’ll explain that hidden feature and an important step to take when initially creating Wikis, which I’ve preconfigured in a template you can duplicate. But first, let’s explore the fundamentals of Notion Wikis.

## Wiki Fundamentals

### Create a Wiki
- Within any page that’s not a database item, you can `Turn into wiki` from the `•••` menu.
- That will add a line below the page’s title. 
- At the top-right is a `Search` button. Clicking it prompts Notion’s standard search feature, pre-filtered for the current page.
- At the top-left, is a view picker, just like a database.

### Home View
The default `Home` view is the freeform page view that’s unique to Wikis. 
- It displays all blocks within the page, including heading, callouts and dividers. 
- You can arrange blocks however you like, as in the body of any Notion page.

### Database Views
The other views, including defaults and others you create, are database views.
- They display only the Wiki’s sub-pages, structured as a database.
- As with any database, you can choose a layout; add sorting, filtering and grouping rules; and add and selectively display properties.
- A default **All pages** view displays all pages within a table. **Page I own** displays only the pages where the viewer is designated as the **Owner**, which I explain next.

### Wiki Item Properties
You can add any of Notion’s standard database properties to Wiki items. But they contain two special properties that can be hidden but not deleted:
- **Owner** — This is a `Person` property that’s populated by default with the user who creates the Wiki. This is the property that informs the default **Pages I own** view.
- **Verification** — This is a unique property type that helps teams keep content current. Page owners can choose a date through which the page remains verified, as indicated by a blue check. Upon expiration, Page owners are notified to reverify the page.

#### Horizontal Properties
When you open a Wiki item as a page, its properties display horizontally rather than the vertical arrangement of standard database items. You still have the option to selectively display or hide them.

## The Superpower: Databases as Items
When you create a freeform page in Notion, you can make it a database. But a page that’s a database item can’t be a database. Instead, we always had to create a database within that database item, which convolutes the workspace and undermines my database-centric methodology.

But in fact, Wikis solve this problem. If a page contains a full-page database when you convert it to a Wiki, that database becomes an item of the Wiki. That’s enormously beneficial to managing master and secondary databases in a workspace.

Because Wiki items can be databases, the Resources database and top-level HQ page are Wikis in the latest Bulletproof Workspace template.

### Upfront Configuration
There’s a critical caveat to using databases within Wiki: You must have at least one database in place when you convert the page to a Wiki. After creating the Wiki, you can _duplicate_ an inner database, but you can’t add one from elsewhere in the workspace.

## Wikis within the Bulletproof Framework
The latest version of the Bulletproof Workspace uses two Wikis:

1. The **Resources** database, which is the catch-all database for documents, non-master databases and items that don’t fit a master database
2. The top-level **HQ** page, which contains the **Resources** database and other master databases

That means, in addition to having databases within Wikis, we have a Wiki within a Wiki (Resources within HQ).

Because a database or Wiki can’t be added to an existing Wiki, we must follow these steps when configuring Bulletproof:

1. Create an “HQ” page.
2. Within HQ, create:
	1. a page called “Resources”; and
	2. an empty database called “Database Template.”
3. Within Resources, create another empty full-page database called “Database Template.”
4. Convert Resources to a Wiki.
5. Convert HQ to a Wiki.

For you to add to your workspace or reference for validation, I have a template available with these configurations in place.

And of course, it’s available to all members of Notion A-to-Z, along with the full Bulletproof template with all related master databases.
