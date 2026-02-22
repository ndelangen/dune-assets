// Base declaration for CSS modules
// The typescript-plugin-css-modules plugin will enhance this with actual class names
// from your CSS files, providing type safety and autocomplete
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Augment the module to support namespace imports (import * as styles)
// This works because bundlers transform namespace imports to access the default export
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  namespace classes {}
  export = classes;
}

