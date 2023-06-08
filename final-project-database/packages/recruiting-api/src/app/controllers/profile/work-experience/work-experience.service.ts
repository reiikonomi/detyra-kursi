import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Experience, IResponse, WorkExperienceDto } from '@recruiting/models';
import { Repository } from 'typeorm';
import { ProfileService } from '../profile.service';
@Injectable()
export class WorkExperienceService {
  constructor(@InjectRepository(Experience) private readonly experienceRepository: Repository<Experience>,@Inject(forwardRef(() => ProfileService)) private readonly profileService: ProfileService){}
  
  
  async create(experienceDto: WorkExperienceDto[], profileId: number) {

    const profile = (await this.profileService.findOne(profileId)).payload

    if(experienceDto.length > 0) {
      experienceDto.map(async (x) => {
        const experience = new Experience()
          experience.description = x.description;
          experience.end_date = x.end_date; 
          experience.is_employed = x.is_employed;
          experience.title = x.title;
          experience.start_date = x.start_date;
          // TODO: Fix this to accept array as related skills
          //experience.related_skills = x.related_skills;
          experience.profile = profile
          
          return await this.experienceRepository.save(experience);
        
      })
    }
  }

  async findAll(): Promise<IResponse<Experience[]>> {
    const experiences = await this.experienceRepository.find({relations: {profile: true}});

    return {
      msg: "All Experiences",
      status: 200,
      payload: experiences
    }
  }

  async findOne(id: number): Promise<IResponse<Experience>> {
    
    const experience = await this.experienceRepository.findOne({where: {id: id}, relations: {profile: true}})
    
    return {
      msg: `Experience with id: ${id} found`,
      status: 200,
      payload: experience
    };
  }

  async update(id: number, experienceDto: WorkExperienceDto): Promise<IResponse<unknown>> {

    const updatedExperience = await this.experienceRepository.update(id, {
      description: experienceDto.description,
      end_date: experienceDto.end_date,
      is_employed: experienceDto.is_employed,
      // TODO: Make this accept an array of skills instead
      // related_skills: experienceDto.related_skills,
      start_date: experienceDto.start_date,
      title: experienceDto.title
    })

    return {
      status: 200,
      msg: 'Experience updated successfully',
      payload: updatedExperience
    }
  }

  async remove(id: number) {
    return `This action removes a #${id} workExperience`;
  }
}
