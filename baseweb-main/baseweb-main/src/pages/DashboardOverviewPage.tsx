import React, { useState } from 'react'
import { TrendingUp, Users, DollarSign, Activity, Plus } from 'lucide-react'
import { Card, Button, Badge, Modal, Input } from '@/components/common'
import { formatCurrency } from '@/utils'

export const DashboardOverviewPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [itemName, setItemName] = useState('')

  const stats = [
    { title: 'Tổng Doanh Thu', value: formatCurrency(145890000), change: '+18.2%', isPositive: true, icon: <DollarSign size={20} /> },
    { title: 'Người Dùng Mới', value: '1,420', change: '+12.5%', isPositive: true, icon: <Users size={20} /> },
    { title: 'Tỷ Lệ Chuyển Đổi', value: '4.85%', change: '-0.4%', isPositive: false, icon: <TrendingUp size={20} /> },
    { title: 'Server Uptime', value: '99.98%', change: 'Ổn định', isPositive: true, icon: <Activity size={20} /> },
  ]

  const recentActivities = [
    { id: 1, user: 'Hoàng Anh', action: 'Tạo đơn hàng mới #ORD-894', time: '5 phút trước', status: 'success' },
    { id: 2, user: 'Minh Thư', action: 'Nâng cấp gói thành viên VIP', time: '22 phút trước', status: 'primary' },
    { id: 3, user: 'Thanh Tùng', action: 'Cập nhật API Key production', time: '1 giờ trước', status: 'warning' },
    { id: 4, user: 'Quốc Bảo', action: 'Yêu cầu hỗ trợ kỹ thuật', time: '3 giờ trước', status: 'info' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Tổng quan Dashboard</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Theo dõi các chỉ số quan trọng và trạng thái ứng dụng theo thời gian thực.</p>
        </div>
        <Button leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
          Thêm mục mới (Demo Modal)
        </Button>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {stats.map((stat, idx) => (
          <Card key={idx} hoverEffect>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{stat.title}</span>
              <div
                style={{
                  padding: '0.5rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-tertiary)',
                  color: 'var(--primary)',
                }}
              >
                {stat.icon}
              </div>
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0' }}>{stat.value}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
              <Badge variant={stat.isPositive ? 'success' : 'danger'}>{stat.change}</Badge>
              <span style={{ color: 'var(--text-muted)' }}>so với tháng trước</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Activity Table */}
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Hoạt động gần đây</h2>
          <Badge variant="primary">Real-time Feed</Badge>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '0.75rem 1rem' }}>Người dùng</th>
                <th style={{ padding: '0.75rem 1rem' }}>Hoạt động</th>
                <th style={{ padding: '0.75rem 1rem' }}>Thời gian</th>
                <th style={{ padding: '0.75rem 1rem' }}>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((act) => (
                <tr key={act.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>{act.user}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{act.action}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{act.time}</td>
                  <td style={{ padding: '1rem' }}>
                    <Badge variant={act.status as any}>Hoàn thành</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Demo Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Tạo mới dữ liệu"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Hủy bỏ
            </Button>
            <Button
              onClick={() => {
                alert(`Đã lưu: ${itemName || 'Mục mẫu'}`)
                setIsModalOpen(false)
                setItemName('')
              }}
            >
              Lưu thay đổi
            </Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input
            label="Tên tiêu đề"
            placeholder="Nhập tên tiêu đề..."
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Đây là component Modal tái sử dụng có sẵn trong bộ starter kit.
          </p>
        </div>
      </Modal>
    </div>
  )
}
