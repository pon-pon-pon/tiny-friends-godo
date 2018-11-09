if [ -d "./docs" ]; then
    rm -rf "./docs"
fi
if [ -d "./build" ]; then
    rm -rf "./build"
fi
npm run build
cp -r build docs
