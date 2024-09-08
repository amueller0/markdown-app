import brillianceBlackThemeData from "../res/themes/brilliance-black.json"
import { useEffect, useState } from "react"
import Editor from "./components/EditorPanel"
import Preview from "./components/PreviewPanel"
import { useMonaco } from "@monaco-editor/react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { invoke } from "@tauri-apps/api/tauri"
import { readTextFile, writeTextFile } from "@tauri-apps/api/fs"

function App() {
    const [markdownString, setMarkdownString] = useState<string>("")
    const [filePath, setFilePath] = useState<string | null>(null)
    const monaco = useMonaco()

    async function openFile(filePath: string) {
        const content = await readTextFile(filePath)

        setMarkdownString(content)
    }

    async function saveFile(filePath: string) {
        await writeTextFile(filePath, markdownString)
    }

    useEffect(() => {
        if (!monaco) return

        /** Brilliance Theme (https://github.com/brijeshb42/monaco-themes) */
        /** @ts-ignore */
        monaco.editor.defineTheme("brilliance-black", brillianceBlackThemeData)
        monaco.editor.setTheme("brilliance-black")
    }, [monaco])

    useEffect(() => {
        // Fetch path to opened file if present
        invoke<string | null>("get_opened_file_path")
            .then(async (path) => {
                if (!path) return

                setFilePath(path)
                await openFile(path)
            })
            .catch((error) => {
                console.error("Fetching opened file failed:", error)
            })
    }, [])

    useEffect(() => {
        const handler = async (event: KeyboardEvent) => {
            if ((event.ctrlKey || event.metaKey) && event.key === "s") {
                if (!filePath) return

                await saveFile(filePath)
            }
        }

        window.addEventListener("keydown", handler)

        return () => window.removeEventListener("keydown", handler)
    }, [filePath, markdownString])

    return (
        <PanelGroup direction="horizontal" className="grid grid-cols-2 w-dvw h-dvh">
            <Panel className="h-dvh">
                <Editor value={markdownString} handleChange={(value) => setMarkdownString(value)} />
            </Panel>

            <PanelResizeHandle className="w-[4px] bg-neutral-800" />

            <Panel className="h-dvh">
                <Preview markdownString={markdownString} />
            </Panel>
        </PanelGroup>
    )
}

export default App
