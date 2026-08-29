import { IsDefined, IsInt, IsOptional, IsString, MaxLength, Min, MinLength } from 'class-validator'

export class CategoryInput {
  @IsDefined()
  @IsString()
  @MinLength(1)
  @MaxLength(120)
  name: string

  @IsOptional()
  @IsInt()
  @Min(0)
  position?: number
}

export class MemberCategoriesInput {
  @IsDefined()
  @IsInt({ each: true })
  categories: number[]
}
