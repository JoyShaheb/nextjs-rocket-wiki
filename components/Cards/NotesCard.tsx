import React, { FC } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface INotesCardProps {
  label: string;
  note: string;
}
const NotesCard: FC<INotesCardProps> = ({ label, note }) => {
  return (
    <div
      id="dropdown-cta"
      className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"
      role="alert"
    >
      <div className="flex items-center mb-3">
        <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
          {label}
        </span>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
          data-dismiss-target="#dropdown-cta"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <XMarkIcon className="w-6" strokeWidth={2} />
        </button>
      </div>
      <p className="text-sm text-blue-800 dark:text-blue-400">{note}</p>
    </div>
  );
};

export default NotesCard;
