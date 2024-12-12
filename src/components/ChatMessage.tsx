import { Cat, User } from 'lucide-react';
import { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex gap-3 max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="flex-shrink-0">
          {isUser ? (
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
              <Cat className="w-5 h-5 text-white" />
            </div>
          )}
        </div>
        <div
          className={`rounded-2xl px-4 py-2.5 ${
            isUser
              ? 'bg-blue-500 text-white rounded-tr-none'
              : 'bg-gray-100 text-gray-800 rounded-tl-none'
          }`}
        >
          {message.image && (
            <div className="mb-2">
              <img
                src={message.image}
                alt="Uploaded content"
                className="max-w-full rounded-lg"
                style={{ maxHeight: '200px' }}
              />
            </div>
          )}
          <div className="whitespace-pre-wrap break-words leading-relaxed text-[15px]">
            {message.content}
          </div>
        </div>
      </div>
    </div>
  );
}