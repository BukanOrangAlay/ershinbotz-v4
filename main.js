//follow ya @m1n1.php5
const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./Arif.js')
nocache('../Arif.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (Arif = new WAConnection()) => {
	Arif.logger.level = 'warn'
	console.log(color(figlet.textSync('ArifGans', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('kalo mau pake pake aja jan lupa taroh credits title', 'yellow'))
	console.log(color('recode gpp asal tinggalin creator', 'yellow'))
	Arif.browserDescription = ["Ershinbot", "Chrome", "3.0.0"];

	// Menunggu QR
	Arif.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCAN KODE NYA WAKTU 20 DETIK!'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && Arif.loadAuthInfo(`./${setting.sessionName}.json`)
	Arif.on('connecting', () => {
		console.log(color('[ ArifGans ]', 'yellow'), color('PROSES NYAMBUNG...'));
	})

	//connect
	Arif.on('open', () => {
		console.log(color('[HC]', 'white'), color('DAH CONNECT NOH TINGGAL PAKE'));
	})

	// session
	await Arif.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(Arif.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	Arif.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	Arif.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	Arif.on('group-participants-update', async (anu) => {
		await welcome(Arif, anu)
	})

	Arif.on('chat-update', async (message) => {
		require('./Arif.js')(Arif, message)
	})
}

starts()