import { useContext } from "react";
import { ShareDataContext } from "../contexts/share-data-context";

export const useShareContent = () => {
    const context = useContext(ShareDataContext);
    if (context === undefined) {
        console.log("useShareContent must be used within a ShareDataProvider");
    }
    return context;
};