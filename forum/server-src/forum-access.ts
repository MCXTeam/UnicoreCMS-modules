import type { UserRecord } from 'unicore-api'
import { satisfiesPermission } from 'unicore-api/server'
import { PERMISSION_MANAGE, PERMISSION_MODERATE, PERMISSION_WRITE } from '../shared/constants'
import { ForumNode } from './entities/node.entity'

export interface Viewer {
  uuid: string | null
  perms: string[]
  roles: string[]
  superuser: boolean
}

export const GUEST: Viewer = { uuid: null, perms: [], roles: [], superuser: false }

export const viewerOf = (user: UserRecord | null): Viewer =>
  user
    ? { uuid: user.uuid, perms: user.perms || [], roles: user.roles || [], superuser: Boolean(user.superuser) }
    : GUEST

export const allows = (viewer: Viewer, permission?: string | null): boolean => {
  if (viewer.superuser) return true
  if (!permission) return true

  return satisfiesPermission(viewer.perms, permission)
}

export const manages = (viewer: Viewer): boolean => allows(viewer, PERMISSION_MANAGE)

export const moderatesEverything = (viewer: Viewer): boolean => manages(viewer) || allows(viewer, PERMISSION_MODERATE)

export const moderates = (viewer: Viewer, branch: ForumNode[]): boolean => {
  if (moderatesEverything(viewer)) return true
  if (!viewer.roles.length) return false

  return branch.some((node) => (node.moderator_roles || []).some((role) => viewer.roles.includes(role)))
}

export const reads = (viewer: Viewer, branch: ForumNode[]): boolean => {
  if (moderates(viewer, branch)) return true

  return branch.every((node) => !node.hidden && allows(viewer, node.read_permission))
}

export const writes = (viewer: Viewer, branch: ForumNode[]): boolean => {
  if (!viewer.uuid) return false
  if (moderates(viewer, branch)) return true
  if (!reads(viewer, branch)) return false
  if (branch.some((node) => node.locked)) return false
  if (!allows(viewer, PERMISSION_WRITE)) return false

  return branch.every((node) => allows(viewer, node.write_permission))
}
