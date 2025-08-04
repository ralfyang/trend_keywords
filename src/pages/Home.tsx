import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Map, Users, Shield } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          특별한 여행지를 발견하세요
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          여행자들과 함께 잊지 못할 경험을 만들어보세요. 최고의 여행지와 현지 정보를 공유합니다.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<Compass className="h-8 w-8" />}
          title="엄선된 여행지"
          description="경험 많은 여행자들이 추천하는 특별한 장소들을 만나보세요."
        />
        <FeatureCard
          icon={<Map className="h-8 w-8" />}
          title="최적화된 일정"
          description="검증된 여행 계획을 따라가거나 나만의 일정을 공유해보세요."
        />
        <FeatureCard
          icon={<Users className="h-8 w-8" />}
          title="현지 가이드"
          description="현지 전문가와 함께 진정한 여행을 경험하세요."
        />
        <FeatureCard
          icon={<Shield className="h-8 w-8" />}
          title="안전한 여행"
          description="커뮤니티의 도움으로 안전하게 여행하세요."
        />
      </section>

      <section className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">인기 여행지</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 여행지 목록은 추후 구현 */}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/destinations"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            모든 여행지 보기
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}