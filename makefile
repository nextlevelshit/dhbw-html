deploy:
	@set -e
	@echo "Cleaning /dist directory..."
	@rm -rf ./dist
	@echo "Building..."
	@npm run build
	@echo "Deploying to Uberspace..."
	@scp -r ./dist/* tengo@tuttle.uberspace.de:/home/tengo/html