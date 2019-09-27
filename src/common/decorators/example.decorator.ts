// nest g d common/decorators/example

import { ReflectMetadata } from '@nestjs/common';

export const Example = (...args: string[]) => ReflectMetadata('example', args);
