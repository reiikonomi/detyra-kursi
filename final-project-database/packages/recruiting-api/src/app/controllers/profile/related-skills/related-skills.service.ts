import { Injectable } from '@nestjs/common';

@Injectable()
export class RelatedSkillsService {
  create() {
    return 'This action adds a new relatedSkill';
  }

  findAll() {
    return `This action returns all relatedSkills`;
  }

  findOne(id: number) {
    return `This action returns a #${id} relatedSkill`;
  }

  update(id: number) {
    return `This action updates a #${id} relatedSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} relatedSkill`;
  }
}
