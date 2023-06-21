import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';

//Makes all fields not required
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
