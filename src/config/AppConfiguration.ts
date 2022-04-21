const showBanner = require("node-banner");

export const banner = async (port: number) => {
    const label = `🔥Node Express & typeorm \n GitHub: https://github.com/noveltaker/node-in-demo \n Host: http://localhost:${port} \n Writer: @noveltaker`
    await showBanner('Node Express', label);
}
