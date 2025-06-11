"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { XIcon } from "lucide-react";

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint: "postImage";
}

function ImageUpload({ endpoint, onChange, value }: ImageUploadProps) {
  if (value) {
    return (
      <div className="relative w-40 h-40">
        <img src={value} alt="Upload" className="rounded-md size-40 object-cover" />
        <button
          onClick={() => onChange("")}
          className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          type="button"
        >
          <XIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    );
  }
  return (
  <UploadDropzone className="relative w-40 h-40 mx-auto"
    endpoint={endpoint}
    // auto-start the upload upon selection
    config={{ mode: "auto" }}
    onClientUploadComplete={(res) => {
      console.log("Upload completed:", res);
      onChange(res[0].url);
    }}
    onUploadError={(err) => console.error(err)}
  />
);
}
export default ImageUpload;
