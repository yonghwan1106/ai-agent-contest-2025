'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl sm:text-6xl font-bold gradient-text">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function EffectsSection() {
  const economicData = {
    labels: ['소득 증가', '훈련 임금상승', '채용비용 절감', '실업급여 절감', '세수 증가', '행정비용 절감'],
    datasets: [
      {
        data: [2.5, 0.6, 0.5, 1.55, 0.5, 0.035],
        backgroundColor: [
          '#6366F1',
          '#8B5CF6',
          '#EC4899',
          '#F97316',
          '#14B8A6',
          '#10B981',
        ],
        borderWidth: 0,
      },
    ],
  };

  const timeData = {
    labels: ['기존', '개선 후'],
    datasets: [
      {
        label: '행정 처리 시간 (시간)',
        data: [20, 6],
        backgroundColor: ['#EF4444', '#10B981'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return context.label + ': ' + context.parsed.toFixed(2) + '조 원';
          }
        }
      }
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '시간 (hour)',
        },
      },
    },
  };

  return (
    <section id="effects" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto">

        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { number: 100, suffix: '만', label: '연간 실업급여 신청자' },
            { number: 70, suffix: '%', label: '행정 처리 시간 단축' },
            { number: 5.5, suffix: '조원', label: '연간 경제적 효과' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 bg-white rounded-3xl shadow-lg card-hover"
            >
              <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              <p className="text-gray-600 mt-4 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              경제적 효과 분석 (연간)
            </h3>
            <div className="w-full max-w-md mx-auto">
              <Doughnut data={economicData} options={chartOptions} />
            </div>
            <p className="text-center text-gray-600 mt-4 text-sm">
              총 <span className="font-bold gradient-text">5.5조 원</span>의 경제적 가치 창출
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              행정 처리 시간 비교
            </h3>
            <div className="w-full max-w-md mx-auto">
              <Bar data={timeData} options={barOptions} />
            </div>
            <p className="text-center text-gray-600 mt-4 text-sm">
              <span className="font-bold gradient-text">70% 시간 단축</span> (20시간 → 6시간)
            </p>
          </motion.div>
        </div>

        {/* Detailed Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-3xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">3가지 핵심 가치</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '경제적 가치',
                items: [
                  '개인: 재취업 기간 1개월 단축',
                  '기업: 채용 비용 절감',
                  '국가: 고용보험 재정 건전화',
                ],
                icon: '💰',
              },
              {
                title: '사회적 가치',
                items: [
                  '복지 사각지대 해소',
                  '디지털 격차 해소',
                  '고용시장 효율성 제고',
                ],
                icon: '🤝',
              },
              {
                title: '국민 체감 가치',
                items: [
                  '시간 절약 70%',
                  '심리적 안정감 제공',
                  '놓치는 혜택 제로화',
                ],
                icon: '😊',
              },
            ].map((category, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h4 className="text-xl font-bold mb-4 gradient-text">
                  {category.title}
                </h4>
                <ul className="text-left space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">✓</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white p-8 rounded-3xl shadow-lg overflow-x-auto"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Before & After</span>
          </h3>
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-4 px-4 text-left">구분</th>
                <th className="py-4 px-4 text-left">현재 (Before)</th>
                <th className="py-4 px-4 text-left gradient-text">개선 후 (After)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: '인지', before: '국민이 직접 검색', after: 'AI가 자동 감지' },
                { category: '플랫폼', before: '6개 이상 분산', after: '1개 통합' },
                { category: '절차', before: '각각 회원가입 반복', after: '1회 인증' },
                { category: '정보', before: '일반 안내', after: 'AI 맞춤 추천' },
                { category: 'UI', before: '복잡한 양식', after: '대화형 (음성 가능)' },
                { category: '시간', before: '20시간 소요', after: '6시간 (70% 단축)' },
              ].map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-semibold text-gray-900">{row.category}</td>
                  <td className="py-4 px-4 text-gray-600">{row.before}</td>
                  <td className="py-4 px-4 font-semibold text-indigo-600">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
