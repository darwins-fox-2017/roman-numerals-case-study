rl.write('Delete this!');
// Simulate Ctrl+u to delete the line written previously
rl.write(null, {ctrl: true, name: 'u'});
