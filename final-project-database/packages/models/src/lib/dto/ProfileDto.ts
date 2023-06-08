import { CourseDto } from './CourseDto';
import { IsString, IsNumber, IsDateString, IsBoolean, IsArray, IsOptional, IsEmail } from "class-validator"

export class ProfileDto {

    @IsNumber({})
    @IsOptional()
    years_experience?: number;

    @IsEmail({message: "Email not valid, or not provided"})
    email?: string;

    @IsArray()
    @IsOptional()
    technologies?: TechDto[];

    @IsArray()
    @IsOptional()
    courses?: CourseDto[];

    @IsArray()
    @IsOptional()
    work_experience?: WorkExperienceDto[];

    @IsArray()
    @IsOptional()
    education?: EducationDto[];
}


export class WorkExperienceDto {

    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;
 
    @IsDateString()
    @IsOptional()
    start_date?: Date;

    @IsDateString()
    @IsOptional()
    end_date?: Date;

    @IsString()
    @IsOptional()
    employment_type?: string;

    @IsBoolean()
    @IsOptional()
    is_employed?: boolean;

    @IsArray()
    @IsOptional()
    related_skills?: string[];
}



export class EducationDto {
    
    @IsString()
    @IsOptional()
    education_institution?: string;

    @IsString()
    @IsOptional()
    education_level?: string;

    @IsBoolean()
    @IsOptional()
    is_attending?: boolean;

}

export class TechDto {

    @IsString()
    @IsOptional()
    technology?: string;

}