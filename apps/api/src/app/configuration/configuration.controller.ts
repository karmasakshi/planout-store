
import { Controller, Get, Param } from '@nestjs/common';
import { Configuration } from '@planout-store/api-interfaces';
import { ConfigurationService } from './configuration.service';

@Controller('configuration')
export class ConfigurationController {

  constructor(private readonly configurationService: ConfigurationService) { }

  @Get(':id')
  findOne(@Param() params): Configuration {
    return this.configurationService.get(params.id);
  }

}