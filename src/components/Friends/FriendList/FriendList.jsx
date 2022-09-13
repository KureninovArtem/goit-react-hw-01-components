import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <div className={css.friends}>
            <ul className={css.friends__list}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                        id={id}
                    />
                ))}
            </ul>
        </div>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};