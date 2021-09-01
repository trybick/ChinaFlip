import os

assets = './assets/sounds'
library = './database/sounds/SoundLibrary.ts'

sounds = os.listdir(assets)
if '.DS_Store' in sounds:
    sounds.remove('.DS_Store')

with open(library, 'w') as f:
    f.write('import { SoundLibrary } from \'./types\'')
    f.write('\n \n')
    f.write('export default <SoundLibrary>{')
    f.write('\n')

    for n in range(1, len(sounds) + 1):
        key = format(n, '04')
        f.write(('  \'{0}\': require(\'../../assets/sounds/{0}.mp3\'),'.format(key)))
        f.write('\n')

    f.write('};')