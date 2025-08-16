import React from "react";
import { message } from "antd";
import type { MessageInstance } from "antd/es/message/interface";
import { createContext, useContext } from "react";
type MessageToastType = {
  messageApi: MessageInstance;
};
const MessageProvider = createContext<MessageToastType | undefined>(undefined);

export const ToastMessage = ({ children }: { children: React.ReactNode }) => {
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <>
      {contextHolder}
      <MessageProvider.Provider value={{ messageApi }}>
        {children}
      </MessageProvider.Provider>
    </>
  );
};

export const useToastMessage = () => {
  const context = useContext(MessageProvider);
  if (!context) {
    throw new Error("useToastMessage must be used with in Toast provider");
  }
  return context;
};
