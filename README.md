# Dune Assets Generator

This repository contains the assets generator for the Dune project.

## How to use

You can either download the `generated` directory from the repository or direct link to the images in this repository.

## Setup

1. Create a GitHub account and fork this repository.
2. Ensure you can run `git` and `bash` scripts on your system. [helpful guide](https://github.com/git-guides/install-git)
3. Ensure you have `npm` and `node` installed on your system.
4. Ensure you have [`VSCode`](https://code.visualstudio.com/) installed on your system. (or any other code editor of your choice).
5. Install [`Bun`](https://bun.sh/) on your system.
6. Clone your forked repository to your local system.
7. Open the cloned repository in `VSCode`.
8. Install the recommended extensions for `VSCode` suggested by the repository.
9. Run `bun install` in the terminal to install the required dependencies.
10. Optionally: Run `npx playwright install chromium` in the terminal to install the headless browser used for capturing.
11. Run `bun run storybook` in the terminal to start the storybook server. - Your browser should open up with the storybook.
12. Edit or Add any `*.stories.tsx` files within the `src` directory to add/edit any assets.
13. Commit your changes and push them to your forked repository.
14. Create a pull request to the original repository.

## Capture locally

Run `bun run local-capture` in the terminal to capture the assets locally.

This only captures missing assets, so if you want to recapture an asset, you need to delete the existing asset first.

To capture all assets, run `bun run build-storybook && bun run ./scripts/capture.ts`.

It is strongly discouraged to commit the generated assets to the repository. The CI will automatically capture all assets on every push to the `main` branch, and override the manually committed ones, due to small platform rendering inconsistencies.

## Capture on CI

The CI will automatically capture missing assets on every push to the `main` branch.

Which will happen the moment your pull request is merged.

From that moment on the assets will be available in the `generated` directory.

## Generating `src/data/generated.ts`

This file contains enums of all possible vectors that can be used in assets.

This file is generated for convience, and should not be edited manually.

To regenerate this file, run `bun run generate`.

It is important to regenerate this file after adding/renaming vectors.

## Utility scripts

- `bun run generate` - Regenerates `src/data/generated.ts`.
- `bun run local-capture` - Captures missing assets locally.
- `bun run build-storybook` - Builds the storybook.
- `bun run storybook` - Starts the storybook server.
- `bun run format` - Formats the code, including vectors.

## Useful links:

- https://svgcrop.com/
- https://svgomg.net/
- https://squareanimage.com/squarecrop/
- https://www.imagetools.org/grayscale
- https://www.vectorizer.io/
- https://yqnn.github.io/svg-path-editor/
- https://www.iloveimg.com/resize-image/resize-svg
