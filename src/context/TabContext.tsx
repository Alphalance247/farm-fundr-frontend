import { createContext, useContext, useState } from "react";

type TabContextType = {
  activeTab: number;
  setActiveTab: (tab: number) => void;
};

export const TabContext = createContext<TabContextType>({
  activeTab: 0,
  setActiveTab: () => {},
});

export const TabProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTab must be used within a TabProvider");
  }
  return context;
};
