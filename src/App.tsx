import { useState } from "react"
import EditorPanel from "./components/EditorPanel"
import PreviewPanel from "./components/PreviewPanel"

function App() {
    const [markdownString, setMarkdownString] = useState<string>("")

    return (
        <div className="grid grid-cols-2 w-dvw h-dvh">
            <EditorPanel handleChange={setMarkdownString} />
            <PreviewPanel markdownString={markdownString} />
        </div>
    )
}

export default App
