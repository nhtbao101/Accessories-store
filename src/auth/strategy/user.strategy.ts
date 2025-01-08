import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserEntity } from 'src/entities/user.entity';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class UserJWTStrategy extends PassportStrategy(Strategy, 'user-jwt') {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }
  async validate(payload: { id: number }): Promise<UserEntity> {
    console.log('payload', payload);
    const user = await this.userService.getUser(payload.id);

    console.log('user', user);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
