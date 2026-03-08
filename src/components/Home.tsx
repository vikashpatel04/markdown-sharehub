import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import CodeBlock from "./CodeBlock";
import { Split, Sun, Moon, Info } from 'lucide-react';
import { useState, useMemo } from "react";

interface HomeProps {
  markdownText: string;
  setMarkdownText: (text: string) => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Home = ({ markdownText, setMarkdownText, toggleTheme, isDarkMode }: HomeProps) => {
  const navigate = useNavigate();
  const [isPreviewVisible, setIsPreviewVisible] = useState(true);

  // Custom components for ReactMarkdown
  const markdownComponents = useMemo(() => ({
    table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="table-wrapper">
        <table {...props}>{children}</table>
      </div>
    ),
    pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
      <CodeBlock {...props}>{children}</CodeBlock>
    ),
  }), []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-semibold">Markdown Viewer</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/about")}
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title="About"
            >
              <Info size={20} />
              <span className="hidden sm:inline">About</span>
            </button>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span className="hidden sm:inline">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </span>
            </button>
            <button
              onClick={() => setIsPreviewVisible(!isPreviewVisible)}
              className="lg:flex hidden items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title={isPreviewVisible ? "Hide Preview" : "Show Preview"}
            >
              <Split size={20} />
              <span className="hidden sm:inline">
                {isPreviewVisible ? "Hide Preview" : "Show Preview"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex">
        <div className={`flex w-full h-[calc(100vh-160px)] transition-all duration-300`}>
          {/* Editor */}
          <div className={`${isPreviewVisible ? 'w-full lg:w-1/2' : 'w-full'} p-4`}>
            <div className="h-full flex flex-col">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-lg font-medium">Editor</h2>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {markdownText.length} characters
                </div>
              </div>
              <textarea
                className="flex-grow w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg 
                          text-base font-medium bg-white dark:bg-gray-800 dark:text-gray-200 
                          resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          transition-colors"
                value={markdownText}
                onChange={(e) => setMarkdownText(e.target.value)}
                placeholder="Enter your markdown here..."
                spellCheck="false"
              />
            </div>
          </div>

          {/* Preview */}
          {isPreviewVisible && (
            <div className="hidden lg:flex w-1/2 p-4">
              <div className="h-full w-full flex flex-col">
                <h2 className="text-lg font-medium mb-2">Preview</h2>
                <div
                  className="flex-grow w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg 
                            bg-white dark:bg-gray-800 overflow-auto"
                >
                  <div className="markdown-body">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeHighlight]}
                      components={markdownComponents}
                    >
                      {markdownText || ''}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-end">
          <button
            className="px-6 py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-lg text-lg 
                      font-medium hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors
                      disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => navigate("/viewer")}
            disabled={!markdownText.trim()}
          >
            Continue to Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;