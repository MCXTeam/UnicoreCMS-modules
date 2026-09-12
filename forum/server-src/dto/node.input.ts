import { ArrayMaxSize, IsArray, IsBoolean, IsDefined, IsInt, IsOptional, IsString, Matches, MaxLength, Min } from 'class-validator'
import {
  NODE_DESCRIPTION_MAX_LENGTH,
  NODE_ICON_MAX_LENGTH,
  NODE_SLUG_MAX_LENGTH,
  NODE_TITLE_MAX_LENGTH,
} from '../../shared/constants'

const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/

const ROLES_MAX = 30

export class NodeInput {
  @IsDefined()
  @IsString()
  @MaxLength(NODE_SLUG_MAX_LENGTH)
  @Matches(SLUG_PATTERN)
  slug: string

  @IsDefined()
  @IsString()
  @MaxLength(NODE_TITLE_MAX_LENGTH)
  title: string

  @IsOptional()
  @IsString()
  @MaxLength(NODE_DESCRIPTION_MAX_LENGTH)
  description?: string

  @IsOptional()
  @IsString()
  @MaxLength(NODE_ICON_MAX_LENGTH)
  icon?: string

  @IsOptional()
  @IsInt()
  @Min(1)
  parent_id?: number

  @IsOptional()
  @IsInt()
  @Min(0)
  position?: number

  @IsOptional()
  @IsBoolean()
  locked?: boolean

  @IsOptional()
  @IsBoolean()
  hidden?: boolean

  @IsOptional()
  @IsString()
  @MaxLength(64)
  read_permission?: string

  @IsOptional()
  @IsString()
  @MaxLength(64)
  write_permission?: string

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(ROLES_MAX)
  @IsString({ each: true })
  moderator_roles?: string[]
}
