'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import {
  FaExclamationTriangle,
  FaUsers,
  FaRobot,
  FaChartLine,
  FaUserTie,
  FaFemale,
  FaPiggyBank,
  FaCheckCircle,
  FaTimesCircle
} from 'react-icons/fa';

export default function About() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="제안 배경 및 필요성"
        subtitle="왜 이 서비스가 필요한가?"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* 1. 제안 배경 */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text flex items-center gap-3">
              <FaExclamationTriangle className="text-yellow-500" />
              제안 배경
            </h2>

            {/* 1-1. 실업자가 직면하는 현실적 어려움 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">실업자가 직면하는 현실적 어려움</h3>

              {/* 정보 부족 */}
              <div className="mb-8 p-6 bg-red-50 rounded-2xl border border-red-200">
                <h4 className="text-xl font-bold mb-4 text-red-800">① 정보 부족으로 인한 혜택 누락</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>2024년 기준 <strong>연간 약 100만 명</strong>이 실업급여를 신청하지만,
                    <strong>상당수가 추가 지원제도(국민취업지원제도, 취업성공패키지 등)의 존재조차 모르고</strong> 있습니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>고용노동부 통계에 따르면, 실업급여 수급자 중 <strong>약 40%만이 직업훈련을 병행</strong>하며,
                    나머지 60%는 <strong>내일배움카드 제도를 몰라서</strong> 또는 <strong>신청 절차가 복잡해서</strong> 포기합니다.</span>
                  </li>
                </ul>
              </div>

              {/* 분산된 플랫폼 */}
              <div className="mb-8 p-6 bg-orange-50 rounded-2xl border border-orange-200">
                <h4 className="text-xl font-bold mb-4 text-orange-800">② 분산된 플랫폼과 복잡한 절차</h4>
                <p className="mb-4 text-gray-700">현재 실업자가 재취업까지 거쳐야 하는 플랫폼:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {[
                    '고용보험 홈페이지 (실업급여 신청)',
                    '고용24 (이직확인서 발급)',
                    '워크넷 (구직등록, 채용정보)',
                    'HRD-Net (직업훈련)',
                    '큐넷 (자격증)',
                    '사람인/잡코리아 (민간 채용정보)'
                  ].map((platform, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-lg shadow-sm text-sm">
                      {platform}
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-orange-100 rounded-lg">
                  <p className="text-center font-bold text-orange-900">
                    → 최소 <span className="text-2xl">6개 이상</span>의 플랫폼을 오가며
                    각각 회원가입, 로그인, 증빙서류 제출을 반복!
                  </p>
                </div>
              </div>

              {/* 시간적·심리적 부담 */}
              <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-200">
                <h4 className="text-xl font-bold mb-4 text-yellow-800">③ 시간적·심리적 부담</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>실업급여 신청:</strong> 최초 1회 고용센터 방문 + 4주마다 실업인정</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>구직활동 증빙:</strong> 4주에 1~2회, 채용공고 지원·면접·직업상담 등을 증명</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span><strong>결과:</strong> 실업자가 <strong>행정 처리에 시간을 빼앗겨</strong>
                    정작 <strong>이력서 작성, 면접 준비, 역량 개발</strong> 등
                    <strong>본질적인 재취업 활동에 집중하지 못하는</strong> 악순환 발생</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 1-2. 디지털 취약계층의 소외 */}
            <div className="mb-12 p-6 bg-indigo-50 rounded-2xl border border-indigo-200">
              <h3 className="text-2xl font-bold mb-4 text-indigo-800 flex items-center gap-2">
                <FaUsers />
                디지털 취약계층의 소외
              </h3>
              <p className="text-gray-700 leading-relaxed">
                50대 이상 중·장년층, 저학력자, 디지털 기기에 익숙하지 않은 계층은
                <strong> 온라인 신청 자체를 포기</strong>하고 고용센터를 직접 방문하거나,
                <strong> 아예 혜택을 받지 못하는 경우</strong>가 많습니다.
              </p>
            </div>

            {/* 1-3. 정부의 AI 민주정부 정책 부합 */}
            <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-green-800 flex items-center gap-2">
                <FaRobot />
                정부의 AI 민주정부 정책 방향과 부합
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span>행정안전부는 <strong>'AI 국민비서'</strong>를 통해
                  <strong>복잡한 공공서비스를 대화만으로</strong> 이용할 수 있도록 하는
                  <strong>AI민주정부 비전</strong>을 제시했습니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span>본 서비스는 <strong>실업이라는 인생 전환기</strong>에 놓인 국민이
                  <strong>가장 절실하게 필요로 하는 순간</strong>, AI가 <strong>선제적으로 감지하고 안내</strong>하는
                  <strong>체감도 높은 시나리오</strong>입니다.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* 2. 제안 필요성 */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text flex items-center gap-3">
              <FaChartLine className="text-blue-500" />
              제안 필요성
            </h2>

            {/* 2-1. 활용 분야 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">활용 분야: 고용·복지 영역의 핵심 과제 해결</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md">
                  <div className="text-3xl mb-3">📈</div>
                  <h4 className="text-lg font-bold mb-3 text-blue-900">실업급여 수급률 제고</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• 현재 신청률: 약 60%</li>
                    <li>• 목표: <strong>80% 이상</strong></li>
                    <li>• AI가 퇴사를 자동 감지하고 수급자격을 즉시 안내</li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-md">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="text-lg font-bold mb-3 text-purple-900">재취업 소요기간 단축</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• 평균 수급기간: 4~6개월</li>
                    <li>• 단축 목표: <strong>1개월 이상</strong></li>
                    <li>• 직업훈련, 맞춤형 채용정보 제공</li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl shadow-md">
                  <div className="text-3xl mb-3">🛡️</div>
                  <h4 className="text-lg font-bold mb-3 text-pink-900">복지 사각지대 해소</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• 장애인, 육아·간병 중인 실업자</li>
                    <li>• 지방 거주자 등</li>
                    <li>• AI가 24시간 비대면으로 모든 절차 지원</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2-2. 예상 활용 빈도 */}
            <div className="mb-12 p-8 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">예상 활용 빈도</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-5xl font-bold gradient-text mb-2">100만</div>
                  <div className="text-gray-600">연간 실업급여 신청자</div>
                  <div className="text-sm text-gray-500 mt-2">이 중 80% 이상이 재취업 목표</div>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-5xl font-bold gradient-text mb-2">8만+</div>
                  <div className="text-gray-600">월평균 신규 이직자</div>
                  <div className="text-sm text-gray-500 mt-2">매월 자동 감지 대상</div>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-5xl font-bold gradient-text mb-2">80~100회</div>
                  <div className="text-gray-600">1인당 평균 상호작용</div>
                  <div className="text-sm text-gray-500 mt-2">4~6개월간</div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl shadow-sm">
                <h4 className="font-bold mb-3 text-gray-800">상호작용 세부 내역 (1인당):</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600">✓</span>
                    <span>실업인정: 6회</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600">✓</span>
                    <span>구직활동 제출: 12회</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600">✓</span>
                    <span>채용정보 확인: 48회</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600">✓</span>
                    <span>훈련과정 조회: 5~10회</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600">✓</span>
                    <span>면접 일정 관리: 10~20회</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2-3. 중요성: 사회 현안 해결 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">중요성: 사회 현안 해결</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 청년 실업 */}
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">👨‍🎓</div>
                    <h4 className="text-xl font-bold text-blue-900">청년 실업 문제</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>청년층 비중: 약 40%</strong></li>
                    <li>• 첫 실업 경험 시 제도를 모르는 경우 많음</li>
                    <li>• AI가 청년 맞춤형 언어로 안내</li>
                    <li>• 직무 전환·재교육 기회 적극 연결</li>
                  </ul>
                </div>

                {/* 중장년층 재취업 */}
                <div className="p-6 bg-purple-50 rounded-2xl border border-purple-200">
                  <div className="flex items-center gap-3 mb-4">
                    <FaUserTie className="text-3xl text-purple-600" />
                    <h4 className="text-xl font-bold text-purple-900">중·장년층 재취업 지원</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>50대 이상 재취업률: 약 30%</strong></li>
                    <li>• 디지털 활용 능력 부족</li>
                    <li>• 음성 기반 AI 대화로 진입장벽 완화</li>
                    <li>• 중장년 적합 직종·훈련과정 우선 추천</li>
                  </ul>
                </div>

                {/* 경력단절 여성 */}
                <div className="p-6 bg-pink-50 rounded-2xl border border-pink-200">
                  <div className="flex items-center gap-3 mb-4">
                    <FaFemale className="text-3xl text-pink-600" />
                    <h4 className="text-xl font-bold text-pink-900">경력단절 여성 재진입</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• 육아·간병으로 경력 단절</li>
                    <li>• 재취업 의지는 있으나 정보 부족</li>
                    <li>• 유연근무, 시간제, 재택 가능 일자리 우선 추천</li>
                    <li>• 일·가정 양립 가능한 직업훈련 안내</li>
                  </ul>
                </div>

                {/* 고용보험 재정 */}
                <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <FaPiggyBank className="text-3xl text-green-600" />
                    <h4 className="text-xl font-bold text-green-900">고용보험 재정 건전성</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• 실업급여 부정수급 방지</li>
                    <li>• AI가 구직활동 자동 집계</li>
                    <li>• 허위 신고 가능성 감소</li>
                    <li>• 조기 재취업 유도로 수급기간 단축</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3. 기존 서비스와의 차별점 */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text text-center">
              기존 서비스와의 차별점
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white">
                  <tr>
                    <th className="p-4 text-left font-semibold">구분</th>
                    <th className="p-4 text-left font-semibold">
                      <div className="flex items-center gap-2">
                        <FaTimesCircle />
                        기존 서비스
                      </div>
                    </th>
                    <th className="p-4 text-left font-semibold">
                      <div className="flex items-center gap-2">
                        <FaCheckCircle />
                        본 제안 (AI 에이전트)
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      category: '인지 방식',
                      before: '국민이 직접 검색하고 찾아야 함',
                      after: 'AI가 퇴사를 자동 감지하고 먼저 안내'
                    },
                    {
                      category: '플랫폼',
                      before: '고용보험, 워크넷, HRD-Net 등 분산',
                      after: '하나의 AI 에이전트로 통합'
                    },
                    {
                      category: '절차',
                      before: '각 플랫폼마다 회원가입·로그인 반복',
                      after: '1회 인증으로 모든 서비스 연계'
                    },
                    {
                      category: '정보 제공',
                      before: '일반적인 안내 (매뉴얼 수준)',
                      after: '개인 맞춤형 추천 (AI 분석 기반)'
                    },
                    {
                      category: '사용성',
                      before: '온라인 양식 작성 (복잡)',
                      after: '대화형 UI (음성 지원 가능)'
                    },
                    {
                      category: '연속성',
                      before: '각 단계마다 새로 시작',
                      after: '전 과정을 하나의 여정(Journey)으로 연결'
                    }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-semibold text-gray-800">{row.category}</td>
                      <td className="p-4 text-gray-600">{row.before}</td>
                      <td className="p-4 text-indigo-700 font-medium">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* 4. 왜 '지금' 필요한가 */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text text-center">
              왜 '지금' 이 서비스가 필요한가?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">AI 기술의 성숙</h3>
                <p className="text-gray-700 text-sm">
                  대화형 AI (ChatGPT, Claude, Gemini 등)의 발전으로
                  복잡한 행정 절차를 <strong>자연어로 안내</strong>하는 것이
                  <strong>기술적으로 가능</strong>해짐
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-md">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3 text-purple-900">공공 데이터 개방 확대</h3>
                <p className="text-gray-700 text-sm">
                  워크넷, HRD-Net, 큐넷 등 <strong>고용 관련 공공 데이터가 이미 API로 제공</strong> 중.
                  <strong>4대보험 정보연계센터</strong>를 통한 <strong>실시간 이직 감지</strong> 가능
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl shadow-md">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-3 text-pink-900">국민의 기대 수준 변화</h3>
                <p className="text-gray-700 text-sm">
                  카카오톡, 네이버 클로바 등 <strong>챗봇 서비스 이용 경험</strong>이 이미 보편화.
                  <strong>"정부도 AI로 서비스하면 안 되나?"</strong>라는 국민의 기대가 높아짐
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-md">
                <div className="text-4xl mb-4">⚠️</div>
                <h3 className="text-xl font-bold mb-3 text-red-900">고용시장 불확실성 증가</h3>
                <p className="text-gray-700 text-sm">
                  경기 침체, 산업구조 변화로 인한 <strong>비자발적 이직 증가</strong>.
                  <strong>전 국민 누구나 실업자가 될 수 있는</strong> 시대.
                  <strong>국가가 AI로 선제적으로 지원</strong>하는 세이프티넷 필요
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 5. 요약 */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl shadow-2xl text-white"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">요약</h2>
            <div className="space-y-4 text-lg">
              <p className="flex items-start gap-3">
                <FaCheckCircle className="text-white mt-1 flex-shrink-0" />
                <span><strong>"내일(My Job) 찾기 내비게이터"</strong>는
                <strong>연간 100만 실업자</strong>가 겪는
                <strong>정보 부족, 절차 복잡성, 시간 낭비</strong> 문제를 해결합니다.</span>
              </p>
              <p className="flex items-start gap-3">
                <FaCheckCircle className="text-white mt-1 flex-shrink-0" />
                <span><strong>AI가 퇴사를 자동 감지</strong>하고 <strong>순차적으로 안내</strong>하는
                <strong>국내 최초의 통합 고용 지원 서비스</strong>입니다.</span>
              </p>
              <p className="flex items-start gap-3">
                <FaCheckCircle className="text-white mt-1 flex-shrink-0" />
                <span><strong>재취업 소요기간 단축, 복지 사각지대 해소, 고용보험 재정 건전성</strong> 등
                <strong>사회적 가치</strong>를 창출합니다.</span>
              </p>
              <p className="flex items-start gap-3">
                <FaCheckCircle className="text-white mt-1 flex-shrink-0" />
                <span><strong>AI민주정부 비전</strong>에 가장 부합하는
                <strong>국민 체감도 높은 시나리오</strong>입니다.</span>
              </p>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
