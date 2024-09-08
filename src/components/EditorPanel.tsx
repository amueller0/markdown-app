import { Editor as MonacoEditor } from "@monaco-editor/react"

export type EditorProps = {
    value?: string
    handleChange: (value: string) => void
}

export default function Editor({ value, handleChange }: EditorProps) {
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
            value={value}
            onChange={(newValue) => handleChange(newValue || "")}
        />
    )
}
