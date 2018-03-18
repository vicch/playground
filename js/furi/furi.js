$('#text-original').bind('input', function() {
	var original = $(this).val();
	var furi = convertToFuri(original);
	$('#text-furi').html(furi);
});

function convertToFuri(text) {
	// Input pattern is "kanjikana(kana)"
	var re = /(.*)\((.*)\)/i;
	var parts = text.match(re);

	// Pattern not found
	if (!parts || !parts[1] || !parts[2]) {
		return '';
	}

	var kanjikana = parts[1];
	var kana = parts[2];
	var furi = '';

	// i = kanjikana pointer
	// j = kana pointer
	var j = 0;
	for (var i = 0; i < kanjikana.length; i++) {
		if (isKana(kanjikana.charAt(i))) {
			// console.log('kana: ' + kanjikana.charAt(i));

			// Kana found
			furi += kanjikana.charAt(i);
		} else {
			console.log('j = ' + j);
			// console.log('kanji: ' + kanjikana.charAt(i));

			// Kanji found, find next kana
			for (var i2 = i + 1; !isKana(kanjikana.charAt(i2)) && i2 < kanjikana.length; i2++) {}
			// Find matching kana
			for (var j2 = j + 1; kana.charAt(j2) != kanjikana.charAt(i2) && j2 < kana.length; j2++) {}

			var furiKanji = kanjikana.slice(i, i2);
			var furiKana = kana.slice(j, j2);
			furi += '{{{furi(' + furiKanji + ',' + furiKana + '}}}';

			// Minus 1 to compensate the increment at end of for loop
			i = i2 - 1;
			j = j2 + 1;
		}
	}

	return furi;
}

var kana = [
	'ぁ', 'あ', 'ぃ', 'い', 'ぅ', 'う', 'ぇ', 'え', 'ぉ', 'お', 'か', 'が', 'き', 'ぎ',
	'く', 'ぐ', 'け', 'げ', 'こ', 'ご', 'さ', 'ざ', 'し', 'じ', 'す', 'ず', 'せ', 'ぜ',
	'そ', 'ぞ', 'た', 'だ', 'ち', 'ぢ', 'っ', 'つ', 'づ', 'て', 'で', 'と', 'ど', 'な',
	'に', 'ぬ', 'ね', 'の', 'は', 'ば', 'ぱ', 'ひ', 'び', 'ぴ', 'ふ', 'ぶ', 'ぷ', 'へ',
	'べ', 'ぺ', 'ほ', 'ぼ', 'ぽ', 'ま', 'み', 'む', 'め', 'も', 'ゃ', 'や', 'ゅ', 'ゆ',
	'ょ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'ゎ', 'わ', 'ゐ', 'ゑ', 'を', 'ん', 'ゔ'
];
function isKana(char) {
	return kana.indexOf(char) != -1;
}