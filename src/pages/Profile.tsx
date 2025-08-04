import React from 'react';
import { useAuthStore } from '../stores/authStore';

export function Profile() {
  const user = useAuthStore(state => state.user);

  if (!user) {
    return (
      <div className="text-center py-8">
        <p>로그인이 필요합니다.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">내 프로필</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4">
          {user.user_metadata.avatar_url && (
            <img
              src={user.user_metadata.avatar_url}
              alt="프로필"
              className="w-16 h-16 rounded-full"
            />
          )}
          <div>
            <h2 className="text-xl font-semibold">
              {user.user_metadata.full_name || user.email}
            </h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}