'use client';

import { motion } from 'framer-motion';
import { FaFileDownload, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Footer() {
  const handleDownloadPDF = async () => {
    // Show loading state
    const loadingToast = document.createElement('div');
    loadingToast.textContent = 'PDF 생성 중...';
    loadingToast.className = 'fixed top-4 right-4 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    document.body.appendChild(loadingToast);

    try {
      // Capture the entire page
      const element = document.body;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('내일찾기_내비게이터_제안서.pdf');

      // Success message
      loadingToast.textContent = 'PDF 다운로드 완료!';
      loadingToast.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      setTimeout(() => loadingToast.remove(), 3000);
    } catch (error) {
      loadingToast.textContent = 'PDF 생성 실패';
      loadingToast.className = 'fixed top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      setTimeout(() => loadingToast.remove(), 3000);
    }
  };

  return (
    <footer id="proposal" className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            제안서 다운로드
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            전체 제안서를 PDF로 다운로드하거나, 상세 문서를 확인하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <FaFileDownload />
              PDF 다운로드
            </button>
            <a
              href="https://github.com/yourusername/ai-agent-contest-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-700 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <FaGithub />
              GitHub 보기
            </a>
          </div>
        </motion.div>

        {/* Contest Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-gray-700"
        >
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">공모전 정보</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📋 <strong>공모전명:</strong> 2025년 AI 에이전트 서비스 시나리오 공모전</li>
              <li>🏢 <strong>주최:</strong> 행정안전부</li>
              <li>🏛️ <strong>주관:</strong> 한국지능정보사회진흥원</li>
              <li>📅 <strong>기간:</strong> 2025.11.3 ~ 2025.11.21</li>
              <li>🏆 <strong>상금:</strong> 총 1,000만원 (대상 350만원)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">제출자 정보</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <FaUser className="text-indigo-400" />
                <strong>이름:</strong> 박용환
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-indigo-400" />
                <strong>연락처:</strong> 010-7939-3123
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-indigo-400" />
                <strong>이메일:</strong> sanoramyun8@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <strong>참가형태:</strong> 개인
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Project Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold mb-4">
            <span className="gradient-text">내일(My Job) 찾기 내비게이터</span>
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            퇴사 직후부터 재취업까지의 전 과정을 AI 에이전트가 자동으로 감지하고 순차적으로 안내하는
            통합 고용 지원 서비스입니다. 연간 100만 실업자의 실질적 문제를 해결하고,
            5.5조 원의 경제적 가치를 창출하는 AI민주정부의 핵심 서비스입니다.
          </p>
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>© 2025 박용환. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for Korean Job Seekers</p>
        </div>
      </div>
    </footer>
  );
}

function FaUser({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" width="16" height="16">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  );
}
