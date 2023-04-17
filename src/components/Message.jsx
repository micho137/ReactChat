import { UserAuth } from "../context/AuthContext";

export const Message = ({ message }) => {
  const {currentUser}=UserAuth()
  return (
    <div>
      <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"} `}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avatar} />
          </div>
        </div>
        <div className="chat-header flex flex-col">
          {message.name}
          {/* <time className="text-xs text-center opacity-50">{message.createdAt.toDate().toLocaleString()}</time> */}
        </div>
        <div className="chat-bubble">{message.text}</div>
        {/* <div className="chat-footer opacity-50">Delivered</div> */}
      </div>
    </div>
  );
};
