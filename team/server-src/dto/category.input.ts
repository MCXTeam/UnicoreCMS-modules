import { Type } from 'class-transformer'
import { IsBoolean, IsDefined, IsInt, IsOptional, IsString, MaxLength, Min, MinLength, ValidateNested } from 'class-validator'

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

export class MemberCategoryInput {
  @IsDefined()
  @IsInt()
  @Min(0)
  categoryId: number

  @IsOptional()
  @IsInt()
  @Min(0)
  sortIndex?: number
}

export class MemberCategoriesInput {
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => MemberCategoryInput)
  categories: MemberCategoryInput[]

  @IsOptional()
  @IsBoolean()
  global?: boolean

  @IsOptional()
  @IsInt()
  @Min(0)
  globalIndex?: number
}
