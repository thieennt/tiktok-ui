import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
    const { full_name, nickname, avatar, tick } = data;
    return (
        <Link to={`/@${nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={avatar} alt={full_name} />
            <div className={cx('info')}>
                <h4 className={cx('displayname')}>
                    {full_name}
                    {tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <p className={cx('username')}>{nickname}</p>
            </div>
        </Link>
    );
};

export default AccountItem;
