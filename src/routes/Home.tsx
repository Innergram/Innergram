import { useState } from "react";

import { UploadIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

export default function Home() {
  const navigate = useNavigate();

  const [error, setError] = useState<string>();
  const [uploading, setUploading] = useState(false);

  const handleChange = (e: any) => {
    setUploading(true);

    // Get file
    const file = e.target.files[0];

    // Make sure it's a zip file
    if (
      file.type !== "application/x-zip-compressed" &&
      file.type !== "application/zip"
    ) {
      setError("Only zip files are supported");
      setUploading(false);
      return;
    }

    // Read the zip file
    const reader = new FileReader();

    reader.readAsArrayBuffer(file);
    reader.onload = async () => {
      const zipArrayBuffer = reader.result as ArrayBuffer;

      setUploading(false);

      // Navigate to analysis page while passing the zip file buffer
      navigate("/analysis", { state: { zipArrayBuffer } });
    };
  };

  return (
    <div className="h-screen py-12 flex justify-evenly flex-col gap-5 items-center">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-6xl text-primary font-marker tracking-wide">
          INNERGRAM
        </h1>

        <p className="w-2/5 text-xl font-mono text-center">
          Dive into your Instagram insights effortlessly with our Open Source
          Analytics Tool!
        </p>
      </div>

      <div className="flex flex-col items-center justify-center w-2/6">
        {uploading ? (
          <p className="text-xl font-bold">Uploading..</p>
        ) : (
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-[30vh] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-secondary"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <UploadIcon className="w-12 h-12 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                (only JSON format supported)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              accept=".zip"
              className="hidden"
              onChange={handleChange}
            />
          </label>
        )}

        {error && (
          <p className="text-destructive text-sm font-medium mt-2">{error}</p>
        )}
      </div>

      <div className="flex flex-col w-1/5">
        <div className="h-5 border-b-4 border-dotted border-primary text-2xl text-center">
          <span className="bg-background px-5">OR</span>
        </div>

        <Button asChild className="mt-8">
          <Link to="/demo">Try a Demo</Link>
        </Button>
      </div>
    </div>
  );
}
