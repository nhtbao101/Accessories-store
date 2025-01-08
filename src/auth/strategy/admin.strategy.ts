import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AdminEntity } from 'src/entities/admin.entity';
import { AdminService } from 'src/modules/admin/admin.service';

@Injectable()
export class AdminJWTStrategy extends PassportStrategy(Strategy, 'admin-jwt') {
  constructor(private adminService: AdminService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }
  async validate(payload: { email: string }): Promise<AdminEntity> {
    if (!payload.email) {
      throw new UnauthorizedException('Invalid payload: Missing email');
    }
    const admin = await this.adminService.getAdminById(payload.email);

    if (!admin) {
      throw new UnauthorizedException();
    }
    return admin;
  }
}
