function spinalCase(str) {
    return str.replace(/([A-Z])/g, ' $1').trim().replace(/[\s+_]{1,}/g, '-').toLowerCase()
}

spinalCase('This Is Spinal Tap');
