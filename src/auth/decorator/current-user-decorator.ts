import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserPayload } from 'src/auth/strategy/jwt.stategy';

export const CurrentUser = createParamDecorator(
  (_: never, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();


    return request.user as UserPayload;
  }
);