import * as Icons from '~/components/Icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';

const Sidebar = () => {
    return (
        // <div className={cx('wrapper')}>
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
        // </div>
    );
};

export default Sidebar;
