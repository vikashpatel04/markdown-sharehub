import { Link } from 'react-router-dom';
import { Github, ExternalLink, Edit, Share2, Moon, Smartphone, Code, Check } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative bg-blue-600 text-white p-8 md:p-12">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,_#ffffff_0%,_transparent_60%)]"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Markdown Viewer
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Transform your ideas into beautifully formatted content with our powerful markdown editor and viewer
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Value Proposition */}
            <div className="mb-16 text-center">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Experience seamless markdown editing with real-time preview, instant sharing capabilities, and a beautiful interface designed for writers, developers, and content creators.
              </p>
            </div>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Powerful Features for Content Creation
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl transition-all hover:shadow-md">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Edit className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">Real-time Preview</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">Watch your markdown transform instantly as you type with our side-by-side preview.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl transition-all hover:shadow-md">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Share2 className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">Smart Sharing</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">Create custom links with expiration options to share your content securely.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl transition-all hover:shadow-md">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Moon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">Eye-Friendly Modes</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">Switch between light and dark themes for comfortable viewing any time of day.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl transition-all hover:shadow-md">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">Use Anywhere</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">Perfectly optimized for all devices, from desktops to smartphones.</p>
                </div>
              </div>
            </section>

            {/* Usage Guide */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Quick Start Guide
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="prose dark:prose-invert max-w-none">
                  <div className="p-6 bg-blue-50 dark:bg-gray-700 rounded-xl mb-6">
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      <Code className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                      Getting Started
                    </h3>
                    <ol className="space-y-3">
                      <li className="flex gap-2">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold">1</span>
                        <span>Enter your markdown in the editor on the home page</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold">2</span>
                        <span>Use the side-by-side preview to see live rendering</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold">3</span>
                        <span>Click "Continue to Preview" for full view</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold">4</span>
                        <span>Use the Share button to generate a link</span>
                      </li>
                    </ol>
                  </div>
                  
                  <div className="p-6 bg-blue-50 dark:bg-gray-700 rounded-xl">
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      <Share2 className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                      Sharing Content
                    </h3>
                    <ol className="space-y-3">
                      <li className="flex gap-2">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold">1</span>
                        <span>Click the Share button in the viewer</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold">2</span>
                        <span>Select your preferred expiration time</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold">3</span>
                        <span>Click "Generate Link" to create URL</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold">4</span>
                        <span>Copy and share with your audience</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div>
                  <div className="p-6 bg-blue-50 dark:bg-gray-700 rounded-xl">
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      <Check className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                      Supported Markdown Features
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                            <span>Headers (h1-h6)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                            <span>Emphasis (italic)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                            <span>Strong (bold)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                            <span>Ordered lists</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                            <span>Unordered lists</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                            <span>Links & Images</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                            <span>Code blocks</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                            <span>Blockquotes</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                            <span>Tables</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                            <span>Task lists</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-blue-50 dark:bg-gray-700 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Useful Tips</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span>Preview your content before sharing to ensure proper formatting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span>Use different heading levels to create a clear content hierarchy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span>Set appropriate expiration times based on how long you need to share</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Author Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                About the Developer
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                {/* Replaced VP initials with cat meme image */}
                <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden">
                  <img 
                    src="/cat-with-glasses-meme.jpg" 
                    alt="Cat with glasses meme" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Vikash Patel</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4">
                    Full-stack developer passionate about creating intuitive tools that make content creation and sharing easier. Markdown Viewer was built to solve my own need for a clean, distraction-free writing environment.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <a 
                      href="https://github.com/vikashpatel04" 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                    <a 
                      href="https://vikash-patel.tech/" 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                      <span>Portfolio</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <div className="text-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                Start Using Markdown Viewer
              </Link>
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
                No account needed. Free to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}