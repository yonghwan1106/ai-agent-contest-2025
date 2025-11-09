'use client';

import { motion } from 'framer-motion';
import { FaBell, FaMoneyCheckAlt, FaUserTie, FaGraduationCap, FaBriefcase, FaCheckCircle, FaTrophy } from 'react-icons/fa';

const processes = [
  {
    step: 1,
    icon: FaBell,
    title: '자동 감지',
    description: '4대보험 DB 연동으로 퇴사 사실 자동 인지',
    detail: 'AI가 먼저 연락하여 안내 시작',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    step: 2,
    icon: FaMoneyCheckAlt,
    title: '실업급여 신청',
    description: '수급자격 자동 확인 및 원스톱 신청',
    detail: '예상 수급액 자동 계산 및 이직확인서 발급 지원',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    step: 3,
    icon: FaUserTie,
    title: '구직등록 연계',
    description: '기존 이력서 기반 자동 등록',
    detail: 'AI가 이력서 분석하여 워크넷 자동 등록',
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: 4,
    icon: FaGraduationCap,
    title: '맞춤형 훈련 추천',
    description: 'AI 기반 직무역량 분석 및 과정 추천',
    detail: '국민내일배움카드 발급 및 수강신청 지원',
    color: 'from-pink-500 to-rose-500',
  },
  {
    step: 5,
    icon: FaBriefcase,
    title: '구직활동 관리',
    description: '채용공고 매칭 및 지원 이력 자동 증빙',
    detail: '적합도 분석 기반 채용정보 추천',
    color: 'from-rose-500 to-orange-500',
  },
  {
    step: 6,
    icon: FaCheckCircle,
    title: '실업인정 자동화',
    description: '구직활동 자동 집계 및 신고',
    detail: '4주마다 자동으로 증빙 제출',
    color: 'from-orange-500 to-amber-500',
  },
  {
    step: 7,
    icon: FaTrophy,
    title: '재취업 후속 지원',
    description: '조기재취업수당 안내 및 신청',
    detail: '끝까지 함께하는 AI 파트너',
    color: 'from-amber-500 to-yellow-500',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-pink-500 to-yellow-500" />

          {processes.map((process, index) => (
            <motion.div
              key={process.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="bg-white p-6 rounded-2xl shadow-lg card-hover">
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${process.color} text-white rounded-full text-sm font-semibold mb-3`}>
                    Step {process.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{process.title}</h3>
                  <p className="text-gray-600 mb-2">{process.description}</p>
                  <p className="text-sm text-gray-500 italic">{process.detail}</p>
                </div>
              </div>

              {/* Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${process.color} rounded-full flex items-center justify-center`}>
                  <process.icon className="text-white text-2xl" />
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-pink-500 to-yellow-500" />

          {processes.map((process, index) => (
            <motion.div
              key={process.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex gap-6 mb-12 pl-2"
            >
              {/* Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <div className={`w-14 h-14 bg-gradient-to-br ${process.color} rounded-full flex items-center justify-center`}>
                    <process.icon className="text-white text-2xl" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${process.color} text-white rounded-full text-sm font-semibold mb-3`}>
                  Step {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{process.title}</h3>
                <p className="text-gray-600 mb-2 text-sm">{process.description}</p>
                <p className="text-sm text-gray-500 italic">{process.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-3xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">
            <span className="gradient-text">핵심 차별점</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '선제적 감지',
                desc: '사용자가 검색하기 전에 AI가 먼저 퇴사를 감지하고 연락',
              },
              {
                title: '통합 플랫폼',
                desc: '6개 이상의 분산된 플랫폼을 하나의 AI 에이전트로 통합',
              },
              {
                title: '지속적 지원',
                desc: '재취업 후 조기재취업수당까지 챙겨주는 끝까지 함께하는 AI',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h4 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
