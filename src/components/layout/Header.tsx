import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Search, User, LogOut } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

export function Header() {
  const { user, signIn, signOut } = useAuthStore();

  return (
    <header className="bg-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Map className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">AlyGo 투어</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="여행지 검색..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <nav className="hidden md:flex items-center space-x-4">
              <Link to="/destinations" className="text-gray-600 hover:text-indigo-600">
                여행지
              </Link>
              <Link to="/itineraries" className="text-gray-600 hover:text-indigo-600">
                여행 일정
              </Link>
              <Link to="/guides" className="text-gray-600 hover:text-indigo-600">
                가이드 찾기
              </Link>
            </nav>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center text-gray-600 hover:text-indigo-600">
                  <User className="h-5 w-5 mr-1" />
                  프로필
                </Link>
                <button
                  onClick={() => signOut()}
                  className="flex items-center text-gray-600 hover:text-indigo-600"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  로그아웃
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                로그인
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}