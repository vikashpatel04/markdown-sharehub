import { FileWarning } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NotFoundProps {
  message?: string;
}

export default function NotFound({ message }: NotFoundProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-50 dark:bg-gray-700 rounded-full">
            <FileWarning className="h-16 w-16 text-red-400 dark:text-red-300" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4 tracking-tight">
          Content Not Found
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {message || 
            "The content you're looking for might have expired or the link might be incorrect. Please check the URL and try again."}
        </p>
        
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-8">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Common reasons for this error:
          </p>
          <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-2"></div>
              The share link has expired
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-2"></div>
              The URL was typed incorrectly
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-2"></div>
              The content was deleted
            </li>
          </ul>
        </div>
        
        <div className="flex justify-center">
          <Link 
            to="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center transition-colors focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}