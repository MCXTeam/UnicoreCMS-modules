export const NODE_SLUG_MAX_LENGTH = 64
export const NODE_TITLE_MAX_LENGTH = 120
export const NODE_DESCRIPTION_MAX_LENGTH = 500
export const NODE_ICON_MAX_LENGTH = 64
export const NODE_DEPTH_MAX = 6

export const TOPIC_TITLE_MIN_LENGTH = 3
export const TOPIC_TITLE_MAX_LENGTH = 160
export const POST_CONTENT_MIN_LENGTH = 2
export const POST_CONTENT_MAX_LENGTH = 60000

export const TOPICS_PER_PAGE = 20
export const POSTS_PER_PAGE = 15
export const LATEST_TOPICS_LIMIT = 5
export const LEADERS_LIMIT = 5
export const SEARCH_MIN_LENGTH = 3
export const SEARCH_LIMIT = 25

export const UPLOAD_MAX_MEGABYTES = 4
export const UPLOADS_PER_HOUR = 30

export const PERMISSION_READ = 'mod.forum.read'
export const PERMISSION_WRITE = 'mod.forum.write'
export const PERMISSION_MODERATE = 'mod.forum.moderate'
export const PERMISSION_MANAGE = 'mod.forum.manage'

export const CATEGORY = 'forum'

export const SANITIZE_DENY_ATTRIBUTES = ['style', 'id']

export const REACTIONS: { id: string; icon: string }[] = [
  { id: 'like', icon: 'thumbs-up' },
  { id: 'heart', icon: 'red-heart' },
  { id: 'laugh', icon: 'face-with-tears-of-joy' },
  { id: 'wow', icon: 'astonished-face' },
  { id: 'sad', icon: 'crying-face' },
  { id: 'fire', icon: 'fire' },
  { id: 'party', icon: 'party-popper' },
  { id: 'dislike', icon: 'thumbs-down' },
]

export const REACTION_IDS = REACTIONS.map((reaction) => reaction.id)

export const REACTION_ID_MAX_LENGTH = 16
