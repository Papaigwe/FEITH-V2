

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: igweTechInfo" //ur yt chanel name
global.socialm = "GitHub: papaigwe" //ur github or insta name
global.location = "Pakistan, Karachi, Karachi" //ur location

//new
global.botname = '© 𝐅𝐄𝐈𝐓𝐇-𝐕𝟐' //ur bot name
global.ownernumber = ['24160338758'] //ur owner number, dont add more than one
global.ownername = '© IGWETECHinc' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029Vak1chV4Y9lkl89DuD3j"
global.wagc = "https://whatsapp.com/channel/0029Vak1chV4Y9lkl89DuD3j"
global.themeemoji = '🤵🏽‍♂️'
global.wm = "Igwe Bot Inc."
global.botscript = 'https://github.com/papaigwe/FEITH-V2' //script link
global.packname = "réaliser par"
global.author = "PAPAIGWE🦄\n\n+24160338758"
global.creator = "24160338758@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["24160338758"] // Premium User

//channel id
global.xchannel = {
	jid: '120363319098372999@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '91' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['➜','☞','㉨','✪','✯','益','⊡','☆','ෆ','✎','⎆','⫹⫺','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆','֎','ᚏ','⸙','⧉']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
