import React from "react";
import Sidebar from "../../components/ui/SideBar";
import MainContent from "./MainContent";
import { streamsData1, streamsData2 } from "../../data/streamData";

const Home: React.FC = () => {
    return (
        <div className="bg-[#f7f7f8] min-h-screen flex flex-col text-white">


            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-4">
                    <MainContent title="Live" streams={streamsData1} />
                    <MainContent
                        title=""
                        streams={streamsData2}
                    />
                </main>
            </div>

        </div>
    );
};

export default Home;
