import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import { homedir } from 'os';
import { resolve } from 'path';
import fs from 'fs';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    let serverConfig = {}
    if (env.NODE_ENV === 'development') {
        let host = new URL(env.APP_URL).host
        let homeDir = homedir()
        if (homeDir) {
            serverConfig = {
                https: {
                    key: fs.readFileSync(
                        resolve(homeDir, `.config/valet/Certificates/${host}.key`),
                    ),
                    cert: fs.readFileSync(
                        resolve(homeDir, `.config/valet/Certificates/${host}.crt`),
                    ),
                },
                hmr: {
                    host
                },
                host
            }
        }
    }
    return {
        plugins: [
            laravel([ 'resources/js/app.js' ]),
            vue({ template: { transformAssetUrls: { base: null, includeAbsolute: false, } } })
        ],
        server: serverConfig
    }
})
