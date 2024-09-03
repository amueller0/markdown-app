import { Editor as MonacoEditor } from "@monaco-editor/react"

export type EditorProps = {
    handleChange: (value: string) => void
}

export default function Editor({ handleChange }: EditorProps) {
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
            onChange={(value) => handleChange(value || "")}
        />
    )
}
