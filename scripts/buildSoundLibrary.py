import os

assets = './assets/sounds'
library = './database/sounds/SoundLibrary.ts'

fileNames = sorted(os.listdir(assets))
if '.DS_Store' in fileNames:
    fileNames.remove('.DS_Store')

with open(library, 'w') as f:
    f.write('import { SoundLibrary } from \'./types\'')
    f.write('\n \n')
    f.write('export default <SoundLibrary>{')
    f.write('\n')

    for n in range(0, len(fileNames)):
        nameWithExtension = fileNames[n]
        nameWithoutExtension = nameWithExtension[0:nameWithExtension.find('.')]
        f.write(f'  \'{nameWithoutExtension}\': require(\'../../assets/sounds/{nameWithExtension}\'),')
        f.write('\n')

    f.write('};')
