// Mockup data store for JB Square
export interface Announcement {
  id: string;
  title: string;
  description: string;
  category: '창업지원' | 'R&D지원' | '인큐베이팅' | '투자지원';
  amount: string;
  applicants: number;
  remainingDays: number;
  status: '모집중' | '심사중' | '완료';
  applicationNumber: string;
  tags: string[];
}

export interface News {
  id: string;
  title: string;
  content: string;
  category: '산업동향' | '기업소식' | '정책뉴스' | '연구개발';
  date: string;
  featured?: boolean;
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  category: '컨퍼런스' | 'IR' | '워크샵' | '네트워킹';
  date: string;
  location: string;
  tags: string[];
}

export interface Company {
  id: string;
  name: string;
  description: string;
  category: '바이오의약품' | '진단기기' | '디지털헬스' | '바이오소재';
  stage: '상장기업' | 'Series A' | 'Series B' | 'Series C' | '스타트업';
  logo: string;
  tags: string[];
}

export interface IncubatorCenter {
  id: string;
  name: string;
  location: string;
  address: string;
  totalRooms: number;
  occupiedRooms: number;
  operator: string;
  contact: string;
  email?: string;
}

// Mockup data
export const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: '2024 바이오기업 성장지원사업',
    description: '전북 소재 바이오기업의 성장 단계별 맞춤 지원을 통해 글로벌 진출 및 시장 확대를 지원합니다.',
    category: '창업지원',
    amount: '5억원',
    applicants: 47,
    remainingDays: 15,
    status: '모집중',
    applicationNumber: '2024-001',
    tags: ['바이오', '성장지원', '글로벌진출']
  },
  {
    id: '2',
    title: '2024 바이오 R&D 기술개발 지원사업',
    description: '바이오 분야 신기술 개발 및 상용화를 위한 R&D 지원 프로그램입니다.',
    category: 'R&D지원',
    amount: '10억원',
    applicants: 32,
    remainingDays: 8,
    status: '심사중',
    applicationNumber: '2024-002',
    tags: ['R&D', '기술개발', '상용화']
  },
  {
    id: '3',
    title: '바이오 스타트업 인큐베이팅 지원사업',
    description: '창업 초기 바이오 기업의 R&D 인프라 구축과 기술개발을 종합적으로 지원합니다.',
    category: '인큐베이팅',
    amount: '2억원',
    applicants: 28,
    remainingDays: 22,
    status: '모집중',
    applicationNumber: '2024-015',
    tags: ['스타트업', '인큐베이팅', 'R&D인프라']
  },
  {
    id: '4',
    title: '글로벌 투자유치 지원 프로그램',
    description: '해외 투자자와의 연결 및 투자유치 과정 전반에 대한 전문 지원 서비스를 제공합니다.',
    category: '투자지원',
    amount: '20억원',
    applicants: 15,
    remainingDays: 30,
    status: '모집중',
    applicationNumber: '2024-003',
    tags: ['투자유치', '해외투자', '글로벌']
  }
];

