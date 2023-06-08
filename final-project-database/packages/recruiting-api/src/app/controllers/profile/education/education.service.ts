import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Education, EducationDto, IResponse } from '@recruiting/models';
import { Repository } from 'typeorm';
import { ProfileService } from '../profile.service';
@Injectable()
export class EducationService {
  constructor(@InjectRepository(Education) private readonly educationRepository: Repository<Education>, @Inject(forwardRef(() => ProfileService)) private readonly profileService: ProfileService){}
  
  async create(educationDto: EducationDto[], profileId: number) {

    const profile = (await this.profileService.findOne(profileId)).payload
    if(educationDto.length > 0) {
      
      educationDto.map(async (x) => {
        const education = new Education();
        education.educatiion_institution = x.education_institution;
        education.education_level = x.education_level;
        education.is_attending = x.is_attending;
        education.profile = profile;

        return await this.educationRepository.save(education);
      })
    }
  }

  async findAll(): Promise<IResponse<Education[]>> {

    const educations = await this.educationRepository.find({relations: {profile: true}})

    return {
      status: 200,
      msg: "Found all educations",
      payload: educations
    }
  }

  async findOne(id: number): Promise<IResponse<Education>> {
    
    const education = await this.educationRepository.findOne({where: {id: id}});

    return {
      status: 200,
      msg: `Education with id ${id} found`,
      payload: education
    }
  }

  async update(id: number, edDto: EducationDto): Promise<IResponse<unknown>> {
    const updatedEducation = await this.educationRepository.update(id, {
      educatiion_institution: edDto.education_institution,
      education_level: edDto.education_level,
      is_attending: edDto.is_attending,
    })

    return {
      status: 200,
      msg: "Education updated succesfully",
      payload: updatedEducation,
    }
  }

  remove(id: number) {
    return `This action removes a #${id} education`;
  }
}
