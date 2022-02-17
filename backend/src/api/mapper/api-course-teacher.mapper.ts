import { CourseTeacherDto } from "../model/course-teacher.dto";
import { CourseTeacherModel } from "src/domain/model/course-teacher.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCourseTeacherMapper {

    fromModelToDto(courseTeacher: CourseTeacherModel): CourseTeacherDto {
        const { id, course } = courseTeacher
        const dto: CourseTeacherDto = { id: id, name: course.name }
        return dto
    }

}