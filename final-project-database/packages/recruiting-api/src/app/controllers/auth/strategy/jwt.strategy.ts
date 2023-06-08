import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IResponse, User } from '@recruiting/models';
import { AuthService } from '../auth.service';
import { UsersService } from '../../users/users.service';
import { ILogin } from '@recruiting/models';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private userservice: UsersService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      //   secretOrKey: `${process.env.PRIVATE_KEY.replace(/\\\\n/gm, '\\n')}`,
      secretOrKey: `wowSoSecret`,
    });
  }

  /**
   * @description Validate the token and return the user
   * @param payload string
   * @returns User
   */
  async validate(payload: ILogin): Promise<IResponse<User>> {
    // Accept the JWT and attempt to validate it using the user service
    const user = await this.userservice.findOne(payload.email);

    // If the user is not found, throw an error
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }

    // If the user is found, return the user
    return user;
  }
}
