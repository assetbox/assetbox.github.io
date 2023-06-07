---
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Add New File

By dragging and dropping `Assets` on the desktop to `AssetBox', you can specify the path to save the assets and add it.

If the added assets does not exist in the project, it is added immediately.
However, if it exists, it shows the duplicate paths and asks to add it again.

## Step 1

<Tabs>
  <TabItem value="pnpm" label="pnpm" default>

```sh
$ pnpm assetbox manage
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```sh
$ yarn assetbox manage
```

  </TabItem>
  <TabItem value="npm" label="npm">

```sh
$ npm run assetbox manage
```

  </TabItem>
</Tabs>

## Step 2

For example, drag and drop `gallery.svg` to add it to the browser.

<img width="623" alt="drag and drop files" src="https://github.com/assetbox/assetbox/assets/82392767/053f977f-85ec-47be-ac00-9ddaa5be8f55"/>

## Step 3

You can choose the path where `assets` will be saved.

<img width="895" alt="select save path" src="https://github.com/assetbox/assetbox/assets/82392767/210f0c09-fe57-47f1-b7d3-2541cbee8be7"/>

## Step 4

If there are `no duplicate assets` in the project, the dragged and dropped `assets` are directly added to the project.
<img width="1139" alt="add not-dupe assets" src="https://github.com/assetbox/assetbox/assets/82392767/6d0fe9a2-23a5-4320-b68e-b033c4e9c551"/>

<br/>
<br/>

If there are `duplicate assets` in the project, the duplicate paths and a modal asking if you want to add them are shown.
<img width="911" alt="dupe modal" src="https://github.com/assetbox/assetbox/assets/82392767/3f90b119-d5c9-4ca4-8a56-21cb728d2368"/>

## Step 5

Even though it is `duplicated assets`, it can be added.<br/>
However, we recommend `skip`.
<img width="1192" alt="add dupe assets" src="https://github.com/assetbox/assetbox/assets/82392767/c8c51a35-9cb4-43b9-8216-10ee44da5ce2"/>
