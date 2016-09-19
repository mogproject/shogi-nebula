BUILD        = ./build
NODE_MODULES = ./node_modules
NPM_BIN      = $(shell npm bin)

.PHONY: clean reinstall test uninstall

all: $(BUILD)

$(NODE_MODULES):
	npm install

$(BUILD): $(NODE_MODULES)
	$(NPM_BIN)/webpack --bail

clean:
	rm -rf $(BUILD)

test: $(BUILD)
	$(NPM_BIN)/karma start

uninstall: clean
	rm -rf $(NODE_MODULES)

reinstall: uninstall $(NODE_MODULES)
