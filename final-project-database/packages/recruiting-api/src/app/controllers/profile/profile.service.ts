import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, IResponse, Profile, ProfileDto } from '@recruiting/models';
import { Repository } from 'typeorm';
import { EducationService } from './education/education.service';
import { WorkExperienceService } from './work-experience/work-experience.service';
import { CoursesService } from './courses/courses.service';
import { TechnologiesService } from './technologies/technologies.service';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
    private readonly workExperienceService: WorkExperienceService,
    private readonly educationService: EducationService,
    private readonly courseService: CoursesService,
    private readonly techService: TechnologiesService
  ) {}

  async create(createProfileDto: ProfileDto): Promise<IResponse<Profile>> {
    const profile = new Profile();
    const user = await this.usersRepository.findOne({
      where: { email: createProfileDto.email },
      relations: { profile: true },
    });

    // If profile already exists then it updates, otherwise creates new profile
    if (user.profile !== null) {
      const updated_profile = await this.profileRepository.update(
        user.profile.id,
        {
          years_experience: createProfileDto.years_experience,
        }
      );

      if (
        createProfileDto.work_experience &&
        createProfileDto.work_experience.length > 0
      ) {
        await this.workExperienceService.create(
          createProfileDto.work_experience,
          user.profile.id
        );
      }

      if (
        createProfileDto.technologies &&
        createProfileDto.technologies.length > 0
      ) {
        await this.techService.create(
          createProfileDto.technologies,
          user.profile.id
        );
      }

      if (createProfileDto.courses && createProfileDto.courses.length > 0) {
        await this.courseService.create(
          createProfileDto.courses,
          user.profile.id
        );
      }

      if (createProfileDto.education && createProfileDto.education.length > 0) {
        await this.educationService.create(
          createProfileDto.education,
          user.profile.id
        );
      }

      return {
        status: 201,
        msg: 'Profile updated successfully',
        payload: updated_profile.raw,
      };
    }
    profile.user = user;
    profile.years_experience = createProfileDto.years_experience;
    const savedProfile = await this.profileRepository.save(profile);
    if (
      createProfileDto.work_experience &&
      createProfileDto.work_experience.length > 0
    ) {
      await this.workExperienceService.create(
        createProfileDto.work_experience,
        savedProfile.id
      );
    }

    if (
      createProfileDto.technologies &&
      createProfileDto.technologies.length > 0
    ) {
      await this.techService.create(
        createProfileDto.technologies,
        user.profile.id
      );
    }

    if (createProfileDto.education && createProfileDto.education.length > 0) {
      await this.educationService.create(
        createProfileDto.education,
        user.profile.id
      );
    }

    return {
      msg: 'Profile Saved successfully',
      status: 201,
      payload: savedProfile,
    };
  }

  async findOne(id: number): Promise<IResponse<Profile>> {
    const profile = await this.profileRepository.findOne({
      where: { id: id },
      relations: { work_experience: true, education: true, technologies: true },
    });

    if (!profile) {
      return {
        status: 404,
        msg: 'Profile not found',
        payload: profile,
      };
    }
    return {
      status: 200,
      msg: 'Profile Found',
      payload: profile,
    };
  }

  async remove(id: number): Promise<IResponse<any>> {
    const profile = await this.profileRepository.findOne({ where: { id: id } });

    if (!profile) {
      return {
        status: 501,
        msg: 'Could not find a profile to delete',
        payload: null,
      };
    }

    await this.profileRepository.delete(profile.id);

    return {
      status: 200,
      msg: 'Profile deleted successfully!',
      payload: null,
    };
  }
}
