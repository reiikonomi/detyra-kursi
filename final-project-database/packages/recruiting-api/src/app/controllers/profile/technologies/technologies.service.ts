import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IResponse, Tecchnologies, TechDto } from '@recruiting/models';
import { Repository } from 'typeorm';
import { ProfileService } from '../profile.service';

@Injectable()
export class TechnologiesService {
  constructor(
    @InjectRepository(Tecchnologies) private readonly techRepositry: Repository<Tecchnologies>,
    @Inject(forwardRef(() => ProfileService)) private readonly profileService: ProfileService
    ) {}


  async create(techDto: TechDto[], profileId: number) {

    const profile = (await this.profileService.findOne(profileId)).payload

    if(techDto.length > 0){
      techDto.map(async (x) => {
        const tech = new Tecchnologies();

        tech.technology = x.technology
        tech.profiles = profile

        return await this.techRepositry.save(tech)
      })
    }
  }

  async findAll():Promise<IResponse<Tecchnologies[]>> {
    
    const technologies = await this.techRepositry.find({relations: {profiles: true}})
    
    return {
      status: 200,
      msg: "Found all technologies",
      payload: technologies
    };
  }

  async findOne(techno: string): Promise<IResponse<Tecchnologies>> {
    
    const tech = await this.techRepositry.findOne({where: {technology: techno}, relations: {profiles: true}});

    return {
      status: 200,
      msg: "Technology found",
      payload: tech
    };
  }

  remove(id: number) {
    return `This action removes a #${id} technology`;
  }
}


