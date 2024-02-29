

sudo apt remove node

(https://github.com/nodesource/distributions)

curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - &&\
sudo apt-get install -y nodejs

[sudo dpkg -i --force-overwrite /var/cache/apt/archives/nodejs_20.11.1-1nodesource1_amd64.deb]
[sudo apt -f install]


npm install -D tailwindcss
npx tailwindcss init