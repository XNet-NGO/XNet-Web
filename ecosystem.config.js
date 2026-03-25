require('dotenv').config({ path: require('path').resolve(__dirname, '.env.local') });

module.exports = {
  apps: [{
    name: 'xnet-web',
    script: 'npm',
    args: 'start',
    cwd: '/home/admin/XNet-Web',
    env: {
      NODE_ENV: 'production',
      HF_TOKEN: process.env.HF_TOKEN || ''
    }
  }]
}
