# Gunakan image Node.js sebagai base image
FROM node:18-alpine

# Set direktori kerja di dalam container
WORKDIR /usr/src/app

# Salin semua file dari direktori lokal ke dalam container
COPY . .

# Install dependensi
RUN npm install

# Ekspose port 80 untuk server
EXPOSE 80

# Jalankan server saat container dijalankan
CMD ["node", "server.js"]
