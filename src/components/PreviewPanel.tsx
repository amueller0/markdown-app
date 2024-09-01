import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

export type PreviewProps = {
    markdownString: string
}

export default function PreviewPanel({ markdownString }: PreviewProps) {
    return (
        <Markdown className="p-4 max-h-dvh overflow-y-auto bg-neutral-900" remarkPlugins={[remarkGfm]}>
            {markdownString}
        </Markdown>
    )
}
