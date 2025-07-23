import { useNavigate, useParams } from "react-router-dom";
import { marked } from "marked";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import ShareButton from "./ShareButton";
import NotFound from "./NotFound";
import { Sun, Moon, Info, Check, Clipboard } from 'lucide-react';
import { useToast } from "./ToastProvider";

// UUID validation regex
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const MarkdownViewer = ({ markdownText: propMarkdownText, toggleTheme, isDarkMode }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [markdownText, setMarkdownText] = useState(propMarkdownText);
  const [error, setError] = useState("");
  const [shareClicked, setShareClicked] = useState(false);
  const showToast = useToast();

  useEffect(() => {
    const fetchSharedContent = async () => {
      if (id) {
        // Validate UUID format before making the request
        if (!UUID_REGEX.test(id)) {
          setError("Invalid share link format");
          return;
        }

        try {
          const { data, error } = await supabase
            .from('shared_markdown')
            .select('content, expires_at')
            .eq('id', id)
            .single();

          if (error) {
            throw error;
          }

          if (!data) {
            setError("Content not found or has expired");
            return;
          }

          // Check if content has expired
          if (new Date(data.expires_at) < new Date()) {
            setError("This shared content has expired");
            return;
          }

          setMarkdownText(data.content);
        } catch (error) {
          console.error('Error fetching shared content:', error);
          setError("Failed to load shared content");
        }
      }
    };

    if (id) {
      fetchSharedContent();
    }
  }, [id, navigate]);

  // Configure marked options for better security and features
  marked.setOptions({
    gfm: true,
    breaks: true,
    sanitize: true,
  });

  // If there's an error, show the NotFound component with the specific error message
  if (error) {
    return <NotFound message={error} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Navbar */}
      <div className="sticky top-0 z-10 w-full flex justify-between items-center p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={() => navigate("/")}
          >
            Back
          </button>
          {window.location.pathname.startsWith("/viewer/") && window.location.pathname !== "/viewer" && (
            <button
              className="px-4 py-2 bg-green-400 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                  .then(() => {
                    showToast("URL copied to clipboard!", "success");
                    setShareClicked(true);
                    setTimeout(() => setShareClicked(false), 1200);
                  })
                  .catch(() => showToast("Failed to copy URL.", "error"));
              }}
            >
              {shareClicked ? (
                <Check className="text-green-500" size={18} />
              ) : null}
              <Clipboard size={20} />
              Copy URL
            </button>
          )}
          {!id && <ShareButton markdownText={markdownText} />}
        </div>
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
        </div>
      </div>

      {/* Markdown Content */}
      <div className="container mx-auto px-2 sm:px-4 py-8 max-w-5xl lg:max-w-7xl xl:max-w-[90rem]">
        <div className="prose dark:prose-invert prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto overflow-x-auto max-w-none">
          <style>
            {`
              .prose pre {
                overflow-x: auto;
                white-space: pre;
                position: relative;
              }
              .prose table {
                display: block;
                width: 100%;
                overflow-x: auto;
                white-space: nowrap;
              }
            `}
          </style>
          <div dangerouslySetInnerHTML={{ __html: marked(markdownText || '') }} />
        </div>
      </div>
    </div>
  );
};

MarkdownViewer.propTypes = {
  markdownText: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default MarkdownViewer;