import { IsBoolean, IsInt, IsOptional, IsString, MaxLength, Min, MinLength } from 'class-validator'
import { TOPIC_TITLE_MAX_LENGTH, TOPIC_TITLE_MIN_LENGTH } from '../../shared/constants'

export class TopicUpdateInput {
  @IsOptional()
  @IsString()
  @MinLength(TOPIC_TITLE_MIN_LENGTH)
  @MaxLength(TOPIC_TITLE_MAX_LENGTH)
  title?: string

  @IsOptional()
  @IsBoolean()
  pinned?: boolean

  @IsOptional()
  @IsBoolean()
  closed?: boolean

  @IsOptional()
  @IsInt()
  @Min(1)
  node_id?: number
}
