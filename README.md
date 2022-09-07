<!-- markdownlint-disable-next-line first-line-h1 -->
![https://detdigitalefolkebibliotek.dk/sites/default/files/ddf_logo_rgb_blue_web.png](https://detdigitalefolkebibliotek.dk/sites/default/files/ddf_logo_rgb_blue_web.png)

<!-- markdownlint-disable -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [DPL Design System](#dpl-design-system)
  - [Requirements](#requirements)
    - [Manual requirements](#manual-requirements)
  - [Installation](#installation)
    - [Installation outside docker](#installation-outside-docker)
  - [Development](#development)
    - [Development without docker](#development-without-docker)
  - [Usage](#usage)
    - [NPM package](#npm-package)
  - [Deployment and releases](#deployment-and-releases)
    - [Tagged releases](#tagged-releases)
      - [Usage: npm package](#usage-npm-package)
      - [Usage: Release file](#usage-release-file)
    - [Branch releases](#branch-releases)
      - [Usage: npm package](#usage-npm-package-1)
      - [Usage: Release file](#usage-release-file-1)
  - [Storybook](#storybook)
  - [Chromatic](#chromatic)
    - [What is Storybook](#what-is-storybook)
      - [How to use](#how-to-use)
      - [Addons](#addons)
      - [Important to notice](#important-to-notice)
        - [Internal classes](#internal-classes)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- markdownlint-enable -->

# DPL Design System

DPL Design System is a library of UI components that should be used as a common
base system for "Danmarks Biblioteker" / "Det Digitale Folkebibliotek". The
design is implemented
with [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
/ [React](https://reactjs.org/) and is output with HTML markup and css-classes
through an addon in Storybook.

The codebase follows the naming that designers have used in Figma closely
to ensure consistency.

## Requirements

This project comes with [go-task](https://github.com/go-task/task) and docker
compose, hence the requirements are limited to having docker install and tasks.

### Manual requirements

This project can be used outside docker with the following requirements:

- `node 16`
- `yarn`

Check in the terminal which versions you have installed with `node -v`.

## Installation

Use the tasks defined in `Taskfile` to run the project:

```shell
task dev:install
```

### Installation outside docker

Use the node package manager to install project dependencies:

```shell
yarn install
```

## Development

To start the docker compose setup in development simple use the `start` task:

```shell
task dev:start
```

To see the output from the compile process and start of storybook:

```shell
task dev:logs
```

Use `task` and tabulator key in the terminal to see the other predefined tasks:

```shell
task dev:[TAB]
```

### Development without docker

To start developing run:

```shell
yarn dev
```

Components and CSS will be automatically recompiled when making changes in the
source code.

## Usage

The project is available in two ways and should be consumed accordingly:

1. As package in the local npm registry for this repository
2. As a `dist.zip` file attached to a release for this repository

Both releases contain the built assets of the project: JavaScript files, CSS
styles and icons.

You can find the HTML output for a given story under the HTML tab inside
storybook.

### NPM package

[The GitHub NPM package registry requires authentication if you are to access
packages there](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token).

Consequently, if you want to use the design system as an NPM package or if you
use a project that depends on the design system as an NPM package you must
authenticate:

1. [Create a GitHub token with the required scopes: `repo` and `read:packages`](https://github.com/settings/tokens/new?description=npm&scopes=repo,read:packages)
2. Run `npm login --registry=https://npm.pkg.github.com`
3. Enter the following information:

```shell
> Username: [Your GitHub username]
> Password: [Your GitHub token]
> Email: [An email address used with your GitHub account]
```

Note that you will need to reauthenticate when your personal access token
expires.

## Deployment and releases

The project is [automatically built and deployed](.github/workflows/deployment.yml)
on pushes to every branch and every tag and the result is available as releases
which support [both types of usage](#usage). This applies for the original
repository on GitHub and all GitHub forks.

You can follow the status of deployments in the [Actions list for the repository
on GitHub](https://github.com/danskernesdigitalebibliotek/dpl-design-system/actions/workflows/deployment.yml).
The action logs also contain additional details regarding the contents and
publication of each release.  If using a fork then deployment actions can be
seen on the corresponding list.

In general consuming projects should prefer tagged releases as they are stable
proper releases.

During development where the design system is being updated in parallel with
the implementation of a consuming project it may be advantageous to use a
release tagging a branch.

### Tagged releases

Run the following to publish a tag and create a release:

```shell
git tag -a v*.*.* && git push origin v*.*.*
```

#### Usage: npm package

In the consuming project update usage to the new release:

```shell
npm install @danskernesdigitalebibliotek/dpl-design-system@*.*.*
```

#### Usage: Release file

Find the release for the tag on [the releases page on GitHub](https://github.com/danskernesdigitalebibliotek/dpl-design-system/releases)
and download the `dist.zip` file from there and use it as needed in the
consuming project.

### Branch releases

The project automatically creates a release for each branch.

Example: Pushing a commit to a new branch `feature/reservation-modal` will
create the following parts:

1. A git tag for the commit `release-feature/reservation-modal`. A tag is needed
   to create a GitHub release.
2. A GitHub release for the called *feature/reservation-modal*. The build is
   attached here.
3. A package in the local npm repository tagged `feature-reservation-modal`.
   Special characters like `/` are not supported by npm tags and are converted
   to `-`.

Updating the branch will update all parts accordingly.

#### Usage: npm package

In the consuming project update usage to the new release:

```shell
npm install @danskernesdigitalebibliotek/dpl-design-system@feature-reservation-modal
```

If your release belongs to a fork you can use [aliasing](https://docs.npmjs.com/cli/v8/commands/npm-install)
to point to the release of the package in the npm repository for the fork:

```shell
npm config set @my-fork:registry=https://npm.pkg.github.com
npm install @danskernesdigitalebibliotek/dpl-design-system@npm:@my-fork/dpl-design-system@feature-reservation-modal
```

This will update your `package.json` and lock files accordingly. Note that
branch releases use temporary versions in the format `0.0.0-[GIT-SHA]` and you
may in practice see these referenced in both files.

If you push new code to the branch you have to update the version used in the
consuming project:

```shell
npm update @danskernesdigitalebibliotek/dpl-design-system
```

[Aliasing](https://classic.yarnpkg.com/lang/en/docs/cli/add/#toc-yarn-add-alias),
[repository configuration](https://classic.yarnpkg.com/en/docs/cli/config) and
[updating installed packages](https://classic.yarnpkg.com/en/docs/cli/upgrade)
are also supported by Yarn.

#### Usage: Release file

Find the release for the branch on [the releases page on GitHub](https://github.com/danskernesdigitalebibliotek/dpl-design-system/releases)
and download the `dist.zip` file from there and use it as needed in the
consuming project.

If your branch belongs to a fork then you can find the release on the releases
page for the fork.

Repeat the process if you push new code to the branch.

## Storybook

Spin up storybook by running this command in the terminal:

```shell
yarn storybook
```

When storybook is ready it automatically opens up in a browser with the
interface ready to use.

## Chromatic

We are using Chromatic for visual test. You can access the dashboard
under the `danskernesdigitalebibliotek` (organisation) `dpl-design-system`
(project).

<https://www.chromatic.com/builds?appId=616ffdab9acbf5003ad5fd2b>

You can deploy a version locally to Chromatic by running:

```shell
yarn chromatic
```

Make sure to set the `CHROMATIC_PROJECT_TOKEN` environment variable is available
in your shell context. You can access the token from:

<https://www.chromatic.com/manage?appId=616ffdab9acbf5003ad5fd2b&view=configure>

### What is Storybook

[Storybook](https://storybook.js.org/docs/react/get-started/introduction) is an
open source tool for building UI components and pages in isolation from your
app's business logic, data, and context. Storybook helps you document components
for reuse and automatically visually test your components to prevent bugs. It
promotes the [component-driven](https://componentdriven.org) process and agile
development.

It is possible to extend Storybook with an ecosystem of addons that help you do
things like fine-tune responsive layouts or verify accessibility.

#### How to use

The Storybook interface is simple and intuitive to use. Browse the project's
stories now by navigating to them in the sidebar.

The stories are placed in a flat structure, where developers should not spend
time thinking of structure, since we want to keep all parts of the system under
a heading called Library. This Library is then dividid in folders where common
parts are kept together.

To expose to the user how we think these parts stitch together for example
for the new website, we have a heading called Blocks, to resemble what cms
blocks a user can expect to find when building pages in the choosen CMS.

This could replicate in to mobile applications, newsletters etc. all pulling
parts from the Library.

Each story has a corresponding `.stories` file. View their code in the
`src/stories` directory to learn how they work.
The `stories` file is used to add the component to the Storybook interface via
the title. Start the title with "Library" or "Blocks" and use / to
divide into folders fx. `Library / Buttons / Button`

#### Addons

Storybook ships with some essential
pre-installed [addons](https://storybook.js.org/addons/tag/essentials/)
to power the core Storybook experience.

- [Controls](https://storybook.js.org/addons/@storybook/addon-controls/)
- [Actions](https://storybook.js.org/addons/@storybook/addon-actions/)
- [Docs](https://storybook.js.org/addons/@storybook/addon-docs/)
- [Viewport](https://storybook.js.org/addons/@storybook/addon-viewport/)
- [Backgrounds](https://storybook.js.org/addons/@storybook/addon-backgrounds/)
- [Toolbars](https://storybook.js.org/addons/@storybook/addon-toolbars/)
- [Measure](https://storybook.js.org/addons/@storybook/addon-measure/)
- [Outline](https://storybook.js.org/addons/@storybook/addon-outline/)

There are many other helpful addons to customise the usage and experience.
Additional addons used for this project:

- [HTML / storybook-addon-html](https://storybook.js.org/addons/@whitespace/storybook-addon-html/):
  This addon is used to display compiled HTML markup for each story and make it
  easier for developers to grab the code. Because we are developing with React,
  it is necessary to be able to show the HTML markup with the css-classes to
  make it easier for other developers that will implement it in the future.
  If a story has controls the HTML markup changes according to the controls that
  are set.

- [Designs / storybook-addon-designs](https://storybook.js.org/addons/storybook-addon-designs/):
  This addon is used to embed Figma in the addon panel for a better
  design-development workflow.

- [A11Y](https://storybook.js.org/addons/@storybook/addon-a11y/):
  This addon is used to check the accessibility of the components.

All the addons can be found in `storybook/main.js` directory.

#### Important to notice

##### Internal classes

To display some components (fx Colors, Spacing) in a more presentable way, we
are using some "internal" css-classes which can be found in the
`styles/internal.scss` file. All css-classes with "internal" in the front should
therefore be ignored in the HTML markup.
