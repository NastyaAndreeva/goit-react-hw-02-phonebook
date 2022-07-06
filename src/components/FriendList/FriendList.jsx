import styled from 'styled-components';

const FriendList = styled.ul``;

const FriendListItem = styled.li``;

export const FriendListProcessed = ({ friends }) => {
  return (
    <FriendList friends={friends}>
      {friends.map(({ id, name, number }) => (
        <FriendListItem key={id}>
          {name}: {number}
        </FriendListItem>
      ))}
    </FriendList>
  );
};
