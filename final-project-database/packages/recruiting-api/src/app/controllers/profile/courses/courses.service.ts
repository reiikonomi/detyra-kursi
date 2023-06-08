import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course, CourseDto, IResponse } from '@recruiting/models';
import { Repository } from 'typeorm';
import { ProfileService } from '../profile.service';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @Inject(forwardRef(() => ProfileService))
    private readonly profileService: ProfileService
  ) {}

  async create(courseDto: CourseDto[], profileId: number) {
    const profile = (await this.profileService.findOne(profileId)).payload;

    if (courseDto.length > 0) {
      courseDto.map(async (x) => {
        const course = new Course();

        course.course_description = x.course_description;
        course.course_end_date = x.course_end_date;
        course.course_issuer = x.course_issuer;
        course.course_name = x.course_name;
        course.course_start_date = x.course_start_date;
        course.course_subject = x.course_subject;
        course.is_attending = x.is_attending;
        course.profile = profile;

        return await this.courseRepository.save(course);
      });
    }
  }

  async findAll(): Promise<IResponse<Course[]>> {
    const courses = await this.courseRepository.find({
      relations: { profile: true },
    });

    return {
      status: 200,
      msg: 'Found all courses',
      payload: courses,
    };
  }

  async findOne(id: number): Promise<IResponse<Course>> {
    const course = await this.courseRepository.findOne({
      where: { id: id },
      relations: { profile: true },
    });

    return {
      status: 200,
      msg: `Course with id ${id} found`,
      payload: course,
    };
  }

  async update(id: number, courseDto: CourseDto): Promise<IResponse<unknown>> {
    const updatedCourse = await this.courseRepository.update(id, {
      course_description: courseDto.course_description,
      course_end_date: courseDto.course_end_date,
      course_issuer: courseDto.course_issuer,
      course_name: courseDto.course_name,
      course_start_date: courseDto.course_start_date,
      course_subject: courseDto.course_subject,
      is_attending: courseDto.is_attending,
    });

    return {
      status: 200,
      msg: 'Course updated successfully',
      payload: updatedCourse,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
