![Build Status](https://github.com/internetarchive/iaux-item-userlists/actions/workflows/ci.yml/badge.svg) [![codecov](https://codecov.io/gh/internetarchive/iaux-item-userlists/branch/main/graph/badge.svg?token=ZOYRJ2BV9W)](https://codecov.io/gh/internetarchive/iaux-item-userlists)

# Internet Archive Item User Lists WebComponent


This WebComponent, built using the [IA Typescript WebComponent Template](https://github.com/internetarchive/iaux-typescript-wc-template), allows users to add or remove items from their user lists on the Internet Archive. It extends the [Open WebComponents generator](https://open-wc.org/docs/development/generator/) with Internet Archive-specific features and developer tools.

## Installation

```bash
npm install @internetarchive/iaux-item-userlists
```

## Local Demo with `web-dev-server`
```bash
yarn start
```
To run a local development server that serves the basic demo located in `demo/index.html`

## Usage `<ia-account-settings>` Component

### Properties

- `itemId`: The identifier of the item.
- `lists`: An array of user lists.
- `userListsService`: The service interface for user lists.

### Method

- `createList()`: Opens the interface to create a new list.
- `addMember(listId: string)`: Adds the item to the specified list.
- `removeMember(listId: string, memberId: string)`: Removes the item from the specified list.

### Events

- `closeDropdown`: Dispatched when the dropdown is closed.
- `selectDropdown`: Dispatched when an option is selected.
- `updateDropdown`: Dispatched when the dropdown needs to be updated.
- `listCreated`: Dispatched when a new list is created.
- `addMember`: Dispatched when an item is added to a list.
- `removeMember`: Dispatched when an item is removed from a list.

## Example usages

```html
  <ia-item-user-lists
    item=${this.itemId}
    .baseHost=${this.baseHost}
    @memberAdded=${(e: CustomEvent) =>
      console.log('memberAdded', e.detail)}
    @memberRemoved=${(e: CustomEvent) =>
      console.log('memberRemoved', e.detail)}
    @listCreateOpen=${(e: CustomEvent) =>
      console.log('listCreateOpen', e.detail)}
    @userItemListDataReceived=${(e: CustomEvent) =>
      console.log('userItemListDataReceived', e.detail)}
    @closeDropdown=${() => console.log('closeDropdown')}
    @selectDropdown=${(e: CustomEvent) =>
      console.log('selectDropdown', e.detail)}
  ></ia-item-user-lists>
```

## Testing with Web Test Runner
To run the suite of Web Test Runner tests, run
```bash
yarn run test
```

To run the tests in watch mode (for &lt;abbr title=&#34;test driven development&#34;&gt;TDD&lt;/abbr&gt;, for example), run

```bash
yarn run test:watch
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
yarn run lint
```

You can lint with ESLint and Prettier individually as well
```bash
yarn run lint:eslint
```
```bash
yarn run lint:prettier
```

To automatically fix many linting errors, run
```bash
yarn run format
```

You can format using ESLint and Prettier individually as well
```bash
yarn run format:eslint
```
```bash
yarn run format:prettier
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

### Add Codecov
- after forking, add your repo to the authorized codecov list: `https://github.com/organizations/internetarchive/settings/installations/1268216`
- then, go to the badge maker page for your repo: `https://app.codecov.io/gh/internetarchive/<repo-name>/settings/badge`
- copy link & paste into top of README.md

## Steps to setup `gh-pages` static site generator

Let's start with creating a `gh-pages` branch.

This branch is where Github will look for the `index.html` to be hosted

```
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initializing gh-pages branch"
git push origin gh-pages
```

### Additional setup

- Go to repo `Settings` -> sidebar `Pages`
- In the `Source` drop-down, choose the branch where you want to host your Github Pages and the `directory` where it was hosted
  - We'll use `gh-pages` branch for this but you can use other branch name for this
  - Just make sure that's the branch where the `index.html` that you want to host lives in

<p align="center">
  <img src="screenshot/gh-pages-settings.png" alt="Github Pages Settings" style="height:720px; width:890px;">
</p>

## Manual Deploy using `gh-pages`

You can update the current Github Page without pushing a commit by running:
```
yarn run ghpages:publish
```

This build script does the following, see `package.json`:
- `ghpages:publish`
  - This executes `ghpages:prepare` in the current branch you are currently working on
    - Note: The branch name is required so that it will not override the whole Github Pages directory
  - You can check it by navigating through the branch name files directory you set from the [step to setup `gh-pages` branch](#steps-to-setup-gh-pages)
    - You can checkout how it looks like in one of our projects here: [https://github.com/internetarchive/iaux-collection-browser/tree/gh-pages](https://github.com/internetarchive/iaux-collection-browser/tree/gh-pages)

- `ghpages:prepare`
  - This executes `ghpages:build` that builds the project dependencies and generates `vite` build from it
  - We use [vite](https://vitejs.dev/) to bundle and generate the static assets that we host in Github Pages
    - See `vite.config.ts` related to this

- `ghpages:generate`
  - This executes `gh-pages` [npm package](https://www.npmjs.com/package/gh-pages) command to publish/upload the generated files from our `vite` build files
  - Upon executing this command:
    - This generates a commit message formatted from the most recent commit message of the branch
    - Push the commit to `gh-pages` branch that we setup earlier

The live demo app URL from current branch will look something like this:
`https://<organization_name_or_username>.github.io/<repo_name>/<branch_name>/demo`

## Automatic Deploy of Demo App

Things that trigger automatic site generation:
- a merge to `main`
  - See workflow: `gh-pages-main.yml`
  - Example: `https://<organization_name_or_username>.github.io/<repo_name>/main`

- a pull request against `main`
  - See workflow: `pr-preview.yml`
    - The URL for your Pull Request will be deleted after merging to main but you can update that in the config
  - When you create a Pull Request, if your code passes codecov unit tests, it will be always served live at base URL/pull request number.
  - Example: `https://<organization_name_or_username>.github.io/<repo_name>/pr/<pr-number>/demo`
    - Note that `demo` is another directory where the `index.html` lives in
    - You are free to playaround with it and set your desired file directory/structure on your end

Another thing to note: pushing a branch up alone will not trigger site creation.

Happy devving ^_^ 🥳  🎉
