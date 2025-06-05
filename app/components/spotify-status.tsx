'use client';

import { useEffect, useState } from 'react';

interface SpotifyData {
  spotify: {
    song: string;
    artist: string;
    album_art_url: string;
    album: string;
    timestamps: {
      start: number;
      end: number;
    };
  } | null;
}

export function SpotifyStatus() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [mounted, setMounted] = useState(false);
  const DISCORD_ID = '601354807462068244';

  useEffect(() => {
    setMounted(true);
    const connectWebsocket = () => {
      const ws = new WebSocket('wss://api.lanyard.rest/socket');
      
      ws.onopen = () => {
        ws.send(
          JSON.stringify({
            op: 2,
            d: {
              subscribe_to_id: DISCORD_ID,
            },
          })
        );
      };

      ws.onmessage = (event) => {
        const received = JSON.parse(event.data);
        if (received.op === 1) {
          ws.send(
            JSON.stringify({
              op: 3,
              d: {
                heartbeat_interval: received.d.heartbeat_interval,
              },
            })
          );
        } else if (received.op === 0) {
          if (received.t === 'INIT_STATE' || received.t === 'PRESENCE_UPDATE') {
            setData(received.d);
          }
        }
      };

      ws.onclose = () => {
        setTimeout(connectWebsocket, 1000);
      };
    };

    connectWebsocket();
  }, []);

  if (!mounted || !data?.spotify) return null;

  const { spotify } = data;
  const progress = spotify.timestamps ? 
    ((Date.now() - spotify.timestamps.start) / (spotify.timestamps.end - spotify.timestamps.start)) * 100 : 0;

  const formatTime = (ms: number) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentTime = spotify.timestamps ? formatTime(Date.now() - spotify.timestamps.start) : '0:00';
  const totalTime = spotify.timestamps ? formatTime(spotify.timestamps.end - spotify.timestamps.start) : '0:00';

  return (
    <div className="w-full mt-4">
      <div className="bg-white dark:bg-[#0d1117] rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Spotify Activity</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <img
                src={spotify.album_art_url}
                alt="Album Art"
                className="w-16 h-16 rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col flex-1 min-w-0 justify-between">
              <div>
                <div className="font-semibold text-neutral-900 dark:text-white truncate" title={spotify.song}>
                  {spotify.song}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 truncate" title={spotify.artist}>
                  {spotify.artist}
                </div>
              </div>
              
              {spotify.timestamps && (
                <div className="space-y-1">
                  <div className="w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-1 overflow-hidden">
                    <div 
                      className="bg-[#1DB954] h-full transition-all duration-1000 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-400">
                    <span>{currentTime}</span>
                    <span>{totalTime}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 