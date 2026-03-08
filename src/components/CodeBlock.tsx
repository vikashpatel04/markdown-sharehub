import { useState, useRef } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
    children: React.ReactNode;
    [key: string]: unknown;
}

export default function CodeBlock({ children, ...props }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);
    const preRef = useRef<HTMLPreElement>(null);

    const handleCopy = () => {
        const code = preRef.current?.textContent || '';
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="code-block-wrapper">
            <button
                onClick={handleCopy}
                className="code-copy-btn"
                title="Copy code"
                aria-label="Copy code to clipboard"
            >
                {copied ? (
                    <>
                        <Check size={14} />
                        <span>Copied!</span>
                    </>
                ) : (
                    <>
                        <Copy size={14} />
                        <span>Copy</span>
                    </>
                )}
            </button>
            <pre ref={preRef} {...props}>
                {children}
            </pre>
        </div>
    );
}
