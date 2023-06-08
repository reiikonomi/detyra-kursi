import { IsBoolean, IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class UserDto {

    @IsEmail()
    email?: string;

    @IsString()
    @IsOptional()
    first_name?: string;

    @IsString()
    @IsOptional()
    last_name?:string;

    @IsPhoneNumber()
    @IsOptional()
    phone_number?: string;

    @IsBoolean()
    @IsOptional()
    is_active?: boolean;

    @IsBoolean()
    @IsOptional()
    email_verified?: boolean;

    @IsBoolean()
    @IsOptional()
    last_seen_active?: boolean;

    @IsBoolean()
    @IsOptional()
    is_verified_developer?: boolean;

    @IsBoolean()
    @IsOptional()
    has_passed_first_check_dev?: boolean;

    @IsBoolean()
    @IsOptional()
    has_priority_dev?: boolean;

    @IsBoolean()
    @IsOptional()
    has_priority_company?: boolean;

    @IsString()
    password?: string;
}