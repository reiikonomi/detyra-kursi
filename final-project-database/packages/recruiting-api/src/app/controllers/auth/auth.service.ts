import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { UserDto } from '@recruiting/models';
import { validate } from 'class-validator';
import { LoggerService } from '../../logger/logger.service';
import { UsersService } from '../users/users.service';
import { ILogin, IRegister } from '@recruiting/models';

@Injectable()
export class AuthService {
  constructor(
    private readonly logger: LoggerService = new Logger(AuthService.name),
    private jwtService: JwtService,
    private userservice: UsersService
  ) {}

  async login(user: ILogin) {
    // Validation Flag
    let isOk = false;

    // Transform body into DTO
    const userDTO = new UserDto();
    userDTO.email = user.email;
    userDTO.password = user.password;

    // TODO: Refactor this section with try catch block and return error message in the catch block
    // Validate DTO against validate function from class-validator
    await validate(userDTO).then((errors) => {
      if (errors.length > 0) {
        this.logger.debug(`${errors}`);
      } else {
        isOk = true;
      }
    });

    if (isOk) {
      // Get user information
      const userDetails = await this.userservice.findOne(user.email);

      // Check if user exists
      if (userDetails.payload == null) {
        return { status: 401, msg: { msg: 'Invalid credentials' } };
      }

      // Check if the given password match with saved password
      const isValid = bcryptjs.compareSync(
        user.password,
        userDetails.payload.password
      );
      if (isValid) {
        // Generate JWT token
        return {
          status: 200,
          msg: {
            email: user.email,
            access_token: this.jwtService.sign({ email: user.email }),
          },
        };
      } else {
        // Password or email does not match
        return { status: 401, msg: { msg: 'Invalid credentials' } };
      }
    } else {
      return { status: 400, msg: { msg: 'Invalid fields.' } };
    }
  }

  async register(body: IRegister) {
    // Validation Flag
    let isOk = false;

    // Transform body into DTO
    const userDTO = new UserDto();
    userDTO.email = body.email;
    userDTO.first_name = body.name;
    userDTO.password = bcryptjs.hashSync(body.password, 10);

    // Validate DTO against validate function from class-validator
    await validate(userDTO).then((errors) => {
      if (errors.length > 0) {
        this.logger.debug(`${errors}`);
      } else {
        isOk = true;
      }
    });
    if (isOk) {
      await this.userservice.create(userDTO).catch((error) => {
        this.logger.debug(error.message);
        isOk = false;
      });
      if (isOk) {
        return { status: 201, content: { msg: 'User created with success' } };
      } else {
        return { status: 400, content: { msg: 'User already exists' } };
      }
    } else {
      return { status: 400, content: { msg: 'Invalid content' } };
    }
  }
}
