import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Home = ({ markdownText, setMarkdownText }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 p-4">
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl sm:text-6xl mb-4 font-semibold text-center">Markdown Viewer</h1>
        <textarea
          className="w-full sm:w-3/4 h-64 sm:h-96 p-4 border border-gray-300 dark:border-gray-700 rounded-lg text-lg sm:text-xl font-medium bg-white dark:bg-gray-800 dark:text-gray-200 resize-none"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
          placeholder="Enter your markdown here..."
        />
        <button
          className="mt-4 w-full sm:w-auto px-6 py-3 bg-blue-500 dark:bg-blue-700 text-white rounded-lg text-lg"
          onClick={() => navigate("/viewer")}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

Home.propTypes = {
  markdownText: PropTypes.string.isRequired,
  setMarkdownText: PropTypes.func.isRequired,
};

export default Home;