
import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }

  async validate(token: string) {
    Logger.log(token);
    return token;
  }
}