'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import { FaFileDownload, FaGithub, FaTrophy, FaUser, FaEnvelope, FaPhone, FaCalendar } from 'react-icons/fa';

export default function Proposal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <PageHeader
        title="제안서 다운로드"
        subtitle="전체 제안서 및 공모전 정보"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* 다운로드 섹션 */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="p-8 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl shadow-lg border border-indigo-200">
              <h2 className="text-2xl font-bold mb-6 text-center gradient-text">제안서 다운로드</h2>
              <p className="text-center text-gray-600 mb-8">
                전체 제안서를 PDF로 다운로드하거나, 상세 문서를 확인하세요
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  <FaFileDownload className="text-xl" />
                  <span>PDF 다운로드</span>
                </button>

                <a
                  href="https://github.com/yonghwan1106/ai-agent-contest-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub 보기</span>
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 공모전 정보 */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text text-center flex items-center justify-center gap-3">
              <FaTrophy />
              공모전 정보
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 공모전 상세 */}
              <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-6 text-gray-800">공모전 상세</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📋</span>
                    <div>
                      <p className="text-sm text-gray-600">공모전명</p>
                      <p className="font-semibold text-gray-800">2025년 AI 에이전트 서비스 시나리오 공모전</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏢</span>
                    <div>
                      <p className="text-sm text-gray-600">주최</p>
                      <p className="font-semibold text-gray-800">행정안전부</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏛️</span>
                    <div>
                      <p className="text-sm text-gray-600">주관</p>
                      <p className="font-semibold text-gray-800">한국지능정보사회진흥원</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCalendar className="text-2xl text-indigo-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">공모기간</p>
                      <p className="font-semibold text-gray-800">2025.11.3 ~ 2025.11.21</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaTrophy className="text-2xl text-yellow-500 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">상금</p>
                      <p className="font-semibold text-gray-800">총 1,000만원 (대상 350만원)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 제출자 정보 */}
              <div className="p-8 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl shadow-lg border border-indigo-200">
                <h3 className="text-xl font-bold mb-6 text-gray-800">제출자 정보</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaUser className="text-2xl text-indigo-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">이름</p>
                      <p className="font-semibold text-gray-800">박용환</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaPhone className="text-2xl text-green-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">연락처</p>
                      <p className="font-semibold text-gray-800">010-7939-3123</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaEnvelope className="text-2xl text-blue-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">이메일</p>
                      <p className="font-semibold text-gray-800">sanoramyun8@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👤</span>
                    <div>
                      <p className="text-sm text-gray-600">참가형태</p>
                      <p className="font-semibold text-gray-800">개인</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 프로젝트 요약 */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl shadow-2xl text-white"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">내일(My Job) 찾기 내비게이터</h2>
            <p className="text-lg leading-relaxed text-center mb-6">
              퇴사 직후부터 재취업까지의 전 과정을 AI 에이전트가 자동으로 감지하고 순차적으로 안내하는
              <strong> 통합 고용 지원 서비스</strong>입니다.
            </p>
            <p className="text-lg leading-relaxed text-center">
              연간 <strong className="text-2xl">100만</strong> 실업자의 실질적 문제를 해결하고,
              <strong className="text-2xl"> 5.5조 원</strong>의 경제적 가치를 창출하는
              <strong> AI민주정부</strong>의 핵심 서비스입니다.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">7단계</div>
                <div className="text-sm opacity-90">통합 프로세스</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">16개</div>
                <div className="text-sm opacity-90">공공·민간 서비스 연동</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">70%</div>
                <div className="text-sm opacity-90">행정 처리 시간 단축</div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
