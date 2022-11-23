import clsx from "clsx"
import React, { useState } from "react"

interface TabsProps {
  tabs: string[]
  defaultTab: string
  onChange: (data: any) => void
}

export const Tabs = ({ defaultTab, tabs, onChange }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const handleTabChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const newTab = e.currentTarget.innerHTML
    if (tabs.includes(newTab)) {
      setActiveTab(newTab)
      onChange(newTab)
    }
  }

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={clsx([
            "tab",
            "text-sm",
            activeTab.toLowerCase() === tab.toLowerCase() && "active",
          ])}
          onClick={handleTabChange}
        >
          {tab}
        </div>
      ))}
    </div>
  )
}
