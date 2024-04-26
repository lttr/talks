// Credits: @antfu
// Adapted from: https://github.com/antfu/talks/blob/main/scripts/picker.ts

import fs from "node:fs/promises"
import process from "node:process"
import prompts from "prompts"
import { execa } from "execa"

const editor = process.env.EDITOR || "nvim"

async function startPicker(args: string[]) {
	const folders = (
		await fs.readdir(new URL("..", import.meta.url), { withFileTypes: true })
	)
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name)
		.filter((folder) => folder.match(/^[0-9]{4}-/))
		.sort((a, b) => -a.localeCompare(b))

	const result = await prompts([
		{
			type: "select",
			name: "folder",
			message: "Pick a folder",
			choices: folders.map((folder) => ({ title: folder, value: folder })),
		},
	])

	if (result.folder) {
		await execa("pnpm", ["run", ...args], {
			cwd: new URL(`../${result.folder}`, import.meta.url),
			stdio: "inherit",
		})
	}
}

await startPicker(process.argv.slice(2))
