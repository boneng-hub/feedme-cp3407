module.exports = {
  apps: [
    {
      name: "feedme-backend",
      script: "server.js",
      cwd: __dirname,
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
