import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Image from '../Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './SuggestedAccounts.module.scss';
import Button from '../Button';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

const AccountItem = ({ suggested }) => {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[700, 200]} placement="bottom" render={renderPreview} offset={[-40, 0]}>
                <div className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src="https://images.unsplash.com/photo-1675864545784-3753d5728b11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt=""
                    />
                    <div className={cx('info')}>
                        <h4 className={cx('username')}>
                            <strong>hanakoshi</strong>

                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h4>
                        <p className={cx('displayname')}>Hanakoshi Truong 🎶</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
};

AccountItem.propTypes = {};

export default AccountItem;
