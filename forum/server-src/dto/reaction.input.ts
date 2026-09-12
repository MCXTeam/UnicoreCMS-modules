import { IsDefined, IsIn, IsString } from 'class-validator'
import { REACTION_IDS } from '../../shared/constants'

export class ReactionInput {
  @IsDefined()
  @IsString()
  @IsIn(REACTION_IDS)
  kind: string
}
