# React Awesome Reveal

[![Version](https://badgen.net/npm/v/react-awesome-reveal)](https://www.npmjs.com/package/react-awesome-reveal/v/latest)
[![Last Commit](https://badgen.net/github/last-commit/morellodev/react-awesome-reveal)](https://github.com/morellodev/react-awesome-reveal/commits/master)
[![Downloads](https://badgen.net/npm/dt/react-awesome-reveal)](https://www.npmjs.com/package/react-awesome-reveal/v/latest)
[![Size](https://badgen.net/bundlephobia/minzip/react-awesome-reveal)](https://bundlephobia.com/result?p=react-awesome-reveal@latest)
[![License](https://badgen.net/npm/license/react-awesome-reveal)](https://www.npmjs.com/package/react-awesome-reveal/v/latest)
[![Rate on Openbase](https://badges.openbase.io/js/rating/react-awesome-reveal.svg)](https://openbase.io/js/react-awesome-reveal?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

[React Awesome Reveal](https://github.com/morellodev/react-awesome-reveal) is a library for React apps written in TypeScript that adds reveal animations using the Intersection Observer API to detect when the elements appear in the viewport. Animations are internally provided by [Emotion](https://emotion.sh) and implemented as CSS Animations to benefit from hardware acceleration.

## Table Of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Supported Effects](#supported-effects)
  - [Attention Seekers](#attention-seekers)
  - [Props](#props)
  - [Example](#example)
  - [Chaining Multiple Animations](#chaining-multiple-animations)
- [Custom Animations](#custom-animations)
  - [Other Props](#other-props)
- [Intersection Observer](#intersection-observer)
  - [Polyfill](#polyfill)
- [Past Releases](#past-releases)
- [License](#license)

## Features

- 🎁 **Modern stack** – It is built for modern React
- 🏷 **TypeScript support** – It is written in TypeScript to improve the DX
- 🍃 **Lightweight** – Very little footprint on your project and no other dependencies required
- ⚙️ **Uses native APIs** – Intersection Observer and CSS Animations are now supported by all major browsers
- 🚀 **Fast** – Buttery smooth experience thanks to the use of native asynchronous APIs and hardware acceleration
- 💅 **Fully customizable** – Define custom animations and let the library render them
- 💻 **SSR support** – Server Side Rendering works out-of-the-box
- 🌳 **Tree-shakeable** – Only the parts you use will be included in your final bundle

## Demo

You can find a demo website [here](https://react-awesome-reveal.morello.dev).

## Installation

To add this package as a dependency to your app, simply run

```sh
npm install react-awesome-reveal --save
```

or, if you are using Yarn (as I strongly suggest):

```sh
yarn add react-awesome-reveal
```

## Quick Start

Import effects from [React Awesome Reveal](https://www.npmjs.com/package/react-awesome-reveal) to your React component, for example the `Fade` effect:

```js
import { Fade } from "react-awesome-reveal";
```

Then simply wrap the components you want to animate:

```jsx
<Fade>
  <p>I will gently appear as I enter the viewport</p>
</Fade>
```

## Supported Effects

The effects currently supported are `Bounce`, `Fade`, `Flip`, `Hinge`, `JackInTheBox`, `Roll`, `Rotate`, `Slide` and `Zoom`. Refer to the [Animate.css](https://animate.style) documentation for the details.

### Attention Seekers

Since version 3, attention seeker animations are wrapped by the `AttentionSeeker` component, which accepts a prop called `effect` that specifies the animation to render (defaults to `"bounce”`). The supported effects are: `”bounce"`, `"flash"`, `"headShake”`, `"heartBeat"`, `"jello”`, `"pulse"`, `"rubberBand"`, `“shake”`, `“shakeX"`, `"shakeY”`, `"swing”`, `"tada"` and `“wobble”`.

Again, refer to the [Animate.css](https://animate.style) documentation for the details.

### Props

You can pass the following props to the animation components to customize the behavior:

| Prop                 | Description                                                                                                                                                                                                                                                                                                                          | Values                                                                                       | Default                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `cascade`            | If set, each child of a reveal animation automatically get assigned a delay that takes into account their predecessor (child `i` enters the viewport after `i * delay * damping` milliseconds) – useful for animating list items.                                                                                                    | `true` or `false`                                                                            | `false`                                                               |
| `damping`            | Factor that affects the delay that each animated component in a cascade animation will be assigned. If `damping = 1` then the delay will be equal to the animation duration; if `damping < 1` then the delay will be lower than the animation duration; if `damping > 1` then the delay will be greater than the animation duration. | `number`                                                                                     | `0.5` (meaning that the delay will be half of the animation duration) |
| `direction`          | Origin of the animation (where applicable).                                                                                                                                                                                                                                                                                          | Usually `"down"`, `"left"`, `"right"` or `"up"`, with some exceptions documented in the code | `undefined`                                                           |
| `delay`              | Time to wait before the animation starts (in milliseconds).                                                                                                                                                                                                                                                                          | `number`                                                                                     | `0`                                                                   |
| `duration`           | The animation duration (milliseconds).                                                                                                                                                                                                                                                                                               | `number`                                                                                     | `1000`                                                                |
| `fraction`           | How much an element should be in viewport before the animation is triggered.                                                                                                                                                                                                                                                         | `number` between `0` and `1`                                                                 | `0`                                                                   |
| `triggerOnce`        | Specifies if the animation should run only once or everytime an element enters/exits/re-enters the viewport.                                                                                                                                                                                                                         | `true` or `false`                                                                            | `false`                                                               |
| `className`          | The class names to add to the container element.                                                                                                                                                                                                                                                                                     | `string`                                                                                     | `undefined`                                                           |
| `style`              | The inline styles to add to the container element.                                                                                                                                                                                                                                                                                   | `React.CSSProperties`                                                                        | `undefined`                                                           |
| `childClassName`     | The class names to add to the child element.                                                                                                                                                                                                                                                                                         | `string`                                                                                     | `undefined`                                                           |
| `childStyle`         | The inline styles to add to the child element.                                                                                                                                                                                                                                                                                       | `React.CSSProperties`                                                                        | `undefined`                                                           |
| `onVisibilityChange` | Callback executed when the element enters or leaves the viewport. If more than one element is being animated, this function is called on each element.                                                                                                                                                                               | `(inView: boolean, entry: IntersectionObserverEntry) => void`                                | `undefined`                                                           |

### Example

To trigger the animation only the first time an element enters the viewport:

```jsx
<Slide triggerOnce>
  <p>I will animate only the first time you see me</p>
</Slide>
```

### Chaining Multiple Animations

To chain together multiple animations, set the `cascade` prop to `true`:

```jsx
<Fade cascade>
  <p>I enter first...</p>
  <p>...then comes my turn...</p>
  <p>...and finally you see me!</p>
</Fade>
```

This is _almost_ equivalent to

```jsx
<Fade>
  <p>I enter first...</p>
</Fade>
<Fade delay={1000}>
  <p>...then comes my turn...</p>
</Fade>
<Fade delay={2000}>
  <p>...and finally you see me!</p>
</Fade>
```

with the exception that, since each `Fade` component creates an isolated visibility context, in the second snippet every `p` will be shown only if they are inside the viewport (after the specified delay).

## Custom Animations

Starting from version 3.2.0, you can define custom animations! Simply import the `Reveal` component (which is the default export of the library – give it the name you want) and pass it a `keyframes` prop:

```jsx
import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

function MyAnimatedComponent({ children }) {
  return (
    <Reveal keyframes={customAnimation}>
      {children}
    </Reveal>;
  );
}
```

If no `keyframes` prop is passed, the default rendered animation is a fading entrance from the left (equivalent to `<Fade direction="left">...</Fade>`).

### Other Props

You can also pass these props to `Reveal`:

- `cascade`
- `damping`
- `delay`
- `duration`
- `fraction`
- `triggerOnce`
- `className` and `childClassName`
- `style` and `childStyle`
- `onVisibilityChange`

## Intersection Observer

[Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) is the API used to determine if an element is inside the viewport or not. [Browser support](http://caniuse.com/#feat=intersectionobserver) is really good – with [Safari adding support in 12.1](https://webkit.org/blog/8718/new-webkit-features-in-safari-12-1), all major browsers now support Intersection Observers natively.

If you need to support old browsers, add the polyfill for the Intersection Observer API.

### Polyfill

You can add the [polyfill](https://www.npmjs.com/package/intersection-observer) directly or use a service like [polyfill.io](https://polyfill.io/v2/docs) to add it when needed.

```sh
yarn add intersection-observer
```

Then import it in your app:

```javascript
import "intersection-observer";
```

If you are using Webpack (or similar) you could use [dynamic imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports) to load the polyfill only if needed. A basic implementation could look something like this:

```javascript
/**
 * Do feature detection, to figure out which polyfills needs to be imported.
 **/
async function loadPolyfills() {
  if (typeof window.IntersectionObserver === "undefined") {
    await import("intersection-observer");
  }
}
```

## Past Releases

To see the documentation for previous versions, navigate through past tags in the GitHub's project repository and read the README for that specific version.

## License

Project source code is licensed under the MIT license. You are free to fork this repository, edit the code, share and use it both for non-commercial and commercial purposes.
