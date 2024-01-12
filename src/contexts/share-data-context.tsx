import { createContext } from "react";
import { ShareDataContextType } from "../types/app-type";

export const ShareDataContext = createContext<ShareDataContextType>({} as ShareDataContextType);