import React, { useState } from 'react';
import { ArrowLeft, Bookmark, Users, Video, Radio } from 'lucide-react';
import LiveStream from '../features/LiveStream/LiveStream.tsx';

const Sidebar: React.FC = () => {
    const [isStreaming, setIsStreaming] = useState(false);

    return (
        <div className="w-64 bg-gray-100 h-screen p-4 flex flex-col">
            {/* Go Live Button */}
            <button
                onClick={() => setIsStreaming(true)}
                className="mb-4 bg-red-500 text-white p-2 rounded font-semibold hover:bg-red-600 transition">
                <Radio className="inline-block w-4 h-4 mr-2" /> Go Live
            </button>

            <Section title="Saved Videos" icon={<Bookmark className="w-4 h-4" />} onClick={() => alert('Saved Videos Clicked!')}>
            </Section>

            <Section title="Following" icon={<Users className="w-4 h-4" />} onClick={() => alert('Following Clicked!')}>
            </Section>

            <Section title="Group" icon={<Video className="w-4 h-4" />} onClick={() => alert('Group Clicked!')}>
            </Section>

            {/* Hiển thị LiveStream khi isStreaming = true */}
            {isStreaming && <LiveStream onClose={() => setIsStreaming(false)} />}
        </div>
    );
};

interface SectionProps {
    title: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    onClick?: () => void;
}

const Section: React.FC<SectionProps> = ({ title, icon, children, onClick }) => {
    return (
        <div className="mb-4">
            <button
                onClick={onClick}
                className="flex items-center gap-2 font-semibold text-sm mb-2 w-full text-left hover:bg-gray-200 p-2 rounded transition text-black"
            >
                <span className="text-black">{icon}</span>
                <span className="text-black">{title}</span>
            </button>
            <div className="space-y-2">{children}</div>
        </div>
    );
};

export default Sidebar;
