import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    primary,
    outline,
    rounded,
    small,
    large,
    text,
    disabled,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';

    const props = { onClick, ...passProps };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // Remove event listener when disabled button
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] !== 'function') {
                delete props[key];
            }
        });
    }

    //

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        text,
        small,
        large,
        disabled,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}

            <span className={cx('title')}>{children}</span>

            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
};

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.string,
    disabled: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
