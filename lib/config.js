function createConfig() {
    let setting = {
        system: ''
    };

    return {
        setting,
        setConfig: (s) => {
            setting.system = s.system;
        }
    };
}

export const config = createConfig();