export const mockNews: News[] = [
  {
    id: '1',
    title: '전북 바이오 클러스터, 글로벌 바이오 허브로 도약',
    content: '세계적인 바이오 기업들의 투자 러시가 이어지며 전북 바이오 클러스터가 글로벌 바이오 허브로서의 위상을 확립하고 있습니다.',
    category: '산업동향',
    date: '2024-09-15',
    featured: true,
    tags: ['바이오클러스터', '글로벌허브', '투자']
  },
  {
    id: '2',
    title: 'JB SQUARE 입주기업 3곳, 임상 승인 획득',
    content: '혁신적인 바이오의약품 개발로 주목받는 입주기업들이 연이어 임상 승인을 받으며 성과를 거두고 있습니다.',
    category: '기업소식',
    date: '2024-09-12',
    tags: ['입주기업', '임상승인', '바이오의약품']
  },
  {
    id: '3',
    title: '바이오 투자 생태계 활성화 방안 논의',
    content: '전북도와 주요 투자기관 간 협력을 강화하여 바이오 투자 생태계를 활성화하기 위한 방안을 모색했습니다.',
    category: '정책뉴스',
    date: '2024-09-10',
    tags: ['투자생태계', '정책', '협력']
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Korea Bio Week 2024',
    description: '전북 바이오 클러스터에서 열리는 연례 글로벌 바이오 컨퍼런스입니다.',
    category: '컨퍼런스',
    date: '2024.10.15',
    location: '전주 JB SQUARE',
    tags: ['컨퍼런스', '글로벌', '바이오']
  },
  {
    id: '2',
    title: 'JB Bio IR Day 2024',
    description: '바이오 기업들의 투자 설명회 및 네트워킹 행사입니다.',
    category: 'IR',
    date: '2024.10.25',
    location: '전주 컨벤션센터',
    tags: ['IR', '투자설명회', '네트워킹']
  }
];

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: '셀트리온',
    description: '글로벌 바이오시밀러 선도기업으로 혁신적인 치료제 개발에 앞장서고 있습니다.',
    category: '바이오의약품',
    stage: '상장기업',
    logo: 'C',
    tags: ['바이오시밀러', '치료제', '글로벌']
  },
  {
    id: '2',
    name: '진바이오텍',
    description: 'AI 기반 분자진단 솔루션으로 정밀의료 분야의 혁신을 주도하고 있습니다.',
    category: '진단기기',
    stage: 'Series B',
    logo: 'J',
    tags: ['AI진단', '정밀의료', '분자진단']
  },
  {
    id: '3',
    name: '바이오젠텍',
    description: '차세대 바이오의약품 개발로 새로운 치료 영역을 개척하고 있습니다.',
    category: '바이오의약품',
    stage: 'Series A',
    logo: 'B',
    tags: ['차세대', '치료영역', '혁신']
  }
];

export const mockIncubatorCenters: IncubatorCenter[] = [
  {
    id: '1',
    name: '전주바이오센터',
    location: '전주시',
    address: '전북 전주시 덕진구 백제대로 572',
    totalRooms: 50,
    occupiedRooms: 45,
    operator: '전주시',
    contact: '063-123-4567',
    email: 'jeonju@jbsquare.kr'
  },
  {
    id: '2',
    name: '익산바이오센터',
    location: '익산시',
    address: '전북 익산시 익산대로 460',
    totalRooms: 30,
    occupiedRooms: 28,
    operator: '익산시',
    contact: '063-234-5678',
    email: 'iksan@jbsquare.kr'
  },
  {
    id: '3',
    name: '군산바이오센터',
    location: '군산시',
    address: '전북 군산시 수송동 1234',
    totalRooms: 40,
    occupiedRooms: 40,
    operator: '군산시',
    contact: '063-345-6789',
    email: 'gunsan@jbsquare.kr'
  },
  {
    id: '4',
    name: '정읍바이오센터',
    location: '정읍시',
    address: '전북 정읍시 정읍대로 789',
    totalRooms: 25,
    occupiedRooms: 20,
    operator: '정읍시',
    contact: '063-456-7890',
    email: 'jeongeup@jbsquare.kr'
  }
];

// Search function
export interface SearchResult {
  announcements: Announcement[];
  news: News[];
  events: Event[];
  companies: Company[];
}

export const searchData = (query: string): SearchResult => {
  const lowercaseQuery = query.toLowerCase();
  
  const announcements = mockAnnouncements.filter(item => 
    item.title.toLowerCase().includes(lowercaseQuery) ||
    item.description.toLowerCase().includes(lowercaseQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
  
  const news = mockNews.filter(item => 
    item.title.toLowerCase().includes(lowercaseQuery) ||
    item.content.toLowerCase().includes(lowercaseQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
  
  const events = mockEvents.filter(item => 
    item.title.toLowerCase().includes(lowercaseQuery) ||
    item.description.toLowerCase().includes(lowercaseQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
  
  const companies = mockCompanies.filter(item => 
    item.name.toLowerCase().includes(lowercaseQuery) ||
    item.description.toLowerCase().includes(lowercaseQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
  
  return {
    announcements,
    news,
    events,
    companies
  };
};
