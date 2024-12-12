import { ArrowRight, ImageIcon, MonitorSmartphone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Free Image to Prompt AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              通过人工智能，轻松将图片转换为详细的提示词描述。快速、准确、免费。
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/chat"
                className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors"
              >
                开始使用
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://artiverse.app/ai/fluxproweb-com-image-to-prompt/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                了解更多
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            主要功能
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <ImageIcon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                智能识别
              </h3>
              <p className="text-gray-600">
                准确识别图片中的物体、场景、风格等元素，生成精准的描述。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                快速处理
              </h3>
              <p className="text-gray-600">
                采用先进的AI模型，秒级完成图片分析和提示词生成。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <MonitorSmartphone className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                简单易用
              </h3>
              <p className="text-gray-600">
                友好的用户界面，支持拖拽上传，一键生成提示词。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            开始体验智能图片分析
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            立即使用我们的AI助手，让图片描述变得简单而准确。
          </p>
          <Link
            to="/chat"
            className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-lg hover:bg-amber-600 transition-colors text-lg"
          >
            立即开始
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
