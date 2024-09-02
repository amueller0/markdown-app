import brillianceBlackThemeData from "../res/themes/brilliance-black.json"
import { useEffect, useState } from "react"
import EditorPanel from "./components/EditorPanel"
import PreviewPanel from "./components/PreviewPanel"
import { useMonaco } from "@monaco-editor/react"

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
        <div className="grid grid-cols-2 w-dvw h-dvh">
            <EditorPanel handleChange={setMarkdownString} />
            <PreviewPanel markdownString={markdownString} />
        </div>
    )
}

export default App
