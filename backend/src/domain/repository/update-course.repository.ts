import { CourseModel } from 'src/domain/model/course.model';

export abstract class UpdateCourseRepository {
    abstract updateCourse(request: CourseModel, userId: string): Promise<CourseModel>
}