import styled from 'styled-components';

const FriendListItem = styled.li`
  display: flex;
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  display: block;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #9bcccc;
  color: #0c0202;
`;

export const FriendList = ({ friends, onDelete }) => {
  return (
    <ul friends={friends}>
      {friends.map(({ id, name, number }) => (
        <FriendListItem key={id}>
          {name}: {number}{' '}
          <Button type="button" onClick={onDelete}>
            Delete
          </Button>
        </FriendListItem>
      ))}
    </ul>
  );
};
