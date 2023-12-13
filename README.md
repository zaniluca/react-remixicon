# @zaniluca/react-remixicon

[Remixicon](https://remixicon.com/) packaged as tree-shakable react components.

> [!NOTE]
> This package is automatically synced with the latest version of Remixicon. If you find any missing icon, please open an issue or a pull request.

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
