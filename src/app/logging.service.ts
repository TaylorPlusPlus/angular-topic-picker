export class Logging
{
  logStatus(accountStatus : string)
  {
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
