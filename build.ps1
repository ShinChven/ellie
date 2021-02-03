rm .\build
cd ui
npm install
npm run release
cd ..\app
npm run setup
npm run assemble
cd ..\build
npm run setup
npm run build
