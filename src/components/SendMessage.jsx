import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase";

export const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      alert("El campo no puede estar vacio");
      return;
    }
    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
    } catch (error) {
      console.log(error);
    }
    setValue("");
  };

  return (
    <div className="bg-primary fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="containerWrap px-2 flex">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input text-black w-full focus:outline-none bg-gray-100 rounded-r-none"
          type="text"
        />
        <button
          type="submit"
          className="w-auto bg-gray-500 text-white font-semibold rounded-r-lg px-5 text-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
};
