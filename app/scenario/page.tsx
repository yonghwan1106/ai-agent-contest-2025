'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import ChatSimulator from '@/components/ChatSimulator';
import Footer from '@/components/Footer';
import { FaUser, FaBuilding, FaCode, FaBullseye, FaArrowRight } from 'react-icons/fa';

const scenarioSteps = [
  { step: 1, title: '퇴사 자동 감지', description: 'AI가 먼저 연락', color: 'from-blue-500 to-blue-600' },
  { step: 2, title: '실업급여 신청', description: '수급자격 확인 및 신청', color: 'from-purple-500 to-purple-600' },
  { step: 3, title: '구직등록', description: '이력서 자동 생성', color: 'from-pink-500 to-pink-600' },
  { step: 4, title: '직업훈련 추천', description: 'AI 맞춤형 추천', color: 'from-red-500 to-red-600' },
  { step: 5, title: '구직활동 관리', description: '채용정보 매칭', color: 'from-orange-500 to-orange-600' },
  { step: 6, title: '실업인정', description: '자동 증빙 제출', color: 'from-yellow-500 to-yellow-600' },
  { step: 7, title: '재취업 후속 지원', description: '조기재취업수당 안내', color: 'from-green-500 to-green-600' }
];

const keyFeatures = [
  {
    title: 'Proactive (선제적)',
    description: 'AI가 퇴사를 자동 감지하고 먼저 연락',
    icon: '🎯',
    color: 'from-blue-50 to-blue-100'
  },
  {
    title: 'Seamless (매끄러운)',
    description: '6개 플랫폼을 하나로 통합',
    icon: '🔗',
    color: 'from-purple-50 to-purple-100'
  },
  {
    title: 'Personalized (맞춤형)',
    description: 'AI가 이력서 분석하여 개인화 추천',
    icon: '👤',
    color: 'from-pink-50 to-pink-100'
  },
  {
    title: 'Automated (자동화)',
    description: '실업인정·구직활동 자동 집계',
    icon: '⚙️',
    color: 'from-red-50 to-red-100'
  },
  {
    title: 'Continuous (지속적)',
    description: '재취업까지 끝까지 함께',
    icon: '🤝',
    color: 'from-orange-50 to-orange-100'
  },
  {
    title: 'Comprehensive (종합적)',
    description: '실업급여부터 훈련·채용까지 전 과정',
    icon: '📋',
    color: 'from-green-50 to-green-100'
  }
];

export default function Scenario() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <PageHeader
        title="AI 대화 시나리오"
        subtitle="실제 서비스 체험하기"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* 사용자 프로필 */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text text-center flex items-center justify-center gap-3">
              <FaUser />
              사용자 프로필 (예시)
            </h2>

            <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl shadow-lg border-2 border-indigo-200">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                  김
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">김민준</h3>
                  <p className="text-gray-600">32세, 남성</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <FaBuilding className="text-2xl text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">상황</p>
                    <p className="text-gray-700 text-sm">
                      IT 중소기업에서 3년 근무 후 <strong>회사 구조조정으로 퇴사</strong> (비자발적 이직)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <FaCode className="text-2xl text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">경력</p>
                    <p className="text-gray-700 text-sm">
                      웹 개발자 (JavaScript, React 사용)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <FaBullseye className="text-2xl text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">희망사항</p>
                    <p className="text-gray-700 text-sm">
                      더 나은 조건의 회사로 이직, 필요시 최신 기술(AI, 클라우드) 추가 학습 의향 있음
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 시나리오 흐름도 */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text text-center">시나리오 흐름도</h2>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {scenarioSteps.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`w-full p-4 bg-gradient-to-br ${item.color} text-white rounded-xl shadow-lg text-center`}
                  >
                    <div className="text-2xl font-bold mb-2">{item.step}</div>
                    <div className="text-sm font-semibold mb-1">{item.title}</div>
                    <div className="text-xs opacity-90">{item.description}</div>
                  </motion.div>
                  {idx < scenarioSteps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center text-gray-400 text-2xl mt-2">
                      <FaArrowRight className="rotate-90 md:rotate-0" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* AI 대화 시뮬레이터 */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text text-center">AI 대화 시뮬레이터</h2>
            <p className="text-center text-gray-600 mb-8">
              실제 대화 흐름을 체험해보세요
            </p>

            <ChatSimulator />

            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-2xl border border-indigo-200">
              <p className="text-center text-gray-700">
                💡 이 시뮬레이터는 실제 서비스의 <span className="font-semibold gradient-text">일부 기능</span>만 보여줍니다.<br />
                완전한 서비스는 <span className="font-semibold">7단계 전체 프로세스</span>와 <span className="font-semibold">16개 공공·민간 서비스</span> 연동을 포함합니다.
              </p>
            </div>
          </motion.div>
        </section>

        {/* 시나리오 핵심 특징 */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text text-center">시나리오 핵심 특징</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-6 bg-gradient-to-br ${feature.color} rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-200`}
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl shadow-2xl text-white">
              <h3 className="text-2xl font-bold mb-4 text-center">왜 이 서비스가 특별한가?</h3>
              <div className="space-y-3">
                <p className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>사용자가 검색하기 <strong>전에</strong> AI가 먼저 감지하고 연락</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>분산된 6개 이상의 플랫폼을 <strong>하나의 대화창</strong>으로 통합</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>복잡한 양식 작성 대신 <strong>자연스러운 대화</strong>로 모든 절차 완료</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>재취업 성공 후에도 <strong>조기재취업수당</strong>까지 안내하는 <strong>끝까지 함께하는 AI</strong></span>
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
