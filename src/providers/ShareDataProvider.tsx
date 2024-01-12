import { useState } from "react";
import { ShareDataContext } from "../contexts/share-data-context";

interface ShareDataProviderProps {
    children: React.ReactNode;
}

export const ShareDataProvider = ({ children }: ShareDataProviderProps) => {
    const [shareData, setShareData] = useState<string>("HEllo, world");

    return (
        <ShareDataContext.Provider
            value={{ shareData, setShareData }}
        >
            {children}
        </ShareDataContext.Provider>
    );
}