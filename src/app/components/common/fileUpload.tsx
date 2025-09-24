"use client";
import { useState } from "react";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

interface FileUploadProps {
  label: string;
  accept: string;
  maxSize: number;
  maxSizeText: string;
  onFileChange: (file: File | null) => void;
  currentFile?: File | null;
  preview?: string | null;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  accept,
  maxSize,
  maxSizeText,
  onFileChange,
  currentFile,
  preview,
  className = ""
}) => {
  const [localPreview, setLocalPreview] = useState<string | null>(preview || null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size <= maxSize) {
        onFileChange(selectedFile);
        setLocalPreview(URL.createObjectURL(selectedFile));
      } else {
        alert(`File must be less than ${maxSizeText}`);
      }
    }
  };

  const removeFile = () => {
    onFileChange(null);
    setLocalPreview(null);
  };

  const displayPreview = localPreview || preview;
  const displayFile = currentFile;

  return (
    <div className={className}>
      <label className="text-sm font-poppinsSemiBold text-[#5F5F5F] block mb-2">
        {label}
        <span className="text-red-600 text-sm ml-1">
          ({maxSizeText})
        </span>
      </label>
      
      <input
        id={`file-upload-${label.replace(/\s+/g, '-').toLowerCase()}`}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />
      
      <label 
        htmlFor={`file-upload-${label.replace(/\s+/g, '-').toLowerCase()}`} 
        className="cursor-pointer w-full block"
      >
        {displayPreview ? (
          <>
            <div className="bg-[#E6FAEE] w-full p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  width={40}
                  height={40}
                  src="/assets/my-farms/pdf.svg"
                  alt="file"
                />
                <div>
                  <p className="text-sm text-[#5F5F5F] font-semibold">
                    {displayFile?.name || "Uploaded file"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {displayFile?.lastModified ? new Date(displayFile.lastModified).toLocaleString() : ""} 
                    {displayFile?.size ? ` • ${(displayFile.size / 1024 / 1024).toFixed(1)}MB` : ""}
                  </p>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                removeFile();
              }}
              className="flex items-center gap-1 mt-2 text-[#616161] text-sm px-3 py-1 rounded-md bg-[#FCECE6] hover:bg-red-100"
            >
              <MdDelete size={14} className="text-[#DE4204]" /> Remove
            </button>
          </>
        ) : (
          <div className="bg-[#EEFEF6] border border-[#51F4A6] border-dashed flex flex-col gap-y-3 items-center w-full py-16 rounded-xl">
            <FiDownload size={24} color="#2D865B" />
            <p className="text-xs text-gray-600 text-center">
              Upload document or <br />
              <span className="font-semibold mt-1 block">
                click to browse
              </span>
            </p>
          </div>
        )}
      </label>
    </div>
  );
};

export default FileUpload;
