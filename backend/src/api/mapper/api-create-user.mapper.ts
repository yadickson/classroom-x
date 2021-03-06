import { CreateUserModel } from "src/domain/model/create-user.model";
import { CreateUserRequestDto } from 'src/api/model/create-user-request.dto';
import { Injectable } from "@nestjs/common";
import { RoleEnum } from "src/domain/model/role.enum";

@Injectable()
export class ApiCreateUserMapper {

    fromDtoToModel(dto: CreateUserRequestDto, role: RoleEnum): CreateUserModel {
        const { username, name, email, password } = dto
        const model: CreateUserModel = { username: username, name: name, email: email, password: password, role: role }
        return model
    }

}