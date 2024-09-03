import brillianceBlackThemeData from "../res/themes/brilliance-black.json"
import { useEffect, useState } from "react"
import Editor from "./components/EditorPanel"
import Preview from "./components/PreviewPanel"
import { useMonaco } from "@monaco-editor/react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

function App() {
    const [markdownString, setMarkdownString] = useState<string>("")
    const monaco = useMonaco()

    useEffect(() => {
        if (!monaco) return

        /** Brilliance Theme (https://github.com/brijeshb42/monaco-themes) */
        /** @ts-ignore */
        monaco.editor.defineTheme("brilliance-black", brillianceBlackThemeData)
        monaco.editor.setTheme("brilliance-black")
    }, [monaco])

    return (
        <PanelGroup direction="horizontal" className="grid grid-cols-2 w-dvw h-dvh">
            <Panel className="h-dvh">
                <Editor handleChange={setMarkdownString} />
            </Panel>

            <PanelResizeHandle className="w-[4px] bg-neutral-800" />

            <Panel className="h-dvh">
                <Preview markdownString={markdownString} />
            </Panel>
        </PanelGroup>
    )
}

export default App
