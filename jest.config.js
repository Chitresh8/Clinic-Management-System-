// module.exports = {
//   preset: "react",
//   transform: {
//     "^.+\\.[tj]sx?$": "babel-jest", // Use babel-jest to process .jsx and .tsx files
//   },
//   testEnvironment: "jsdom",
//   moduleFileExtensions: ["js", "jsx", "ts", "tsx"], // Support for JSX and TypeScript
//   transformIgnorePatterns: ["node_modules/(?!(your-module-to-transform)/)"], // Optional: If you need to transform specific node_modules
// };

export default {
  preset: "react",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest", // This will use babel-jest for transforming JS/JSX files
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"], // Support for JS, JSX, TS, and TSX extensions
  transformIgnorePatterns: [
    "/node_modules/(?!some-package-to-transform|another-package)/", // Example: transform certain node_modules
  ],
};
