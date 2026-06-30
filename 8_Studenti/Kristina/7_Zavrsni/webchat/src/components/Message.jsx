export default function Message({ message, currentmemberId }) {
  const { member, text, id } = message;

   const isMyMessage = id === currentMemberId;
     const className = isMyMessage ? 'message current' : 'message';

  return (
    <li className="messages">
      <span className="avatar" style={{ backgroundColor: member.color }}></span>

      <div className="message-content">
        <div className="username">{member.username}</div>
        <div clasName="text">{text}</div>
      </div>
    </li>
  );
}
