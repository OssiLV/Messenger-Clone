import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversations";

export default async function ConversationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const conversations = await getConversations();

    return (
        <Sidebar>
            <ConversationList initialItems={conversations} />
            <div className="h-full">{children}</div>
        </Sidebar>
    );
}