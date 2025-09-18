# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a talks repository containing presentation slides built with Slidev. The repository uses a monorepo structure where each talk is stored in its own directory named with the pattern `YYYY-talk-name`.

## Development Workflow

- Always use Playwright MCP to check how the edited slides look in the browser

### Starting Development

- the dev server is already running at http://localhost:3030

### Building

- `pnpm run build` - Builds all talks by running `pnpm -r run build` (recursive build across all talk directories)
- Each talk builds to `../dist/TALK-NAME/` with the appropriate base path for deployment

### Other Commands

- `pnpm run preview` - Serves the built dist directory

## Talk Directory Structure

Each talk directory contains:

- `package.json` - With `dev` (runs slidev) and `build` scripts
- `slides.md` - Main presentation file with frontmatter configuration
- `setup/` - Slidev setup files (shiki.ts, code-runners.ts)
- `components/` - Vue components for the presentation
- `public/` - Static assets

## Code Style

The repository uses:

- Prettier with custom configuration for Slidev markdown files
- Slidev-specific parser for `slides.md` and `pages/*.md` files

## Architecture Notes

- Each talk is a self-contained Slidev project
- The root package.json coordinates building all talks
- The picker script (`scripts/picker.ts`) provides a convenient way to select and work on individual talks
- Deployment is configured for Netlify with redirects for each talk
