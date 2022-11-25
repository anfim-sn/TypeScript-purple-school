import {IStreamLogger} from '../handlers/stream-logger.interface.js'
import {ChildProcessWithoutNullStreams} from 'child_process'
import {ICommandExec} from './commant.types.js'

export abstract class CommandExecutor<Input> {
  constructor(private logger: IStreamLogger) {}

  public async execute() {
    const input = await this.prompt()
    const command = this.build(input);
    const stream = this.spawn(command)
    this.processStream(stream, this.logger)
  }
  protected abstract prompt(): Promise<Input>
  protected abstract build(input: Input): any
  protected abstract spawn(command: ICommandExec): ChildProcessWithoutNullStreams
  protected abstract processStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger): void
}