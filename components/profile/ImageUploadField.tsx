import { ImageMinus, ImagePlus, UserPlus, UserX } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface DropzoneProps {
  onChange: (base64: string | null) => void;
  label: string;
  coverImageButton?: boolean;
  profileImageButton?: boolean;
  value?: string;
  disabled?: boolean;
  maxSize?: number;
  className?: string;
}

const ImageUpload = ({
  onChange,
  label,
  coverImageButton,
  profileImageButton,
  value,
  disabled,
  maxSize = 500 * 1024,
  className,
}: DropzoneProps) => {
  const [base64, setBase64] = useState(value);
  const [showDelete, setShowDelete] = useState(false);

  const handleDrop = useCallback(
    (files: File[]) => {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const result = event.target.result as string;
          setBase64(result);
          setShowDelete(true);
          onChange(result);
        }
      };
      reader.readAsDataURL(file);
    },
    [onChange]
  );

  const handleDeleteImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBase64(null as any);
    setShowDelete(false);
    onChange(null);
  };

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: handleDrop,
    disabled,
    maxSize,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });

  return (
    <div className="relative">
      <div
        {...getRootProps({
          className: `text-center relative flex items-center justify-center border-2 border-dotted border-neutral-700 overflow-hidden ${className} bg-white dark:bg-neutral-800`,
        })}
      >
        <input {...getInputProps()} />
        {base64 ? (
          <div className="relative flex aspect-square h-full w-full items-center justify-center overflow-hidden">
            <button
              className="absolute flex items-center justify-center rounded-full bg-white p-2 text-red-500 opacity-0 transition hover:opacity-100"
              onClick={handleDeleteImage}
            >
              {coverImageButton && (
                <ImageMinus size={24} className="shrink-0" />
              )}
              {profileImageButton && <UserX size={24} className="shrink-0" />}
            </button>
            <Image
              src={base64}
              height="100"
              width="100"
              alt="Uploaded image"
              className="aspect-auto h-full w-full object-cover"
            />
          </div>
        ) : (
          <div>
            {coverImageButton && <ImagePlus size={24} className="shrink-0" />}
            {profileImageButton && <UserPlus size={24} className="shrink-0" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
