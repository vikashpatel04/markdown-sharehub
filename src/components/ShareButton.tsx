import { useState } from 'react';
import { Share2, Check, Copy, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ShareButtonProps {
  markdownText: string;
}

export default function ShareButton({ markdownText }: ShareButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expirationTime, setExpirationTime] = useState('1h');
  const [shareUrl, setShareUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateShareLink = async () => {
    try {
      setIsGenerating(true);
      const expirationMap = {
        '1h': 60 * 60,
        '24h': 24 * 60 * 60,
        '7d': 7 * 24 * 60 * 60,
        '30d': 30 * 24 * 60 * 60,
      };

      const expiresAt = new Date(
        Date.now() + expirationMap[expirationTime as keyof typeof expirationMap] * 1000
      ).toISOString();

      const { data, error } = await supabase
        .from('shared_markdown')
        .insert([
          {
            content: markdownText,
            expires_at: expiresAt,
          },
        ])
        .select()
        .single();

      if (error) throw error;

      const shareUrl = `${window.location.origin}/viewer/${data.id}`;
      setShareUrl(shareUrl);
    } catch (error) {
      console.error('Error generating share link:', error);
      alert('Failed to generate share link');
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2"
      >
        <Share2 size={20} />
        Share
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Share Markdown</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                Expires after
              </label>
              <select
                value={expirationTime}
                onChange={(e) => setExpirationTime(e.target.value)}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                disabled={isGenerating}
              >
                <option value="1h">1 hour</option>
                <option value="24h">24 hours</option>
                <option value="7d">7 days</option>
                <option value="30d">30 days</option>
              </select>
            </div>

            {!shareUrl ? (
              <button
                onClick={generateShareLink}
                disabled={isGenerating}
                className="w-full py-2 bg-blue-500 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Link'
                )}
              </button>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <input
                    type="text"
                    value={shareUrl}
                    readOnly
                    className="flex-1 bg-transparent outline-none dark:text-white"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                  >
                    {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full py-2 bg-gray-200 dark:bg-gray-600 rounded-lg font-medium dark:text-white"
              disabled={isGenerating}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}