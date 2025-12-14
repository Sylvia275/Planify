import React, { useState } from 'react';
import ExploreHeader from '../components/explore/ExploreHeader';
import ExploreTags from '../components/explore/ExploreTags';
import { usersData } from '../data/mockData'; // giữ nguyên usersData cũ
import allPlans from '../data/allPlans';     // NEW: dùng data chung
import './ExplorePage.css';

import Carousel from "../components/common/Carousel.jsx";
import PlanList from "../components/common/PlanList.jsx";

const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState('subject');
  const [pinnedTags, setPinnedTags] = useState([]);
  const [fullView, setFullView] = useState(null);

  const handlePinTag = (tag) => {
    if (!pinnedTags.includes(tag)) setPinnedTags([...pinnedTags, tag]);
  };

  const handleUnpinTag = (tag) => {
    setPinnedTags(pinnedTags.filter(t => t !== tag));
  };

  // Lọc chỉ những plan công khai
  const publicPlans = allPlans.filter(plan => plan.isPublic);

  // ================== CHẾ ĐỘ XEM TẤT CẢ ==================
  if (fullView) {
    return (
      <div className="explore-page">
        <div style={{ padding: '24px 40px 0', maxWidth: '1400px', margin: '0 auto' }}>
          <button
            onClick={() => setFullView(null)}
            style={{
              background: 'none',
              border: 'none',
              color: '#6366f1',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 0',
            }}
          >
            ← Quay lại khám phá
          </button>
          <h1 style={{ fontSize: '32px', fontWeight: '700', margin: '16px 0 40px', color: '#1e293b' }}>
            {fullView.title}
          </h1>
        </div>
        <PlanList initialPlans={fullView.items} />
      </div>
    );
  }

  // ================== TRẠNG THÁI BÌNH THƯỜNG ==================
  return (
    <div className="explore-page">
      <ExploreHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <ExploreTags
        activeTab={activeTab}
        pinnedTags={pinnedTags}
        onPin={handlePinTag}
        onUnpin={handleUnpinTag}
      />

      <Carousel
        title="Kế hoạch nổi bật"
        items={publicPlans}
        type="plan"
        onViewMore={() => setFullView({
          title: 'Kế hoạch nổi bật',
          items: publicPlans
        })}
      />

      <Carousel
        title="Người dùng nổi bật"
        items={usersData}
        type="teacher"
        onViewMore={() => setFullView({
          title: 'Tất cả người dùng',
          items: usersData
        })}
      />
    </div>
  );
};

export default ExplorePage;