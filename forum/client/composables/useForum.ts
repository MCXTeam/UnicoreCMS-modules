export const useForum = () => {
  const { $api } = useNuxtApp() as any

  const personal = <T>(key: string, loader: () => Promise<T>) =>
    useAsyncData<T>(key, loader, { getCachedData: () => undefined })

  const get = (path: string, params: Record<string, unknown> = {}) => $api.get(path, { params }).then((res: any) => res.data)

  return {
    index: () => personal<any>('mod-forum-index', () => get('/mod/forum')),
    fetchIndex: () => get('/mod/forum'),
    node: (slug: string, params: Record<string, unknown>) =>
      personal<any>(`mod-forum-node-${slug}`, () => get(`/mod/forum/nodes/${slug}`, params)),
    topic: (id: string | number, params: Record<string, unknown>) =>
      personal<any>(`mod-forum-topic-${id}`, () => get(`/mod/forum/topics/${id}`, params)),
    fetchNode: (slug: string, params: Record<string, unknown>) => get(`/mod/forum/nodes/${slug}`, params),
    fetchTopic: (id: string | number, params: Record<string, unknown>) => get(`/mod/forum/topics/${id}`, params),
    search: (q: string) => get('/mod/forum/search', { q }),
    createTopic: (slug: string, body: Record<string, unknown>) =>
      $api.post(`/mod/forum/nodes/${slug}/topics`, body).then((res: any) => res.data),
    reply: (id: string | number, body: Record<string, unknown>) =>
      $api.post(`/mod/forum/topics/${id}/posts`, body).then((res: any) => res.data),
    editPost: (id: number, body: Record<string, unknown>) => $api.patch(`/mod/forum/posts/${id}`, body).then((res: any) => res.data),
    removePost: (id: number) => $api.delete(`/mod/forum/posts/${id}`).then((res: any) => res.data),
    react: (id: number, kind: string) => $api.post(`/mod/forum/posts/${id}/reactions`, { kind }).then((res: any) => res.data),
    updateTopic: (id: string | number, body: Record<string, unknown>) =>
      $api.patch(`/mod/forum/topics/${id}`, body).then((res: any) => res.data),
    removeTopic: (id: string | number) => $api.delete(`/mod/forum/topics/${id}`).then((res: any) => res.data),
    markAllRead: () => $api.post('/mod/forum/read-all').then((res: any) => res.data),
    upload: (file: File) => {
      const payload = new FormData()

      payload.append('file', file)

      return $api
        .post('/mod/forum/upload', payload, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((res: any) => res.data.url as string)
    },
  }
}
