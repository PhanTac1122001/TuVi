import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Grid, Search, Wand2, ArrowRight, Compass, Heart, Sparkles } from 'lucide-react'
import { Button, Card, Badge } from '@/components/common'

export const HomePage: React.FC = () => {
  const mainModules = [
    {
      icon: <BookOpen size={28} style={{ color: 'var(--gold-primary)' }} />,
      title: 'Giáo Trình 10 Chương',
      path: '/giao-trinh',
      desc: 'Giáo án hoàn chỉnh chuẩn sư phạm từ Nền tảng Dịch học, 12 Cung, Hệ sao, Tứ hóa đến Tử Vi Số Phái.',
      badge: '10 Chương Toàn Diện',
      color: 'rgba(212, 175, 55, 0.1)',
    },
    {
      icon: <Grid size={28} style={{ color: 'var(--element-thuy)' }} />,
      title: 'Bàn 12 Cung Số',
      path: '/12-cung',
      desc: 'Khám phá ý nghĩa, phạm vi chi phối và mối tương quan Tam Hợp, Xung Chiếu, Nhị Hợp, Giáp Cung.',
      badge: '12 Cung Chức Năng',
      color: 'rgba(2, 136, 209, 0.1)',
    },
    {
      icon: <Search size={28} style={{ color: 'var(--element-hoa)' }} />,
      title: 'Tra Cứu Tinh Đẩu',
      path: '/tra-cuu',
      desc: 'Tra cứu 14 Chính Tinh, 118 Sao phụ tinh, đặc tính ngũ hành, đắc hãm và các bộ cách cục kinh điển.',
      badge: '14 Chính Tinh & Cách Cục',
      color: 'rgba(211, 47, 47, 0.1)',
    },
    {
      icon: <Wand2 size={28} style={{ color: 'var(--element-moc)' }} />,
      title: 'Lập Bàn Lá Số',
      path: '/lap-la-so',
      desc: 'Công cụ an sao 12 cung truyền thống chuẩn lịch pháp để người học trực tiếp quan sát và nghiệm lý.',
      badge: 'An Sao Trực Quan',
      color: 'rgba(46, 125, 50, 0.1)',
    },
  ]

  const principles = [
    {
      title: 'Thuyết Tam Tài (Thiên - Địa - Nhân)',
      desc: 'Thiên bàn định tiên thiên khí số, Địa bàn an vị 12 cung không gian, Nhân bàn phản ánh nỗ lực tu dưỡng và tương tác thực tế.',
      icon: <Compass size={22} style={{ color: 'var(--gold-primary)' }} />,
    },
    {
      title: 'Quy Luật Âm Dương Ngũ Hành',
      desc: 'Sự vận động tương sinh tương khắc của Kim, Mộc, Thủy, Hỏa, Thổ duy trì sự cân bằng, không có sao nào tuyệt đối tốt hay xấu.',
      icon: <Sparkles size={22} style={{ color: 'var(--secondary)' }} />,
    },
    {
      title: 'Đạo Lý Nhân Quả & Tu Dưỡng',
      desc: '"Mệnh tốt không bằng Hạn tốt, Hạn tốt không bằng Thân tốt, Thân tốt không bằng Tâm tốt." Học Tử Vi để hiểu mình, quản trị rủi ro và hành thiện.',
      icon: <Heart size={22} style={{ color: 'var(--danger)' }} />,
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', padding: '1rem 0 3rem' }}>
      {/* Hero Section */}
      <section
        style={{
          textAlign: 'center',
          maxWidth: '960px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
        }}
      >
        <Badge variant="warning" size="md">
          ✦ GIÁO TRÌNH NHẬP MÔN & NÂNG CAO CHUẨN SƯ PHẠM ✦
        </Badge>

        <h1
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}
        >
          CẨM NANG & GIÁO ÁN <br />
          <span className="gold-gradient-text">TỬ VI TÂM AN</span>
        </h1>

        <p
          style={{
            fontSize: '1.12rem',
            color: 'var(--text-secondary)',
            maxWidth: '750px',
            lineHeight: 1.65,
          }}
        >
          Hệ thống hóa toàn bộ tri thức Tử Vi Đẩu Số theo logic khoa học hiện đại, loại bỏ mê tín dị đoan,
          tập trung giải mã bản chất tiềm năng con người, nhận diện chu kỳ biến dịch và định hướng tu dưỡng thành công.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.75rem' }}>
          <Link to="/giao-trinh" style={{ textDecoration: 'none' }}>
            <Button variant="gold" size="lg" leftIcon={<BookOpen size={20} />}>
              Đọc Giáo Trình 10 Chương
            </Button>
          </Link>
          <Link to="/lap-la-so" style={{ textDecoration: 'none' }}>
            <Button variant="outline" size="lg" leftIcon={<Wand2 size={20} />}>
              Lập Bàn Lá Số Thực Hành
            </Button>
          </Link>
        </div>
      </section>

      {/* 4 Feature Module Cards */}
      <section>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Các Mục Phân Hệ Cốt Lõi
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Bấm vào từng mục dưới đây để bắt đầu nghiên cứu và tra cứu kiến thức
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {mainModules.map((item, idx) => (
            <Link key={idx} to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                className="tuvi-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  height: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </div>
                  <Badge variant="default" size="sm">
                    {item.badge}
                  </Badge>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.45rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: 'var(--gold-primary)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    paddingTop: '0.5rem',
                  }}
                >
                  <span>Truy cập ngay</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Guiding Principles Section */}
      <section
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem 2rem',
          border: '1px solid var(--border-color)',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Triết Lý Phương Đông & Đạo Lý Nghiên Cứu
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            Tử Vi không nhằm mục đích bói toán số phận bất biến, mà là nghệ thuật làm chủ thời thế và tu dưỡng tâm tính.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {principles.map((item, idx) => (
            <Card key={idx} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600 }}>{item.title}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55 }}>
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
