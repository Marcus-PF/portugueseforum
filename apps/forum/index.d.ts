/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      @pfsa/forum – Custom Module Declarations         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Handles special imports (e.g., SVG as React components)
 * for compatibility with tools like SVGR and TypeScript.
 *
 * 👇 Custom module declarations go here.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

// 🖼️ SVG imports as React components and raw content
declare module '*.svg' {
  const content: string;
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
