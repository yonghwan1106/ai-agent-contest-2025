'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import ProcessTimeline from '@/components/ProcessTimeline';
import Footer from '@/components/Footer';
import { FaCog, FaCloudUploadAlt, FaBriefcase, FaGraduationCap, FaSearch, FaFileAlt, FaTrophy } from 'react-icons/fa';

const publicServices = [
  {
    name: '고용24',
    agency: '고용노동부',
    url: 'www.work24.go.kr',
    features: ['4대보험 가입이력 조회', '퇴사 사실 확인', '이직확인서 발급'],
    api: '행정정보 공동이용',
    icon: '📄'
  },
  {
    name: '고용보험',
    agency: '고용노동부 고용센터',
    url: 'www.ei.go.kr',
    features: ['수급자격 자동 확인', '구직급여 신청', '실업인정 신청', '구직활동 내역 제출'],
    api: '고용보험 API',
    icon: '💰'
  },
  {
    name: '워크넷',
    agency: '한국고용정보원',
    url: 'www.work.go.kr',
    features: ['구직자 등록', 'AI 채용정보 추천', '온라인 입사지원', '구직활동 내역 관리'],
    api: '워크넷 OpenAPI',
    icon: '💼'
  },
  {
    name: 'HRD-Net',
    agency: '고용노동부',
    url: 'www.hrd.go.kr',
    features: ['내일배움카드 발급', '직업훈련과정 검색', '훈련과정 수강신청', '훈련비 지원'],
    api: 'HRD-Net OpenAPI',
    icon: '🎓'
  },
  {
    name: '취업성공패키지',
    agency: '고용노동부 고용센터',
    url: 'www.work24.go.kr',
    features: ['취업성공패키지 참여', '취업활동계획 수립', '집중 취업지원'],
    api: '고용24 API',
    icon: '📋'
  },
  {
    name: '국민취업지원제도',
    agency: '고용노동부',
    url: 'www.work24.go.kr',
    features: ['지원대상 자격 확인', '취업지원서비스', '구직촉진수당 신청'],
    api: '고용24 API',
    icon: '🤝'
  },
  {
    name: '큐넷',
    agency: '한국산업인력공단',
    url: 'www.q-net.or.kr',
    features: ['보유 자격증 조회', '추천 자격증 정보', '시험 일정 안내', '응시 신청'],
    api: '큐넷 OpenAPI',
    icon: '🏆'
  },
  {
    name: '4대보험 정보연계센터',
    agency: '국민건강보험공단',
    url: '4대사회보험 정보연계센터',
    features: ['실시간 4대보험 가입 상태 조회', '퇴사 감지 (자동 트리거)'],
    api: '행정정보 공동이용',
    icon: '🔍'
  }
];

const privateServices = [
  {
    name: '사람인/잡코리아',
    category: '채용정보 플랫폼',
    features: ['채용공고 검색', '온라인 지원', 'AI 매칭', '입사지원 현황 관리'],
    api: '채용정보 API',
    icon: '💻'
  },
  {
    name: '카카오톡 알림톡',
    category: '알림 서비스',
    features: ['실업인정일 알림', '구직활동 제출 독촉', '추천 채용공고 알림', '훈련과정 수강 알림'],
    api: '카카오 비즈니스 API',
    icon: '💬'
  },
  {
    name: '구글 캘린더',
    category: '일정 관리',
    features: ['실업인정일 자동 등록', '면접 일정 관리', '훈련과정 일정 동기화', '구직활동 마감일 알림'],
    api: 'Google Calendar API',
    icon: '📅'
  },
  {
    name: '구글 드라이브',
    category: '문서 관리',
    features: ['이력서 자동 저장', '자기소개서 백업', '면접 후기 메모', '증빙서류 보관'],
    api: 'Google Drive API',
    icon: '📁'
  },
  {
    name: 'ChatGPT/Claude',
    category: 'AI 챗봇',
    features: ['자연어 대화 처리', '이력서 분석', '맞춤형 훈련과정 추천', '면접 준비 조언'],
    api: 'OpenAI/Claude API',
    icon: '🤖'
  },
  {
    name: '카카오맵/네이버 지도',
    category: '위치 기반 서비스',
    features: ['고용센터 위치 안내', '면접 장소 길찾기', '훈련기관 위치 안내'],
    api: '지도 API',
    icon: '🗺️'
  },
  {
    name: 'PASS',
    category: '간편인증',
    features: ['본인 인증', '전자서명'],
    api: 'PASS 인증 API',
    icon: '🔐'
  },
  {
    name: '네이버페이/카카오페이',
    category: '결제 서비스',
    features: ['훈련비 결제 (자부담분)'],
    api: '간편결제 API',
    icon: '💳'
  }
];

