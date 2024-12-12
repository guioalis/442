import { X } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { AVAILABLE_MODELS, ModelOption } from '../types/chat';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (apiKey: string, selectedModel: string, geminiKey: string) => void;
  currentApiKey: string;
  currentSambanovaKey: string;
  currentModel: string;
}

export function SettingsModal({ 
  isOpen, 
  onClose, 
  onSave, 
  currentApiKey,
  currentSambanovaKey: currentGeminiKey,
  currentModel
}: SettingsModalProps) {
  const [apiKey, setApiKey] = useState(currentApiKey);
  const [geminiKey, setGeminiKey] = useState(currentGeminiKey);
  const [selectedModel, setSelectedModel] = useState(currentModel);
  const DEFAULT_API_KEY = 'xai-PDby5aZny9HP02180FkgVPqMMSRVfIABmelIC8qj4Sx6krKynxEX0DYLEaXV6l5URSEZgmfd3fNfjrwU';
  const DEFAULT_GEMINI_KEY = 'AIzaSyAT1bpBjZvUzH1TU2hlylZnBYLN-9cMoig';

  useEffect(() => {
    setApiKey(currentApiKey);
    setGeminiKey(currentGeminiKey);
    setSelectedModel(currentModel);
  }, [currentApiKey, currentGeminiKey, currentModel]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const finalApiKey = apiKey.trim() || DEFAULT_API_KEY;
    const finalGeminiKey = geminiKey.trim() || DEFAULT_GEMINI_KEY;
    onSave(finalApiKey, selectedModel, finalGeminiKey);
    onClose();
  };

  const handleUseDefault = (keyType: 'x.ai' | 'gemini') => {
    if (keyType === 'x.ai') {
      setApiKey(DEFAULT_API_KEY);
    } else {
      setGeminiKey(DEFAULT_GEMINI_KEY);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">设置</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
              x.ai API密钥
            </label>
            <div className="space-y-2">
              <input
                type="password"
                id="apiKey"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="输入你的 x.ai API密钥"
              />
              <button
                type="button"
                onClick={() => handleUseDefault('x.ai')}
                className="text-sm text-amber-600 hover:text-amber-700"
              >
                使用默认API密钥
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="geminiKey" className="block text-sm font-medium text-gray-700 mb-1">
              Gemini API密钥
            </label>
            <div className="space-y-2">
              <input
                type="password"
                id="geminiKey"
                value={geminiKey}
                onChange={(e) => setGeminiKey(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="输入你的 Gemini API密钥"
              />
              <button
                type="button"
                onClick={() => handleUseDefault('gemini')}
                className="text-sm text-amber-600 hover:text-amber-700"
              >
                使用默认API密钥
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              选择模型
            </label>
            <div className="space-y-3">
              {AVAILABLE_MODELS.map((model: ModelOption) => (
                <label
                  key={model.id}
                  className="flex items-start space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="radio"
                    name="model"
                    value={model.id}
                    checked={selectedModel === model.id}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="mt-1"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{model.name}</div>
                    <div className="text-sm text-gray-500">{model.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              取消
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
            >
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
