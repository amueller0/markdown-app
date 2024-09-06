import brillianceBlackThemeData from "../res/themes/brilliance-black.json"
import { useEffect, useState } from "react"
import Editor from "./components/EditorPanel"
import Preview from "./components/PreviewPanel"
import { useMonaco } from "@monaco-editor/react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { invoke } from "@tauri-apps/api/tauri"
import { readTextFile } from "@tauri-apps/api/fs"

function App() {
    const [markdownString, setMarkdownString] = useState<string>("")
    const monaco = useMonaco()

    async function openFile(filePath: string) {
        const content = await readTextFile(filePath)

        setMarkdownString(content)
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
            .then(async (filePath) => {
                if (filePath) await openFile(filePath)
            })
            .catch((error) => {
                console.error("Fetching opened file failed:", error)
            })
    }, [])

    return (
        <PanelGroup direction="horizontal" className="grid grid-cols-2 w-dvw h-dvh">
            <Panel className="h-dvh">
                <Editor defaultValue={markdownString} handleChange={setMarkdownString} />
            </Panel>

            <PanelResizeHandle className="w-[4px] bg-neutral-800" />

            <Panel className="h-dvh">
                <Preview markdownString={markdownString} />
            </Panel>
        </PanelGroup>
    )
}

export default App
