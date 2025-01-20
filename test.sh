# First remove existing eslint-related packages
npm uninstall eslint prettier eslint-plugin-vue @vue/eslint-config-prettier eslint-plugin-prettier

# Then install them with specific versions
npm install -D eslint@^8.21.0
npm install -D prettier@^2.8.0
npm install -D eslint-plugin-vue@^9.0.0
npm install -D @vue/eslint-config-prettier@^8.0.0
npm install -D eslint-plugin-prettier@^4.0.0