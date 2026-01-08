"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const [open, setOpen] = useState(false);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 1;

    pages.push(1);

    if (currentPage - delta > 2) {
      pages.push("...");
    }

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage + delta < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex items-center justify-between mt-4 text-sm px-6">
      <p className="text-sm font-poppinsSemiBold font-semibold text-[#5F5F5F]">
        Page {currentPage} Of {totalPages}
      </p>

      <div className="flex items-center gap-2 relative">
        {getPageNumbers().map((page, idx) =>
          typeof page === "number" ? (
            <button
              key={idx}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 rounded border ${
                page === currentPage
                  ? "bg-green-100 text-sm border-green-400 text-[#7C7C7C]"
                  : "bg-transparent border-none text-[#7C7C7C]"
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={idx} className="px-2">
              {page}
            </span>
          )
        )}
        <div className="relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center text-sm text-[#7C7C7C] gap-1 border rounded px-3 py-1"
          >
            Go to page
            {open ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {open && (
            <div className="absolute right-0 mt-2 max-h-48 w-28 overflow-y-auto border rounded bg-white shadow-md z-10">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => {
                      onPageChange(page);
                      setOpen(false);
                    }}
                    className={`w-full px-3 py-1 text-left hover:bg-gray-100 ${
                      page === currentPage ? "bg-green-100 text-green-600" : ""
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
