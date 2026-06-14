import React from 'react';

interface VideoCardProps {
  thumbnailUrl: string;
  title: string;
  channelName: string;
  views: string;
  timestamp: string;
  duration: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  thumbnailUrl,
  title,
  channelName,
  views,
  timestamp,
  duration,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm cursor-pointer group">
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
        {/* Duration Badge */}
        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {duration}
        </span>
      </div>

      {/* Info Section */}
      <div className="flex gap-3 pr-4">
        {/* Channel Avatar Placeholder */}
        <div className="w-9 h-9 rounded-full bg-gray-700 flex-shrink-0" />
        
        <div className="flex flex-col">
          <h3 className="text-white font-semibold line-clamp-2 leading-tight">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mt-1">{channelName}</p>
          <p className="text-gray-400 text-sm">
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;