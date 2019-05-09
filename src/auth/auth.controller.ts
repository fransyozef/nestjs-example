import { Controller, Get, Post, Res, HttpStatus, UseGuards , Param, Req , Body } from '@nestjs/common';
import { Response , Request } from 'express';
import { Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/auth')
export class AuthController {

    private fullName: string    = 'John Doe';
    private email: string    = 'john@doe.com';

    @Get('validate-token')
    @UseGuards(AuthGuard())
    validateToken(@Res() res: Response) {
        res.status(HttpStatus.OK).json({
            user : {
                fullname : this.fullName,
                email : this.email,
                username : this.email,
            },
        });
    }

    @Get('logout')
    logout(@Res() res: Response) {
        res.status(HttpStatus.OK).json({
            success : true,
        });
    }

    @Post('login')
    login(@Res() res: Response , @Body() body) {
        // Logger.log('api/auth/login/');
        // Logger.log(body);
        res.status(HttpStatus.OK).json({
            token : 'token_' + this.makeid(),
            user : {
                fullname : this.fullName,
                email : this.email,
                username : body.username,
            },
        });
    }

    private makeid(): string {
        let  text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 25; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

}
