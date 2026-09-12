import React, { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Search, RefreshCw, AlertCircle, FileText } from 'lucide-react'
import { apiClient } from '@/services/api'
import { Card, Input, Button, Badge } from '@/components/common'
import { useDebounce } from '@/hooks'
import type { Post } from '@/types'

const fetchPosts = async (): Promise<Post[]> => {
  const response = await apiClient.get<Post[]>('/posts')
  return response.data.slice(0, 15) // Lấy 15 bài mẫu
}

export const PostsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 300)

  const { data: posts, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // 5 phút cache
  })

  const filteredPosts = useMemo(() => {
    if (!posts) return []
    return posts.filter((p) =>
      p.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      p.body.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
  }, [posts, debouncedSearch])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Danh sách Posts & TanStack Query Demo</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Ví dụ gọi API thực tế qua Axios + TanStack Query (caching, loading state, debounce filter).
          </p>
        </div>
        <Button variant="outline" size="sm" leftIcon={<RefreshCw size={14} />} onClick={() => refetch()} isLoading={isLoading}>
          Tải lại dữ liệu
        </Button>
      </div>

      {/* Filter / Search bar */}
      <Card style={{ padding: '1rem' }}>
        <Input
          placeholder="Tìm kiếm theo tiêu đề hoặc nội dung (useDebounce 300ms)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          leftIcon={<Search size={16} />}
        />
      </Card>

      {/* Loading state */}
      {isLoading && (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>Đang tải dữ liệu từ API...</div>
        </div>
      )}

      {/* Error state */}
      {isError && (
        <Card style={{ borderColor: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--danger)' }}>
          <AlertCircle size={24} />
          <div>Lỗi khi tải dữ liệu: {(error as Error).message}</div>
        </Card>
      )}

      {/* Post cards list */}
      {!isLoading && !isError && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {filteredPosts.map((post) => (
            <Card key={post.id} hoverEffect style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Badge variant="info">Post #{post.id}</Badge>
                <FileText size={16} style={{ color: 'var(--text-muted)' }} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, textTransform: 'capitalize' }}>
                {post.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', flex: 1 }}>
                {post.body}
              </p>
            </Card>
          ))}
          {filteredPosts.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
              Không tìm thấy bài viết nào khớp với từ khóa "{debouncedSearch}"
            </div>
          )}
        </div>
      )}
    </div>
  )
}
