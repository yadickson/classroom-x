import { Body, Controller, Logger, Post, UseGuards } from '@nestjs/common';
import { CreateUserRequestDto } from 'src/api/model/create-user-request.dto';
import { LoginResponseDto } from '../model/login-response.dto';
import { ResetPasswordRequestDto } from 'src/api/model/reset-password-request.dto';
import { LoginCredentialsRequestDto } from '../model/login-credentials-request.dto';
import { ApiSignInService } from 'src/api/service/api-sign-in.service';
import { ApiSignUpService } from 'src/api/service/api-sign-up.service';
import { RoleEnum } from 'src/domain/model/role.enum';
import { ApiResetPasswordService } from 'src/api/service/api-reset-password.service';
import { GetUserId } from 'src/api/decorator/get-user-id.decorator';
import { Status } from '../decorator/status.decorator';
import { StatusGuard } from '../guard/status.guard';
import { StatusEnum } from 'src/domain/model/status.enum';
import { JwtGuard } from '../guard/jwt.guard';

@Controller('auth')
export class AuthController {

    private logger = new Logger('AuthController')

    constructor(
        private readonly apiSignUpService: ApiSignUpService,
        private readonly apiSignInService: ApiSignInService,
        private readonly apiResetPasswordService: ApiResetPasswordService
    ) { }

    @Post('signup/teacher')
    async signUpTeacher(@Body() request: CreateUserRequestDto): Promise<void> {
        this.logger.log(`Register a teacher ${request.username}`)
        return await this.apiSignUpService.execute(request, RoleEnum.TEACHER)
    }

    @Post('signup/student')
    async signUpStudent(@Body() request: CreateUserRequestDto): Promise<void> {
        this.logger.log(`Register a student ${request.username}`)
        return await this.apiSignUpService.execute(request, RoleEnum.STUDENT)
    }

    @Post('signin')
    async signIn(@Body() request: LoginCredentialsRequestDto): Promise<LoginResponseDto> {
        this.logger.debug(`Sign in the user ${request.username}`)
        return await this.apiSignInService.execute(request)
    }

    @UseGuards(JwtGuard, StatusGuard)
    @Status(StatusEnum.EXPIRED)
    @Post('reset')
    async reset(@GetUserId() userId: string, @Body() request: ResetPasswordRequestDto): Promise<void> {
        this.logger.log(`Reset passsword the userId ${userId}`)
        return await this.apiResetPasswordService.execute(request, userId)
    }

    @UseGuards(JwtGuard, StatusGuard)
    @Status(StatusEnum.ACTIVE)
    @Post('signout')
    async signOut(@GetUserId() userId: string) : Promise<void>{
        this.logger.log(`Sign out the userId ${userId}`)
    }
}
