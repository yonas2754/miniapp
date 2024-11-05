export const Backend_URL = "https://d6aa1c5b08f87d630ba251d9f0b0a018.serveo.net";

export const emojiSet = [
    // Smileys & Emotion
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
    '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🥳', '🤩', '🥸', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔',
    '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🥴', '😵', '🤯', '🤠', '😎', '🤓', '🥺', '😫', '😤', '😠', '😡',
    '😭', '😓', '😩', '😢', '🤧', '🥺', '😟', '😦', '😧', '😨', '😩', '😠', '😡', '🤬', '😷', '🤒', '🤕', '🤢', '🤮',

    // People & Body
    '👶', '👦', '👧', '👨', '👩', '🧑', '👱‍♂️', '👱‍♀️', '🧓', '👴', '👵', '👨‍⚕️', '👩‍⚕️', '👨‍🎓', '👩‍🎓', '👨‍⚖️', '👩‍⚖️',
    '👮‍♂️', '👮‍♀️', '👷‍♂️', '👷‍♀️', '💂‍♂️', '💂‍♀️', '🕵️‍♂️', '🕵️‍♀️', '👨‍🚒', '👩‍🚒', '👨‍✈️', '👩‍✈️', '👨‍🚀', '👩‍🚀',
    '👨‍🔧', '👩‍🔧', '👨‍💻', '👩‍💻', '👨‍🎤', '👩‍🎤', '👨‍🏫', '👩‍🏫', '👨‍🍳', '👩‍🍳', '🧑‍🍳', '👨‍🌾', '👩‍🌾',

    // Animals & Nature
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🐣',
    '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦠', '🐢', '🐍', '🦕', '🦖',
    '🦎', '🐙', '🦑', '🦞', '🦀', '🐠', '🐟', '🐡', '🐬', '🦭', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🐘', '🦏', '🦛', '🦧',
    '🦓', '🦍', '🐫', '🦘', '🦒', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🐐', '🦙', '🦝', '🦢', '🦜', '🦩', '🦚', '🐓', '🐣',
    '🌸', '🌼', '🌻', '🌹', '🌷', '🌱', '🌲', '🌳', '🌵', '🌾', '🍀', '🍁', '🍂', '🍃', '🌿', '🍄', '🌰', '🌍', '🌎', '🌏',

    // Food & Drink
    '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🥭', '🍅', '🍆', '🥑', '🥦', '🥒', '🌽',
    '🌶', '🥕', '🍄', '🥔', '🍞', '🥐', '🥖', '🥨', '🥞', '🧇', '🥯', '🥓', '🥩', '🍗', '🍖', '🍤', '🍣', '🍱', '🍛', '🍜',
    '🍝', '🍲', '🍿', '🥡', '🍦', '🍩', '🍪', '🍰', '🎂', '🍮', '🍫', '🍬', '🍭', '🍯', '🍼', '☕', '🍵', '🍻', '🥂',

    // Travel & Places
    '🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚚', '🚛', '🚜', '🛵', '🏍', '🚲', '🛴', '🚨', '🚔', '🚍', '🚠',
    '🚡', '🚃', '🚋', '🚝', '🚄', '🚅', '🚈', '🚂', '✈️', '🛫', '🛬', '🚁', '🛸', '⛵', '🚤', '🛥', '🛳', '🛶', '🚢', '🗽',
    '🗿', '🗼', '🗻', '⛲', '🎡', '🎢', '🎠', '⛺', '🏞', '🌄', '🌅', '🏖', '🏝', '🏜', '🏰', '🏯', '🏟', '🕍', '⛩',

    // Activities & Sports
    '⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎳', '⛳', '🏒', '🏓', '🏸', '🥅', '🎱', '🎯', '🎣', '🤿', '🛹', '🏋️‍♂️', '🏋️‍♀️',
    '🤸‍♂️', '🤸‍♀️', '⛹️‍♂️', '⛹️‍♀️', '🤾‍♂️', '🤾‍♀️', '🏌️‍♂️', '🏌️‍♀️', '🏄‍♂️', '🏄‍♀️', '🏊‍♂️', '🏊‍♀️', '🤽‍♂️', '🤽‍♀️',
    '🚴‍♂️', '🚴‍♀️', '🚵‍♂️', '🚵‍♀️', '🤹‍♂️', '🤹‍♀️', '🧘‍♂️', '🧘‍♀️', '🎿', '🛷', '⛷', '🏂', '🥌', '🎽', '🏅', '🥇', '🥈', '🥉',

    // Objects & Symbols
    '⌚', '📱', '📲', '💻', '⌨️', '🖥', '🖨', '🖱', '🖲', '💽', '💾', '💿', '📀', '📷', '📹', '🎥', '📞', '☎️', '📟', '📠',
    '📺', '📻', '🎙', '🎚', '🎛', '⏰', '⏱', '⏲', '🕰', '🧭', '💡', '🔦', '🏮', '📓', '📔', '📒', '📚', '📖', '🔒', '🔑',
    '🗝', '🔏', '🔮', '🧿', '💈', '⚗️', '🔬', '🔭', '📡', '🕹', '🎮', '🧩', '🧸', '🎭', '🎨', '🖌', '🖍', '🖊',

    // Random Emojis to reach 1000
    '🤖', '🎃', '🧙‍♀️', '🦸‍♂️', '🦸‍♀️', '🧚‍♂️', '🧚‍♀️', '👻', '👽', '💀', '🤡', '🧙‍♂️', '🧟‍♂️', '🧟‍♀️', '🤖',
    '👾', '🎄', '🎆', '🎇', '🎈', '🪄', '🧞‍♂️', '🧞‍♀️', '🎉', '🎊', '✨', '🌟', '💫', '🌈', '☀️', '🌤', '⛅', '🌥',
    '🌦', '☔', '🌧', '🌨', '❄️', '☃️', '🌬', '🌪', '🌀', '🌈', '🔥', '💧', '🌊', '🍂', '🌪', '🌋', '🧊', '💨',
    '🌌', '🌠', '🎇', '⭐', '☄️', '🔮', '🧿', '⚡', '🌈', '🕊', '🎶', '🎵', '🎤', '🎧', '🎼', '🎹', '🥁', '🎻', '🎺',
    '🎷', '🪕', '📯', '📢', '📣', '🔔', '🎊', '🎉', '🎈', '🎏', '🎌', '🏮', '📅', '📆', '📇', '🗓', '📇', '✉️', '📬', '📭',
    '📦', '📤', '📥', '📦', '📈', '📉', '📊', '📋', '📖', '📗', '📘', '📙', '📕', '📚', '📓', '📒', '📔', '📕', '📑', '🔖',
    '🏷', '🏷️', '📌', '📍', '✂️', '🔗', '📎', '🖇', '📏', '📐', '🖌', '🖍', '✏️', '🖊', '🖊️', '💻', '⌨️', '🖥', '💾',
    '💽', '💿', '📀', '📱', '📲', '☎️', '📞', '📟', '📠', '📺', '📻', '📡', '📚', '🔒', '🔑', '🔏', '🔮', '🧿', '🔬',
    '🔭', '⚗️', '🧪', '🧬', '🔋', '💡', '🕯', '🪔', '💡', '🕳', '🔍', '🔎', '🗑', '🚮', '🚰', '🗑', '🚮', '♻️', '🔄',
    '⚠️', '🚸', '♿', '🔞', '🔑', '🪙', '🪙', '🗡', '⚔️', '🪚', '🔧', '🔩', '🔨', '🪓', '🧰', '🧲', '🔮', '⚙️', '🔭', '🔬'
];



  