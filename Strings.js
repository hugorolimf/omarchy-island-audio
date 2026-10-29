.pragma library

// Texts of this panel: written in Portuguese, English for every other locale.
var english = Qt.locale().name.indexOf("pt") !== 0
var en = {
 "Mudo": "Muted",
 "Silêncio": "Silenced",
 "Sala de concerto": "Concert hall",
 "Modo festa": "Party mode",
 "No talo": "Cranked up",
 "Embalo firme": "Steady groove",
 "Som ambiente": "Easy listening",
 "Murmúrio": "Murmur",
 "Sussurro": "Whisper",
 "Desconhecido": "Unknown",
 "Áudio": "Stream",
 "Silenciar tudo": "Mute",
 "Ativar o som": "Unmute",
 "Som": "Audio",
 "SAÍDA": "OUTPUT",
 "ENTRADA": "INPUT",
 "APPS": "SOURCES",
 "ATUAL": "CURRENT",
 "Ativar a saída": "Unmute output",
 "Silenciar a saída": "Mute output",
 "Ativar o microfone": "Unmute microphone",
 "Silenciar o microfone": "Mute microphone",
 "Ativar o som do app": "Unmute app",
 "Silenciar o app": "Mute app"
}

function T(s) { return english && en[s] !== undefined ? en[s] : s }
