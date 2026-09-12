import { IsDefined, IsInt, IsOptional, IsString, MaxLength, Min, MinLength } from 'class-validator'
import { SanitizeHtml } from 'unicore-api/server'
import { POST_CONTENT_MAX_LENGTH, POST_CONTENT_MIN_LENGTH, SANITIZE_DENY_ATTRIBUTES } from '../../shared/constants'

export class PostInput {
  @SanitizeHtml({ denyAttributes: SANITIZE_DENY_ATTRIBUTES })
  @IsDefined()
  @IsString()
  @MinLength(POST_CONTENT_MIN_LENGTH)
  @MaxLength(POST_CONTENT_MAX_LENGTH)
  content: string

  @IsOptional()
  @IsInt()
  @Min(1)
  reply_to_id?: number
}
