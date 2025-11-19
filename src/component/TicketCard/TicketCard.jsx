

import React from "react";

function TicketCard({ ticket, onClick }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-600";
      case "In-Progress":
        return "bg-yellow-100 text-yellow-600";
      case "Resolved":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getDotColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-green-600";
      case "In-Progress":
        return "bg-yellow-600";
      case "Resolved":
        return "bg-blue-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div
      onClick={onClick}
      className="shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] bg-gradient-to-r from-white to-white
      text-gray-800 font-semibold px-6 py-3 rounded-xl 
      transition-all duration-300 
      hover:shadow-[0px_4px_6px_0px_rgba(0,0,0,0.3)]
      hover:scale-105 cursor-pointer"
    >
      {/* Title + Status */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">{ticket.title}</h3>
        <span
          className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full capitalize ${getStatusColor(
            ticket.status
          )}`}
        >
          <span
            className={`w-2 h-2 rounded-full ${getDotColor(ticket.status)}`}
          ></span>
          {ticket.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3">{ticket.description}</p>

      {/* নিচে: ID + Priority + Customer + Date */}
      <div className="flex justify-between text-xs text-gray-500">
        {/* Left side: ID + Priority */}
        <div className="flex space-x-2">
          <span>#{ticket.id}</span>
          <span
            className={`font-semibold ${
              ticket.priority === "High"
                ? "text-red-500"
                : ticket.priority === "Medium"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            {ticket.priority.toUpperCase()} PRIORITY
          </span>
        </div>

        {/* Right side: Customer + Date */}
        <div className="flex space-x-2">
          <span>{ticket.customer}</span>
          <span>{ticket.date}</span>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
