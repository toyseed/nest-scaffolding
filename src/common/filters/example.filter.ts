// nest g f common/filters/example
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class ExampleFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
