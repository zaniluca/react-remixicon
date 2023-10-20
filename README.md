# @zaniluca/react-remixicon [![Remix Icons version](https://img.shields.io/badge/remixicon-v3.5.0-blue.svg?style=flat-square)](https://remixicon.com/)

[Remixicon](https://remixicon.com/) packaged as tree-shakable react components.

## Installation

```bash
npm i @zaniluca/react-remixicon
# or
yard add @zaniluca/react-remixicon
# or
pnpm i @zaniluca/react-remixicon
```

## Usage

Search on [remixicon.com](https://remixicon.com) for the icon you want to use and copy the name of the icon. Then import the icon component and use it in your app.

```jsx
import { SampleIcon, AnotherSampleIcon } from "@zaniluca/react-remixicon";

const App = () => {
  return (
    <div>
      <SampleIcon />
      <AnotherSampleIcon className="text-gray-500" />
    </div>
  );
};
```

As you can see, you can pass any valid `className` to the icon component. This is useful to change the color of the icon or to add a custom size, it even works with [tailwindcss](https://tailwindcss.com/).

> **Note:** All icons are exported as PascalCase and suffixed with `Icon`.
