import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import getConversations from "@/app/actions/getConversations";
import ConversationList from "@/app/conversations/components/ConversationList";

export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
