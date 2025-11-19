
import React, { useEffect, useState } from "react";
import TicketCard from "../TicketCard/TicketCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainSection({ onUpdateCounters }) {
  const [tickets, setTickets] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolved, setResolved] = useState([]);

  // API থেকে data লোড
  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.error("Error loading tickets:", err));
  }, []);

  // কার্ডে ক্লিক করলে → Task এড হবে এবং status আপডেট হবে
  const handleCardClick = (ticket) => {
    if (ticket.status === "Open") {
      toast.success("In-Progress!", { position: "top-right" });

      // tickets state update
      setTickets((prev) =>
        prev.map((t) =>
          t.id === ticket.id ? { ...t, status: "In-Progress" } : t
        )
      );

      // Task এড
      setTaskStatus((prev) => [...prev, { ...ticket, status: "In-Progress" }]);

      // Counter update
      onUpdateCounters(1, 0);
    }
  };

  // Complete করলে → Ticket delete হবে এবং Resolved এ যাবে
  const handleComplete = (ticket) => {
    toast.success("Completed!", { position: "top-right" });

    // Customer Tickets থেকে remove
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));

    // Task থেকে remove
    setTaskStatus((prev) => prev.filter((t) => t.id !== ticket.id));

    // Resolved এ add
    setResolved((prev) => [...prev, { ...ticket, status: "Resolved" }]);

    // Counter update
    onUpdateCounters(-1, 1);
  };

  // Resolved থেকে remove
  const handleRemoveResolved = (ticketId) => {
    setResolved((prev) => prev.filter((t) => t.id !== ticketId));
    toast.error("Task removed from Resolved!", { position: "top-right" });

    onUpdateCounters(0, -1);
  };

  return (
    <div className="xl:w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* বাম পাশে Tickets */}
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-lg font-bold mb-2">Customer Tickets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onClick={() => handleCardClick(ticket)}
            />
          ))}
        </div>
      </div>

      {/* ডান পাশে Task Status */}
      <div>
        <h2 className="text-lg font-bold mb-2">Task Status</h2>
        <div className="bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] rounded-lg p-4 w-full max-w-xl space-y-3">
          {taskStatus.length === 0 && (
            <p className="text-sm text-gray-500">
              No tasks in progress. Click on a ticket to start working.
            </p>
          )}
          {taskStatus.map((ticket) => (
            <div
              key={ticket.id}
              className="border border-gray-200 rounded-md p-3 bg-gray-50"
            >
              <p className="font-medium mb-2">{ticket.title}</p>
              <button
                onClick={() => handleComplete(ticket)}
                className="bg-green-500 text-white px-3 py-1 rounded w-full"
              >
                Complete
              </button>
            </div>
          ))}
        </div>

        {/* Resolved Task */}
        <h2 className="text-lg font-bold mt-6 mb-2">Resolved Task</h2>
        <div className="bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] rounded-lg p-4 w-full max-w-xl space-y-3">
          {resolved.length === 0 && (
            <p className="text-sm text-gray-500">No resolved tasks yet.</p>
          )}
          {resolved.map((ticket) => (
            <div
              key={ticket.id}
              className="flex items-center justify-between border border-green-300 rounded-md p-4 bg-green-50"
            >
              <div>
                <p className="font-medium">{ticket.title}</p>
                <span className="text-sm">✔ Completed</span>
              </div>
              <button
                onClick={() => handleRemoveResolved(ticket.id)}
                className="text-sm text-gray-500 hover:text-red-600 ml-4"
              >
                Click to remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainSection;
