import { useNavigate, useParams } from "react-router-dom";
import { marked } from "marked";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import ShareButton from "./ShareButton";

interface MarkdownViewerProps {
  markdownText: string;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const MarkdownViewer = ({ markdownText: propMarkdownText, toggleTheme, isDarkMode }: MarkdownViewerProps) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [markdownText, setMarkdownText] = useState(propMarkdownText);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSharedContent = async () => {
      if (id) {
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
    gfm: true, // GitHub Flavored Markdown
    breaks: true, // Convert line breaks to <br>
    sanitize: true, // Sanitize HTML input
  });

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
          {!id && <ShareButton markdownText={markdownText} />}
        </div>
        <button
          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          onClick={toggleTheme}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-200">
            {error}
          </div>
        </div>
      )}

      {/* Markdown Content */}
      {!error && (
        <div className="container mx-auto px-4 py-8">
          <div className="prose dark:prose-invert prose-sm sm:prose lg:prose-lg mx-auto">
            <div dangerouslySetInnerHTML={{ __html: marked(markdownText || '') }} />
          </div>
        </div>
      )}
    </div>
  );
};

MarkdownViewer.propTypes = {
  markdownText: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default MarkdownViewer;