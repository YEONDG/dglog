interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  const tabs = [
    { id: 'story', label: '개발 이야기' },
    { id: 'projects', label: '프로젝트' },
    { id: 'values', label: '가치관' },
  ];

  return (
    <div className='flex border-b border-gray-200 mb-6 overflow-x-auto'>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 font-medium whitespace-nowrap ${
            activeTab === tab.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