const serviceMapping = [
  {
    step: '1. 자동감지',
    icon: <FaCog />,
    public: ['4대보험 정보연계센터'],
    private: ['카카오톡 알림톡']
  },
  {
    step: '2. 실업급여 신청',
    icon: <FaCloudUploadAlt />,
    public: ['고용보험', '고용24'],
    private: ['PASS 인증', '구글 드라이브']
  },
  {
    step: '3. 구직등록',
    icon: <FaBriefcase />,
    public: ['워크넷'],
    private: ['사람인/잡코리아', '구글 드라이브']
  },
  {
    step: '4. 훈련과정 추천',
    icon: <FaGraduationCap />,
    public: ['HRD-Net', '큐넷'],
    private: ['ChatGPT/Claude (AI 분석)']
  },
  {
    step: '5. 구직활동 관리',
    icon: <FaSearch />,
    public: ['워크넷', '고용24'],
    private: ['사람인/잡코리아', '구글 캘린더', '카카오맵']
  },
  {
    step: '6. 실업인정',
    icon: <FaFileAlt />,
    public: ['고용보험'],
    private: ['카카오톡 알림톡', '구글 캘린더']
  },
  {
    step: '7. 재취업 후속 지원',
    icon: <FaTrophy />,
    public: ['고용보험'],
    private: ['카카오톡 알림톡']
  }
];

export default function Process() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="7단계 통합 프로세스"
        subtitle="퇴사부터 재취업까지, AI가 자동으로 연결합니다"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* 프로세스 타임라인 */}
        <section className="mb-20">
          <ProcessTimeline />
        </section>

        {/* 필요 서비스 목록 */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text text-center">필요 서비스 목록</h2>
            <p className="text-center text-gray-600 mb-12">
              AI 에이전트가 자동으로 연결하는 공공·민간 서비스
            </p>

            {/* 공공 서비스 */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <span className="text-3xl">🏛️</span>
                공공 서비스 ({publicServices.length}개)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {publicServices.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-blue-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-xs px-2 py-1 bg-blue-200 text-blue-800 rounded-full">
                        API
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-blue-900">{service.name}</h4>
                    <p className="text-sm text-blue-700 mb-3">{service.agency}</p>
                    <p className="text-xs text-gray-600 mb-3 font-mono">{service.url}</p>
                    <div className="space-y-1 mb-3">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-3 border-t border-blue-300">
                      <p className="text-xs text-gray-600">
                        <strong>API:</strong> {service.api}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 민간 서비스 */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <span className="text-3xl">🏢</span>
                민간 서비스 ({privateServices.length}개)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {privateServices.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-purple-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-xs px-2 py-1 bg-purple-200 text-purple-800 rounded-full">
                        {service.category}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-purple-900">{service.name}</h4>
                    <div className="space-y-1 mb-3">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-3 border-t border-purple-300">
                      <p className="text-xs text-gray-600">
                        <strong>API:</strong> {service.api}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* 서비스 흐름 매핑 */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text text-center">서비스 흐름별 매핑</h2>
            <p className="text-center text-gray-600 mb-12">
              각 단계에서 사용되는 공공·민간 서비스
            </p>

            <div className="space-y-6">
              {serviceMapping.map((mapping, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-indigo-600"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl text-indigo-600 mt-1">{mapping.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">{mapping.step}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-semibold text-blue-700 mb-2">공공 서비스:</p>
                          <div className="space-y-1">
                            {mapping.public.map((service, sIdx) => (
                              <div key={sIdx} className="flex items-center gap-2 text-sm">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span className="text-gray-700">{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-purple-700 mb-2">민간 서비스:</p>
                          <div className="space-y-1">
                            {mapping.private.map((service, sIdx) => (
                              <div key={sIdx} className="flex items-center gap-2 text-sm">
                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                <span className="text-gray-700">{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 핵심 차별화 포인트 */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl shadow-2xl text-white"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">핵심 차별화 포인트</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">선제적 감지</h3>
                <p className="text-sm opacity-90">
                  AI가 퇴사를 자동 감지하고 먼저 연락
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔗</div>
                <h3 className="text-xl font-bold mb-2">통합 플랫폼</h3>
                <p className="text-sm opacity-90">
                  6개 이상의 플랫폼을 하나로 통합
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">지속적 지원</h3>
                <p className="text-sm opacity-90">
                  재취업까지 끝까지 함께하는 AI 파트너
                </p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <p className="text-center text-lg">
                기존에는 각 서비스를 <strong>개별적으로</strong> 이용해야 했다면,<br />
                본 서비스는 <strong>AI 에이전트가 자동으로 감지하고 순차적으로 연결</strong>하여<br />
                실업자가 "무엇을 해야 할지 몰라서" 놓치는 혜택을 <strong className="text-2xl">제로(0)</strong>로 만듭니다.
              </p>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
