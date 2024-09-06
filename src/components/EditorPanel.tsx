import { Editor as MonacoEditor } from "@monaco-editor/react"
import { useState } from "react"

export type EditorProps = {
    defaultValue?: string
    handleChange: (value: string) => void
}

export default function Editor({ defaultValue, handleChange }: EditorProps) {
    const [_markdown, setMarkdown] = useState<string>("")

    function updateMarkdown(newContent: string) {
        setMarkdown(newContent)
        handleChange(newContent)
    }

    return (
        <MonacoEditor
            className="[&_*]:font-mono"
            theme="hc-black"
            defaultLanguage="markdown"
            options={{
                minimap: {
                    enabled: false,
                },
            }}
            defaultValue={defaultValue}
            onChange={(value) => updateMarkdown(value || "")}
        />
    )
}
