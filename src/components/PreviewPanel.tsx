import styles from "../../res/styles/markdown.module.scss"

import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

export type PreviewProps = {
    markdownString: string
}

export default function Preview({ markdownString }: PreviewProps) {
    return (
        <Markdown
            className={`${styles.markdown} leading-6 px-4 py-8 min-w-[32rem] h-dvh overflow-y-auto`}
            remarkPlugins={[remarkGfm]}
        >
            {markdownString}
        </Markdown>
    )
}
