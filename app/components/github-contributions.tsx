'use client';

import { useEffect, useState } from 'react';

export function GitHubContributions() {
  const [mounted, setMounted] = useState(false);
  const username = 'ReintB';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full mt-4">
      <div className="bg-white dark:bg-[#0d1117] rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">GitHub Contributions</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="space-y-4">
            <div className="relative group">
              <img
                src={`https://ghchart.rshah.org/${username}`}
                alt="GitHub Contributions"
                className="w-full bg-transparent rounded-lg"
              />
              <div className="absolute inset-0 transition-opacity bg-black bg-opacity-0 rounded-lg group-hover:bg-opacity-5" />
            </div>

            <div className="flex items-center justify-end space-x-1 text-xs text-neutral-600 dark:text-neutral-400">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`w-3 h-3 rounded-sm ${
                      level === 0
                        ? 'bg-[#ebedf0] dark:bg-[#161b22]'
                        : level === 1
                        ? 'bg-[#9be9a8] dark:bg-[#0e4429]'
                        : level === 2
                        ? 'bg-[#40c463] dark:bg-[#006d32]'
                        : level === 3
                        ? 'bg-[#30a14e] dark:bg-[#26a641]'
                        : 'bg-[#216e39] dark:bg-[#39d353]'
                    }`}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 