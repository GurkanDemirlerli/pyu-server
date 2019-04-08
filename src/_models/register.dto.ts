import { IsString, IsEmail, Length } from 'class-validator';

export class RegisterDto {

    @Length(2, 20)
    public name: string;

    @Length(2, 20)
    public surname: string;

    @Length(5, 20)
    public username: string;

    @IsEmail()
    public email: string;

    @IsString()
    public password: string;

    public createdAt: Date;
}