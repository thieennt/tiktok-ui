import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AccountPreview = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://images.unsplash.com/photo-1675864545784-3753d5728b11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                />
                <div>
                    <Button primary className={cx('follow-btn')}>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('username')}>
                    <strong>hanakoshi</strong>

                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('displayname')}>Hanakoshi Truong 🎶</p>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>6.5M </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>12M </strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
};

AccountPreview.propTypes = {};

export default AccountPreview;
