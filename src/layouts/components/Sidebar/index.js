import classNames from 'classnames/bind';

import * as Icons from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';
import Menu, { MenuItem } from './Menu';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<Icons.HomeIcon />}
                    activeIcon={<Icons.HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<Icons.UserGroupIcon />}
                    activeIcon={<Icons.UserGroupActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<Icons.LiveIcon />}
                    activeIcon={<Icons.LiveActiveIcon />}
                />
            </Menu>
            <SuggestedAccounts label="Suggested Accounts" />
            {/* <SuggestedAccounts label="Following Accounts" /> */}
        </aside>
    );
};

export default Sidebar;
