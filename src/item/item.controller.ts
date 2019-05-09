import { Controller, Get, Post, Res, HttpStatus, UseGuards , Param, Req , Body , Put, Delete } from '@nestjs/common';
import { Response , Request } from 'express';
import { Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller('api/item')
export class ItemController {

    // add an item
    @Post('')
    @UseGuards(AuthGuard())
    add(@Res() res: Response , @Body() body) {
        Logger.log('add()');
        const bodyPosted    = body;
        const random    = (Math.floor(Math.random() * Math.floor(1000)) + 1);
        const newResult    = { ...bodyPosted , id: random};

        const bodyResponse = {
            success : bodyPosted ? true : false,
            result : newResult,
        };

        // Logger.log(bodyResponse);

        res.status(HttpStatus.OK).json(bodyResponse);
    }

    // update an item
    @Put(':id')
    @UseGuards(AuthGuard())
    update(@Res() res: Response , @Body() body) {
        Logger.log('update()');

        const bodyPosted    = body;

        const bodyResponse = {
            success : bodyPosted ? true : false,
            result : bodyPosted,
        };
        res.status(HttpStatus.OK).json(bodyResponse);
    }

    // delete an item
    @Delete(':id')
    @UseGuards(AuthGuard())
    delete(@Res() res: Response , @Body() body) {
        Logger.log('delete()');
        res.status(HttpStatus.OK).json({
            success : true,
        });
    }

}
