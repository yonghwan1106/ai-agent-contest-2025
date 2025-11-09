'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaUser } from 'react-icons/fa';

interface Message {
  id: number;
  type: 'ai' | 'user';
  content: string;
  options?: string[];
}

const chatScenario: Message[] = [
  {
    id: 1,
    type: 'ai',
    content: '안녕하세요, 김민준님!\n\n4대보험 가입이력을 확인한 결과, 최근 퇴사하신 것으로 확인됩니다.\n(○○기술 / 2025.11.1 자격 상실)\n\n혹시 재취업을 준비 중이신가요?',
    options: ['재취업 준비 중', '이미 새 직장에 다니고 있음', '창업 준비 중'],
  },
  {
    id: 2,
    type: 'user',
    content: '재취업 준비 중',
  },
  {
    id: 3,
    type: 'ai',
    content: '알겠습니다! 재취업 준비를 함께 도와드릴게요. 🙂\n\n우선, 민준님께서 실업급여를 받으실 수 있는지 확인해볼까요?\n\n간단한 질문 몇 가지만 답변해 주세요.\n\nQ1. 퇴사 사유가 어떻게 되시나요?',
    options: ['회사 사정 (구조조정, 폐업 등)', '권고사직', '자발적 퇴사', '계약 만료'],
  },
  {
    id: 4,
    type: 'user',
    content: '회사 사정 (구조조정, 폐업 등)',
  },
  {
    id: 5,
    type: 'ai',
    content: '확인했습니다!\n\n고용보험 가입 이력을 조회한 결과,\n민준님은 최근 18개월간 총 36개월 고용보험에 가입되어 계셨네요.\n\n✅ 실업급여 수급 자격이 있습니다!\n\n예상 수급액: 1일 약 66,000원 (월 약 198만원)\n예상 수급기간: 최대 240일 (약 8개월)\n총 예상 금액: 약 1,584만원\n\n바로 신청하시겠어요?',
    options: ['네, 바로 신청할게요', '나중에 할게요'],
  },
  {
    id: 6,
    type: 'user',
    content: '네, 바로 신청할게요',
  },
  {
    id: 7,
    type: 'ai',
    content: '좋습니다! 신청을 도와드릴게요.\n\n먼저 이직확인서가 필요한데요,\n회사에서 발급받으셨나요?',
    options: ['네, 받았어요', '아니요, 아직 안 받았어요'],
  },
  {
    id: 8,
    type: 'user',
    content: '아니요, 아직 안 받았어요',
  },
  {
    id: 9,
    type: 'ai',
    content: '괜찮습니다!\n\n온라인으로 이직확인서를 발급받을 수 있어요.\n제가 대신 ○○기술에 발급 요청을 보내드릴게요.\n\n본인 인증을 진행합니다...\n\n✅ 이직확인서 발급 요청 완료!\n\n회사가 확인하면 3일 이내에 발급됩니다.\n발급되는 즉시 알림을 보내드릴게요!',
    options: ['감사합니다', '다음 단계 보기'],
  },
  {
    id: 10,
    type: 'user',
    content: '다음 단계 보기',
  },
  {
    id: 11,
    type: 'ai',
    content: '그동안 다른 준비를 먼저 진행할까요?\n\n민준님의 경력을 분석한 결과,\n이런 직업훈련 과정을 추천드려요:\n\n1. AI·머신러닝 기초 과정 (국비지원 100%)\n   - 기관: 한국SW인재개발원\n   - 기간: 3개월\n   - 훈련비: 300만원 → 국비 전액 지원\n\n2. AWS 클라우드 자격증 과정 (국비지원 100%)\n   - 기관: 멀티캠퍼스\n   - 기간: 1개월 (온라인)\n   - 훈련비: 150만원 → 국비 전액 지원\n\n어떤 과정이 관심 있으세요?',
    options: ['1번 (AI·머신러닝)', '2번 (AWS 클라우드)', '다른 과정 더 보기'],
  },
  {
    id: 12,
    type: 'user',
    content: '2번 (AWS 클라우드)',
  },
  {
    id: 13,
    type: 'ai',
    content: '좋은 선택입니다!\n\nAWS 클라우드 자격증 과정은\n요즘 채용시장에서 가장 수요가 많은 기술이에요.\n\n✅ 국민내일배움카드 발급 완료!\n✅ AWS 클라우드 과정 수강 신청 완료!\n\n첫 수업: 2025.11.25 (월) 19:00\nZoom 링크: (문자로 발송됩니다)\n\n캘린더에 자동 등록했습니다! 📅\n\n민준님, 재취업까지 함께 하겠습니다! 💪',
    options: ['체험 종료'],
  },
];

export default function ChatSimulator() {
  const [messages, setMessages] = useState<Message[]>([chatScenario[0]]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (option: string) => {
    setShowOptions(false);

    // Add user message
    const userMessage = chatScenario[currentStep + 1];
    setMessages((prev) => [...prev, { ...userMessage, content: option }]);

    // Show typing indicator
    setIsTyping(true);

    // Add AI response after delay
    setTimeout(() => {
      setIsTyping(false);
      const aiMessage = chatScenario[currentStep + 2];
      if (aiMessage) {
        setMessages((prev) => [...prev, aiMessage]);
        setCurrentStep(currentStep + 2);
        setShowOptions(true);
      }
    }, 1500);
  };

  const resetChat = () => {
    setMessages([chatScenario[0]]);
    setCurrentStep(0);
    setIsTyping(false);
    setShowOptions(true);
  };

  return (
    <section id="chat-simulator" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">AI 채팅 시뮬레이터</span>
          </h2>
          <p className="text-xl text-gray-600">
            실제 서비스를 체험해보세요!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-pink-600 p-6 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <FaRobot className="text-indigo-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg">AI 내일 내비게이터</h3>
                <p className="text-sm opacity-90">온라인</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div ref={chatContainerRef} className="h-[500px] overflow-y-auto p-6 bg-gray-50">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 mb-4 ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.type === 'ai' && (
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaRobot className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] px-4 py-3 rounded-2xl ${
                      message.type === 'ai'
                        ? 'bg-white shadow-md text-gray-800'
                        : 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white'
                    }`}
                  >
                    <p className="whitespace-pre-line text-sm sm:text-base">
                      {message.content}
                    </p>
                  </div>
                  {message.type === 'user' && (
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUser className="text-gray-600" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3 mb-4"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center">
                  <FaRobot className="text-white" />
                </div>
                <div className="bg-white shadow-md px-4 py-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Options */}
          {showOptions && messages[messages.length - 1]?.options && (
            <div className="p-6 bg-white border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {messages[messages.length - 1].options!.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleOptionClick(option)}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all transform hover:scale-105 text-sm sm:text-base"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Reset Button */}
          {currentStep >= chatScenario.length - 2 && (
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <button
                onClick={resetChat}
                className="w-full py-3 bg-gray-200 text-gray-800 rounded-full font-semibold hover:bg-gray-300 transition-colors"
              >
                처음부터 다시 체험하기
              </button>
            </div>
          )}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 p-6 bg-white rounded-2xl shadow-lg"
        >
          <p className="text-center text-gray-600">
            💡 이 시뮬레이터는 실제 서비스의 <span className="font-semibold gradient-text">일부 기능</span>만 체험할 수 있습니다.<br />
            완전한 서비스는 <span className="font-semibold">7단계 전체 프로세스</span>를 포함합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
