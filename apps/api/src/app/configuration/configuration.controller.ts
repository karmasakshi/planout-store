
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import type { Configuration, Param as P } from '@planout-store/api-interfaces';
import { ConfigurationService } from './configuration.service';

@Controller('configuration')
export class ConfigurationController {

  constructor(private readonly configurationService: ConfigurationService) { }

  @Get(':id')
  findOne(@Param() params): Configuration {
    return this.configurationService.get(params.id);
  }

  @Post()
  create(@Body() params: P[]) {
    return this.configurationService.set(params);
  }

}
