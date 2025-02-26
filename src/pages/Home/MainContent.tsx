// src/components/MainContent.tsx
import React from "react";
import { Stream } from "../../types/Stream.ts";

interface MainContentProps {
    title: string;
    streams: Stream[];
}

const MainContent: React.FC<MainContentProps> = ({ title, streams }) => {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {streams.map((stream, index) => (
                    <div key={index} className="relative group">
                        {/* Thumbnail */}
                        <img
                            src={stream.thumbnail}
                            alt={stream.title}
                            className="w-full h-auto object-cover rounded-md"
                        />

                        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                                Livestream
            </span>
                        {/* Title & Info */}
                        <div className="mt-2">
                            <h3 className="text-sm font-bold line-clamp-2">{stream.title}</h3>
                            <p className="text-xs text-gray-400">
                                {stream.streamer} - {stream.viewers.toLocaleString()} Viewer
                            </p>
                            <p className="text-xs text-gray-400">{stream.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MainContent;
