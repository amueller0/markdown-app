import styles from "../../res/styles/markdown.module.scss"

import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

export type PreviewProps = {
    markdownString: string
}

export default function PreviewPanel({ markdownString }: PreviewProps) {
    return (
        <Markdown
            className={`${styles.markdown} leading-6 px-4 py-8 max-h-dvh overflow-y-auto bg-neutral-900`}
            remarkPlugins={[remarkGfm]}
        >
            {markdownString}
        </Markdown>
    )
}
