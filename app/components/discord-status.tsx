'use client';

import { useEffect, useState } from 'react';

interface DiscordData {
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  discord_user: {
    username: string;
    avatar: string;
  };
  activities: Array<{
    type: number;
    state: string;
    name: string;
    id: string;
  }>;
}

export function DiscordStatus() {
  const [data, setData] = useState<DiscordData | null>(null);
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

  if (!mounted || !data) return null;

  const statusColor = {
    online: 'bg-green-500',
    idle: 'bg-yellow-500',
    dnd: 'bg-red-500',
    offline: 'bg-gray-500',
  }[data.discord_status];

  const getStatusText = (status: string) => {
    const statusMap = {
      online: 'Online',
      idle: 'Idle',
      dnd: 'Do Not Disturb',
      offline: 'Offline'
    };
    return statusMap[status as keyof typeof statusMap] || 'Unknown';
  };

  const currentActivity = data.activities[0];

  return (
    <div className="w-full mt-4">
      <div className="bg-white dark:bg-[#0d1117] rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Discord Activity</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <div className="relative flex-shrink-0">
              <img
                src={`https://cdn.discordapp.com/avatars/${DISCORD_ID}/${data.discord_user.avatar}`}
                alt="Discord Avatar"
                className="w-12 h-12 rounded-full ring-2 ring-neutral-200 dark:ring-neutral-800"
              />
              <div 
                className={`absolute -bottom-1 -right-1 w-4 h-4 ${statusColor} rounded-full ring-2 ring-white dark:ring-[#0d1117]`}
                title={getStatusText(data.discord_status)}
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-semibold truncate text-neutral-900 dark:text-white">
                {data.discord_user.username}
              </span>
              <span className="text-sm truncate text-neutral-600 dark:text-neutral-400">
                {currentActivity ? (
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                    <span>{currentActivity.name}</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-1">
                    <span className={`w-2 h-2 ${statusColor} rounded-full`}/>
                    <span>{getStatusText(data.discord_status)}</span>
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 