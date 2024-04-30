import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException, ValidationPipe } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class DtoValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      const errorMessage = errors.map(error => 
        Object.values(error.constraints).join(', ')
      ).join('. ');

      console.error('Validation failed: ', errorMessage);  // Log do erro
      throw new BadRequestException(`Validation failed: ${errorMessage}`);
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    // Tipos que não devem ser validados
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}