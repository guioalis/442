import { Image as ImageIcon, X, Loader2 } from 'lucide-react';
import { useRef, useState, DragEvent } from 'react';

interface ImageUploadProps {
  onImageSelect: (base64Image: string) => void;
  onClear: () => void;
  selectedImage?: string;
}

export function ImageUpload({ onImageSelect, onClear, selectedImage }: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateFile = (file: File): string | null => {
    if (!file.type.startsWith('image/')) {
      return '请选择图片文件 (JPG, PNG, GIF等)';
    }

    if (file.size > 5 * 1024 * 1024) {
      return '图片大小不能超过5MB';
    }

    return null;
  };

  const processFile = async (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const base64 = await convertToBase64(file);
      onImageSelect(base64);
    } catch (err) {
      setError('图片处理失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await processFile(file);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (!file) return;
    await processFile(file);
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-gray-600">
        <Loader2 className="w-5 h-5 animate-spin" />
        <span className="text-sm">处理图片中...</span>
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*"
        className="hidden"
      />
      
      {selectedImage ? (
        <div className="relative inline-block">
          <img
            src={selectedImage}
            alt="Selected"
            className="h-6 w-6 rounded object-cover"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              onClear();
            }}
            className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 hover:bg-red-600 shadow-sm"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 cursor-pointer
            ${isDragging ? 'text-amber-500' : ''}
          `}
        >
          <ImageIcon className="w-5 h-5" />
        </div>
      )}

      {error && (
        <div className="absolute bottom-full left-0 mb-2 w-48">
          <div className="bg-red-50 text-red-500 text-sm py-1 px-2 rounded-lg border border-red-200">
            {error}
          </div>
        </div>
      )}
    </div>
  );
}