import { Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { ImageUpload } from './ImageUpload';

interface ChatInputProps {
  onSend: (message: string, image?: string) => void;
  disabled: boolean;
  modelSupportsImages?: boolean;
}

export function ChatInput({ onSend, disabled, modelSupportsImages }: ChatInputProps) {
  const [input, setInput] = useState('');
  const [selectedImage, setSelectedImage] = useState<string>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if ((input.trim() || selectedImage) && !disabled) {
      onSend(input, selectedImage);
      setInput('');
      setSelectedImage(undefined);
    }
  };

  const handleImageSelect = (base64Image: string) => {
    setSelectedImage(base64Image);
  };

  const handleClearImage = () => {
    setSelectedImage(undefined);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="flex-1 flex gap-2 items-center rounded-xl border border-gray-300 px-3 focus-within:ring-2 focus-within:ring-amber-500">
        {modelSupportsImages && (
          <ImageUpload
            onImageSelect={handleImageSelect}
            onClear={handleClearImage}
            selectedImage={selectedImage}
          />
        )}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={disabled}
          placeholder={selectedImage ? "描述这张图片..." : "输入消息..."}
          className="flex-1 py-2 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={disabled || (!input.trim() && !selectedImage)}
        className="rounded-xl bg-amber-500 px-4 py-2 text-white hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}