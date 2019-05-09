import { Controller, Get, Post, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/items')
export class ItemsController {

    // get all items
    @Get('')
    @UseGuards(AuthGuard())
    logout(@Res() res: Response) {
        res.status(HttpStatus.OK).json({
            result : [
                {
                    title : 'Item 1',
                    description : 'Description 1',
                    id : 1,
                },
                {
                    title : 'Item 2',
                    description : 'Description 2',
                    id : 2,
                },
            ],
        });
    }
}
