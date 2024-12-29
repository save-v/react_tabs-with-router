import cN from 'classnames';
import { Tab } from '../../types/Tab';
import { Link } from 'react-router-dom';

interface TabsProps {
  tabs: Tab[];
}

import { useParams } from 'react-router-dom';

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const { tabId = null } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  key={tab.id}
                  className={cN({ 'is-active': tabId === tab.id })}
                  data-cy="Tab"
                >
                  <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                    {tab.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {activeTab ? activeTab.content : 'Please select a tab'}
        </div>
      </div>
    </>
  );
};
