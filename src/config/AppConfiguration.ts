const showBanner = require("node-banner");

export const createByBanner = async (port: number) => {
    const label = `🔥 Typescript & Node Express \n GitHub: https://github.com/Gon-Zo/Node-App \n Host: http://localhost:${port} \n Writer: @Gon-Zo`
    await showBanner('Node Express', label);
}
