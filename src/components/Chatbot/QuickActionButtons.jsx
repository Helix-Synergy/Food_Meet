import React from 'react';

const quickActions = [
  "Upcoming Conferences",
  "Register Now",
  "Submit Abstract",
  "Contact Us",
  "FAQs"
];

const QuickActionButtons = ({ onActionClick, disabled }) => {
  return (
    <div className="p-3 bg-white border-t border-gray-100 flex flex-wrap gap-2 justify-center">
      {quickActions.map((action, idx) => (
        <button
          key={idx}
          onClick={() => onActionClick(action)}
          disabled={disabled}
          className="text-[11px] font-medium bg-indigo-50 text-indigo-700 border border-indigo-100 hover:bg-indigo-100 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap disabled:opacity-50"
        >
          {action}
        </button>
      ))}
    </div>
  );
};

export default QuickActionButtons;
