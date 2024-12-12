export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  image?: string; // Base64 encoded image
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface ModelOption {
  id: string;
  name: string;
  description: string;
  apiEndpoint?: string;
  supportsImages?: boolean;
  isImageGenerator?: boolean;
}

export const AVAILABLE_MODELS: ModelOption[] = [
  {
    id: 'grok-beta',
    name: 'Grok Beta',
    description: 'x.ai 官方对话模型'
  },
  {
    id: 'gemini-flash',
    name: 'Gemini 2.0 Flash',
    description: 'Google最新的超快速AI模型',
    apiEndpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent'
  },
  {
    id: 'flux-1',
    name: 'FLUX.1',
    description: 'Hugging Face图像生成模型',
    isImageGenerator: true
  }
];
