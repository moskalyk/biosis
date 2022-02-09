// gc 
// hedenu
// ritual

// Using a CLI upload an NFT address as your graffiti to a node representing Beacon Space, probably a polygon NFT
const fs = require('fs');
const yaml = require('js-yaml');
const { program } = require('commander')
var cron = require('node-cron');	


function chronRunner(){
	cron.schedule('1 * * * *', () => {
	// cron.schedule('26 10 * * *', () => {
	  	console.log('running a task every minute');

		let data = { 
			graffiti: 'Qzmm'
		};

		let yamlStr = yaml.dump(data);
		fs.writeFileSync('../config/graffiti.yaml', yamlStr, 'utf8');
	});
}


function uploadGraffiti(CID){
	let data = { 
		graffiti: CID
	};

	let yamlStr = yaml.dump(data);
	fs.writeFileSync('../config/graffiti.yaml', yamlStr, 'utf8');
}

program
    .command('spray')
    .description('Graft NFTs as public graffitis')
    // .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action(uploadGraffiti)


    .command('scry')
    .description('Read from oracle cards or cognitioner')
    // .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action(chronRunner)

// Chron job that runs every so often and 
// 1. pulls bio data from blueberry database, Representing Local Space health. Future, replace with fluence networking and local db? Free. 
// 	  Local Scope: Upload to a hyper instance, and only post hyper:// as the graffiti post
// 2. pulls the head of a tarot spread and uses as graffiti Representing Global Space archetypes, uploaded to IPFS paid in polygon

// side note, can you hack a tesla to run a blockchain validator? can the OS run docker or something?

