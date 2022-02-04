//UDAH GUA KASIH NO ENC NI;)
//KEBANGETAN KALO BELUM SUBSCRIBE
//HAYO LAH KAWAN MANA HATI KALIAN;)
//Subscribe "Ramdani Official"
//Hargai Bang;(
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
require('./Ramdani.js')
nocache('../Ramdani.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (Ramdani = new WAConnection()) => {
	Ramdani.logger.level = 'warn'
	console.log(color(figlet.textSync('Ramdani', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[SELAMAT TAHUN BARU 2022]', 'yellow'), color('\nSUPORT TERUS RAMDANI OFC', 'yellow'))
	console.log(color('SC INI GRATIS YA BAYAR PAKE SUBSCRIBER', 'yellow'))
	console.log(color('SEMANGAT RECODE', 'yellow'))
	Ramdani.browserDescription = ["Ershinbot", "Chrome", "3.0.0"];

	// Menunggu QR
	Ramdani.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCAN KODE NYA WAKTU 20 DETIK!'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && Ramdani.loadAuthInfo(`./${setting.sessionName}.json`)
	Ramdani.on('connecting', () => {
		console.log(color('[ Ramdani Official ]', 'yellow'), color('PROSES NYAMBUNG...'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "R",
    "RA",
    "RAM",
    "RAMDA",
    "RAMDAN",
    "Ramdani",
    "Ramdani J",
    "Ramdani JE",
    "Ramdani JEL",
    "Ramdani JELE",
    "Ramdani JELEK",
    "Ramdani JELEK T",
    "Ramdani JELEK TA",
    "Ramdani JELEK TAP",
    "Ramdani JELEK TAPI",
    "Ramdani JELEK TAPI B",
    "Ramdani JELEK TAPI BO",
    "Ramdani JELEK TAPI BOO",
    "Ramdani JELEK TAPI BOON",
    "Ramdani JELEK TAPI BOONG",
    "Ramdani JELEK TAPI BOONG A",
    "Ramdani JELEK TAPI BOONG AW",
    "Ramdani JELEK TAPI BOONG AWK",
    "Ramdani JELEK TAPI BOONG AWKO",
    "Ramdani JELEK TAPI BOONG AWKOW",
    "Ramdani JELEK TAPI BOONG AWKOWK",
    "Ramdani JELEK TAPI BOONG AWKOWKO",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?��",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?�� Y",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?�� YT",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?�� YT H",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?�� YT HE",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?�� YT HER",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?�� YT HERM",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?�� YT HERMA",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?�� YT Ramdani",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?�� YT Ramdani C",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?�� YT Ramdani CH",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?�� YT Ramdani CHA",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?�� YT Ramdani CHAN",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?�� YT Ramdani CHANE",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?�� YT Ramdani Official",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?�� YT Ramdani Official Y",
    "Ramdani JELEK TAPI BOONG AWKOWKO ?�� YT Ramdani Official YO"
  ]}

	//connect
	Ramdani.on('open', () => {
		console.log(color('[HC]', 'white'), color('DAH CONNECT NOH TINGGAL PAKE'));
	})

	// session
	await Ramdani.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(Ramdani.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	Ramdani.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	Ramdani.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	Ramdani.on('group-participants-update', async (anu) => {
		await welcome(Ramdani, anu)
	})

	Ramdani.on('chat-update', async (message) => {
		require('./Ramdani.js')(Ramdani, message)
	})
}

starts()