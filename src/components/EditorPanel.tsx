import { Editor } from "@monaco-editor/react"

export type EditorProps = {
    handleChange: (value: string) => void
}

export default function EditorPanel({ handleChange }: EditorProps) {
    return (
        <Editor
            className="[&_*]:font-mono"
            theme="hc-black"
            defaultLanguage="markdown"
            options={{
                minimap: {
                    enabled: false,
                },
            }}
            onChange={(value) => handleChange(value || "")}
        />
    )
}
