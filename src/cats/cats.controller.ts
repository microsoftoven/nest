import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { ControllerGuard } from 'src/common/guards/controller.guard';
import { RouteGuard } from 'src/common/guards/route.guard';
import { ControllerInterceptor } from 'src/common/interceptors/controller.interceptor';
import { RouteInterceptor } from 'src/common/interceptors/route.interceptor';
import { ControllerPipe } from 'src/common/pipes/controller.pipe';
import { RouteParamPipe } from 'src/common/pipes/route-param.pipe';
import { RoutePipe } from 'src/common/pipes/route.pipe';
import { CatsService } from './cats.service';

@UseGuards(ControllerGuard)
@UseInterceptors(ControllerInterceptor)
@UsePipes(ControllerPipe)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @UseGuards(RouteGuard)
  @UseInterceptors(RouteInterceptor)
  @UsePipes(RoutePipe)
  @Get(':id')
  findOne(@Param('id', RouteParamPipe) id: string) {
    console.log('Controller method handler');

    // Global exception filter example:
    // throw new BadRequestException('Something bad');

    return this.catsService.findOne(id);
  }
}
