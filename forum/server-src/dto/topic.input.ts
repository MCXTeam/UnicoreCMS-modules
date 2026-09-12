import { IsDefined, IsString, MaxLength, MinLength } from 'class-validator'
import { SanitizeHtml } from 'unicore-api/server'
import {
  POST_CONTENT_MAX_LENGTH,
  POST_CONTENT_MIN_LENGTH,
  SANITIZE_DENY_ATTRIBUTES,
  TOPIC_TITLE_MAX_LENGTH,
  TOPIC_TITLE_MIN_LENGTH,
} from '../../shared/constants'

export class TopicInput {
  @IsDefined()
  @IsString()
  @MinLength(TOPIC_TITLE_MIN_LENGTH)
  @MaxLength(TOPIC_TITLE_MAX_LENGTH)
  title: string

  @SanitizeHtml({ denyAttributes: SANITIZE_DENY_ATTRIBUTES })
  @IsDefined()
  @IsString()
  @MinLength(POST_CONTENT_MIN_LENGTH)
  @MaxLength(POST_CONTENT_MAX_LENGTH)
  content: string
}
