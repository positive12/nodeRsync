const { spawn, exec } = require('child_process');
const cron = require('node-cron');


const {
	CRON_SCHEDULE ="* * * * *",
	SOURCE_PATH = "/home/developer/Documents/23point5/",
  DEST_PATH = "/home/developer/Documents/test/",
}= process.env

const args = ['-avzr',  '--ignore-existing' , SOURCE_PATH , DEST_PATH, '--progress']

cron.schedule(CRON_SCHEDULE,() => {

  exec('webhook/pre-backup.sh',(err, stderr, stdout)=>{
    console.log(`rsync will be started later just wait a few second`);
    console.log(stdout)
  } );

	const command = spawn("rsync", args);
    command.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });
      command.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });
      command.on('close', (code) => {
        console.log(`ALL BACKUP send to HELL `);
      });

}, {
  scheduled: true,
  timezone: "Asia/Singapore"
});
