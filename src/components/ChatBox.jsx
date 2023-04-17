import { useEffect, useRef } from "react";
import { Message } from "./Message";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db } from "../Firebase";
import { useState } from "react";

export const ChatBox = () => {
  const messagesEndRef = useRef();
  const [messages, setMessages] = useState([]);
    const scroolToBottom = ()=>{
        messagesEndRef.current.scrollIntoView({behavior:"smooth"})
    }

    useEffect(scroolToBottom,[messages])

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};
